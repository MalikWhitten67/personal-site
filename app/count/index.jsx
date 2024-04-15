import { useState, e } from "vaderjs"
export const head = () =>{
    return(
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
    )
}
export default function Index(){ 
    let [count, setCount] = useState(0)
    let [text, setText] = useState("")
    return(
        <div>
            <h1>Count: {count}</h1>
             <p>
             {
                text
            }
             </p>
            <input type="text" onChange={(e)=>{
                setText(e.target.value)
            }} value={text}/>
            <button onClick={()=>setCount(count+=1)}>Increment</button>
            <button onClick={()=>setCount(count-= 1)}>Decrement</button>
        </div>
    )
}