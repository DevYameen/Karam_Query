import React from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import pro1 from '../component/assets/Respiratory-Protection.jpg';
import pro2 from '../component/assets/gas-detector-cover.jpg';
import pro3 from '../component/assets/Head-Protection.jpg';
import pro4 from '../component/assets/Hearing-Protection.jpg';
import pro5 from '../component/assets/products-cat.jpg';
import pro6 from '../component/assets/Face-Protection.jpg';
import pro7 from '../component/assets/Full-Body-Harness.jpg'; 
import pro8 from '../component/assets/Rope-Access-and-Rescue.jpg'; 
import pro9 from '../component/assets/Anchorages.jpg'; 

const Products = ({ hideCloseButton, hideNavFooter }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <>
      {/* Conditionally render Navbar */}
      {!hideNavFooter && <Navbar/>}

      <div className="container my-5 position-relative" style={{ paddingTop: '80px' }}>
        {/* Conditionally render the close button based on the prop */}
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

        {/* Existing PPE Section */}
        <h1 className="text-center mb-4">Personal Protective Equipment</h1>
        <p className="text-center mb-5">
          Protect yourself and your workers with reliable personal protective equipment (PPE)
        </p>
        <div className="row">
          {/* Respiratory Protection */}
          <div className="col-md-4">
            <div className="card product-card">
              <img src={pro1} className="card-img-top" alt="Respiratory Protection" />
              <div className="card-body bg-danger">
                <h5 className="card-title">Respiratory Protection</h5>
              </div>
              <div className="card-hover-content">
                <p>KARAM's disposable face mask meet daily use requirements and are IS, EN and CDSCO…</p>
              </div>
            </div>
          </div>

          {/* Gas Detection */}
          <div className="col-md-4">
            <div className="card product-card">
              <img src={pro2} className="card-img-top" alt="Gas Detection" />
              <div className="card-body bg-danger">
                <h5 className="card-title">Gas Detection</h5>
              </div>
              <div className="card-hover-content">
                <p>KARAM gas detectors give early warnings and safeguard workplaces from hazardous gases…</p>
              </div>
            </div>
          </div>

          {/* Head Protection */}
          <div className="col-md-4">
            <div className="card product-card">
              <img src={pro3} className="card-img-top" alt="Head Protection" />
              <div className="card-body bg-danger">
                <h5 className="card-title">Head Protection</h5>
              </div>
              <div className="card-hover-content">
                <p>KARAM's helmets offer comfort, PPE integration, and design for superior head safety.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          {/* Hearing Protection */}
          <div className="col-md-4">
            <div className="card product-card">
              <img src={pro4} className="card-img-top" alt="Hearing Protection" />
              <div className="card-body bg-danger">
                <h5 className="card-title">Hearing Protection</h5>
              </div>
              <div className="card-hover-content">
                <p>KARAM's ear muffs and plugs ensure safety, productivity, and comfort with optimal...</p>
              </div>
            </div>
          </div>

          {/* Eye Protection */}
          <div className="col-md-4">
            <div className="card product-card">
              <img src={pro5} className="card-img-top" alt="Eye Protection" />
              <div className="card-body bg-danger">
                <h5 className="card-title">Eye Protection</h5>
              </div>
              <div className="card-hover-content">
                <p>KARAM's safety eyewear range provides superior quality, comfort, and protection. CE,…</p>
              </div>
            </div>
          </div>

          {/* Face Protection */}
          <div className="col-md-4">
            <div className="card product-card">
              <img src={pro6} className="card-img-top" alt="Face Protection" />
              <div className="card-body bg-danger">
                <h5 className="card-title">Face Protection</h5>
              </div>
              <div className="card-hover-content">
                <p>KARAM Face and welding shields are designed to provide complete protection during...</p>
              </div>
            </div>
          </div>
        </div>

        {/* New Fall Protection Section */}
        <h1 className="text-center mt-5 mb-4">Fall Protection Equipment</h1>
        <p className="text-center mb-5">
          Prevent workplace falls with our comprehensive fall protection solutions
        </p>
        <div className="row">
          {/* Fall Protection 1 */}
          <div className="col-md-4">
            <div className="card product-card">
              <img src={pro7} className="card-img-top" alt="Fall Protection 1" />
              <div className="card-body bg-danger">
                <h5 className="card-title">Full Body Harness</h5>
              </div>
              <div className="card-hover-content">
                <p>KARAM offers diverse full body harnesses with ergonomic designs and comfort features…</p>
              </div>
            </div>
          </div>

          {/* Fall Protection 2 */}
          <div className="col-md-4">
            <div className="card product-card">
              <img src={pro8} className="card-img-top" alt="Fall Protection 2" />
              <div className="card-body bg-danger">
                <h5 className="card-title">Rope Access and Rescue</h5>
              </div>
              <div className="card-hover-content">
                <p>KARAM offers rope access equipment which is used with a fall protection system for…</p>
              </div>
            </div>
          </div>

          {/* Fall Protection 3 */}
          <div className="col-md-4">
            <div className="card product-card">
              <img src={pro9} className="card-img-top" alt="Fall Protection 3" />
              <div className="card-body bg-danger">
                <h5 className="card-title">Anchorages</h5>
              </div>
              <div className="card-hover-content">
                <p>KARAM offers anchorage devices made of steel, metal, and webbing that provide secure…</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conditionally render Footer */}
      {!hideNavFooter && <Footer />}
    </>  
  );
};

export default Products;
