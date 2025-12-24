import React from 'react'
import './Contact.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

export default function Contact(){
  return (
    <>
      <Navbar />

      <main className="contact-page d-flex align-items-center justify-content-center bg-white py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6">
              <div className="text-center mb-4">
                <h1 className="h3 text-dark text-uppercase fw-bold letter-spacing">CONTACT SECTION</h1>
                <div className="sf-divider d-flex align-items-center justify-content-center my-3">
                  <span className="line"></span>
                  <i className="bi bi-star-fill mx-3 text-dark"></i>
                  <span className="line"></span>
                </div>
              </div>

              <form className="contact-form">
                <div className="form-group position-relative">
                  <input id="userName" type="text" className="form-control underline" placeholder="userName " />
                  <label htmlFor="userName" className="floating-label text-teal">userName :</label>
                </div>

                <div className="form-group position-relative">
                  <input id="userAge" type="number" className="form-control underline" placeholder="userAge " />
                  <label htmlFor="userAge" className="floating-label text-teal">userAge :</label>
                </div>

                <div className="form-group position-relative">
                  <input id="userEmail" type="email" className="form-control underline" placeholder="userEmail " />
                  <label htmlFor="userEmail" className="floating-label text-teal">userEmail :</label>
                </div>

                <div className="form-group position-relative">
                  <input id="userPassword" type="password" className="form-control underline" placeholder="userPassword " />
                  <label htmlFor="userPassword" className="floating-label text-teal">userPassword :</label>
                </div>

                <div className="d-flex">
                  <button type="submit" className="btn btn-teal px-3">send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

