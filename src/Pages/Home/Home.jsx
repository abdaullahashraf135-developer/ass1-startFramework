import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import logo from '../../assets/imgi_1_avataaars.svg'

export default function Home(){
	return (
		<>
			<Navbar />

			<main className="sf-hero d-flex align-items-center justify-content-center text-white">
				<div className="text-center px-3">
					<div className="sf-avatar mb-4 mx-auto d-flex align-items-center justify-content-center">
						<img src={logo} alt="Avatar" className="sf-avatar-img"/>
					</div>

					<h1 className="sf-hero-title text-uppercase fw-bold mb-3">START FRAMEWORK</h1>

					<div className="sf-divider d-flex align-items-center justify-content-center mb-3">
						<span className="line"></span>
						<i className="bi bi-star-fill mx-3"></i>
						<span className="line"></span>
					</div>

					<p className="sf-subtitle small mb-4">Graphic Artist – Web Designer – Illustrator</p>
				</div>
			</main>

			<Footer />
		</>
	)
}
