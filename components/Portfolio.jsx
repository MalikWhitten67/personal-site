function Portfolio(){
    return(
        <div className="container-fluid">
        <nav className="navbar navbar-expand-md">
          <div className="container title">
            <a className="navbar-brand fw-bold fs-5 text-dark" href="#/home">Malik.Isadev</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link fw-bold fs-5 text-dark" href="#/portfolio">Portfolio</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
  
        
        <section className="py-5">
  <div className="container px-5 mb-5">
    <div className="text-center mb-5">
      <h1 className="display-5 fw-bolder mb-0">
        <span className="text-gradient d-inline">Projects</span>
      </h1>
    </div>
    <div className="row gx-5 justify-content-center">
      <div className="col-lg-11 col-xl-9 col-xxl-8">
        {/* Project Card 1*/}
        <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
          <div className="card-body p-0">
            <div className="d-flex align-items-center">
              <div className="p-5">
                <h2 className="fw-bolder">Postr</h2>
                <p>
                Postr. Connect, Share, and Inspire, One Post at a Time!

                
                
                </p>
                <a href="https://postr-inc.me" className="btn btn-primary" type="button">View Project</a>
              </div>
               
            </div>
          </div>
        </div>
        {/* Project Card 2*/}
        <div className="card overflow-hidden shadow rounded-4 border-0">
          <div className="card-body p-0">
            <div className="d-flex align-items-center">
              <div className="p-5">
                <h2 className="fw-bolder">Visi.js <img src="./components/static/assets/img/visijs.png" 
                className="img-fluid rounded-circle"
                alt="" width={30} height={30}/></h2>
                <p>
                 Visi.js is a react cdn library that allows you to keep nodejs functionality throughout your app in the browser.
                 In fact this website was made with it! it uses react cdn for the jsx rendering  and uses visi for component libraries.
                
                </p>
                <a href="https://www.npmjs.com/package/visi.js/v/1.2.7" className="btn btn-primary" type="button">View Project</a>
              </div>
               
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      
   
 

        <footer className="column mt-5">
          
        </footer>
      </div>
    )

}
