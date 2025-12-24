import './Footer.css'

export default function Footer(){
  return (
    <footer className="sf-footer">
      <div className="container py-5">
        <div className="row text-white text-center text-md-start align-items-center">
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h6 className="sf-footer-heading text-uppercase fw-bold">LOCATION</h6>
            <p className="mb-0 small">2215 John Daniel Drive</p>
            <p className="mb-0 small">Clark, MO 65243</p>
          </div>

          <div className="col-12 col-md-4 mb-4 mb-md-0 text-center">
            <h6 className="sf-footer-heading text-uppercase fw-bold">AROUND THE WEB</h6>
            <div className="d-flex justify-content-center gap-2 mt-3">
              <a className="sf-icon d-inline-flex align-items-center justify-content-center" href="#" aria-label="facebook">
                <i className="bi bi-facebook" aria-hidden="true"></i>
              </a>
              <a className="sf-icon d-inline-flex align-items-center justify-content-center" href="#" aria-label="twitter">
                <i className="bi bi-twitter" aria-hidden="true"></i>
              </a>
              <a className="sf-icon d-inline-flex align-items-center justify-content-center" href="#" aria-label="linkedin">
                <i className="bi bi-linkedin" aria-hidden="true"></i>
              </a>
              <a className="sf-icon d-inline-flex align-items-center justify-content-center" href="#" aria-label="website">
                <i className="bi bi-globe2" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <h6 className="sf-footer-heading text-uppercase fw-bold">ABOUT FREELANCER</h6>
            <p className="mb-0">Freelance is a free to use, simple and minimal portfolio theme created to showcase work and projects.</p>
          </div>
        </div>
      </div>

      <div className="sf-footer-bottom text-center py-3">
        <div className="container">
          <small className="text-white-50">Copyright © Your Website 2021</small>
        </div>
      </div>
    </footer>
  )
}
