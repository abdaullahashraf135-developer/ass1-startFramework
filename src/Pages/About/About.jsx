import "./About.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      <main className="sf-hero d-flex align-items-center text-white">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 text-center">
              <h1 className="sf-hero-title text-uppercase fw-bold mb-3">About</h1>

              <div className="sf-divider d-flex align-items-center justify-content-center mb-4">
                <span className="line"></span>
                <i className="bi bi-star-fill mx-3"></i>
                <span className="line"></span>
              </div>
            </div>

            <div className="col-12 col-md-10">
              <div className="row g-4">
                <div className="col-12 col-md-6">
                  <p className="sf-subtitle mb-0">Freelancer is a free Bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
                <div className="col-12 col-md-6">
                  <p className="sf-subtitle mb-0">I build responsive interfaces using modern tooling. My focus is accessibility, performance and a polished user experience across desktop and mobile devices.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
