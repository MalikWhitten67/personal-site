import { useState } from 'vaderjs/client'
import Nav from '../src/nav.jsx'
import styles from '../public/css/test.module.css'
import '../public/css/styles.css'
import Footer from '../src/footer.jsx'

export default function (req, res) {
    let [state, setState] = useState({ name: 'Malik Whitten' })
    let logo = "https://avatars.githubusercontent.com/u/123524260?s=200&v=4"
    
  
    return <>
       <div className="flex  flex-col   mx-auto xl:justify-center  md:justify-center lg:justify-center  xl:w-[70vw] ">
        <Nav />
        <div style={{...styles.mono}} key={2} className="      lg:px-64 xl:px-64 md:px-64 p-5"  >

             
            <div className="mt-2 prose flex flex-col flex-wrap text-[15px]  gap-2 break-words">
                <span className="text-xl"> Hi I'm ${state.name} 👋   </span>
                <p>
                   Homeschooled Senior - attending <a href="https://northtechnical.org/" target="_blank" className="text-blue-500    hover:underline">North Technical High School</a> in St. Louis, MO.
                </p>
                <p>
                    I am a 16yo Full stack web developer with a passion for building fast, secure, and scalable web applications.
                </p>
                <br></br>
                
                <h1 className="text-2xl">
                    Project Highlights
                </h1>
                <ul className="list-disc list-inside"> 
                    <div className="divider mt-2"><p>Github Repos</p></div>
                    <li>
                    <a href="https://github.com/Postr-Inc" target="_blank" className="text-blue-500    hover:underline">Postr</a> - A social media platform  with a strict focus on privacy and security. <span className="text-red-500">WIP</span>
                    </li>
                    <li>
                    <a href="https://vader-js.pages.dev/" target="_blank" className="text-blue-500    hover:underline">VaderJS</a> - A React-like framework for building faster SPA's.  
                    </li>
                    <li>
                         <a href="https://github.com/MalikWhitten67/html-dox" target="_blank" className="text-blue-500    hover:underline">HTML-Dox</a> - A svelte like framework for functional HTML.
                    </li>
                    <li>
                        <a href="https://github.com/Postr-Inc/Hapta"  target="_blank">
                            <span className="text-blue-500    hover:underline" >Hapta</span> - A pocketbase authentication/stability layer used @Postr
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/MalikWhitten67/categorizer" target="_blank" className="text-blue-500    hover:underline">Categorizer</a> - A  tool   to categorize paragraphs of text into a specific category.
                        <span className="text-red-500">WIP</span>
                    </li>
                    <li>
                        <a href="https://github.com/MalikWhitten67/ReduxEngine" target="_blank" className="text-blue-500    hover:underline">ReduxEngine</a> - An vanilla js html and css only game engine.
                        <span className="text-red-500">WIP</span>
                    </li>
                    
                    <div className="divider mt-2"><p>Npm Packages</p></div>
                    <li> 
                        <a href="https://www.npmjs.com/package/lazy-javascript" target="_blank" className="text-blue-500 hover:underline">Lazy-Javascript</a>  A better way to write javascript.
                    </li>
                    <li>
                        <a href="https://www.npmjs.com/package/vrd-router" target="_blank" className="text-blue-500 hover:underline">VRD-Router</a> A simple router for vanilla html applications aimed to make spa dyanamic rendering easier.
                    </li>
                </ul>
                <br></br>
                <h1 className="text-2xl">
                    Recent Blog Posts
                </h1>
                <ul className="list-disc list-inside">
                 <li>
                    <a href="#/blog/general/lw0qsaxnrogkfbg?state=A Warm Welcome From Me!" className="text-blue-500    hover:underline">A warm Welcome from me - 1/24/2024</a>
                 </li>
                  
                 </ul>
                <br></br>
                <h1 className="text-2xl">
                    Links
                </h1>
                <ul className="list-disc list-inside">
                 <li>
                    <a href="https://github.com/MalikWhitten67" target="_blank" className="text-blue-500    hover:underline">Github</a>
                 </li>
                 <li>
                    <a href="https://twitter.com/MalikWhitt60221" target="_blank" className="text-blue-500    hover:underline">Twitter/X</a>
                 </li>
                 <li>
                    <a href="https://www.youtube.com/channel/UC8M9q4w-25e6riO3tcopelw" target="_blank" className="text-blue-500    hover:underline">Youtube Channel</a>
                 </li>
                 </ul>
                
            </div>
            <Footer key="footer" />
        </div>
        
       </div>
    </>
}

