let isClassComponent = function(element) {
  return element.toString().startsWith("class");
};
globalThis.isServer = typeof window === "undefined";
export const useFetch = (url, options) => {
  return [null, true, null];
};
export const useAsyncState = (key, promise) => {
  return [null, () => {
  }];
};
export const useEffect = (callback, dependencies) => {
  dependencies = dependencies.map((dep) => dep.toString());
  if (dependencies.length === 0) {
    callback();
  }
};
export const e = (element, props, ...children) => {
  if (typeof element === "function") {
    let instance = new Component;
    instance.render = element;
    return instance.render();
  }
  return { type: element, props: props || {}, children: children || [] };
};
export const useState = (key, initialState) => {
  const instance = new Component;
  return [
    instance.state[key],
    (newState, Element) => {
      instance.setState({ [key]: newState }, Element);
    },
    key
  ];
};
let state = {};

export class Component {
  props;
  state;
  element;
  Mounted;
  effect;
  key;
  prevState;
  constructor() {
    this.key = Math.random().toString(36).substring(7);
    this.props = {};
    state[this.key] = {};
    this.state = state[this.key];
    this.effect = [];
    this.Mounted = false;
    this.element = null;
  }
  setState(newState, Element) {
    state[this.key] = { ...this.state, ...newState };
    console.log(state[this.key]);
    this.forceUpdate(Element);
  }
  useEffect(callback, dependencies) {
    if (dependencies.length === 0 && this.Mounted && this.effect.length === 0) {
      callback();
      this.effect.push(callback);
    } else {
      for (let i = 0;i < dependencies.length; i++) {
        if (this.effect[i] !== dependencies[i]) {
          this.effect = dependencies;
          callback();
        }
      }
    }
  }
  useState(key, initialState) {
    if (!this.state[key]) {
      console.log(`State ${key} does not exist`);
      this.state[key] = initialState;
    }
    window.onbeforeunload = () => {
      sessionStorage.setItem("state", JSON.stringify({}));
    };
    const setState = (newState, Element) => {
      this.prevState = { ...this.state };
      this.state[key] = newState;
      state[this.key] = { ...this.state };
      this.forceUpdate(Element);
    };
    const returnKey = key;
    return [this.state[key], setState, returnKey];
  }
  useFetch(url, options) {
    const { key } = options;
    console.log(key);
    if (!key) {
      throw new Error(`You must supply a key for the affected element in the options object`);
    }
    const loadingKey = "loading_" + url;
    const errorKey = "error" + url;
    const dataKey = "_data" + url;
    const loading = state[this.key][loadingKey] !== undefined ? state[this.key][loadingKey] : true;
    const error = state[this.key][errorKey] || null;
    const data = state[this.key][dataKey] || null;
    if (loading && !error && !data) {
      state[this.key][loadingKey] = true;
      fetch(url, options).then((res) => res.json()).then((data) => {
        state[this.key][dataKey] = data;
        state[this.key][loadingKey] = false;
        this.forceUpdate(key);
      }).catch((err) => {
        state[this.key][errorKey] = err;
        state[this.key][loadingKey] = false;
        this.forceUpdate(key);
      });
    }
    return [data, loading, error];
  }
  forceUpdate(key) {
    let el = Array.from(document.querySelectorAll("*")).filter((el2) => {
      return el2.key === key;
    })[0];
    let newl = this.parseToElement(this.render());
    if (newl.key !== key) {
      newl = Array.from(newl.children).filter((el2) => el2.key === key)[0];
    }
    if (this.Reconciler.shouldUpdate(el, newl)) {
      el.replaceWith(newl);
    }
  }
  Reconciler = {
    shouldUpdate(oldElement, newElement) {
      if (oldElement.outerHTML === newElement.outerHTML) {
        return false;
      }
      let attributes = oldElement.attributes;
      let newAttributes = newElement.attributes;
      for (let i = 0;i < attributes.length; i++) {
        let attribute = attributes[i];
        if (attribute.name === "key") {
          continue;
        }
        if (attribute.name === "class") {
          if (attribute.value !== newElement.className) {
            return true;
          }
          continue;
        }
        if (attribute.value !== newAttributes[attribute.name]) {
          return true;
        }
      }
      return true;
    }
  };
  parseToElement = (element) => {
    if (!element)
      return document.createElement("div");
    let el = document.createElement(element.type);
    let isText = typeof element === "string" || typeof element === "number" || typeof element === "boolean";
    if (isText) {
      el.textContent = element;
    } else {
      let attributes = element.props;
      let children = element.children;
      for (let key in attributes) {
        if (key === "key") {
          el.key = attributes[key];
          continue;
        }
        if (key === "className") {
          el.className = attributes[key];
          continue;
        }
        if (key === "style") {
          for (let styleKey in attributes[key]) {
            el.style[styleKey] = attributes[key][styleKey];
          }
          continue;
        }
        if (key.startsWith("on")) {
          console.log(key.substring(2).toLowerCase());
          el.addEventListener(key.substring(2).toLowerCase(), attributes[key]);
          continue;
        }
        el.setAttribute(key, attributes[key]);
      }
      for (let i = 0;i < children.length; i++) {
        let child = children[i];
        if (Array.isArray(child)) {
          child.forEach((c) => {
            el.appendChild(this.parseToElement(c));
          });
        }
        if (typeof child === "function") {
          el.appendChild(this.parseToElement(child()));
        } else if (typeof child === "object") {
          el.appendChild(this.parseToElement(child));
        } else {
          let span = document.createElement("span");
          span.innerHTML = child;
          el.appendChild(span);
        }
      }
    }
    return el;
  };
  e(element, props, ...children) {
    if (typeof element === "function") {
      return element();
    }
    return { type: element, props: props || {}, children: children || [] };
  }
  toElement() {
    let children = this.render();
    let el = this.parseToElement(children);
    return el;
  }
  render() {
    return "";
  }
}
export function render(element, container) {
  if (isClassComponent(element)) {
    const instance = new element;
    instance.Mounted = true;
    let el = instance.toElement();
    instance.element = el;
    container.innerHTML = "";
    container.replaceWith(el);
  } else {
    const newInstance = new Component;
    element = element.bind(newInstance);
    newInstance.render = element;
    newInstance.Mounted = true;
    let el = newInstance.toElement();
    newInstance.element = el;
    container.innerHTML = "";
    container.replaceWith(el);
  }
}
