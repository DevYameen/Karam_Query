import React from 'react';
import s1 from '../component/assets/home-slide.jpg';
import s2 from '../component/assets/home-slide-02_02.jpg';
import s3 from '../component/assets/home-slide-042028129.jpg';
import s4 from '../component/assets/home-slide-02_0.jpg';

const Slider = () => {
  return (
    <div className='row bg-dark text-light p-2'>
      <div className='col-sm-5 d-flex align-items-center'>
        <div>
          <h2 className='text-white fw-bold display-1 mb-3 mt-n5'>
            Saving millions of <span className='text-danger brush-underline'>lives</span> globally
          </h2>
          <p className='text-light mt-n4'>
            KARAM is a leading global PPE & Fall Protection solutions brand.
          </p>
          <button className='learn-more-btn btn btn-danger mt-3 ms-3'>
            Learn More
          </button>

          <div className="d-flex justify-content-start mt-4">
            <div className="me-3">
              <button className="btn btn-danger d-flex align-items-center p-3" style={{ borderRadius: '0.5rem' }}>
                <i className="fa fa-shopping-cart me-2 fs-4"></i> 
                <span className="fw-bold">Karam Online <br /> product</span>
              </button>
            </div>
            <div>
              <button className="btn btn-dark d-flex align-items-center p-3" style={{ borderRadius: '0.5rem' }}>
                <i className="fa fa-newspaper-o me-2 fs-4"></i>
                <span className="fw-bold">News <br /> & Events</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='col-sm-6'>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item">
              <img src={s1} className="d-block w-100" alt="..." />
              <div className='s bg-danger w-50 position-absolute'>More details on News & Events</div>
            </div>
            <div className="carousel-item active">
              <img src={s2} className="d-block w-100" alt="..." />
              <div className='s bg-danger w-50 position-absolute'>More details on News & Events</div>
            </div>
            <div className="carousel-item">
              <img src={s3} className="d-block w-100" alt="..." />
              <div className='s bg-danger w-50 position-absolute'>Intersec 2024, Dubai</div>
            </div>
            <div className="carousel-item">
              <img src={s4} className="d-block w-100" alt="..." />
              <div className='s bg-danger w-50 position-absolute'>KARAM bags the "Platinum Category" at IMEA again!</div>
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className='col-sm-1 my-auto text-center'>
       <p className='fa-brands fa-facebook fs-4 border p-3 rounded-circle mb-4 icon-hover'></p>
       <p className='fa-brands fa-instagram fs-4 border p-3 rounded-circle mb-4 icon-hover'></p>
       <p className='fa-brands fa-youtube fs-4 border p-3 rounded-circle mb-4 icon-hover'></p>
       <p className='fa-brands fa-twitter fs-4 border p-3 rounded-circle icon-hover'></p>
      </div>    
    </div>
  );
};

export default Slider;
