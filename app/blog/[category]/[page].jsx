import { e, useState, useEffect } from "vaderjs";
import Pocketbase from 'pocketbase';
const api = new Pocketbase("https://malik.pockethost.io");
export const head = () => {
    return (
        <head>
            <title>Blog</title>
            <link rel="stylesheet" href="/public/index.css" />
        </head>
    )
}
export default function App() { 
    let { category, page } = params;   
    if(!isServer && !category || !isServer && !page) return (
        <div>
            <p>
                Oops
            </p>
            <p>
                Looks like you're trying to access a blog post that doesn't exist.
            </p>
            <p>
                <a href='/'>Go back to the main page</a>
            </p>
        </div>

    );

    let [blog, setBlog] = useState(!isServer && localStorage.getItem('blog') && JSON.parse(localStorage.getItem('blog'))[page] || {})
  
    let [loading, setLoading] = useState(true)
    if(isServer){
        return (
            <div></div>
        )
    }
    useEffect(() => {  
        setTimeout(()=>{ 
             if (localStorage.getItem('blog') && JSON.parse(localStorage.getItem('blog'))[page]) { 
                    console.log('from cache')
                    setLoading(false)
                    return;
                }
                api.collection('blog_pages').getOne(page).then(blog => {
                    let blogs = JSON.parse(localStorage.getItem('blog')) || {} 
                    blogs[page] = blog
                    localStorage.setItem('blog', JSON.stringify(blogs))
                    setBlog(blog, 'blog')
                    setLoading(false)
                })
        },1500)
    }, [])  
    
    if(loading) {
        return (
            <div key="blog" style={{ fontFamily: 'Arial', textAlign: 'center' , fontSize: '1.5rem', marginTop: '2rem' }}>
                <p>
                    
                {  !isServer && new URLSearchParams(location.search).get('state') || 'Unknown'}
                </p>  
                <p> 
                    Fetching blog post...
                </p>
                
            </div>
        )
    
    }
    const calculateTimeToRead = (text) => {
        let words = text.split(' ').length
        let time = words / 200
        return `${Math.round(time)} ${Math.round(time) > 1 ? 'minutes' : 'minute'}`
    }
    return (
        <div key="blog" style={{ fontFamily: 'Arial' }}>
            <div className="blog-head">
                <h1 style={{ fontSize: '2.5rem', fontWeight: '500' }}>
                    {blog.head || ""}
                </h1>
                <p style={{ fontSize: '1.2rem', color: 'gray' }}>
                    Published on {new Date(blog.created).toDateString() || ""} - time to read {calculateTimeToRead(blog.body || "")}
                </p>

            </div>
            <br></br>
            <div className="blog-body">
                <p>
                    {blog.body || ""}
                </p>
            </div>
            <a href="/">Go back to the main page</a>
        </div>
    )
}