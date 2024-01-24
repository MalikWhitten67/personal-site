import Pocketbase from '../../public/js/pocketbase.es.mjs'
import Nav from '../../src/nav.jsx'
export default function (req, res) { 
    return <>
        <div key="blog" className="flex flex-col  mx-auto xl:justify-center  md:justify-center lg:justify-center  xl:w-[70vw] ">
            <Nav />
            <div className="flex flex-col gap-5 xl:px-64 lg:px-64 md:px-64 p-5">
               <h1 className="text-2xl font-bold">Blog Articles</h1>
               <ul className="list-disc list-inside">
                <h1>About Me</h1>
                <li>
                    <a href="#/blog/general/lw0qsaxnrogkfbg?state=A warm welcome from me!" className="text-blue-500    hover:underline">A warm welcome from me!</a>
                </li>
               </ul>
            </div>

        </div>
    </>
}