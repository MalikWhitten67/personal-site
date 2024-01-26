import Link from 'vaderjs/client'
export const $metadata = {
    title: "404 Page Not Found",
    styles:['/public/css/styles.css'],
    description: "You have reached a page that does not exist", 
    icon: "https://avatars.githubusercontent.com/u/123524260?s=200&v=4",
}
export default function (req, res) {
    return <>
        <div className=" hero h-screen mx-auto justify-center    flex flex-col gap-5   ">
            <h1 className="text-2xl font-bold">404 | Page Not Found</h1>
             <Link key="home" href="/" className="text-blue-500  cursor-pointer  hover:underline"
             onLoad={()=>{
                 console.log("loaded")
             }}
             >Go Home</Link>
        </div>
    </>
}
