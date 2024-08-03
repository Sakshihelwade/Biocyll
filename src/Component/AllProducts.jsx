import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink, useParams } from "react-router-dom";
import { UserContext } from "../Context/CreateContext";
import { useContext, useEffect, useState } from "react";
import { base_url } from "../Config/Index";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

export default function AllProducts({ product }) {
  const { user, token, login, logout } = useContext(UserContext);
  const [Homeproduct, setHomeproduct] = useState();
  const { id } = useParams();
  const [allProducts, setAllproducts] = useState()
  const [selectedCategory, setSelectedcategory] = useState("")
  const [cardId, setCardId] = useState()
  const [cartItems, setCartitems] = useState([])

  useEffect(() => {
    getProduct()
  }, [id])

  useEffect(() => {
    getAllProduct()
  }, [])
  useEffect(() => {
    getCartItems()
  }, [])

  const handleCart = async (productId) => {
    const payload = {
      product: productId,
      quantity: 1
    }
    try {
      const response = await axios.post(`${base_url}/api/post/card`, payload, {
        headers: {
          Authorization: `${token}`
        }
      })
      console.log(response)
      toast.success('Item Added Successfully');
      getCartItems();
    } catch (error) {
      console.log(error)
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
      setHomeproduct(response.data)
      setSelectedcategory(response.data.Category)
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
      const filteredProducts = response.data.filter(item => item._id !== id);
      setAllproducts(filteredProducts);
      console.log(response.data,"hi")
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

  const getCartItems = async () => {
    try {
      const response = await axios.get(`${base_url}/api/get/card`, {
        headers: {
          Authorization: `${token}`
        }
      })
      // console.log(response.data)
      setCartitems(response.data.items)
      setCardId(response.data._id)
    } catch (error) {
      console.log(error)
    }
  }

  
  const handleQuantity = async (itemId, action) => {
    try {
      const response = await axios.put(
        `${base_url}/api/carts/${cardId}/items/${itemId}`,
        { action: action },
        {
          headers: {
            Authorization: `${token}`
          }
        }
      );
      if (response.status === 200) {
        getCartItems();
      }
    } catch (error) {
      console.log(error)
      toast.error("Item Out of Stock");
    }
  }

  const isInCart = (productId) => {
    return cartItems.find(item => item.product._id === productId);
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
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
            {product?.map((item, index) =>
              <div key={index}>
                <div className="card product_div">
                  <NavLink to={`/product_details/${item?._id}`}>
                    <div className="card-header image_div">
                      <img src={item.images[0].url} className=" w-100 h-100" />
                    </div>
                  </NavLink>
                  <div className="card-body details_div"  >
                    {item.title}<br />
                    <text style={{ color: "green" }}><i className="fa-solid fa-indian-rupee-sign" ></i>{item.price}<br /></text>
                    {isInCart(item._id) ? (
                      <div className="col-12">
                        <button onClick={() => handleQuantity(item._id, "decrement")}  className='btn btn-sm border border-success' style={{ float: 'left' }}>-</button>
                        {cartItems.find(cartItem => cartItem.product._id === item._id)?.quantity}
                        <button className='btn btn-sm border border-success' onClick={() => handleQuantity(item._id, "increment")} style={{ float: 'right' }}>+</button>
                      </div>
                    ) : (
                      <button className="btn btn-sm btn-success w-100" onClick={() => handleCart(item._id)} style={{ alignSelf: "center" }}>
                        Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </Slider>
        </div>
        <NavLink to="/product_page">
          <button className="btn text-primary" style={{ backgroundColor: "transparent", border: 0, float: "right" }}>View More</button>
        </NavLink>
      </section>
      <ToastContainer />
    </>
  );
}
