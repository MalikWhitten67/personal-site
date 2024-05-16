let json = await import('./core/data/data.json', { assert: { type: "json" } }).then((data) => data.default);
import {render, h, mutate} from '../jsfiber/index.js'
import './core/index.js'
import { ask } from './core/index.js';
let state = {
    prompt: "", 
}
function index(){ 
    window.addEventListener('keydown', (e) => {
        if(e.key === 'Enter'){
             var i = 0;
             let response =  ask(state.prompt, {sesitivity: 0.5},{})
             mutate('prompt', 'disabled', true)  
             mutate('prompt', 'value', 'Thinking...')
             document.getElementById('prompt').style.cursor = 'not-allowed'
             document.getElementById('prompt').style.opacity = '0.5'
              // slowly type out the response
                let interval = setInterval(() => {
                    if(i < response.length){   
                        // who made you ? : response
                        mutate('response', 'innerHTML', state.prompt +  " : " +  response.slice(0, i  + 1) + "_")
                        i++;
                    }else{ 
                        mutate('response', 'innerHTML',  document.getElementById('response').innerHTML.replace("_", "") + "<br>")
                        mutate('prompt', 'value', '')
                        mutate('prompt', 'disabled', false) 
                        document.getElementById('prompt').style.cursor = 'text'
                        document.getElementById('prompt').style.opacity = '1'
                        clearInterval(interval)
                    }
                }, 50)
        }
    })
    return h('div', {
        class: 'container',
    }, 
        h('h1', {
            style:{
                color: '#F91A52',
                fontSize: '34px', 
                marginTop: '10px',
            }
        }, 'Hello How can I help you today!'), 
        h("p", {
            style:{
                color: '#333',
                fontSize: '16px',
                marginTop: '15px',
                marginBottom: '10px',
                padding: '10px',
                border: '1px solid #ccc',
                backgroundColor: '#f9f9f9',
                borderRadius: '5px',
                opacity: '0.7'
            } 
        }, 'Your conversations are not stored or saved in any way.'), 
        h('div', {id: 'response', style: {marginTop: '10px'}},  `Try asking me a question like :  "${
            json[Math.floor(Math.random() * json.length)].input
        }"`),
        
        h('input', {
            type: 'text',
            placeholder: 'Type your message here...',
            id: 'prompt',
            style: {
                padding: '10px', 
                width: '100%',
                border: '1px solid #ccc',
                borderRadius: '5px',
                marginTop: '25px',
                fontSize: '16px'
            },
            oninput: (e) => {
                state.prompt = e.target.value
            }
        }), 
        h('br', {}),
        h('p', {
            style: {
                color: '#333',
                fontSize: '16px', 
                marginBottom: '10px',
                opacity: '0.7',
                margin: '0 auto',
                textAlign: 'center',
                marginTop: '15px !important',
            }
        }, 'Emerald may make mistakes, please be patient overtime it will improve.')
    )

}

render(index, document.getElementById('root'))