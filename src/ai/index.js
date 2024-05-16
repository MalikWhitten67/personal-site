 
import {render, h, mutate} from '../jsfiber/index.js'
import './core/index.js'
import { ask } from './core/index.js';
let state = {
    prompt: "", 
}
function index() { 
    window.addEventListener('keydown', async (e) => { // Note the async keyword here
        if(e.key === 'Enter') {
            let i = 0;
            let response = await ask(state.prompt, { sensitivity: 0.5 }, {}); // Wait for the response from ask
            mutate('prompt', 'disabled', true);  
            mutate('prompt', 'value', 'Thinking...');
            document.getElementById('prompt').style.cursor = 'not-allowed';
            document.getElementById('prompt').style.opacity = '0.5';
            
            // Slowly type out the response
            let interval = setInterval(() => {
                if(i < response.length) {   
                    mutate('response', 'innerHTML', state.prompt + " : " + response.slice(0, i + 1) + "_");
                    i++;
                } else {
                    mutate('response', 'innerHTML', document.getElementById('response').innerHTML.replace("_", "") + "<br>");
                    mutate('prompt', 'value', '');
                    mutate('prompt', 'disabled', false); 
                    document.getElementById('prompt').style.cursor = 'text';
                    document.getElementById('prompt').style.opacity = '1';
                    clearInterval(interval);
                }
            }, 50);
        }
    });

    return h('div', {
        class: 'container',
    }, 
        h('h1', {
            style:{
                color: '#F91A52',
                fontSize: '34px', 
                marginTop: '10px',
            }
        }, 'Hello! How can I help you today?'), 
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
                state.prompt = e.target.value;
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
                marginTop: '16px !important',
            }
        }, 'Emerald may make mistakes, please be patient; over time, it will improve.')
    );
}

render(index, document.getElementById('root'))
