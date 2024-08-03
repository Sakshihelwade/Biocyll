import React, { useContext, useEffect, useState } from 'react'
import dummyData from '../Component/dummy'
import Nav from '../Component/Nav'
import { UserContext } from '../Context/CreateContext';
import axios, { all } from 'axios';
import { base_url } from '../Config/Index';
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import Similar_product from '../Component/Similar_product';
import Footer from '../Component/Footer';
import { IoStar, IoStarOutline } from "react-icons/io5";
import ReactModal from 'react-modal';
import StarRating from '../Component/StarRating';
const Product_details = () => {
    const { user, token, login, logout } = useContext(UserContext);
    const [product, setProduct] = useState();
    const { id } = useParams();
    const [mainImage, setMainimage] = useState("")
    const [relatedImage, setRelatedimage] = useState([])
    const [allProducts, setAllproducts] = useState()
    const [selectedCategory, setSelectedcategory] = useState("")
    const [review, setReview] = useState([]);
    const navigate = useNavigate();
    const [hoverIndex, setHoverIndex] = useState(-1);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    // console.log(id)

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const [rating, setRating] = useState()
    const [text, setText] = useState("")

    const handleStarClick = (value) => {
        // console.log(value)
        setRating(value); // Set the selected rating
    };


    // Function to handle hover over star
    const handleStarHover = (index) => {
        setHoverIndex(index); // Set the hover index
    };

    // const handleChange = (event) => {
    //     setRating({ ...rating, [event.target.name]: event.target.value });
    //     // console.log(rating)
    // }

    const handleSubmit = async () => {
        try {
            const response = await axios.patch(`${base_url}/add-review/${id}`, { rating, text }, {
                headers: {
                    Authorization: `${token}`
                }
            }
            );
            console.log(response)
            setRating()
            setText("")
            alert(response.data.msg)
            closeModal();
            getProduct()

            // navigate(`/product_details/${id}`)
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        getProduct()
    }, [id])

    useEffect(() => {
        getAllProduct()
    }, [])

    const handleRelatedImageClick = (imageUrl) => {
        setMainimage(imageUrl);
    };

    //cart
    const handleCart = async () => {
        const payload = {
            product: id,
            quantity: 1
        }
        // console.log(payload,"hi")
        try {
            const response = await axios.post(`${base_url}/api/post/card`, payload, {
                headers: {
                    Authorization: `${token}`
                }
            })
            // console.log(response)
            alert("Item Added SuccessFully")
            navigate("/cart");

        } catch (error) {
            console.log(error.message)
        }
    }

    const handleBuyNow = async () => {
        const payload = {
            product: id,
            quantity: 1
        }
        // console.log(payload,"hi")
        try {
            const response = await axios.post(`${base_url}/api/post/card`, payload, {
                headers: {
                    Authorization: `${token}`
                }
            })
            // console.log(response)
            // alert("Item Added SuccessFully")
            navigate("/checkout",{state:{productId:id}});

        } catch (error) {
            console.log(error.message)
        }
    }

    const getProduct = async () => {
        try {
            const response = await axios.get(`${base_url}/api/get/product/${id}`, {
                headers: {
                    Authorization: `${token}`
                }
            });
            setSelectedcategory(response.data.category)
            console.log(response.data)
            setProduct(response.data)
            setReview(response.data.reviews)
            setSelectedcategory(response.data.Category)
            const mainImg = response.data.images.find((img) => img.name === "Product_Main_Image")
            setMainimage(mainImg.url)
            // const related = response.data.images.filter((img) => img.name !== "Product_Main_Image")
            const related = response.data.images
            setRelatedimage(related)
            console.log(response)

        } catch (error) {
            if (error.response) {
                console.error('Error:', error.response.status, error.response.data);
            } else if (error.request) {
                console.error('No response from the server');
            } else {
                console.error('Error:', error.message);
            }
        }
    }
    const getAllProduct = async () => {
        try {
            const response = await axios.get(`${base_url}/api/get/all/products?categoryId=${selectedCategory}`, {
                headers: {
                    Authorization: `${token}`
                }
            })
            // console.log(response.data)
            const filteredProducts = response.data.filter(item => item._id !== id);
            setAllproducts(filteredProducts);
            // console.log(filteredProducts)
        } catch (error) {
            if (error.response) {
                console.error('Error:', error.response.status, error.response.data);
            } else if (error.request) {
                console.error('No response from the server');
            } else {
                console.error('Error:', error.message);
            }
        }
    }

    return (
        <>
            {/* <Nav userData={user}></Nav> */}
            <div className="container-fluid p-5">
                <div className="row">
                    <div className="col-md-2">
                        {
                            relatedImage?.map((item, index) => {
                                return (
                                    <div className="col-12" style={{ width: 120, height: 130, borderRadius: 30, marginBottom: 10, alignSelf: 'center' }} onClick={() => handleRelatedImageClick(item.url)} key={index}>
                                        <img src={item.url} className='w-100 h-100' style={{borderRadius:10}} alt={item.name} />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="col-md-4">
                        <div className="col-12">
                            <img src={mainImage} className='w-100 h-100' style={{borderRadius:20}}/>
                            <div className="row">
                                {/* <div className="col-6">
                                    <button className="p-2 mt-3 btn btn-success w-100 h-100">Buy Now</button>
                                </div> */}
                                <div className="col-12">
                                    <button className="btn btn-success w-50 mt-2" style={{ alignSelf: 'center', borderRadius: 50 }} onClick={handleCart}><text className="mr-3 ml-3">Add to Cart </text></button>
                                    <button className="btn btn-warning w-50 mt-2" style={{ alignSelf: 'center', borderRadius: 50 }} onClick={handleBuyNow}><text className="mr-3 ml-3">Buy Now  &nbsp;</text></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <h3>{product?.title}</h3>
                        <h6 style={{border:'1px solid green',borderRadius:20,padding:6,borderTopRightRadius:0,backgroundColor:'lightgreen',width:100}}>{product?.Category?.category}</h6>
                        {/* <p>{product?.averageRating} &nbsp; ()</p> */}
                        <StarRating star={product?.averageRating}/>
                        <p className='mt-2'><i className="fa-solid fa-indian-rupee-sign"></i> {product?.price} &nbsp;&nbsp;{product?.offer}</p>
                        <p>{product?.description}</p>
                        {/* <h6>Available offers</h6> */}
                        {/* <div className="col-md-12">
                            <div className="card w-100 h-100">
                                <div className="card-header bg-white">
                                    <h6>Specifications</h6>
                                </div>
                                <div className="card-body">
                                    <table>
                                        <tr>
                                            <td>Sales Package</td>
                                            <td>Number of Contents in Sales Package</td>
                                        </tr>
                                        <tr>
                                            <td>Tool Kit,Warranty Card,User Manual,1 Unit</td>
                                            <td>Pack of 2 litre</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div> */}
                        <div className="col-md-12">
                            <div className="card mt-5">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-8">
                                            <h6>Product Ratings & Reviews</h6>
                                        </div>
                                        <div className="col-md-4">
                                            <div>
                                                <button className='btn btn-success' onClick={openModal}>Rate Now</button>
                                                <ReactModal
                                                    isOpen={modalIsOpen}
                                                    onRequestClose={closeModal}
                                                    contentLabel="Add Your Review"
                                                    style={{
                                                        overlay: {
                                                            backgroundColor: 'rgba(0, 0, 0, 0.5)'
                                                        },
                                                        content: {
                                                            width: '400px', // Set the desired width here
                                                            margin: 'auto', // Center the modal horizontally
                                                            height:'350px'
                                                        }
                                                    }}
                                                >
                                                    <div className="modal-content " style={{border:0}}>
                                                        <div className="modal-header p-2 " style={{border:0}}>
                                                            <button type="button" className="close" onClick={closeModal} aria-label="Close">
                                                                <span aria-hidden="true"><i className="fa-solid fa-xmark text-dark"></i></span>
                                                            </button>
                                                        </div>
                                                        <div className="modal-body" >
                                                        <h4 className="modal-title text-center mb-3">Add Your Review</h4>
                                                            <div className='text-center' style={{ fontSize: 25, display: 'flex', gap: 10, justifyContent: 'center', marginTop: 10, marginBottom: 20 }}>
                                                                {[1, 2, 3, 4, 5].map((value, index) => (
                                                                    rating >= value ?
                                                                        <IoStar
                                                                            key={value}
                                                                            onClick={() => handleStarClick(value)}
                                                                            onMouseEnter={() => handleStarHover(index)}
                                                                            onMouseLeave={() => setHoverIndex(-1)}
                                                                            style={{ cursor: 'pointer', color: 'yellow' }}
                                                                        /> :
                                                                        <IoStarOutline
                                                                            key={value}
                                                                            onClick={() => handleStarClick(value)}
                                                                            onMouseEnter={() => handleStarHover(index)}
                                                                            onMouseLeave={() => setHoverIndex(-1)}
                                                                            style={{ cursor: 'pointer', color: index <= hoverIndex ? 'yellow' : 'black' }}
                                                                        />
                                                                ))}
                                                            </div>
                                                            <textarea placeholder='Description' name='text' className='form-control' value={text} onChange={(e) => setText(e.target.value)} />
                                                        </div>
                                                        <div className="modal-footer" style={{border:0}}>
                                                            <button type="button" className="btn btn-success" style={{margin:'auto'}} onClick={handleSubmit}>Submit Review</button>
                                                        </div>
                                                    </div>
                                                </ReactModal>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            {review?.map((item, index) => {
                                                return (
                                                    <>
                                                        <div className="row">
                                                            <div className="col-12">
                                                                {item.name}
                                                            </div>
                                                            <div className="col-4">
                                                            <StarRating star={Number(item.rating)}/>
                                                            </div>
                                                            <div className="col-8">
                                                                {item.review}
                                                            </div>
                                                        </div>
                                                        <hr />
                                                    </>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Similar_product allProducts={allProducts}></Similar_product>
            {/* <Footer></Footer> */}
        </>
    )
}
export default Product_details
