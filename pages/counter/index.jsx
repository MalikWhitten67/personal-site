import { Component, useState, useRef } from "vaderjs/client";
import { Layout } from "../../src/layout.jsx";

export default function (req, res) {
  
  let counterRef = useRef(null);

  let [count, setCount] = useState(0);
 
  return (
    <>
       <Layout
       
        title="Malik Whitten"
        description="Malik Whitten Personal Website"
        logo="https://avatars.githubusercontent.com/u/123524260?s=200&v=4"
       
       >
       <div
        key="counter"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div>
        ${
          count > 5  ?
            <>
              <h1>Count is greater than 5</h1>
            </>
           : ""
         }
        </div>
          ${count}
        <button
         
          onClick={() => {
            console.log(counterRef.current);
            setCount(++count);
          }}
        >
          Increment Counter  
        </button>
      </div>
       </Layout>
    </>
  );
}
