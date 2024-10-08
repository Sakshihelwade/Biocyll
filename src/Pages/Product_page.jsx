// import React, { useContext, useEffect, useState } from "react";
// import dummyData from "../Component/dummy";
// import Nav from "../Component/Nav";
// import Footer from "../Component/Footer";
// import { NavLink } from "react-router-dom";
// import { base_url } from "../Config/Index";
// import axios from "axios";
// import { UserContext } from "../Context/CreateContext";
// import { flushSync } from "react-dom";
// import { ToastContainer, toast } from "react-toastify"
// import "react-toastify/dist/ReactToastify.css";

// const Product_page = () => {
//     const { user, token, login, logout } = useContext(UserContext);
//     const [categories, setCategories] = useState([]);
//     const [product, setProduct] = useState();
//     const [selectedCategory, setSelectedcategory] = useState("");
//     const [selectedProductType, setSelectedProductType] = useState("");
//     //   const [selectedPriceRange, setSelectedPriceRange] = useState("");
//     const [openCategories, setOpenCategories] = useState(false);
//     const [openProductType, setOpenProductType] = useState(false);
//     const [priceRange, setPriceRange] = useState("");
//     const [productType, setProductType] = useState(["Liquid", "Powder"])

//     useEffect(() => {
//         getAllProducts();
//     }, [selectedCategory, selectedProductType, priceRange]);

//     useEffect(() => {
//         getCategories();
//     }, []);

//     //cart
//     const handleCart = async (productId) => {
//         const payload = {
//             product: productId,
//             quantity: 1,
//         };
//         try {
//             const response = await axios.post(`${base_url}/api/post/card`, payload, {
//                 headers: {
//                     Authorization: `${token}`,
//                 },
//             });
//             toast.success('Item Added Successfully');
//             // getCartItems();
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     async function getAllProducts() {
//         try {
//             const response = await axios.get(`${base_url}/api/get/all/products?categoryId=${selectedCategory}&type=${selectedProductType}&priceRange=${priceRange}`,
//                 {
//                     headers: {
//                         Authorization: `${token}`,
//                     },
//                 }
//             );
//             console.log(response.data);
//             setProduct(response.data);
//             if (response.data.length == 0) {
//                 alert("No Data Found For This Category");
//             }
//         } catch (error) {
//             if (error.response) {
//                 console.error("Error:", error.response.status, error.response.data);
//             } else if (error.request) {
//                 console.error("No response from the server");
//             } else {
//                 console.error("Error:", error.message);
//             }
//         }
//     }

//     const getCategories = async () => {
//         try {
//             const response = await axios.get(`${base_url}/api/getall/categories`, {
//                 headers: {
//                     Authorization: `${token}`,
//                 },
//             });
//             setCategories(response.data);
//             //   console.log(response.data);
//         } catch (error) {
//             if (error.response) {
//                 console.error("Error:", error.response.status, error.response.data);
//             } else if (error.request) {
//                 console.error("No response from the server");
//             } else {
//                 console.error("Error:", error.message);
//             }
//         }
//     };
//     return (
//         <>
//         <ToastContainer/>
//             {/* <Nav userData={user}></Nav> */}
//             <section className="pt-5">
//                 <div className="container-fluid">
//                     <div className="row">
//                         <div className="col-12  text-center">
//                             <h3>All Products</h3>
//                         </div>
//                         {/* <div className="col-12 p-4" style={{ display: 'flex' }}>
//                             {category?.map((item, index) => {
//                                 return (
//                                     <>
//                                         <div className='category_btn_area' key={item._id}>
//                                             <button className='btn btn-outline-success p-2' style={{ borderWidth: 1 }} onClick={() => setSelectedcategory(item._id)}>{item.category}</button>
//                                         </div>
//                                     </>
//                                 )
//                             })}
//                         </div> */}
//                         {/* <div className="col-3">
//                             <div className="row">
//                                 <div className="col-12">
//                                     <h4>Filters</h4>
//                                 </div>
//                             </div>
//                         </div> */}
//                         <div className="col-12">
//                             <div className="row">
//                                 <div className="col-3">
//                                     <div className="card mt-5">
//                                         <div className="card-header">
//                                             <h5>Filters</h5>
//                                         </div>
//                                         <div className="card-body">
//                                             <div className="row mb-2" onClick={() => setOpenCategories(!openCategories)}>
//                                                 <div className="col-8">Categories</div>
//                                                 <div className="col-4 text-right">
//                                                     <i
//                                                         className="fa-solid fa-angle-down"
//                                                     ></i>
//                                                 </div>
//                                             </div>
//                                             {openCategories &&
//                                                 categories?.map((item) => {
//                                                     return <p key={item._id} onClick={() => setSelectedcategory(item._id)} style={{ color: selectedCategory === item._id ? 'red' : 'black' }}>{item.category}</p>;
//                                                 })}
//                                             <hr />
//                                             <div className="row" onClick={() => setOpenProductType(!openProductType)}>
//                                                 <div className="col-8 mb-3">Product Type</div>
//                                                 <div className="col-4 text-right">
//                                                     <i
//                                                         className="fa-solid fa-angle-down"
//                                                     ></i>
//                                                 </div>
//                                             </div>
//                                             {openProductType && productType.map((product) => {
//                                                 return <p key={product} onClick={() => setSelectedProductType(product)} style={{ color: selectedProductType === product ? 'red' : 'black' }}>{product}</p>;
//                                             })}
//                                             <hr />
//                                             <div className="row">
//                                                 <div className="col-12 mb-3">Price</div>
//                                                 <div
//                                                     style={{ display: "flex", flexDirection: "column" }}
//                                                 >
//                                                     <div className="ml-3">
//                                                         <input
//                                                             type="checkbox"
//                                                             checked={priceRange === "desc"}
//                                                             onChange={() => setPriceRange("desc")}
//                                                             style={{
//                                                                 height: "15px",
//                                                                 width: "15px",
//                                                                 marginRight: "5px",
//                                                             }}
//                                                         />
//                                                         <label htmlFor="checkbox">High to Low</label>
//                                                     </div>

//                                                     <div className="ml-3">
//                                                         <input
//                                                             type="checkbox"
//                                                             checked={priceRange === "asc"}
//                                                             onChange={() => setPriceRange("asc")}
//                                                             style={{
//                                                                 height: "15px",
//                                                                 width: "15px",
//                                                                 marginRight: "5px",
//                                                             }}
//                                                         />
//                                                         <label htmlFor="checkbox">Low to High</label>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="col-9">
//                                     <div className="row">
//                                         {product?.map((item, index) => {
//                                             return (
//                                                 <>
//                                                     <div className="col-md-3 col-sm-6">
//                                                         <div className="card mt-5 ">
//                                                             {/* <div className="card-header bg-white p-2" style={{height:100}}>
//                                                         <h6>{item.title}</h6>
//                                                         <p>Category: {item.Category?.category} Price: {item.price}</p>
//                                                     </div> */}

//                                                             <NavLink to={`/product_details/${item?._id}`}>
//                                                                 <div
//                                                                     className="card-header bg-white"
//                                                                     style={{ height: 250 }}
//                                                                 >
//                                                                     <img
//                                                                         src={item.images[0].url}
//                                                                         className="h-100 w-100"
//                                                                     />
//                                                                 </div>
//                                                             </NavLink>
//                                                             <div className="card-body bg-white text-center">
//                                                                 <h6>{item.title}</h6>
//                                                                 {/* <p>{item.description}</p> */}
//                                                                 <small>
//                                                                     <b className="text-success">
//                                                                         Price:{" "}
//                                                                         <i class="fa-solid fa-indian-rupee-sign text-success"></i>
//                                                                         {item.price}
//                                                                     </b>
//                                                                 </small>
//                                                                 {/* <br /> */}
//                                                                 {/* <small>tags</small> */}
//                                                                 <br />
//                                                                 <button
//                                                                     className="btn bg-success text-white mt-2"
//                                                                     style={{
//                                                                         border: 0,
//                                                                         alignSelf: "center",
//                                                                         borderRadius: 50,
//                                                                     }}
//                                                                     onClick={() => handleCart(item._id)}
//                                                                 >
//                                                                     <text className="mr-3 ml-3">
//                                                                         Add to Cart &nbsp;
//                                                                         {/* <i class="fa-solid fa-angles-right"></i> */}
//                                                                     </text>
//                                                                 </button>
//                                                                 {/* <button className='w-50 bg-primary text-white p-2' style={{ border: 0 }}>Buy now</button> */}
//                                                             </div>
//                                                         </div>
//                                                     </div >
//                                                 </>
//                                             );
//                                         })}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section >

//             {/* <Footer></Footer> */}
//         </>
//     );
// };
// export default Product_page;
import React, { useContext, useEffect, useState } from "react";
import Nav from "../Component/Nav";
import Footer from "../Component/Footer";
import { NavLink } from "react-router-dom";
import { base_url } from "../Config/Index";
import axios from "axios";
import { UserContext } from "../Context/CreateContext";
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

const Product_page = () => {
    const { user, token, login, logout } = useContext(UserContext);
    const [categories, setCategories] = useState([]);
    const [product, setProduct] = useState();
    const [selectedCategory, setSelectedcategory] = useState("");
    const [selectedProductType, setSelectedProductType] = useState("");
    const [openCategories, setOpenCategories] = useState(false);
    const [openProductType, setOpenProductType] = useState(false);
    const [priceRange, setPriceRange] = useState("");
    const [productType, setProductType] = useState(["Liquid", "Powder"]);
    const [loading, setLoading] = useState(false); 

    useEffect(() => {
        getAllProducts();
    }, [selectedCategory, selectedProductType, priceRange]);

    useEffect(() => {
        getCategories();
    }, []);

    // Handle Add to Cart
    const handleCart = async (productId) => {
        const payload = {
            product: productId,
            quantity: 1,
        };
        try {
            const response = await axios.post(`${base_url}/api/post/card`, payload, {
                headers: {
                    Authorization: `${token}`,
                },
            });
            toast.success('Item Added Successfully');
        } catch (error) {
            console.log(error);
        }
    };

    // Fetch Products
    async function getAllProducts() {
        setLoading(true); 
        try {
            const response = await axios.get(
                `${base_url}/api/get/all/products?categoryId=${selectedCategory}&type=${selectedProductType}&priceRange=${priceRange}`,
                {
                    headers: {
                        Authorization: `${token}`,
                    },
                }
            );
            setProduct(response.data);
            if (response.data.length === 0) {
                alert("No Data Found For This Category");
            }
        } catch (error) {
            if (error.response) {
                console.error("Error:", error.response.status, error.response.data);
            } else if (error.request) {
                console.error("No response from the server");
            } else {
                console.error("Error:", error.message);
            }
        } finally {
            setLoading(false); // Set loading to false after fetching data
        }
    }

    // Fetch Categories
    const getCategories = async () => {
        try {
            const response = await axios.get(`${base_url}/api/getall/categories`, {
                headers: {
                    Authorization: `${token}`,
                },
            });
            setCategories(response.data);
        } catch (error) {
            if (error.response) {
                console.error("Error:", error.response.status, error.response.data);
            } else if (error.request) {
                console.error("No response from the server");
            } else {
                console.error("Error:", error.message);
            }
        }
    };

    return (
        <>
            <ToastContainer />
            <section className="pt-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h3>All Products</h3>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                <div className="col-12 col-md-3 col-lg-3">
                                    {/* Filter Section */}
                                    <div className="card mt-4">
                                        <div className="card-header">
                                            <h5>Filters</h5>
                                        </div>
                                        <div className="card-body">
                                            {/* Category Filter */}
                                            <div
                                                className="row mb-2 align-items-center"
                                                onClick={() => setOpenCategories(!openCategories)}
                                            >
                                                <div className="col-8">Categories</div>
                                                <div className="col-4 text-end">
                                                    <i className="fa-solid fa-angle-down"></i>
                                                </div>
                                            </div>
                                            {openCategories &&
                                                categories?.map((item) => (
                                                    <p
                                                        key={item._id}
                                                        onClick={() => setSelectedcategory(item._id)}
                                                        style={{
                                                            color: selectedCategory === item._id ? "red" : "black",
                                                            cursor: "pointer",
                                                        }}
                                                    >
                                                        {item.category}
                                                    </p>
                                                ))}
                                            <hr />
                                            {/* Product Type Filter */}
                                            <div
                                                className="row align-items-center"
                                                onClick={() => setOpenProductType(!openProductType)}
                                            >
                                                <div className="col-8 mb-2">Product Type</div>
                                                <div className="col-4 text-end">
                                                    <i className="fa-solid fa-angle-down"></i>
                                                </div>
                                            </div>
                                            {openProductType &&
                                                productType.map((product) => (
                                                    <p
                                                        key={product}
                                                        onClick={() => setSelectedProductType(product)}
                                                        style={{
                                                            color: selectedProductType === product ? "red" : "black",
                                                            cursor: "pointer",
                                                        }}
                                                    >
                                                        {product}
                                                    </p>
                                                ))}
                                            <hr />
                                            {/* Price Range Filter */}
                                            <div className="row">
                                                <div className="col-12 mb-2">Price</div>
                                                <div className="d-flex flex-column">
                                                    <div className="form-check ms-2">
                                                        <input
                                                            type="checkbox"
                                                            id="highToLow"
                                                            className="form-check-input"
                                                            checked={priceRange === "desc"}
                                                            onChange={() => setPriceRange("desc")}
                                                            style={{ height: "15px", width: "15px", marginRight: "5px" }}
                                                        />
                                                        <label className="form-check-label" htmlFor="highToLow">
                                                            High to Low
                                                        </label>
                                                    </div>
                                                    <div className="form-check ms-2">
                                                        <input
                                                            type="checkbox"
                                                            id="lowToHigh"
                                                            className="form-check-input"
                                                            checked={priceRange === "asc"}
                                                            onChange={() => setPriceRange("asc")}
                                                            style={{ height: "15px", width: "15px", marginRight: "5px" }}
                                                        />
                                                        <label className="form-check-label" htmlFor="lowToHigh">
                                                            Low to High
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-9">
                                    {loading ? ( // Show loader if loading is true
                                        <div className="text-center mt-5">
                                            <div className="spinner-border text-primary" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </div>
                                            <p>Loading Products...</p>
                                        </div>
                                    ) : (
                                        <div className="row">
                                            {product?.map((item, index) => (
                                                <div className="col-md-3 col-sm-6" key={index}>
                                                    <div className="card mt-5">
                                                        <NavLink to={`/product_details/${item?._id}`}>
                                                            <div className="card-header bg-white" style={{ height: 250 }}>
                                                                <img src={item.images[0].url} className="h-100 w-100" />
                                                            </div>
                                                        </NavLink>
                                                        <div className="card-body bg-white text-center">
                                                            <h6>{item.title}</h6>
                                                            <small>
                                                                <b className="text-success">
                                                                    Price: <i className="fa-solid fa-indian-rupee-sign text-success"></i>
                                                                    {item.price}
                                                                </b>
                                                            </small>
                                                            <br />
                                                            <button
                                                                className="btn bg-success text-white mt-2"
                                                                style={{ border: 0, alignSelf: "center", borderRadius: 50 }}
                                                                onClick={() => handleCart(item._id)}
                                                            >
                                                                Add to Cart
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Product_page;