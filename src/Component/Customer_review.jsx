import axios from "axios";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Categories() {


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="arrow-container prev" onClick={onClick}>
        <i className="fa-sharp fa-solid fa-arrow-left"></i>
      </div>
    );
  }

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="arrow-container next" onClick={onClick}>
        <i className="fa-sharp fa-solid fa-arrow-right"></i>
      </div>
    );
  }

  return (
    <>
      <section className="tsp_bg">
        <h1 className=" text-center">Hi</h1>
        <div className="outerDiv">
        <Slider {...settings}>
            <div>
              <div className="card tsp_card">
                <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRlYD5C5gNHuPW9gTRa-bid_OLVxcD0OmrMLcdBCBzm2j1huOIo" class="tsp_image" />
                <div class="card-body">
                  <div className="col-md-12 tsp_text">
                    <i className="fa-regular fa-star"></i>&nbsp;<i class="fa-regular fa-star"></i>&nbsp;<i class="fa-regular fa-star"></i>&nbsp;<i class="fa-regular fa-star"></i>&nbsp;<i class="fa-regular fa-star"></i>
                  </div>
                  <h6 className="tsp_text mt-3 mb-0">Name</h6>
                  <p className="tsp_text mt-0 mb-0">desc</p>
                </div>
              </div>
            </div>

            <div>
              <div className="card tsp_card">
                <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRlYD5C5gNHuPW9gTRa-bid_OLVxcD0OmrMLcdBCBzm2j1huOIo" className="tsp_image" />
                <div className="card-body">
                  <div className="col-md-12 tsp_text">
                    <i className="fa-regular fa-star"></i>&nbsp;<i class="fa-regular fa-star"></i>&nbsp;<i className="fa-regular fa-star"></i>&nbsp;<i className="fa-regular fa-star"></i>&nbsp;<i className="fa-regular fa-star"></i>
                  </div>
                  <h6 className="tsp_text mt-3 mb-0">Name</h6>
                  <p className="tsp_text mt-0 mb-0">desc</p>
                </div>
              </div>
            </div>

            <div>
              <div className="card tsp_card">
                <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRlYD5C5gNHuPW9gTRa-bid_OLVxcD0OmrMLcdBCBzm2j1huOIo" class="tsp_image" />
                <div className="card-body">
                  <div className="col-md-12 tsp_text">
                    <i className="fa-regular fa-star"></i>&nbsp;<i className="fa-regular fa-star"></i>&nbsp;<i className="fa-regular fa-star"></i>&nbsp;<i className="fa-regular fa-star"></i>&nbsp;<i className="fa-regular fa-star"></i>
                  </div>
                  <h6 className="tsp_text mt-3 mb-0">Name</h6>
                  <p className="tsp_text mt-0 mb-0">desc</p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="card tsp_card">
                <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRlYD5C5gNHuPW9gTRa-bid_OLVxcD0OmrMLcdBCBzm2j1huOIo" class="tsp_image" />
                <div className="card-body">
                  <div className="col-md-12 tsp_text">
                    <i className="fa-regular fa-star"></i>&nbsp;<i class="fa-regular fa-star"></i>&nbsp;<i className="fa-regular fa-star"></i>&nbsp;<i className="fa-regular fa-star"></i>&nbsp;<i className="fa-regular fa-star"></i>
                  </div>
                  <h6 className="tsp_text mt-3 mb-0">Name</h6>
                  <p className="tsp_text mt-0 mb-0">desc</p>
                </div>
              </div>
            </div>
        </Slider>
      </div>
      </section>
    </>
  );
}

