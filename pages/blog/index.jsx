import Nav from '../../src/nav.jsx'
import { Link, Head } from 'vaderjs/client'
import { Layout } from '../../src/layout.jsx';
export const $prerender = false;

export default function (req, res) { 
    return (
        <>
        <Layout 
         
         {...{
            title: 'Malik Whitten',
            description: 'Malik Whitten Personal Website',
            logo: '/public/images/logo.png'
         }}
        
        >
        <div key="blog" className="flex flex-col  mx-auto xl:justify-center  md:justify-center lg:justify-center  xl:w-[70vw] ">
            <Nav />
            <div className="flex flex-col gap-5 xl:px-64 lg:px-64 md:px-64 p-5">
               <h1 className="text-2xl font-bold">Blog Articles </h1>
               <ul className="list-disc list-inside">
                <h1>About Me</h1>
                <li>
                    <Link key="warm_welcome" href="/blog/general/lw0qsaxnrogkfbg?state=A warm welcome from me!" className="text-blue-500  cursor-pointer   hover:underline">A warm welcome from me!</Link> 
                </li>
                <li>
                    <Link key="vader_blogs" href="/blog/vader_blogs/yosinnfweatoqjw?state=A Day of Struggles and Triumphs: Server-Side Generation with VaderJS" title="Blog" className="text-blue-500 cursor-pointer   hover:underline">A Day of Struggles and Triumphs - 1/25/2024</Link>
                 </li>
               </ul>
            </div>

        </div>
        </Layout>
         
       
    </>
    )
}