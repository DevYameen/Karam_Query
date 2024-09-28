import React from 'react';
import logo from '../component/assets/karam-logo-01.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='row'>
      <div className='col-md-12'>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="Logo" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto w-75">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to={'/about'}>About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to={'/products'}>Products</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to={'/services'}>Services</Link>
                </li>
              </ul>
              <Link to={'/login'} className='btn btn-outline-danger' style={{ marginRight: '15px' }}>Query ?</Link>

            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
