import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import aboutBanner from '../component/assets/KARAM-Volunteers-Supporting-Education.jpg'
import Slider from '../component/Slider'
import Products from './Products'
import Services from './Services'
import map from '../component/assets/map_img.jpg'
import global from '../component/assets/global.png'
import certificate from '../component/assets/Certified-Products_0.png'
import  harnesses from '../component/assets/Harnesses-Manufactured_0.png'
import dollar from '../component/assets/1002B-Million-Dollar-Revenue-karam_1.png'
import employee from '../component/assets/Employee-Strength_0.png'
import exporting from '../component/assets/Exporting-to-countries.png'
import volunteers from '../component/assets/KARAM-Volunteers-Supporting-Education.jpg'
import koshika from '../component/assets/Koshika-Foundation-01.jpg'
import water from '../component/assets/AC-Duct-Water-Harvesting-01.jpg'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Slider/>

    <div className='row my-5'>
      <div className='col-md-6 ms-auto'>
        <h4>About Us</h4>
        <p>KARAM is a leading global occupational safety brand with a vast portfolio of over 3500 certified 
          products conforming to multiple national and international standards and exporting our safety solutions 
          to over 100 nations.
        </p>
        <p>KARAM is a leading global occupational safety brand with a vast portfolio of over 3500 certified 
          products conforming to multiple national and international standards and exporting our safety solutions 
          to over 100 nations.
        </p>
      </div>
      <div className='col-sm-4 me-auto my-auto'>
        <img src={aboutBanner} className='w-100 shadow-lg rounded-pill' />
      </div>
    </div>

    <Products hideCloseButton={true} hideNavFooter={true}/>
    <Services hideCloseButton={true} hideNavFooter={true} />
     {/* Global Presence Start */}

     <div className='row '>
      <div className='col-md-12'>
        <h2 className='text-center p-2'>Global Presence</h2>
        <p className='text-center'>Expanding our reach: Providing products and services to customers worldwide</p>
        <img src={map} className='w-100 ' />
        <div className='row bg-danger p-5'>
        <div className='col-md-4 border-bottom border-right p-3'>
          <div className='gride'>
            <img src={global} />
            <div className='gride-item'>
              <h4>50+</h4>
            </div>
            <div className='gride-item-global'>
              <h5>Global</h5>
            </div>
          </div>
        </div>
        <div className='col-md-4 border-bottom p-3'>
        <div className='gride-1'>
            <img src={certificate} />
            <div className='gride-item1'>
              <h4>3500+</h4>
            </div>
            <div className='gride-item-global-1'>
              <h5>Certified Products</h5>
            </div>
          </div>
        </div>
        <div className='col-md-4 border-bottom p-3'>
          <div className='gride-2'>
            <img src={harnesses} />
            <div className='gride-item-2'>
              <h4>7</h4>
            </div>
            <div className='gride-item-global-2'>
              <h5>Manufacturing Units</h5>
            </div>
          </div>
        </div>
        <div className='col-md-4 p-3'>
        <div className='gride-3'>
            <img src={dollar} />
            <div className='gride-item-3'>
              <h4>100+</h4>
            </div>
            <div className='gride-item-global-3'>
              <h5>Million Dollar Revenue</h5>
            </div>
          </div>
        </div>
        <div className='col-md-4 p-3'>
        <div className='gride-4'>
            <img src={employee} />
            <div className='gride-item-4'>
              <h4>4200+</h4>
            </div>
            <div className='gride-item-global-4'>
              <h5>Professional</h5>
            </div>
          </div>
        </div>
        <div className='col-md-4 p-3'>
          <div className='gride-5'>
              <img src={exporting} />
              <div className='gride-item-5'>
                <h4>100+</h4>
              </div>
              <div className='gride-item-global-5'>
                <h5>Exporting Countries</h5>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    {/* Global Presence End */}

    {/* Social start */}

    <div className='row my-auto p-5'>
      <div className='col-md-12 '>
        <h3 className='text-center p-2'>Environmental Social & Governance</h3>
        <p className='text-center'>Committed to fostering a safer, sustainable future for everyone</p>
        <div className='row mb-4'>
        <div className='col-md-4'>
        <img src={volunteers} className='w-100' />
        <h4>KARAM Volunteers Supporting Education and Development at Udyat Kheda Primary School</h4>
        <p >At KARAM, we believe in giving back to the community. As part of our CSR initiatives our…</p>
        </div>
        <div className='col-md-4'>
          <img src={koshika} className='w-100' />
          <h4>KARAM Volunteers Make a Difference for Children with Retinoblastoma</h4>
          <p>KARAM volunteers, in association with Koshika Foundation, recently facilitated a visit to Dr.…</p>
        </div>
        <div className='col-md-4'>
          <img src={water} className='w-100' />
          <h4>KARAM Saves Water with Innovation</h4>
          <p>At KARAM, we believe in responsible resource management. That is why we are excited to share our…</p>
        </div>
        </div>
      </div>
    </div>

    {/* Social End */}
    <Footer/>
   </>
  )
}

export default Home