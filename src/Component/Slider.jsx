import React from 'react';
import "../Css/style.css";
import logo from "../Assets/Images/logo.png";
import slider1 from "../Assets/Images/Slider1.jpeg";
import slider2 from "../Assets/Images/Slider2.jpeg";
import slider3 from "../Assets/Images/Slider3.jpeg";
import slider4 from "../Assets/Images/Slider4.jpeg";

const Slider = () => {
    return (
        <>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel" data-interval="3000">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={slider3} className="d-block w-100 h-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block text-left">
                                            <h1 style={{ fontSize: 60, marginBottom: 250, marginRight: 400, marginLeft: -100, fontFamily: 'roboto' }}>Search For<br /> Products, Categories and More...</h1>
                                            <button className='btn btn-light btn-lg' style={{ marginLeft: -100, marginRight: 500, marginTop: -450 }}>Shop Now</button>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={slider2} className="d-block w-100 h-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block text-left">
                                            <h1 style={{ fontSize: 60, marginBottom: 250, marginRight: 400, marginLeft: -100 }}>Search For<br /> Products, Categories and More...</h1>
                                            <button className='btn btn-light btn-lg' style={{ marginLeft: -100, marginRight: 500, marginTop: -450 }}>Shop Now</button>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={slider1} className="d-block w-100 h-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block text-left">
                                            <h1 style={{ fontSize: 60, marginBottom: 250, marginRight: 400, marginLeft: -100 }}>Search For<br /> Products, Categories and More...</h1>
                                            <button className='btn btn-light btn-lg' style={{ marginLeft: -100, marginRight: 500, marginTop: -450 }}>Shop Now</button>
                                        </div>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Slider;
