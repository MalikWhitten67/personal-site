
require('./components/styles/app.scss')

function App() {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-md">
        <div className="container title">
          <a className="navbar-brand fw-bold fs-5 text-dark" href="#/">Malik.Isadev</a>
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

      <div className="row mt-5">
        <div className="col-md-6 offset-md-3 text-center">
          <h1 className="fw-bold fs-2 text-dark">Malik Isadev

          </h1>
          <p className="lead">Software Engineer | Full Stack Web Developer.</p>
          <img
            src="https://th.bing.com/th/id/R.ae491eeb393fa4fa10ff14072b45a276?rik=qbXgrNVuGqFjIA&pid=ImgRaw&r=0"
            className="img-fluid"
            width="120"
            alt="..."
          ></img>
        </div>
      </div>
      <div className='text-center'>
        <div className="container p-4 pb-0">
          {/* Section: Social media */}
          <section className="mb-4">
            {/* Facebook */}
            <a
              className="btn btn-outline-dark btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="bi bi-facebook" />
            </a>
            {/* Twitter */}
            <a
              className="btn btn-outline-dark btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="bi bi-twitter" />
            </a>
            {/* Google */}
            <a
              className="btn btn-outline-dark btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="bi bi-google" />
            </a>
            {/* Instagram */}
            <a
              className="btn btn-outline-dark btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="bi bi-instagram" />
            </a>
            {/* Linkedin */}
            <a
              className="btn btn-outline-dark btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="bi bi-linkedin" />
            </a>
            {/* Github */}
            <a
              className="btn btn-outline-dark btn-floating m-1"
              href="https://github.com/MalikWhitten67"
              role="button"
            >
              <i className="bi bi-github" />
            </a>
          </section>
          <section className="column  justify-content-between">
            <span className='fw-bold fs-4 m-1'>Stack |</span>

            <img className='ms-2 m-1' src='https://img.icons8.com/?size=512&id=7gdY5qNXaKC0&format=png'
              width={40}
            ></img>
            <img className='ms-2 m-1' src='https://img.icons8.com/?size=512&id=20909&format=png'
              width={40}
            ></img>
            
            <img src='./components/static/assets/img/visijs.png' className='ms-2 m-1 rounded' width={30}></img>
            <img className='ms-2 rounded' src='https://img.icons8.com/?size=512&id=PXTY4q2Sq2lG&format=png'
              width={40}
            ></img>
            <img src="https://img.icons8.com/?size=512&id=hsPbhkOH4FMe&format=png" width={40}
            className='ms-2 rounded'
            ></img>
          </section>

        </div>
      </div>


      <footer className="column mt-5">
        <footer className=" text-center text-dark">

          <div
            className="text-center p-3"

          >
            © 2023 Copyright:

            Malik.Isadev | All Rights Reserved

          </div>
          {/* Copyright */}
        </footer>

      </footer>
    </div>
  );
}
