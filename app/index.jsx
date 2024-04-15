import { useState, e, useFetch, Component, useEffect } from 'vaderjs';
import Footer from '../components/footer';
export const head = () => {
    return (
        <head>
            <title>Test</title>
            <link rel="stylesheet" href="public/index.css" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta charSet='utf-8' />
        </head>
    )
}
export default function App() {
    return (
        <div key="main">
            <h1 style={{ fontSize: '2.5rem', fontWeight: '500' }}>
                Hi I'm Malik Whitten 👋
            </h1>
            <br></br>
            <p>
                Homeschooled Senior - attending North Technical High School in St. Louis, MO.
            </p>
            <p>
                Majoring Computer Science ie (Michigan State University) or (University of Missouri - St. Louis)
            </p>
            <p>
                I am a Full stack  developer, with a passion for building workplace enhancing tools, scalable web applications, and more. I love to learn new things and I am always looking for new opportunities to grow my skills.
            </p>

            <br></br>
            <h1 style={{ marginBottom: '2.5rem' }}>
                Project Highlights (14)
            </h1>
            <p>
                Here are some of my projects that I am working on or have worked.
            </p>
            <br></br>
            <ul className='projects-list'>
                <li>
                    <a href='https://github.com/Postr-Inc' target='_blank'>
                        Postr
                    </a>
                    - A social media platform with a strict focus on privacy and security. WIP
                </li>
                <li>
                    <a href='https://github.com/Postr-Inc/Vader.js' target='_blank'>
                        Vader.js
                    </a>
                    - A React-like library for building web applications.
                    - <span style={{ color: 'red' }}>WIP</span>
                </li>
                <li>
                    <a href='https://github.com/MalikWhitten67/html-dox' target='_blank'>
                        HTML-Dox
                    </a>
                    - A svelte like framework for building hybrid web applications. (JavaScript)
                </li>
                <li>
                    <a href='https://github.com/Postr-Inc/Hapta' target='_blank'>
                        Hapta
                    </a>
                    - A pocketbase high performance layer, includes ratelimiting, caching with sqlite, and more.
                </li>
                <li>
                    <a href='https://github.com/MalikWhitten67/categorizer' target='_blank'>
                        Categorizer
                    </a>
                    - A text categorization tool using machine learning principles.
                </li>
                <li>
                    <a href='https://github.com/MalikWhitten67/ReduxEngine' target='_blank'>
                        ReduxEngine
                    </a>
                    - A game engine using only HTML, CSS, and JavaScript.
                </li>
                <li>
                    <a href='https://musicly.rf.gd' target='_blank'>
                        Musicly
                    </a>
                    - A pwa music player built with React utilizes youtube for music. (Mobile)
                </li>
                <li>
                    <a href='https://github.com/MalikWhitten67/xavierdb' target='_blank'>
                        XavierDB
                    </a>
                    &nbsp;
                    - A fast sqlite database built with bun.js includes authentication ratelimiting and more. (Javascript, Typescript)
                    &nbsp;
                    <span style={{ color: 'blue' }}>Maintained</span>
                </li>
                <li>
                    <a href='https://github.com/MalikWhitten67/Apple-Doctor' target='_blank'>
                        Apple Doctor
                    </a>
                    - A website utilizing machine learning to help patients get a diagnosis for their symptoms, also allows them to message their Doctor
                    in real time.
                </li>
                <li>
                    <a href='https://github.com/MalikWhitten67/Monoco-Code-Editor' target='_blank'>
                        Monoco Code Editor
                    </a>
                    - An all in one code editor built with nw.js (Node.js and Chromium, Javascript)
                </li>
                <li>
                    <a href="https://github.com/Postr-Inc/Kalix.js">
                        Kalix.js
                    </a>
                    - A tool to turn jsx into html utilizing bun built for vader.js
                </li>
                <li>
                    <a href='https://www.npmjs.com/package/vrd-router' target='_blank'>
                        VRD Router
                    </a>
                    - A single page application hash router solution
                </li>
                <li>
                    <a href='https://www.npmjs.com/package/lazy-javascript' target='_blank'>
                        Lazy JavaScript
                    </a>
                    - A  easier way to write backend code
                </li>
                <li>
                    <a href='https://github.com/MalikWhitten67/calculator.java'>
                        Calculator.java
                    </a>
                    - A simple calculator written in Java
                </li>
            </ul>
            <br></br>
            <h1>Recent Blog Posts</h1>
            <ul>
                <li>
                    <a href='/blog/welcome/lw0qsaxnrogkfbg?state=A warm welcome from me!' target='_blank'>
                        A warm welcome from me!
                    </a>

                </li>
                <li>
                    <a href='/blog/vader_blog/yosinnfweatoqjw?state=A Day of Struggles and Triumphs: Server-Side Generation with VaderJS' target='_blank'>
                        A Day of Struggles and Triumphs: Server-Side Generation with VaderJS
                    </a>
                </li>
            </ul>
            <br></br>
            <h1>Links</h1>
            <ul>
                <li>
                    <a href='https://github.com/MalikWhitten67' target='_blank'>
                        Github
                    </a>
                </li>
                <li>
                    <a href='
                https://twitter.com/MalikWhitt60221' target='_blank'>
                        Twitter
                    </a>
                </li>
                <li>
                    <a href='https://www.youtube.com/channel/UC8M9q4w-25e6riO3tcopelw' target='_blank'>
                        Youtube
                    </a>
                </li>
            </ul>
            <br></br>
            <Footer />
        </div>
    )
}
 