var h=function(){return a("div",{className:"footer"},"Copyright \xA9 2023 / 2024 - Malik Whitten Built with VaderJS v1.3.4 Source code available on ",a("a",{href:"https://github.com/MalikWhitten67/personal-site",target:"_blank"},"Github"))};globalThis.isServer=typeof window==="undefined";var a=(n,t,...e)=>{if(typeof n==="function"){let u=new c;return u.render=n,u.render()}return{type:n,props:t||{},children:e||[]}},i={};class c{props;state;element;Mounted;effect;key;prevState;constructor(){this.key=Math.random().toString(36).substring(7),this.props={},i[this.key]={},this.state=i[this.key],this.effect=[],this.Mounted=!1,this.element=null}setState(n,t){i[this.key]={...this.state,...n},console.log(i[this.key]),this.forceUpdate(t)}useEffect(n,t){if(t.length===0&&this.Mounted&&this.effect.length===0)n(),this.effect.push(n);else for(let e=0;e<t.length;e++)if(this.effect[e]!==t[e])this.effect=t,n()}useState(n,t){if(!this.state[n])console.log(`State ${n} does not exist`),this.state[n]=t;window.onbeforeunload=()=>{sessionStorage.setItem("state",JSON.stringify({}))};const e=(l,r)=>{this.prevState={...this.state},this.state[n]=l,i[this.key]={...this.state},this.forceUpdate(r)},u=n;return[this.state[n],e,u]}useFetch(n,t){const{key:e}=t;if(console.log(e),!e)throw new Error("You must supply a key for the affected element in the options object");const u="loading_"+n,l="error"+n,r="_data"+n,d=i[this.key][u]!==void 0?i[this.key][u]:!0,o=i[this.key][l]||null,p=i[this.key][r]||null;if(d&&!o&&!p)i[this.key][u]=!0,fetch(n,t).then((s)=>s.json()).then((s)=>{i[this.key][r]=s,i[this.key][u]=!1,this.forceUpdate(e)}).catch((s)=>{i[this.key][l]=s,i[this.key][u]=!1,this.forceUpdate(e)});return[p,d,o]}forceUpdate(n){let t=Array.from(document.querySelectorAll("*")).filter((u)=>{return u.key===n})[0],e=this.parseToElement(this.render());if(e.key!==n)e=Array.from(e.children).filter((u)=>u.key===n)[0];if(this.Reconciler.shouldUpdate(t,e))t.replaceWith(e)}Reconciler={shouldUpdate(n,t){if(n.outerHTML===t.outerHTML)return!1;let e=n.attributes,u=t.attributes;for(let l=0;l<e.length;l++){let r=e[l];if(r.name==="key")continue;if(r.name==="class"){if(r.value!==t.className)return!0;continue}if(r.value!==u[r.name])return!0}return!0}};parseToElement=(n)=>{if(!n)return document.createElement("div");let t=document.createElement(n.type);if(typeof n==="string"||typeof n==="number"||typeof n==="boolean")t.textContent=n;else{let{props:e,children:u}=n;for(let l in e){if(l==="key"){t.key=e[l];continue}if(l==="className"){t.className=e[l];continue}if(l==="style"){for(let r in e[l])t.style[r]=e[l][r];continue}if(l.startsWith("on")){console.log(l.substring(2).toLowerCase()),t.addEventListener(l.substring(2).toLowerCase(),e[l]);continue}t.setAttribute(l,e[l])}for(let l=0;l<u.length;l++){let r=u[l];if(Array.isArray(r))r.forEach((d)=>{t.appendChild(this.parseToElement(d))});if(typeof r==="function")t.appendChild(this.parseToElement(r()));else if(typeof r==="object")t.appendChild(this.parseToElement(r));else{let d=document.createElement("span");d.innerHTML=r,t.appendChild(d)}}}return t};e(n,t,...e){if(typeof n==="function")return n();return{type:n,props:t||{},children:e||[]}}toElement(){let n=this.render();return this.parseToElement(n)}render(){return""}}var L=()=>{return a("head",null,a("title",null,"Test"),a("link",{rel:"stylesheet",href:"public/index.css"}),a("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),a("meta",{charSet:"utf-8"}))};class m extends c{constructor(){super()}render(){return a("div",{key:"main"},a("h1",{style:{fontSize:"2.5rem",fontWeight:"500"}},"Hi I'm Malik Whitten \uD83D\uDC4B"),a("br",null),a("p",null,"Homeschooled Senior - attending North Technical High School in St. Louis, MO."),a("p",null,"Majoring Computer Science ie (Michigan State University) or (University of Missouri - St. Louis)"),a("p",null,"I am a Full stack  developer, with a passion for building workplace enhancing tools, scalable web applications, and more. I love to learn new things and I am always looking for new opportunities to grow my skills."),a("br",null),a("h1",{style:{marginBottom:"2.5rem"}},"Project Highlights (13)"),a("p",null,"Here are some of my projects that I am working on or have worked."),a("br",null),a("ul",{className:"projects-list"},a("li",null,a("a",{href:"https://github.com/Postr-Inc",target:"_blank"},"Postr"),"- A social media platform with a strict focus on privacy and security. WIP"),a("li",null,a("a",{href:"https://github.com/Postr-Inc/Vader.js",target:"_blank"},"Vader.js"),"- A React-like library for building web applications. - ",a("span",{style:{color:"red"}},"WIP")),a("li",null,a("a",{href:"https://github.com/MalikWhitten67/html-dox",target:"_blank"},"HTML-Dox"),"- A svelte like framework for building hybrid web applications. (JavaScript)"),a("li",null,a("a",{href:"https://github.com/Postr-Inc/Hapta",target:"_blank"},"Hapta"),"- A pocketbase high performance layer, includes ratelimiting, caching with sqlite, and more."),a("li",null,a("a",{href:"https://github.com/MalikWhitten67/categorizer",target:"_blank"},"Categorizer"),"- A text categorization tool using machine learning principles."),a("li",null,a("a",{href:"https://github.com/MalikWhitten67/ReduxEngine",target:"_blank"},"ReduxEngine"),"- A game engine using only HTML, CSS, and JavaScript."),a("li",null,a("a",{href:"https://musicly.rf.gd",target:"_blank"},"Musicly"),"- A pwa music player built with React utilizes youtube for music. (Mobile)"),a("li",null,a("a",{href:"https://github.com/MalikWhitten67/xavierdb",target:"_blank"},"XavierDB"),"\xA0 - A fast sqlite database built with bun.js includes authentication ratelimiting and more. (Javascript, Typescript) \xA0",a("span",{style:{color:"blue"}},"Maintained")),a("li",null,a("a",{href:"https://github.com/MalikWhitten67/Apple-Doctor",target:"_blank"},"Apple Doctor"),"- A website utilizing machine learning to help patients get a diagnosis for their symptoms, also allows them to message their Doctor in real time."),a("li",null,a("a",{href:"https://github.com/MalikWhitten67/Monoco-Code-Editor",target:"_blank"},"Monoco Code Editor"),"- An all in one code editor built with nw.js (Node.js and Chromium, Javascript)"),a("li",null,a("a",{href:"https://github.com/Postr-Inc/Kalix.js"},"Kalix.js"),"- A tool to turn jsx into html utilizing bun built for vader.js"),a("li",null,a("a",{href:"https://www.npmjs.com/package/vrd-router",target:"_blank"},"VRD Router"),"- A single page application hash router solution"),a("li",null,a("a",{href:"https://www.npmjs.com/package/lazy-javascript",target:"_blank"},"Lazy JavaScript"),"- A  easier way to write backend code")),a("br",null),a("h1",null,"Recent Blog Posts"),a("ul",null,a("li",null,a("a",{href:"/blog?id=lw0qsaxnrogkfbg",target:"_blank"},"A warm welcome from me!")),a("li",null,a("a",{href:"/blog?id=yosinnfweatoqjw",target:"_blank"},"A Day of Struggles and Triumphs: Server-Side Generation with VaderJS"))),a("br",null),a("h1",null,"Links"),a("ul",null,a("li",null,a("a",{href:"https://github.com/MalikWhitten67",target:"_blank"},"Github")),a("li",null,a("a",{href:`
                    https://twitter.com/MalikWhitt60221`,target:"_blank"},"Twitter")),a("li",null,a("a",{href:"https://www.youtube.com/channel/UC8M9q4w-25e6riO3tcopelw",target:"_blank"},"Youtube"))),a("br",null),a(h,null))}}export{L as head,m as default};
