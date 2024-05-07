export const h = (tag, props, ...children) => {
   return {tag, props, children: children || []}
}
/**
 * 
 * @param {h} el 
 */
function toElement(el){ 
  let e = document.createElement(el.tag)
  for(var i in el.props){   
     if(i == "style"){
        for(var it in el.props[i]){
            e.style[it] = el.props[i][it];
        }
        continue;
     }
     if(i == "_innerHTML"){
        e.innerHTML = el.props[i];
        continue;
     }
     if(i.startsWith('on')){ 
        e.addEventListener(i.slice(2).toLowerCase(), el.props[i])
     }
     e.setAttribute(i, el.props[i])
  }  
  if(el.children && el.children.length > 0){
    for(var child in el.children){ 
        if(!el.children[child]){
            continue;
        };
        if(typeof el.children[child] == "number" || typeof el.children[child] == "string"){
           e.appendChild(document.createTextNode(el.children[child]))
        } 
        e.appendChild(toElement(el.children[child]))
      }
  }
 
  return e
}
export function render(el, container){
    container.innerHTML = "";
    container.appendChild(toElement(el()))
}