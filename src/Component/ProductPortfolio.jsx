

// import React, { useContext, useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// import { base_url } from "../Config/Index";
// import axios from "axios";
// import { UserContext } from "../Context/CreateContext";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Product_page = () => {
//     const { token } = useContext(UserContext);
//     const [categories, setCategories] = useState([]);
//     const [products, setProducts] = useState([]);
//     const [selectedCategory, setSelectedCategory] = useState("");
//     const [selectedProductType, setSelectedProductType] = useState("");
//     const [priceRange, setPriceRange] = useState("");
//     const [productType, setProductType] = useState(["Liquid", "Powder"]);
//     const [currentComp, setCurrentComp] = useState("product-portfolio");

//     useEffect(() => {
//         getAllProducts();
//     }, [selectedCategory, selectedProductType, priceRange]);

//     useEffect(() => {
//         getCategories();
//     }, []);

//     const handleCart = async (productId) => {
//         const payload = {
//             product: productId,
//             quantity: 1,
//         };
//         try {
//             await axios.post(`${base_url}/api/post/card`, payload, {
//                 headers: {
//                     Authorization: `${token}`,
//                 },
//             });
//             toast.success('Item Added Successfully');
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     async function getAllProducts() {
//         try {
//             const response = await axios.get(`${base_url}/api/get/all/products?categoryId=${selectedCategory}&type=${selectedProductType}&priceRange=${priceRange}`, {
//                 headers: {
//                     Authorization: `${token}`,
//                 },
//             });
//             setProducts(response.data);
//             if (response.data.length === 0) {
//                 alert("No Data Found For This Category");
//             }
//         } catch (error) {
//             console.error("Error:", error.message);
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
//         } catch (error) {
//             console.error("Error:", error.message);
//         }
//     };

//     return (
//         <>
//             <ToastContainer />
//             <section className="pt-5">
//                 <div className="container-fluid">
//                     <div className="row">
//                         <div className="col-12 text-center">
//                             <h3>Product Portfolio</h3>
//                         </div>
//                         <div className="col-12">
//                             <div className="row">

//                                 <div className="container-fluid ml-5 p-3 mx-5">
//                     <div className="row d-flex flex-column-reverse flex-lg-row">
//                         <div className="col-lg- col-md-4 col-sm-12">
//                             {/* Left side content (if any) */}
//                         </div>

//                         <div className="col-lg-9 col-md-8 col-sm-12">
//                             <div className="row justify-content-start">
//                                 {products.map((item) => (
//                                     <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={item._id}>
//                                         <div className="card">
//                                             <NavLink to={`/product_details/${item._id}`}>
//                                                 <div className="card-header bg-white" style={{ height: 250 }}>
//                                                     <img src={item.images[0].url} className="h-100 w-100" alt={item.title} style={{ objectFit: 'cover' }} />
//                                                 </div>
//                                             </NavLink>
//                                             <div className="card-body bg-white text-center">
//                                                 <h6>{item.title}</h6>
//                                                 <small>
//                                                     <b className="text-success">
//                                                         Price: <i className="fa-solid fa-indian-rupee-sign text-success"></i>{item.price}
//                                                     </b>
//                                                 </small>
//                                                 <br />
//                                                 <button
//                                                     className="btn bg-success text-white mt-2"
//                                                     style={{
//                                                         border: 0,
//                                                         borderRadius: 50,
//                                                     }}
//                                                     onClick={() => handleCart(item._id)}
//                                                 >
//                                                     Add to Cart
//                                                 </button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// };

// export default Product_page;

import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { base_url } from "../Config/Index";
import axios from "axios";
import { UserContext } from "../Context/CreateContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product_page = () => {
  const { token } = useContext(UserContext);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllProducts();
  }, []);

  const handleCart = async (productId) => {
    const payload = {
      product: productId,
      quantity: 1,
    };
    try {
      await axios.post(`${base_url}/api/post/card`, payload, {
        headers: {
          Authorization: `${token}`,
        },
      });
      toast.success("Item Added Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  // async function getAllProducts() {
  //   try {
  //     const response = await axios.get(`${base_url}/api/get/all/products`, {
  //       headers: {
  //         Authorization: `${token}`,
  //       },
  //     });
  //     setProducts(response.data);
  //   } catch (error) {
  //     console.error("Error:", error.message);
  //   }
  // }
  async function getAllProducts() {
    try {
      const response = await axios.get(`${base_url}/api/get/all/products`, {
        headers: {
          Authorization: `${token}`,
        },
      });
      setProducts(response.data);
      setLoading(false); // Data has been fetched
    } catch (error) {
      console.error("Error:", error.message);
      setLoading(false); // Stop loading in case of error
    }
  }
  const Loader = () => (
    <div className="text-center mt-5">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
    

  // return (
  //   <>
  //     <ToastContainer />
  //     <section className="pt-5">
  //       <div className="container-fluid">
  //         <div className="row">
  //           <div className="col-12 text-center mb-4">
  //             <h3>Product Portfolio</h3>
  //           </div>
  //           <div className="col-12">
  //             <div className="row">
  //               {products.map((item) => (
  //                 <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4" key={item._id}>
  //                   <div className="card shadow-sm h-100">
  //                     <NavLink to={`/product_details/${item._id}`}>
  //                       <div className="card-header p-0" style={{ height: "200px", overflow: "hidden" }}>
  //                         <img
  //                           src={item.images[0].url}
  //                           className="img-fluid w-100 h-100"
  //                           alt={item.title}
  //                           style={{ objectFit: "cover" }}
  //                         />
  //                       </div>
  //                     </NavLink>
  //                     <div className="card-body text-center">
  //                       <h6 className="text-dark">{item.title}</h6>
  //                       <small className="d-block text-muted mb-2">
  //                         <strong className="text-success">
  //                           ₹{item.price}
  //                         </strong>
  //                       </small>
  //                       <button
  //                         className="btn btn-outline-success btn-sm"
  //                         onClick={() => handleCart(item._id)}
  //                       >
  //                         Add to Cart
  //                       </button>
  //                     </div>
  //                   </div>
  //                 </div>
  //               ))}
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   </>
  // );
  return (
    <>
      <ToastContainer />
      <section className="pt-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 text-center mb-4">
              <h3>Product Portfolio</h3>
            </div>
            <div className="col-12">
              {loading ? (
                <Loader />
              ) : (
                <div className="row">
                  {products.map((item) => (
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4" key={item._id}>
                      <div className="card shadow-sm h-100">
                        <NavLink to={`/product_details/${item._id}`}>
                          <div className="card-header p-0" style={{ height: "200px", overflow: "hidden" }}>
                            <img
                              src={item.images[0].url}
                              className="img-fluid w-100 h-100"
                              alt={item.title}
                              style={{ objectFit: "cover" }}
                            />
                          </div>
                        </NavLink>
                        <div className="card-body text-center">
                          <h6 className="text-dark">{item.title}</h6>
                          <small className="d-block text-muted mb-2">
                            <strong className="text-success">
                              ₹{item.price}
                            </strong>
                          </small>
                          <button
                            className="btn btn-outline-success btn-sm"
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
      </section>
    </>
  );
  
};

export default Product_page;

