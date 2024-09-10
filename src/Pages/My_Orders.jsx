
// import React, { useEffect, useState, useContext } from 'react';
// import { UserContext } from '../Context/CreateContext';
// import { base_url } from '../Config/Index';
// import "../Css/style.css";

// const My_Orders = () => {
//     const { token } = useContext(UserContext);
//     const [orders, setOrders] = useState([]);
//     const [searchQuery, setSearchQuery] = useState('');
//     const [filteredOrders, setFilteredOrders] = useState([]);

//     useEffect(() => {
//         myOrders();
//     }, []);

//     useEffect(() => {
//         setFilteredOrders(orders); // Sync filteredOrders with orders after fetching
//     }, [orders]);

//     const myOrders = async () => {
//         try {
//             const response = await fetch(`${base_url}/api/order/get/user/`, {
//                 headers: {
//                     Authorization: `${token}`
//                 }
//             });
//             const data = await response.json();
//             setOrders(data);
//         } catch (error) {
//             console.log(error);
//         }
//     };
//     return (
//         <>
//             <section>
//                 <div className="container-fluid p-5">
//                     <div className="row">
//                         {filteredOrders.length === 0 ? (
//                             <div className="col-12 text-center">
//                                 <p>No orders available</p>
//                             </div>
//                         ) : (
//                             filteredOrders.map(order => (
//                                 <div key={order._id} className="col-md-12 orderCard">
//                                     <div className="card p-3">
//                                         <div className="card-body orderCardBody">
//                                             <h2 className="card-title orderTitle">Order ID: {order._id}</h2>
//                                             <p className="card-text orderInfo">Delivery Date: {new Date(order.deliveryDate).toLocaleString()}</p>
//                                             <p className="card-text orderInfo">Payment Method: {order.paymentMethod}</p>
//                                             <ul className="productList">
//                                                 {order.products?.map(product => {
//                                                     // Check if product.productId and product.productId.images exist
//                                                     const productId = product.productId || {};
//                                                     const images = productId.image || [];
                                                    
//                                                     return (
//                                                         <li key={productId._id} className="productItem">
//                                                             <div className="row">
//                                                                 <div className="col-3">
//                                                                     <img 
//                                                                         src={images[0]?.url || 'default-image-url'} 
//                                                                         alt={productId.title || 'Product Image'} 
//                                                                         className="productImage" 
//                                                                     />
//                                                                 </div>
//                                                                 <div className="col-7">
//                                                                     <div className="d-flex align-items-center">
//                                                                         <div className="productDetails">
//                                                                             <h3 className="productTitle">{productId.title || 'No Title'}</h3>
//                                                                             <p className="productDescription">Description: {productId.description || 'No Description'}</p>
//                                                                             <p className="productPrice">Price: {product.price || 'N/A'}</p>
//                                                                             <p className="productQuantity">Quantity: {product.quantity || 'N/A'}</p>
//                                                                             <p className="productStatus">
//                                                                                 <i className="fa-solid fa-circle"></i>&nbsp;
//                                                                                 Status: {product.status || 'Unknown'}
//                                                                             </p>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </li>
//                                                     );
//                                                 })}
//                                             </ul>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))
//                         )}
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// };

// export default My_Orders;
import React, { useEffect, useState, useContext } from 'react';
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

    useEffect(() => {
        setFilteredOrders(orders); // Sync filteredOrders with orders after fetching
    }, [orders]);

    const myOrders = async () => {
        try {
            const response = await fetch(`${base_url}/api/order/get/user/`, {
                headers: {
                    Authorization: `${token}`
                }
            });
            const data = await response.json();
            setOrders(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <section>
                <div className="container-fluid p-5">
                    <div className="row">
                        {filteredOrders.length === 0 ? (
                            <div className="col-12 text-center">
                                <p>No orders available</p>
                            </div>
                        ) : (
                            filteredOrders.map(order => (
                                <div key={order._id} className="col-md-12 orderCard">
                                    <div className="card p-3">
                                        <div className="card-body orderCardBody">
                                            <h2 className="card-title orderTitle">Order ID: {order._id}</h2>
                                            <p className="card-text orderInfo">Delivery Date: {new Date(order.deliveryDate).toLocaleString()}</p>
                                            <p className="card-text orderInfo">Payment Method: {order.paymentMethod}</p>
                                            <ul className="productList">
                                                {order.products?.map(product => {
                                                    // Check if product.productId and product.productId.images exist
                                                    const productId = product.productId || {};
                                                    const images = productId.images || [];
                                                    
                                                    return (
                                                        <li key={productId._id} className="productItem">
                                                            <div className="row">
                                                                <div className="col-3">
                                                                    <img 
                                                                        src={images[0]?.url || 'default-image-url'} 
                                                                        alt={productId.title || 'Product Image'} 
                                                                        className="productImage" 
                                                                    />
                                                                </div>
                                                                <div className="col-7">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="productDetails">
                                                                            <h3 className="productTitle">{productId.title || 'No Title'}</h3>
                                                                            <p className="productDescription">Description: {productId.description || 'No Description'}</p>
                                                                            <p className="productPrice">Price: {product.price || 'N/A'}</p>
                                                                            <p className="productQuantity">Quantity: {product.quantity || 'N/A'}</p>
                                                                            <p className="productStatus">
                                                                                <i className="fa-solid fa-circle"></i>&nbsp;
                                                                                Status: {product.status || 'Unknown'}
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default My_Orders;

