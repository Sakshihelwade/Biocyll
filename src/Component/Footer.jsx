
// import React, { useContext } from 'react'
// import "../Css/style.css";
// import Logo from "../Assets/Images/logo.png";
// import { Link, NavLink } from 'react-router-dom';

// const Footer = () => {
//     const phoneNumber = '918605200451'
//     const message = encodeURIComponent('Hello! I have a question.');
//     // const handleClick = () => {
//     //     window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}`, '_blank');
//     const handleClick = (url) => {
//         window.open(url, '_blank');
//         // window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}`, '_blank');
//     };
//     return (
       
//         <footer className="bg-dark text-white pt-4">
//             <div className="container">
//                 <div className="row">
//                     {/* <div className='col-md-3'>
//                         <ul style={{ listStyleType: 'none' }}>
//                             <li className='mb-2'><Link to="/contact" className='text-white'><h6>Contact Us</h6></Link></li>
//                             <li className='mb-2'>Phone: +91 20 60202626</li>
//                             <li className='mb-2'>Mail us:  hr@biocyll.com </li>
//                             <li className='mb-2'>Office Address: Office No 404, Karle Chowk, Karle Empire, Nanded City Phase 2, Sinhagad Road Pune 411041</li>
//                             <li className='mb-2'>Office Hours:  09:30 AM to 06:30 PM</li>
//                         </ul>
//                     </div> */}

//                     <div className="col-md-4 mb-4">
//                         <h6 className="text-uppercase">About E-commerce</h6>
//                         <ul style={{ listStyleType: 'none' }}>
//                             <Link to="/aboutus" className='text-white'><li>About </li></Link>
//                             <Link to="/innovation" className='text-white'><li>Innovation and Technology</li></Link>
//                             <Link to="/b2b" className='text-white'><li>B2B Solutions</li></Link>
//                             <Link to="/career" className='text-white'><li>Careers</li></Link>
//                             <Link to="/updates" className='text-white'><li>Updates</li></Link>
//                             <Link to="/contact" className='text-white'><li>Contact Us</li></Link>
//                         </ul>
//                     </div>
//                     {/* Resources Section */}
//                     <div className="col-md-4 mb-4">

//                         <ul style={{ listStyleType: 'none' }}>
//                             <li><h6>Learn More</h6></li>
//                             <li>Privacy</li>
//                             <li>Security</li>
//                             <li>Terms</li>
//                         </ul>
//                     </div>
//                     {/* Policies Section */}
//                     <div className="col-md-4 mb-4">
//                         <ul style={{ listStyleType: 'none' }}>
//                             <li><h6>Our Policies</h6></li>
//                             <li>Privacy </li>
//                             <li>Shipping </li>
//                             <li>Return </li>
//                             <li>Cancellation</li>
//                         </ul>
//                     </div>

//                     <div className="col-12">
//                         <div className='row float-right' style={{  marginRight:'300px', gap: 20, paddingBottom:'20px' }}>
//                             {/* Social Icons */}
//                             <div className=' icon_area' onClick={() => handleClick('https://www.facebook.com/people/Biocyll-Laboratories-Pvt-Ltd/61556971227731/?mibextid=ZbWKwL')}><i className="fa-brands fa-facebook-f" style={{ marginTop: 8 }}></i></div>
//                             <div className='icon_area' onClick={() => handleClick('https:www.instagram.com/biocyll_laboratories_pvt.ltd/?utm_source=qr&igsh=eHVoM3R4NTFuemgw')}> <i className="fa-brands fa-instagram" style={{ marginTop: 8 }}></i> </div>
//                             <div className='icon_area' onClick={handleClick}><i className="fa-brands fa-youtube" style={{ marginTop: 8 }}></i></div>
//                             <div className='icon_area' onClick={handleClick}><i className="fa-brands fa-twitter" style={{ marginTop: 8 }}></i></div>
//                             {/* <div className='icon_area' onClick={() => handleClick('')}><i className="fa-brands fa-whatsapp" style={{ marginTop: 8 }}></i ></div> */}
//                             <div className='icon_area' onClick={() => handleClick(`https:api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`)}><i className="fa-brands fa-whatsapp" style={{ marginTop: 8 }}></i></div>
//                             <div className='icon_area' onClick={() => handleClick('https://www.linkedin.com/company/100039024/admin/dashboard/')}><i className="fa-brands fa-linkedin" style={{ marginTop: 8 }}></i ></div>
//                         </div>
//                     </div>
//                     <div className="row text-center pt-5 border-top border-secondary" >
//                         <div className="col-12 mb-3">
//                             <p>Developed and Designed by __Goanny Technologies Pvt Ltd.</p>
//                         </div>
//                     </div>
//                     <div className="row text-center pt-5 border-top border-secondary">
//                         <div className="col-12 mb-3" style={{ marginLeft: '200px' }}>
//                             <p>© 2024 All Rights Reserved by Biocyll</p>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// }

// export default Footer

import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/style.css';

const Footer = () => {
  const phoneNumber = '918605200451';
  const message = encodeURIComponent('Hello! I have a question.');

  // Handle URL clicks for social media
  const handleClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <footer className="bg-dark text-white pt-4">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4 col-sm-6 mb-4">
            <h6 className="text-uppercase">About E-commerce</h6>
            <ul className="list-unstyled">
              <li><Link to="/aboutus" className="text-white">About</Link></li>
              <li><Link to="/innovation" className="text-white">Innovation and Technology</Link></li>
              <li><Link to="/b2b" className="text-white">B2B Solutions</Link></li>
              <li><Link to="/career" className="text-white">Careers</Link></li>
              <li><Link to="/updates" className="text-white">Updates</Link></li>
              <li><Link to="/contact" className="text-white">Contact Us</Link></li>
            </ul>
          </div>

          {/* Learn More Section */}
          <div className="col-md-4 col-sm-6 mb-4">
            <h6 className="text-uppercase">Learn More</h6>
            <ul className="list-unstyled">
              <li>Privacy</li>
              <li>Security</li>
              <li>Terms</li>
            </ul>
          </div>

          {/* Policies Section */}
          <div className="col-md-4 col-sm-12 mb-4">
            <h6 className="text-uppercase">Our Policies</h6>
            <ul className="list-unstyled">
            <li><Link to="/privacypolicies" className="text-white">Privacy Policy</Link></li>
              <li><Link to ="/shipping" className='text-white'>Shipping</Link></li>
              <li><Link to ="/return" className='text-white'>Return</Link></li>
              <li><Link to="/cancellation" className='text-white'>Cancellation</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons Section */}
        <div className="row">
          <div className="col-12 d-flex justify-content-center mb-4">
            <div className="d-flex gap-3">
              <div
                className="icon_area"
                onClick={() =>
                  handleClick(
                    'https://www.facebook.com/people/Biocyll-Laboratories-Pvt-Ltd/61556971227731/?mibextid=ZbWKwL'
                  )
                }
              >
                <i className="fa-brands fa-facebook-f"></i>
              </div>
              <div
                className="icon_area"
                onClick={() =>
                  handleClick(
                    'https://www.instagram.com/biocyll_laboratories_pvt.ltd/?utm_source=qr&igshid=eHVoM3R4NTFuemgw'
                  )
                }
              >
                <i className="fa-brands fa-instagram"></i>
              </div>
              <div
                className="icon_area"
                onClick={() =>
                  handleClick(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`)
                }
              >
                <i className="fa-brands fa-whatsapp"></i>
              </div>
              <div
                className="icon_area"
                onClick={() =>
                  handleClick('https://www.linkedin.com/company/100039024/admin/dashboard/')
                }
              >
                <i className="fa-brands fa-linkedin"></i>
              </div>
              <div
                className="icon_area"
                onClick={() => handleClick('https://www.youtube.com')}
              >
                <i className="fa-brands fa-youtube"></i>
              </div>
              <div
                className="icon_area"
                onClick={() => handleClick('https://www.twitter.com')}
              >
                <i className="fa-brands fa-twitter"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="row text-center border-top border-secondary pt-4">
          <div className="col-12">
            <p>Developed and Designed by Goanny Technologies Pvt Ltd.</p>
            <p>© 2024 All Rights Reserved by Biocyll</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

