import React from 'react';
import logo from '../component/assets/karam-logo-01.png';
import year from '../component/assets/25-year-footer-01.png';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      {/* Upper Section - Dark Grey Background */}
      <div className="bg-dark-grey text-white pt-3 pb-2"> {/* Decreased padding here */}
        <div className="container">
          <div className="row d-flex justify-content-between">
            {/* Corporate Office Section */}
            <div className="col-lg-4 col-md-6 mb-4" style={{ paddingLeft: '15px' }}>
              <h4 className="text-uppercase mb-3">
                <img src={logo} alt="Karam Logo" style={{ height: '40px' }} /> Corporate Office
              </h4>
              <p className="text-white">
                <FaMapMarkerAlt className="me-2" /> D-95, Sector 2, Noida, Uttar Pradesh - 201301
              </p>
              <p className="text-white">
                <FaEnvelope className="me-2" /> karam@karam.in
              </p>
              <p className="text-white">
                <FaPhone className="me-2" /> 1800-103-7085
              </p>
              <p className="text-white">
                <FaPhone className="me-2" /> +91 120 4734400
              </p>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-6 mb-4">
              <h5 className="text-uppercase mb-3">Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white text-decoration-none">Press Coverage</a></li>
                <li><a href="#" className="text-white text-decoration-none">FAQs</a></li>
                <li><a href="#" className="text-white text-decoration-none">Blogs</a></li>
                <li><a href="#" className="text-white text-decoration-none">Newsletter</a></li>
                <li><a href="#" className="text-white text-decoration-none">News & Events</a></li>
              </ul>
            </div>

            {/* Corporate Affairs */}
            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className="text-uppercase mb-3">Corporate Affairs</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white text-decoration-none">Corporate Affairs</a></li>
                <li><a href="#" className="text-white text-decoration-none">Product Warranty & Disclaimer</a></li>
                <li><a href="#" className="text-white text-decoration-none">EU Declaration Form</a></li>
                <li><a href="#" className="text-white text-decoration-none">Loyalty Rewards Program</a></li>
                <li><a href="#" className="text-white text-decoration-none">IMS Policy</a></li>
                <li><a href="#" className="text-white text-decoration-none">Quality Policy</a></li>
              </ul>
            </div>

            {/* 25 Years Celebration */}
            <div className="col-lg-3 col-md-6 mb-4 d-flex justify-content-end align-items-center">
              <img src={year} alt="25 Years Logo" style={{ maxHeight: '150px' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Lower Section - Black Background */}
      <div className="bg-black text-white py-3">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center border-top border-light pt-3">
            {/* Footer Bottom Section */}
            <div className="d-flex align-items-center">
              <p className="mb-0 text-white">&copy; {new Date().getFullYear()}, All rights reserved by KARAM Safety Pvt. Ltd.</p>
              <ul className="list-inline mb-0 ms-3">
                <li className="list-inline-item"><a href="#" className="text-white">Privacy Policy</a></li>
                <li className="list-inline-item"><a href="#" className="text-white">Terms & Conditions</a></li>
              </ul>
            </div>

            {/* Social Media Links */}
            <div className="d-flex">
              <a href="#" className="social-icon d-flex align-items-center justify-content-center me-3">
                <FaFacebookF />
              </a>
              <a href="#" className="social-icon d-flex align-items-center justify-content-center me-3">
                <FaTwitter />
              </a>
              <a href="#" className="social-icon d-flex align-items-center justify-content-center me-3">
                <FaLinkedin />
              </a>
              <a href="#" className="social-icon d-flex align-items-center justify-content-center me-3">
                <FaYoutube />
              </a>
              <a href="#" className="social-icon d-flex align-items-center justify-content-center">
                <FaInstagram />
              </a>
            </div>

            {/* Scroll to Top */}
            <a href="#" className="text-white fs-3" style={{ position: 'relative' }}>
              <div className="scroll-to-top d-flex align-items-center justify-content-center" style={{
                width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'red'
              }}>
                <span>&uarr;</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
