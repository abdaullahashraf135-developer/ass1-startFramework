import { Link } from 'react-router'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import './NotFound.css'

export default function NotFound(){
	return (
		<>
			<Navbar />

			<main className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light">
				<div className="text-center p-4">
					<i className="bi bi-bug-exclamation-fill display-1 text-danger mb-3" aria-hidden="true"></i>
					<h1 className="display-4 fw-bold">404 — Page Not Found</h1>
					<p className="lead text-muted mb-4">We couldn't find the page you're looking for.</p>

					<div className="d-flex justify-content-center gap-2">
						<Link to="/" className="btn btn-primary btn-lg">
							<i className="bi bi-house-door-fill me-2"></i>Home
						</Link>
						<Link to="/contact" className="btn btn-outline-secondary btn-lg">
							<i className="bi bi-envelope-fill me-2"></i>Contact
						</Link>
					</div>
				</div>
			</main>

			<Footer />
		</>
	)
}
