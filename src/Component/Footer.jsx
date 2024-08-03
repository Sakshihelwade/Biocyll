import React, { useContext } from 'react'
import "../Css/style.css";
import Logo from "../Assets/Images/logo.png";
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
    const phoneNumber = '918605200451'
    // const message = encodeURIComponent('Hello! I have a question.');

    const handleClick = () => {
        window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}`, '_blank');
    };
    return (
        <section className=''>
            <div className='container-fluid footer_bg '>
                <div className='row p-4'>
                    <div className='col-md-4'>
                        <div className="row">
                            <div className="col-6 text-center">
                                <img src={Logo} className='w-75' />
                            </div>
                            <div className="col-6">
                                <p> At Biocyll Limited, we believe in a sustainable future. Our indigenous microbial-based solutions improve soil health, crop yield, and quality while managing pests and residue</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <ul style={{ listStyleType: 'none' }}>
                            <li><h6>About E-commerce</h6></li>
                            <Link to="/aboutus" className='text-white'><li>About </li></Link>
                            {/* <li>Blog</li> */}
                            {/* <li>Work With Us</li> */}
                            <Link to="/innovation" className='text-white'><li>Innovation and Technology</li></Link>
                            <Link to="/b2b" className='text-white'><li>B2B Solutions</li></Link>
                            <Link to="/career" className='text-white'><li>Careers</li></Link>
                            <Link to="/updates" className='text-white'><li>Updates</li></Link>
                            <Link to="/contact" className='text-white'><li>Contact Us</li></Link>
                        </ul>
                    </div>
                    {/* <div className='col-md-2'>
                        <ul style={{ listStyleType: 'none' }}>
                            <li><h6>Learn More</h6></li>
                            <li>Privacy</li>
                            <li>Security</li>
                            <li>Terms</li>
                        </ul>
                    </div> */}
                    <div className='col-md-2'>
                        <ul style={{ listStyleType: 'none' }}>
                            <li><h6>Our Policies</h6></li>
                            <li>Privacy </li>
                            <li>Shipping </li>
                            <li>Return </li>
                            <li>Cancellation</li>
                        </ul>
                    </div>
                    <div className='col-md-3'>
                        <ul style={{ listStyleType: 'none' }}>
                             <li className='mb-2'><Link to="/contact" className='text-white'><h6>Contact Us</h6></Link></li>
                             <li className='mb-2'>Phone: +91 20 60202626</li>
                             <li className='mb-2'>Mail us:  hr@biocyll.com </li>
                             <li className='mb-2'>Office Address: Office No 404, Karle Chowk, Karle Empire, Nanded City Phase 2, Sinhagad Road Pune 411041</li>
                             <li className='mb-2'>Office Hours:  09:30 AM to 06:30 PM</li>
                        </ul>
                    </div>
                    <div className='col-md-12'>
                        <div className='row '>
                            <div className='col-md-6 Footer_social_media'>
                                <div className='row'>
                                    Developed and Designed by __Goanny Technologies.
                                </div>
                            </div>
                            <div className='col-md-6 Footer_social_media'>
                                <div className='row float-right mr-5' style={{ gap: 20 }}>
                                    <div className=' icon_area'><i className="fa-brands fa-facebook-f" style={{ marginTop: 8 }}></i></div>
                                    <div className='icon_area'><i className="fa-brands fa-instagram" style={{ marginTop: 8 }}></i></div>
                                    <div className='icon_area'><i className="fa-brands fa-youtube" style={{ marginTop: 8 }}></i></div>
                                    <div className='icon_area'><i className="fa-brands fa-twitter" style={{ marginTop: 8 }}></i></div>
                                    <div className='icon_area' onClick={handleClick}><i className="fa-brands fa-whatsapp" style={{ marginTop: 8 }}></i ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
