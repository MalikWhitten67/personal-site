import { h, render } from "../jsfiber/index.js";
import pocketbase from "../pocketbase/index.js";
const pb = new pocketbase('https://malik.pockethost.io')
/** 
 * @param {String} id 
 * @returns {Promise}
 */
function fetchPost(id) {
    return pb.collection("blog_pages").getOne(id.trim())
}
function calculateReadingTime(text) { 
    const wordsPerMinute = 200; 
    const wordCount = text.split(/\s+/).length;
 
    const readingTimeInMinutes = wordCount / wordsPerMinute; 
    const hours = Math.floor(readingTimeInMinutes / 60);
    const minutes = Math.floor(readingTimeInMinutes % 60);
    const seconds = Math.floor((readingTimeInMinutes * 60) % 60);

    let readingTimeText = '';
     
    if (hours > 0) {
        readingTimeText += `${hours} hour(s) `;
    }
    if (minutes > 0) {
        readingTimeText += `${minutes} minute(s) `;
    }
    if (seconds > 0) {
        readingTimeText += `${seconds} second(s)`;
    }

    return readingTimeText.trim();
}

let data = null;
function app() {
    let search = new URLSearchParams(location.search);
    if (!search.get('id')) {
        return h("div", {}, h("div", {
            style: {
                display: 'flex', flexDirection: 'column', gap: '5px',
                alignItems: 'center',
                marginTop: '20px',
                justifyContent: 'center'
            }
        }, "Whoops missing post id", h("button", {
            onClick: () => {
                window.location.href = "/blogs"
            }
        }, "Go Home")))
    } else {
        if (!data) {
            fetchPost(search.get("id").trim()).then((d) => {
                setTimeout(()=>{
                    data = d
                    render(app, document.getElementById("app"))
                }, 1000)
            })
        } 
        return h("div", { class: 'blog_main' }, data ? h("div", {},
         h("h1", {style:{fontSize:'33px'}}, search.get("title")),
         h("br", {}),
         h("span", {style:{opacity:'0.5'}}, `Time to read ${calculateReadingTime(data.body)}`), 
         h("br", {}), 
         h("br", {}),
         h("p", {
            _innerHTML: data.body,
         }),  
         h("br", {}),
         h("a", {href:'/blogs', style:{textDecoration:'none', color:'rgb(17, 118, 226)'}}, 'Done')) :  
        h("div", {}, "Loading..."))
    }
}
render(app, document.getElementById("app"))
