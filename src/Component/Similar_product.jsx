import axios, { all } from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { base_url } from '../Config/Index'
import { UserContext } from '../Context/CreateContext';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink, Navigate, useParams } from 'react-router-dom';
import StarRating from '../Component/StarRating';

const Similar_product = ({ allProducts }) => {
    const { user, token, login, logout } = useContext(UserContext);
    const {id} = useParams()
    const handleCart= async(productId)=>{
        const payload ={
            product:productId,
            quantity:1
        }
        try {
            const response= await axios.post(`${base_url}/api/post/card`,payload,{
                headers:{
                    Authorization:`${token}`
                }
            })
            console.log(response)
            alert("Item Addeds Successfully")
            Navigate("/");
        } catch (error) {
            console.log(error)
        }
    }
    // console.log(allProducts)
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,
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
           <h2 className=" text-center p-4  mt-3 " style={{ fontFamily: 'Roboto' }}>Products For You</h2>
      <section className=" p-3 ">
        <div className="outerDiv">
                    <Slider {...settings}>
                        {allProducts?.map((item, index) =>
                            <div>
                                <div className="card product_div">
                                    <div className="card-header bg-white" style={{ border: 0 }}>
                                        <NavLink to={`/product_details/${item?._id}`}>
                                            <img src={item?.images[0]?.url} className="product_img"  />
                                            {/* <p className="product_title">{item?.title}</p> */}
                                        </NavLink>
                                    </div>
                                    <div className="card-body text-center" >
                                        <p>{item?.title}<br/>
                                        <StarRating star={item?.averageRating}/><br/>
                                        Rs.{item?.price} </p>
                                        {/* <button className="btn btn-success   float-left ">Buy now</button> */}
                                        <button className="btn btn-success w-100" style={{alignSelf:'center'}} onClick={()=>handleCart(item._id)}><text className='mr-3 ml-3'>Add to Cart</text></button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default Similar_product
