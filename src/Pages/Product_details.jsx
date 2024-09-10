
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../Context/CreateContext';
import axios from 'axios';
import { base_url } from '../Config/Index';
import { useNavigate, useParams } from 'react-router-dom';
import StarRating from '../Component/StarRating';
import ReactModal from 'react-modal';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoStar, IoStarOutline } from 'react-icons/io5';


const Product_details = () => {
    const { token } = useContext(UserContext);
    const [product, setProduct] = useState(null);
    const [mainImage, setMainImage] = useState("");
    const [relatedImages, setRelatedImages] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [rating, setRating] = useState(null);
    const [text, setText] = useState("");

    useEffect(() => {
        getProduct();
    }, [id]);

    const getProduct = async () => {
        try {
            const response = await axios.get(`${base_url}/api/get/product/${id}`, {
                headers: {
                    Authorization: `${token}`
                }
            });
            setProduct(response.data);
            setMainImage(response.data.images.find(img => img.name === "Product_Main_Image")?.url || "");
            setRelatedImages(response.data.images);
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    };

    const handleRelatedImageClick = (imageUrl) => {
        setMainImage(imageUrl);
    };

    const handleCart = async () => {
        const payload = { product: id, quantity: 1 };
        try {
            await axios.post(`${base_url}/api/post/card`, payload, {
                headers: { Authorization: `${token}` }
            });
            toast.success("Item Added Successfully");
            navigate("/cart");
        } catch (error) {
            console.error('Error adding to cart:', error);
        }
    };

    const handleBuyNow = async () => {
        const payload = { product: id, quantity: 1 };
        try {
            await axios.post(`${base_url}/api/post/card`, payload, {
                headers: { Authorization: `${token}` }
            });
            navigate("/checkout", { state: { productId: id } });
        } catch (error) {
            console.error('Error during buy now:', error);
        }
    };

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    const handleSubmit = async () => {
        try {
            await axios.patch(`${base_url}/add-review/${id}`, { rating, text }, {
                headers: { Authorization: `${token}` }
            });
            toast.success("Review Added Successfully");
            closeModal();
            getProduct();
        } catch (error) {
            console.error('Error adding review:', error);
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="container-fluid p-5">
                <div className="row">
                    <div className="col-md-2">
                        {relatedImages.map((item, index) => (
                            <div
                                key={index}
                                className="col-12"
                                style={{ width: 120, height: 130, borderRadius: 30, marginBottom: 10, alignSelf: 'center' }}
                                onClick={() => handleRelatedImageClick(item.url)}
                            >
                                {/* <img src={item.url} className='w-100 h-100' style={{ borderRadius: 10 }} alt={item.name} /> */}
                            </div>
                        ))}
                    </div>
                    <div className="col-md-4">
                        <div className="col-12">
                            <img src={mainImage} className='w-100 h-100' style={{ borderRadius: 20 }} alt="Main Product" />
                            <div className="row mt-2">
                                <div className="col-12">
                                    <button className="btn btn-success w-50 mt-2" style={{ borderRadius: 50 }} onClick={handleCart}>Add to Cart</button>
                                    <button className="btn btn-warning w-50 mt-2" style={{ borderRadius: 50 }} onClick={handleBuyNow}>Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <h3>{product?.title}</h3>
                        <p>
                            <h6 className='text-center text-danger' style={{ border: '1px solid green', borderRadius: 20, padding: 6, borderTopRightRadius: 0, backgroundColor: 'lightgreen', width: 100 }}>
                                {product?.Category?.category}
                            </h6>
                            <StarRating star={product?.averageRating} />
                        </p>
                        <p className='mt-2'><i className="fa-solid fa-indian-rupee-sign"></i> {product?.price}/- <b>Offer:</b> {product?.offer}%</p>
                        <p>{product?.description}</p>
                        <p><b>Mode of Action:</b> {product?.ModeOfAction}</p>
                        <p><b>Dosage:</b> {product?.dosage}</p>
                        <p><b>Benefit:</b> {product?.benefit}</p>
                        <div className="col-md-12">
                            <div className="card mt-5">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-8">
                                            <h6>Product Ratings & Reviews</h6>
                                        </div>
                                        <div className="col-md-4">
                                            <button className='btn btn-success' onClick={openModal}>Rate Now</button>
                                            <ReactModal
                                                isOpen={modalIsOpen}
                                                onRequestClose={closeModal}
                                                contentLabel="Add Your Review"
                                                style={{
                                                    overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
                                                    content: { width: '400px', margin: 'auto', height: '350px' }
                                                }}
                                            >
                                                <div className="modal-content" style={{ border: 0 }}>
                                                    <div className="modal-header p-2" style={{ border: 0 }}>
                                                        <button type="button" className="close" onClick={closeModal} aria-label="Close">
                                                            <span aria-hidden="true"><i className="fa-solid fa-xmark text-dark"></i></span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <h4 className="modal-title text-center mb-3">Add Your Review</h4>
                                                        <div className='text-center' style={{ fontSize: 25, display: 'flex', gap: 10, justifyContent: 'center', marginTop: 10, marginBottom: 20 }}>
                                                            {[1, 2, 3, 4, 5].map(value => (
                                                                rating >= value
                                                                    ? <IoStar key={value} onClick={() => setRating(value)} style={{ cursor: 'pointer', color: 'yellow' }} />
                                                                    : <IoStarOutline key={value} onClick={() => setRating(value)} style={{ cursor: 'pointer', color: 'black' }} />
                                                            ))}
                                                        </div>
                                                        <textarea placeholder='Description' name='text' className='form-control' value={text} onChange={(e) => setText(e.target.value)} />
                                                    </div>
                                                    <div className="modal-footer" style={{ border: 0 }}>
                                                        <button type="button" className="btn btn-success" onClick={handleSubmit}>Submit Review</button>
                                                    </div>
                                                </div>
                                            </ReactModal>
                                        </div>
                                        <div className="col-md-12">
                                            {product?.reviews?.map((item, index) => (
                                                <div key={index} className="row">
                                                    <div className="col-12">{item.name}</div>
                                                    <div className="col-4"><StarRating star={Number(item.rating)} /></div>
                                                    <div className="col-8">{item.review}</div>
                                                    <hr />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product_details;
