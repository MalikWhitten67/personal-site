import { useState } from "vaderjs/client";
import Nav from "../src/nav.jsx";
import Footer from "../src/footer.jsx";
import style from '../public/css/test.module.css'
export default function (req, res) {
    return <>
        <div key="contact" className="flex flex-col  mx-auto xl:justify-center  md:justify-center lg:justify-center  xl:w-[70vw] ">
            <Nav key="nav" />
            <div style={{ ...style.mono }} className=" text-md lg:px-64   p-5">
                <h1 className="text-2xl">Contact</h1>
                <br></br>
                <div className="flex gap-5 hero w-full justify-between">
                    <div>
                        <h2 className="text-xl">Email</h2>
                        <p  >
                            <a href="mailto:malikwhitterb@gmail.com">
                                malikwhitterb@gmail.com
                            </a>
                        </p>
                    </div>
                    <div>
                        <h2 className="text-xl">Discord</h2>
                        <p className="text-md">
                            Malik#0001
                        </p>
                    </div>

                </div>
                <br></br>
                <h1 className="text-2xl">
                    Useful Links
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

                <Footer key="footer" />
            </div>
        </div>
    </>
}