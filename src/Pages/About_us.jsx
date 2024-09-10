import React, { useContext, useEffect, useState } from 'react'
import Nav from '../Component/Nav'
import { UserContext } from '../Context/CreateContext';
import About from '../Component/About';
import Journey from '../Component/Journey';
import Vision from '../Component/Vision';
import Values from '../Component/Values';
import Team from '../Component/Team';
import Clients from '../Component/Clients';
import Certifications from '../Component/Certifications';
import Footer from '../Component/Footer';
import { useParams } from 'react-router-dom';
import banner from '../Assets/Images/banner.jpg'

const About_us = () => {
    const { section } = useParams();
    // console.log(section)
    const { user, token, login, logout } = useContext(UserContext);
    const [currentComp, setCurrentComp] = useState(section || 'about-us');

    useEffect(()=>{
        setCurrentComp(section)
    },[section])
    return (
        <>
            {/* <Nav userData={user}></Nav> */}
            <section>
                <div className="container-fluid">
                    <div className="row">
                        {/* <div className="col-12 image-container">
                            <img src={banner} class="d-block w-100  zoom-image" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h1>About us</h1> */}
                                {/* <p style={{ marginBottom: 80 }}>About us <i class="fa-solid fa-chevron-right"></i> {currentComp}</p> */}
                            {/* </div>
                        </div> */}
                    </div>
                    <div className="row ab_bg pt-4 pl-3 pr-3 pb-5 background-image-opacity">
                        <div className="col-3 p-3 bg-white " style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
                            <hr style={{ backgroundColor: 'green' }} />
                            <div className={` col-12 ${currentComp === "about-us" ? "text-success font-weight-bold" : ""}`} onClick={() => setCurrentComp("about-us")}>About Us</div><hr style={{ backgroundColor: 'green' }} />
                            <div className={` col-12 ${currentComp === "journey" ? "text-success font-weight-bold" : ""}`} onClick={() => setCurrentComp("journey")}>Our Journey</div><hr style={{ backgroundColor: 'green' }} />
                            <div className={` col-12 ${currentComp === "vision" ? "text-success font-weight-bold" : ""}`} onClick={() => setCurrentComp("vision")}>Vision and Mission</div><hr style={{ backgroundColor: 'green' }} />
                            <div className={` col-12 ${currentComp === "values" ? "text-success font-weight-bold" : ""}`} onClick={() => setCurrentComp("values")}>Core Values</div><hr style={{ backgroundColor: 'green' }} />
                            <div className={` col-12 ${currentComp === "teams" ? "text-success font-weight-bold" : ""}`} onClick={() => setCurrentComp("team")}>Our Team</div><hr style={{ backgroundColor: 'green' }} />
                            <div className={` col-12 ${currentComp === "clients" ? "text-success font-weight-bold" : ""}`} onClick={() => setCurrentComp("clients")}>Our Clients</div><hr style={{ backgroundColor: 'green' }} />
                            <div className={` col-12 ${currentComp === "cert" ? "text-success font-weight-bold" : ""}`} onClick={() => setCurrentComp("cert")}>Certifications</div><hr style={{ backgroundColor: 'green' }} />
                        </div>
                        <div className="col-9 p-1">
                            {currentComp == "about-us" &&
                                <About />
                            }
                            {currentComp == "journey" &&
                                <Journey />
                            }
                            {currentComp == "vision" &&
                                <Vision />
                            }
                            {currentComp == "values" &&
                                <Values />
                            }
                            {currentComp == "team" &&
                                <Team />
                            }
                            {currentComp == "clients" &&
                                <Clients />
                            }
                            {currentComp == "cert" &&
                                <Certifications />
                            }
                        </div>
                    </div>
                </div>
            </section >
            {/* <Footer/> */}
        </>
    )
}

export default About_us
