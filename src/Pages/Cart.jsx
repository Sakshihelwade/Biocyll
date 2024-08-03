import React, { useEffect, useState } from 'react'
import Nav from '../Component/Nav'
import Footer from '../Component/Footer'
import { NavLink, useParams } from 'react-router-dom'
import axios from 'axios'
import { base_url } from '../Config/Index'
import { useContext } from 'react'
import { UserContext } from '../Context/CreateContext'
import Total from '../Component/Total'
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
const Cart = () => {
  const { user, token, login, logout } = useContext(UserContext);
  const [cartItems, setCartitems] = useState([])
  const [totalAmt, setTotalAmt] = useState()
  // const [quantity, setQuantity] = useState()
  const [cardId, setCardId] = useState()
  const [isUser, setIsuser] = useState()
  console.log(user)

  useEffect(() => {
    getCartItems()
  }, [])

  const getCartItems = async () => {
    try {
      const response = await axios.get(`${base_url}/api/get/card`, {
        headers: {
          Authorization: `${token}`
        }
      })
      console.log(response.data)
      setIsuser(response.data.user)
      setCartitems(response.data.items)
      setCardId(response.data._id)
      setTotalAmt(response.data.total)
    } catch (error) {
      console.log(error)
    }
  }
  // console.log("null",cartItems)
  const handleRemoveItem = async (productId) => {
    // console.log(productId)
    try {
      const response = await axios.delete(`${base_url}/api/delete/card/${productId}`, {
        headers: {
          Authorization: `${token}`
        }
      })
      console.log(response)
      getCartItems()
    }
    catch (error) {
      console.log(error)
      
    }
  }
  

  const handlequantity = async (itemID, action) => {
    try {
      const response = await axios.put(
        `${base_url}/api/carts/${cardId}/items/${itemID}`,
        {
          action: action
        },
        {
          headers: {
            Authorization: `${token}`
          }
        }
      );
      // console.log(response) 
      if (response.status == 200) {
        getCartItems()
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      {/* <Nav userData={user}></Nav> */}
      {user ? (
        <>
          {
            cartItems?.length == 0 ? (
              <section>
                <div className="container-fluid p-5 text-center">
                  <div className="row">
                    <div className='col-12' style={{ height: 150 }}>
                      <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7359557-6024626.png" className='h-100 ' />
                    </div>
                    <div className="col-12">
                      <h5>Your cart is empty!</h5>
                      <p>Add items to it</p>
                      <NavLink className="text-white" to="/"><button className='btn btn-lg btn-primary'>Shop now</button></NavLink>
                    </div>
                  </div>
                </div>
              </section>
            ) : (

              <section className='p-5'>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-12 text-center p-4">
                      <h2>Your Cart Items</h2>
                    </div>
                    <div className="col-md-8" >
                      {cartItems?.map((item, index) => {
                        return (
                          <div className="card  mt-4 mb-5 p-2" key={index} style={{boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
                            <div className="card-body">
                              <div className="row">
                                <div className="col-3">
                                  <div className="col-12" style={{height:140,borderRadius:20}}>
                                    <img src={item?.product?.images[0].url} alt={item?.product?.title} className='w-75 h-100' style={{borderRadius:20}}  />
                                  </div>
                                  {/* <div className="col-12 text-center mt-4">
                                    <button onClick={() => handlequantity(item._id, "decrement")}>-</button> {item.quantity} <button onClick={() => handlequantity(item._id, "increment")}>+</button>
                                  </div> */}
                                </div>
                                <div className="col-5">
                                  <h6>{item?.product?.title}</h6>
                                  {/* <p>{item.product.description}</p> */}
                                  <p className='text-success'><i className="fa-solid fa-indian-rupee-sign"></i>{item?.product?.price}</p>
                                  <p>{item?.product?.Category}</p>
                                </div>
                                <div className="col-3">
                                  <div className="col-12 text-center ">
                                    <button onClick={() => handlequantity(item._id, "decrement")} className='btn btn-outline-success'>-</button>&nbsp;&nbsp; {item?.quantity}&nbsp;&nbsp; <button className='btn btn-outline-success' onClick={() => handlequantity(item._id, "increment")}>+</button>
                                  </div>
                                </div>
                                <div className="col-1">
                                <button onClick={() => handleRemoveItem(item._id)} className='btn btn-outline-danger'><i className="fa-solid fa-trash"></i></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                    <div className="col-md-4">
                      {/* <div className="card">
                      <div className="card-header bg-white">
                        <h3>PRICE DETAILS</h3>
                      </div>
                      <div className="card-body">
                        <table className='w-100'>
                          <tr>
                            <td>Total Product Price</td>
                            <td><i class="fa-solid fa-indian-rupee-sign"></i>{totalAmt}</td>
                          </tr>
                          <tr>
                            <td>Delivery Charges</td>
                            <td><i class="fa-solid fa-indian-rupee-sign"></i></td>
                          </tr>
                        </table>
                      </div>
                      <div className="card-footer bg-white">
                        <table className='w-100'>
                          <tr>
                            <td>Order total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                            <td><i class="fa-solid fa-indian-rupee-sign"></i>{totalAmt}</td>
                          </tr>
                        </table>
                      </div>
                    </div > */}
                      <Total totalAmt={totalAmt}></Total>
                    </div>
                  </div>
                </div>
                <div className="col-8 text-right mt-4 mb-4">
                  <NavLink to="/checkout"><button className='btn btn-success btn-lg'>Place Order</button></NavLink>
                </div>
              </section>
            )}
        </>
      ) : (
        <section>
          <div className="container-fluid p-5">
            <div className="row text-center">
              <div className="col-12">
                <img src='https://cdni.iconscout.com/illustration/free/thumb/free-empty-cart-4085814-3385483.png' style={{ width: 130 }} />
              </div>
              <div className="col-12">
                <h4>Missing Cart items?</h4>
              </div>
              <div className="col-12">
                <p>Login to see the items you added previously</p>
              </div>
              <div className="col-12">
                <NavLink to="/login"><button className='btn btn-lg btn-warning'>Login</button></NavLink>
              </div>
            </div>
          </div>
        </section>
      )}
      {/* <section>
        <div className="container-fluid">
          <div className="row text-center">
            <div className="col-12">
              <img src='https://cdni.iconscout.com/illustration/free/thumb/free-empty-cart-4085814-3385483.png' style={{ width: 130 }} />
            </div>
            <div className="col-12">
              <h4>Missing Cart items?</h4>
            </div>
            <div className="col-12">
              <p>Login to see the items you added previously</p>
            </div>
            <div className="col-12">
              <NavLink to="/login"><button className='btn btn-lg btn-warning'>Login</button></NavLink>
            </div>
          </div>
        </div>
      </section> */}
      {/* {
        cartItems?.length == 0 ? (
          <section>
            <div className="container-fluid p-5 text-center">
              <div className="row">
                <div className='col-12' style={{ height: 150 }}>
                  <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7359557-6024626.png" className='h-100 ' />
                </div>
                <div className="col-12">
                  <h5>Your cart is empty!</h5>
                  <p>Add items to it</p>
                  <NavLink className="text-white" to="/"><button className='btn btn-lg btn-primary'>Shop now</button></NavLink>
                </div>
              </div>
            </div>
          </section>
        ) : (

          <section className='p-5'>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-8" >
                  {cartItems?.map((item, index) => {
                    return (
                      <div className="card" key={index}>
                        <div className="card-body">
                          <div className="row">
                            <div className="col-3">
                              <div className="col-12">
                                <img src={item.product.images[0].url} alt={item.product.title} className='w-100' />
                              </div>
                              <div className="col-12 text-center mt-4">
                                <button onClick={() => handlequantity(item._id, "decrement")}>-</button> {item.quantity} <button onClick={() => handlequantity(item._id, "increment")}>+</button>
                              </div>
                            </div>
                            <div className="col-9">
                              <h3>{item.product.title}</h3>
                              <p>{item.product.description}</p>
                              <p><i class="fa-solid fa-indian-rupee-sign"></i>{item.product.price} {item.product.offer} Off</p>
                              <p>{`Price: ${item.product.price}, Discount: ${item.product.offer}`}</p>
                              <button onClick={() => handleRemoveItem(item._id)}>Remove</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-header bg-white">
                      <h3>PRICE DETAILS</h3>
                    </div>
                    <div className="card-body">
                      <table className='w-100'>
                        <tr>
                          <td>Total Product Price</td>
                          <td><i class="fa-solid fa-indian-rupee-sign"></i>{totalAmt}</td>
                        </tr>
                        <tr>
                          <td>Delivery Charges</td>
                          <td><i class="fa-solid fa-indian-rupee-sign"></i></td>
                        </tr>
                      </table>
                    </div>
                    <div className="card-footer bg-white">
                      <table className='w-100'>
                        <tr>
                          <td>Order total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                          <td><i class="fa-solid fa-indian-rupee-sign"></i>{totalAmt}</td>
                        </tr>
                      </table>
                    </div>
                  </div >
                  <Total totalAmt={totalAmt}></Total>
                </div>
              </div>
            </div>
            <div className="col-8 text-right mt-4 mb-4">
              <NavLink to="/checkout"><button className='btn btn-primary btn-lg'>Place Order</button></NavLink>
            </div>
          </section>
        )} */}
      {/* <Footer></Footer> */}
    </>
  )
}

export default Cart
