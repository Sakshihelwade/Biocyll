import React from 'react'
import "../Css/style.css";
import { NavLink } from 'react-router-dom';
import { FaCalendarAlt } from "react-icons/fa";
import { MdShoppingBag } from "react-icons/md";
import { TiDocumentText } from "react-icons/ti";
import { FaUsers } from "react-icons/fa6";
// import s2 from "../Assets/Images/s2.png"
import performance from "../Assets/Images/performance.png"
import s3 from "../Assets/Images/s3.png"
import s4 from "../Assets/Images/s4.png"
import s5 from "../Assets/Images/s5.png"
import s6 from "../Assets/Images/s6.png"
import s7 from "../Assets/Images/s7.png"
import { IoMdStar } from "react-icons/io"; const Services = () => {
    return (
        <>
            {/* <section>
            <div className="container-fluid p-5 services">
                <div className="row">
                    <div className="col-md-2 service_area ">
                        <div className="row">
                            <div className="col-4">
                                <img src='https://assets.pharmeasy.in/apothecary/images/family.svg?dim=256x0' />
                            </div>
                            <div className="col-8">
                                <h4>ETHICS</h4>
                                <NavLink>View more</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 service_area bg-light">
                        <div className="row">
                            <div className="col-4">
                                <img src='https://assets.pharmeasy.in/apothecary/images/deliveryBoy.svg?dim=256x0' />
                            </div>
                            <div className="col-8">
                                <h4>LONG TERM</h4>
                                <NavLink>View more</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 service_area">
                        <div className="row">
                            <div className="col-4">
                                <img src='https://assets.pharmeasy.in/apothecary/images/pincodeServed.svg?dim=256x0' />
                            </div>
                            <div className="col-8">
                                <h4>CUSTOMER FIRST</h4>
                                <NavLink>View more</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 service_area bg-light">
                        <div className="row">
                            <div className="col-4">
                                <img src='https://assets.pharmeasy.in/apothecary/images/locationMarker.svg?dim=256x0' />
                            </div>
                            <div className="col-8">
                                <h4>OWNERSHIP </h4>
                                <NavLink>View more</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 service_area bg-light">
                        <div className="row">
                            <div className="col-4">
                                <img src='https://assets.pharmeasy.in/apothecary/images/locationMarker.svg?dim=256x0' />
                            </div>
                            <div className="col-8">
                                <h4> QUALITY</h4>
                                <NavLink>View more</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}
            {/* <section>
                <div className="container-fluid p-5 mt-5" style={{backgroundImage:'url("https://as1.ftcdn.net/v2/jpg/05/62/30/94/1000_F_562309480_WaFoI9MUATver2L8Cb70adwynlSZwGpl.jpg")',backgroundRepeat:'no-repeat'}}>
                    <div className="row mb-5" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div className=" p-3 col-md-4 bg-light text-center" >
                            
                            <div className='c2_area mb-3' style={{ width: 75, height: 75, borderRadius: 75, border: '1px solid green', margin: 'auto' }}>
                                <div style={{ width: 70, height: 70, borderRadius: 70, backgroundColor: 'rgb(223, 252, 199)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <MdShoppingBag className='w-50 h-50' />
                                </div>
                            </div>
                            <h3>ETHICS</h3>
                            <p>We conduct ourselves and our business affairs in accordance with the highest ethical standards.</p>
                        </div>
                        <div className="col-md-4  p-3 text-center" >
                            
                            <div className='c2_area mb-3' style={{ width: 75, height: 75, borderRadius: 75, border: '1px solid green', margin: 'auto' }}>
                                <div style={{ width: 70, height: 70, borderRadius: 70, backgroundColor: 'rgb(223, 252, 199)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <FaCalendarAlt className='w-50 h-50' />
                                </div>
                            </div>
                            <h3>LONG TERM</h3>
                            <p>We base our decisions on maximizing the long-term success of our company.</p>
                        </div>
                        <div className="col-md-4  p-3 text-center" >
                            
                            <div className='c2_area mb-3' style={{ width: 75, height: 75, borderRadius: 75, border: '1px solid green', margin: 'auto' }}>
                                <div style={{ width: 70, height: 70, borderRadius: 70, backgroundColor: 'rgb(223, 252, 199)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <TiDocumentText className='w-50 h-50' />
                                </div>
                            </div>
                            <h3>OWNERSHIP</h3>
                            <p>"Each individual doing what it takes to win" suggests a competitive environment where  success is prioritized. </p>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-md-2"></div>
                        <div className="col-md-4  p-3 text-center" >
                            <div className='c2_area mb-3' style={{ width: 75, height: 75, borderRadius: 75, border: '1px solid green', margin: 'auto' }}>
                                <div style={{ width: 70, height: 70, borderRadius: 70, backgroundColor: 'rgb(223, 252, 199)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    < FaUsers className='w-50 h-50' />
                                </div>
                            </div>
                            
                            <h3>CUSTOMER FIRST</h3>
                            <p>We will work towards a customer focussed organization, keeping the customer front and center in all we do.</p>
                        </div>
                        <div className="col-md-4  p-3 text-center" >
                            
                            <div className='c2_area mb-3' style={{ width: 75, height: 75, borderRadius: 75, border: '1px solid green', margin: 'auto' }}>
                                <div style={{ width: 70, height: 70, borderRadius: 70, backgroundColor: 'rgb(223, 252, 199)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    < IoMdStar className='w-50 h-50' />
                                </div>
                            </div>
                            <h3>QUALITY</h3>
                            <p>We take responsibility for quality. Our product and services will be amongst the best in terms of value delivered.</p>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
            </section> */}

            <section>
                <div className="container-fluid p-5">
                    <div className="col-12 pt-2 text-center ">
                        <p style={{ color: 'green', fontSize: 20 }}>Our Facts</p>
                        <h1>Shaping Today's Actions for a<br></br> Greener Future</h1>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-3">
                            <div class="card card_3d" >
                                <div class="card-inner">
                                    <div class="card-front p-5">
                                        <img src={performance} className='w-75' style={{display:'flex',alignSelf:'center'}} />
                                        {/* <p><i class="fa-regular fa-hand-pointer"></i></p> */}
                                    </div>
                                    <div class="card-back p-3 text-center">
                                        {/* <h3>ETHICS</h3> */}
                                        <p>We conduct ourselves and our business affairs in accordance with the highest ethical standards.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div class="card card_3d" >
                                <div class="card-inner">
                                    <div class="card-front p-5">
                                        <img src={s3} className='w-75' style={{display:'flex',alignSelf:'center'}} />
                                        {/* <p><i class="fa-regular fa-hand-pointer"></i></p> */}
                                    </div>
                                    <div class="card-back p-3 text-center">
                                        {/* <h3>ETHICS</h3> */}
                                        <p>We base our decisions on maximizing the long-term success of our company.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div class="card card_3d" >
                                <div class="card-inner">
                                    <div class="card-front p-5">
                                        <img src={s4} className='w-75' style={{display:'flex',alignSelf:'center'}} />
                                        {/* <p><i class="fa-regular fa-hand-pointer"></i></p> */}
                                    </div>
                                    <div class="card-back p-3 text-center">
                                        {/* <h3>ETHICS</h3> */}
                                        <p>Each individual doing what it takes to win" suggests a competitive environment where  success is prioritized.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div class="card card_3d" >
                                <div class="card-inner">
                                    <div class="card-front p-5">
                                        <img src={s5} className='w-75' style={{display:'flex',alignSelf:'center'}} />
                                        {/* <p><i class="fa-regular fa-hand-pointer"></i></p> */}
                                    </div>
                                    <div class="card-back p-3 text-center">
                                        {/* <h3>ETHICS</h3> */}
                                        <p>We will work towards a customer focussed organization, keeping the customer front and center in all we do.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-3"></div>
                        <div className="col-md-3">
                            <div class="card card_3d" >
                                <div class="card-inner">
                                    <div class="card-front p-5">
                                        <img src={s6} className='w-75' style={{display:'flex',alignSelf:'center'}} />
                                        {/* <p><i class="fa-regular fa-hand-pointer"></i></p> */}
                                    </div>
                                    <div class="card-back p-3 text-center">
                                        {/* <h3>ETHICS</h3> */}
                                        <p>We will work towards a customer focussed organization, keeping the customer front and center in all we do.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div class="card card_3d" >
                                <div class="card-inner">
                                    <div class="card-front p-5">
                                        <img src={s7} className='w-75' style={{display:'flex',alignSelf:'center'}} />
                                        {/* <p><i class="fa-regular fa-hand-pointer"></i></p> */}
                                    </div>
                                    <div class="card-back p-3 text-center">
                                        {/* <h3>ETHICS</h3> */}
                                        <p>We take responsibility for quality. Our product and services will be amongst the best in terms of value delivered.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services
