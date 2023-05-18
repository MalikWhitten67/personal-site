function App() {
  return (
    <div>

      <div className=" position-fixed me-0  mt-16 ">

        <div className="hero-content text-start">
          <div className="max-w-md    ">

            <h1 className="text-3xl font-bold text-start bg-gradient-to-r from-accent to-warning bg-clip-text text-transparent">Malik.IsaDev</h1>
            <p className="py-6 ">
              Hello there, my names <span className="text-white font-bold">Malik</span> a 15yo self taught full stack web developer
              from the us! I love to code and learn new things everyday.
              <br></br>
              <br></br>
              I am
              currently working  on <span className="rounded badge bg-secondary">
                <a href="https://postr-inc.github.io/visi.js/#/">visi.js </a>
              </span>
              &nbsp; an open source project that is a simple and easy to use javascript library for creating spa websites, with mpa
              functionality!
            </p>
            <div className="stats stats-vertical lg:stats-horizontal shadow-xl">

              <div className="stat ">
                <div className="stat-title">Active Projects</div>
                <div className="stat-value">2</div>
                <div className="stat-desc">Visi.js | postr-inc - releasing soon!</div>
              </div>

              <div className="stat">
                <div className="stat-title">Known Languages</div>
                <div className="stat-value">5</div>
                <div className="stat-desc">css | html | javascript | soon: go!</div>
              </div>

              <div className="stat">
                <div className="stat-title">School</div>
                <div className="stat-value">Junior!</div>
                <div className="stat-desc">Junior as of May 25th 2023 class of 2025</div>
              </div>

            </div>
            <div className="flex justify-center mt-5 ">
              <a 
               href="https://postr-inc.github.io/visi.js/#/"
              className="
               
              flex font-bold  btn-xl bg-base-300 px-5 py-2 mx-auto rounded text-center text-white inline">
                <span className="bg-gradient-to-r from-gray-200 to-gray-100 bg-clip-text text-transparent">
                  Built With
                </span>
                  <img
              className="rounded mx-2   h-5 w-5"
              alt="visi.js logo"
              src="https://postr-inc.github.io/visi.js/assets/images/visilogo.png"/>
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
