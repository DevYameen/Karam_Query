import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import ser1 from '../component/assets/training.jpg';
import cer1 from '../component/assets/KTC-Certified-01.jpg';
import cer2 from '../component/assets/KTC-Certified-02.jpg';
import cer3 from '../component/assets/KTC-Certified-03.jpg';
import cer4 from '../component/assets/KTC-Certified-04.jpg';
import cer5 from '../component/assets/KTC-Certified-05.jpg';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const Services = ({ hideCloseButton, hideNavFooter }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/');
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  const certificates = [
    { src: cer1, title: 'Approved Training Provider - GWO' },
    { src: cer2, title: 'Gravity Training' },
    { src: cer3, title: 'Technical Rope and Rescue Asia' },
    { src: cer4, title: 'IRATA' },
    { src: cer5, title: 'S65-150 9001:2005' }
  ];

  return (
    <> 
      {/* Conditionally render Navbar */}
      {!hideNavFooter && <Navbar />}

      <div className="container d-flex flex-column align-items-center position-relative"  style={{ minHeight: '100vh', paddingTop: '100px' }}>
        {/* Conditionally render the close button */}
        {!hideCloseButton && (
          <button
            onClick={handleClose}
            className="btn position-absolute top-0 end-0 m-3"
            style={{
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'red',  
              color: 'black',          
              border: 'none'           
            }}
          >
            <span className="fs-4">&times;</span>
          </button>
        )}

        {/* Parent div */}
        <div className="outer-div w-100" style={{ flex: 1 }}>
          <div className="row h-100">
            {/* Left half */}
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <div className="p-4">
                <h2 style={{ fontWeight: 'bold', fontSize: '2.5rem' }}>Overview</h2>
                <p>
                  A safe work environment contributes to constant employee productivity and enhances a company’s profitability. This begins with a well-trained workforce who values lives above everything else.
                  <br /><br />
                  KARAM, with an endeavor to make workplaces safer for everyone, introduced a training institute - KARAM Training & Consultancy (KTC) for safety aspirants who dream of making a difference.
                  <br /><br />
                  KTC is India’s only training organization focusing on Work at Height, Confined Space, & Rescue Competency Building as per NFPA 1670 and NFPA 1006.
                </p>
              </div>
            </div>
            {/* Right half with larger image */}
            <div className="col-md-6 d-flex justify-content-center align-items-center" style={{ paddingTop: '2rem' }}>
              <img
                src={ser1}
                alt="KARAM Training"
                style={{ width: '400px', height: '400px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>

        {/* Certificates Section */}
        <div className="text-center mt-5 p-4" style={{ backgroundColor: '#f8f9fa' }}>
          <h2 style={{ 
            fontWeight: 'bold', 
            fontSize: '2.5rem', 
            color: 'black',           
            padding: '0.5rem'        
          }}>
            Certificates
          </h2>
          <p style={{ fontSize: '1.25rem', marginTop: '10px' }}>
            Our safety training expertise is validated by various international training bodies.
          </p>
          <div className="container mt-4">
            <Slider {...settings}>
              {certificates.map((cert, index) => (
                <div key={index} className="p-2">
                  <div className="card" style={{ width: '18rem', height: '500px', border: 'none' }}>
                    <img
                      src={cert.src}
                      className="card-img-top"
                      alt={`Certificate ${index + 1}`}
                      style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                    />
                    <div className="card-body d-flex flex-column justify-content-end text-center" style={{ padding: '0.5rem' }}>
                      <h5 className="card-title" style={{ margin: '0', backgroundColor: 'red', color: 'white' }}>{cert.title}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* Conditionally render Footer */}
      {!hideNavFooter && <Footer />}
    </>  
  );
};

export default Services;
