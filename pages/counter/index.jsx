import { Component, useState, useRef } from "vaderjs/client";
import { Layout } from "../../src/layout.jsx";

export default function (req, res) {
  let counterRef = useRef(null);
  let [count, setCount] = useState(0);

  console.log(count);
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
        ${count}
        <button
          ref={counterRef}
          className="btn btn-primary mt-5"
          onClick={() => {
            setCount(++count)
          }}
        >
          Increment Counter
        </button>
      </div>
       </Layout>
    </>
  );
}
