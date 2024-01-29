import  {Component, useState, useRef}   from 'vaderjs/client'
 

 
export default function(req, res){
    let counterRef = useRef(null)
   let [count, setCount] = useState(0)
  function increment(){ 
    setCount(++count)
  }
   return  <>
    <div key="counter">
      <h1 ref={counterRef.bind}>${count}</h1>
      <button  
      onClick={(event)=>{ 
        increment()
      }}>Increment</button>
    </div>
  </>
}
 