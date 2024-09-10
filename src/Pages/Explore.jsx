import React, { useEffect, useState } from 'react'
import Slider1Explore from '../Component/Slider1Explore';
import Slider2Explore from '../Component/Slider2Explore';
import Journey from '../Component/Journey';
import Values from '../Component/Values';
import banner from '../Assets/Images/banner.jpg'
import { useParams } from 'react-router-dom';

const Explore = () => {
    const{section} =useParams();
    const [currentComp, setCurrentComp] = useState(section || 'explore');

    useEffect(() => {
        setCurrentComp(section)
    }, [section])

    return (
        <div>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 image-container">
                            <img src={banner} class="d-block w-100  zoom-image" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h1>12 years of Agriculture Innovation</h1>
                                {/* <p style={{ marginBottom: 80 }}>12 Years of Agriculture Innovation<i class="fa-solid fa-chevron-right"></i> {currentComp}</p> */}
                            </div>
                        </div>
                    </div>
                    <div className="row ab_bg pt-5 pl-3 pr-3 pb-5 background-image-opacity">
                        <div className="col-3 p-3 bg-white " style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
                            <hr style={{ backgroundColor: 'green' }} />
                            <div className={` col-12 ${currentComp === "experience" ? "text-success font-weight-bold" : ""}`} onClick={() => setCurrentComp("experience")}>12 years of Experince</div><hr style={{ backgroundColor: 'green' }} />
                            <div className={` col-12 ${currentComp === "revamping" ? "text-success font-weight-bold" : ""}`} onClick={() => setCurrentComp("revamping")}>Revamping agriculture with Microbial solutions </div><hr style={{ backgroundColor: 'green' }} />
                            <div className={` col-12 ${currentComp === "story" ? "text-success font-weight-bold" : ""}`} onClick={() => setCurrentComp("story")}>Our Story</div><hr style={{ backgroundColor: 'green' }} />
                            <div className={` col-12 ${currentComp === "values" ? "text-success font-weight-bold" : ""}`} onClick={() => setCurrentComp("values")}>Our Values</div><hr style={{ backgroundColor: 'green' }} />
                        </div>
                        <div className="col-9 p-4">
                            {currentComp == "experience" &&
                                <Slider1Explore />
                            }
                            {currentComp == "revamping" &&
                                <Slider2Explore />
                            }
                            {currentComp == "story" &&
                                <Journey />
                            }
                            {currentComp == "values" &&
                                <Values />
                            }
                        </div>
                    </div>
                </div>
            </section >
        </div>
    )
}

export default Explore
