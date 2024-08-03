import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../Context/CreateContext';
import { base_url } from '../Config/Index';
import "../Css/style.css";

const My_Orders = () => {
    const { token } = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredOrders, setFilteredOrders] = useState([]);

    useEffect(() => {
        myOrders();
    }, []);

    const myOrders = async () => {
        try {
            const response = await fetch(`${base_url}/api/order/get/user/`, {
                headers: {
                    Authorization: `${token}`
                }
            });
            // console.log(response)
            const data = await response.json();
            setOrders(data);
            // setFilteredOrders(data); // Initially set filteredOrders to all orders
            
        } catch (error) {
            console.log(error);
        }
    };

    // const handleSearch = () => {
    //     const filtered = orders.filter(order =>
    //         order.products.some(product =>
    //             product.productId.title.toLowerCase().includes(searchQuery.toLowerCase())
    //         )
    //     );
    //     setFilteredOrders(filtered);
    // };

    return (
        <>
            <section>
                <div className="container-fluid p-5">
                    {/* <div className="row searchBarContainer">
                        <input
                            className="form-control searchBar"
                            type="search"
                            placeholder="Search your order here"
                            aria-label="Search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button
                            className="btn btn-outline-dark"
                            type="button"
                            onClick={handleSearch}
                        >
                            Search
                        </button>
                    </div> */}
                    <div className="row">
                        {filteredOrders?.map(order => (
                            <div key={order._id} className="col-md-12 orderCard">
                                <div className="card p-3">
                                    <div className="card-body orderCardBody">
                                        <h2 className="card-title orderTitle">Order ID: {order._id}</h2>
                                        <p className="card-text orderInfo">Delivery Date: {new Date(order.deliveryDate).toLocaleString()}</p>
                                        <p className="card-text orderInfo">Payment Method: {order.paymentMethod}</p>
                                        <ul className="productList">
                                            {order.products?.map(product => (
                                                <li key={product.productId._id} className="productItem">
                                                    <div className="row">
                                                    <div className="col-3">
                                                    <img src={product?.productId.images[0].url} alt={product.productId.title} className="productImage" />
                                                    </div>
                                                   <div className="col-7 "> <div className="d-flex align-items-center">
                                                        <div className="productDetails">
                                                            <h3 className="productTitle">{product.productId.title}</h3>
                                                            <p className="productDescription">Description: {product.productId.description}</p>
                                                            <p className="productPrice">Price: {product.price}</p>
                                                            <p className="productQuantity">Quantity: {product.quantity}</p>
                                                            <p className="productStatus"><i class="fa-solid fa-circle"></i>&nbsp;Status: {product.status}</p>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default My_Orders;
