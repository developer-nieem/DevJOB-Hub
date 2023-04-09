import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-light'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary container">
            <div className="container-fluid">
                <a className="navbar-brand fw-bolder fs-2" >Dev Hub</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav m-auto mb-2 mb-lg-0 ">

                    <NavLink to='/' className={({ isActive }) =>isActive ? "active" : ""}> 
                    <li className="nav-item">
                    <a className="nav-link fw-semibold fs-5 " >Home</a>
                    </li>
                    </NavLink>
                    <NavLink to='/statistics' className={({ isActive }) =>isActive ? "active" : ""
                    }> 
                    <li className="nav-item">
                    <a className="nav-link fw-semibold fs-5 " >Statistics</a>
                    </li>
                    </NavLink>
                    <NavLink to='/applied-job' className={({ isActive }) =>isActive ? "active" : ""
                    }> 
                    <li className="nav-item">
                    <a className="nav-link fw-semibold fs-5" >Applied Jobs</a>
                    </li>
                    </NavLink>
                    <NavLink to='/blog' className={({ isActive }) =>isActive ? "active" : ""
                    }> 
                    <li className="nav-item">
                    <a className="nav-link fw-semibold fs-5" >Blog</a>
                    </li>
                    </NavLink>
                    
                    
                </ul>
                <div className="d-flex" role="search">
                    <button className="btn btn-primary" type="submit">Start Applying</button>
                </div>
                </div>
            </div>
            </nav>
                    </div>
    );
};

export default Header;