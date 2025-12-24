import React, { useState } from 'react';
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./Portofolio.css";

import HomeImg from "../../assets/imgi_1_poert1.png";
import Cake from "../../assets/imgi_2_port2.png";
import Circus from "../../assets/imgi_3_port3.png";

export default function Portofolio() {
  const portfolioImages = [HomeImg, Cake, Circus, HomeImg, Cake, Circus];
  const portfolioClasses = ["bg-cabin", "bg-cake", "bg-circus", "bg-cabin", "bg-cake", "bg-circus"];

  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Navbar />

    <main className="py-5 bg-white">
        <div className="container">
            <div className="text-center mb-5">
            <h1 className="text-uppercase fw-bold text-dark">
                PORTFOLIO COMPONENT
            </h1>
            <div className="sf-divider d-flex align-items-center justify-content-center my-3">
                <span className="line"></span>
                <i className="bi bi-star-fill mx-3"></i>
                <span className="line"></span>
            </div>
        </div>
        <div className="row g-4">
            {portfolioImages.map((img, i) => (
                <div key={i} className="col-12 col-sm-6 col-lg-4">
                <div className={`portfolio-item ${portfolioClasses[i]}`} onClick={() => { setSelectedImage(img); setIsModalOpen(true); }}>
                    <div className="portfolio-img">
                    <img src={img} alt="portfolio" />
                    </div>
                    <div className="overlay"></div>
                    <div className="portfolio-text">+</div>
                </div>
                </div>
            ))}
            </div>
        </div>
    </main>

    {isModalOpen && (
      <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <img src={selectedImage} alt="Selected Portfolio" className="modal-image" />
        </div>
      </div>
    )}

    <Footer />
    </>
  );
}

