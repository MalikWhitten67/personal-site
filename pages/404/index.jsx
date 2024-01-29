import {Link} from 'vaderjs/client'
import { Layout } from '../../src/layout.jsx'
export default function (req, res) {
    return (
        <Layout $={{title: '404 | Hit a Brick Wall', description: 'If your seeing this you got lost :{'}}>
        <div className=" hero h-screen mx-auto justify-center    flex flex-col gap-5   ">
            <h1 className="text-2xl font-bold">404 | Page Not Found</h1>
             <Link key="home" href="/" className="text-blue-500  cursor-pointer  hover:underline"
              
             >Go Home</Link>
        </div>
        </Layout>
    )
}
