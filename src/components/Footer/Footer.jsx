import React from 'react';
import { MapPinIcon , CurrencyDollarIcon } from '@heroicons/react/24/solid'

const Footer = () => {
    return (
        <div className='bg-black text-white'>
            <div className='container'>
            <div className="row pt-5">
                <div className='col-md-4'>
                    <h1>DevJOB Hub</h1>
                    <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    <button className='rounded-circle fs-3 m-2 btn bg-light' > <i className="bi bi-facebook"></i>  </button>
                    <button className='rounded-circle fs-3 m-2 btn bg-light' > <i className="bi bi-twitter"></i> </button>
                    <button className='rounded-circle fs-3 m-2 btn bg-light' > <i className="bi bi-instagram"></i>  </button>
                </div>
                <div className='col-md-2 text-light'>
                    <h4>Company</h4>
                    <ul className='list-unstyled mt-3 '>
                        <li>About Us</li>
                        <li>Work</li>
                        <li>Latest News</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div className='col-md-2'>
                <h4>Product</h4>
                    <ul className='list-unstyled mt-3'>
                        <li>Prototype</li>
                        <li>Plans & Pricing</li>
                        <li>Customers</li>
                        <li>Integrations</li>
                    </ul>
                </div>
                <div className='col-md-2'>
                <h4>Company</h4>
                    <ul className='list-unstyled mt-3'>
                        <li>Support</li>
                        <li>Help Desk</li>
                        <li>Sales</li>
                        <li>Become a Partner</li>
                    </ul>
                </div>
                <div className='col-md-2'>
                <h4>Contact</h4>
                    <ul className='list-unstyled mt-3'>
                        <li>524 Broadway , NYC</li>
                        <li>01838046483</li>
                        
                    </ul>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className='col-md-6'>
                    <p>@2023 DevJOB Hub. All Rights Reserved</p>
                </div>
                <div className='col-md-6 text-md-end'>
                    <p>Powered by Developer Nieem</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Footer;