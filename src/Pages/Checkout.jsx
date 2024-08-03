import React, { useContext, useEffect, useState } from 'react'
import Nav from '../Component/Nav'
import DeliveryAddress from '../Component/DeliveryAddress';
import Total from '../Component/Total';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import { UserContext } from '../Context/CreateContext';
import axios from 'axios';
import { base_url } from '../Config/Index';

const Checkout = () => {
    // const { id } = useParams();
    const { user, token, login, logout } = useContext(UserContext);
    const [cartItems, setCartitems] = useState([])
    const [totalAmt, setTotalAmt] = useState()
    const [cardId, setCardId] = useState()
    const [userAdd, setUseradd] = useState([])
    const [addressToggle, setAddressToggle] = useState(false);
    const [orderToggle, setOrderToggle] = useState(false);
    const [paymentToggle, setPaymentToggle] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState("")
    const [selectedAddress, setSelectedAddress] = useState("")
    const location = useLocation()
    // console.log(location.state?.productId)
    // console.log(selectedAddress)
    // console.log(userAdd)
    // console.log(user) 
    // console.log(cartItems) 
    useEffect(() => {
        getCartItems()
    }, [])

    useEffect(() => {
        getAddress()
    }, [])
    const getCartItems = async () => {
        try {
            const response = await axios.get(`${base_url}/api/get/card`, {
                headers: {
                    Authorization: `${token}`
                }
            })
            // console.log(response.data.items)
            if(location.state?.productId !== undefined){
                const data = response.data.items.filter(item=>item.product._id == location.state?.productId)
                setCartitems(data)
            }else{
                setCartitems(response.data.items)
            }
            setTotalAmt(response.data.total)
            setCardId(response.data._id)
        } catch (error) {
            console.log(error)
        }
    }
    // console.log(cartItems)
    const handleRemoveItem = async (productId) => {
        // console.log(productId)
        try {
            const response = await axios.delete(`${base_url}/api/delete/card/${productId}`, {
                headers: {
                    Authorization: `${token}`
                }
            })
            // console.log(response)
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

    const getAddress = async () => {
        try {
            const response = await axios.get(`${base_url}/api/get/user/address`, {
                headers: {
                    Authorization: `${token}`
                }
            })
            // console.log(response.data[0].address)
            setUseradd(response.data)
            setSelectedAddress(response.data[0].address)
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async (addressId) => {
        try {
            const response = await axios.delete(`${base_url}/api/delete/address/${addressId}`, {
                headers: {
                    Authorization: `${token}`
                }
            })
            // console.log(response)
            getAddress()
            alert("Are you sure ?")
        } catch (error) {
            console.log(error)
        }
    }

    const handleEdit = async (addressId) => {
        try {
            const response = await axios.put(`${base_url}/api/update/address/${addressId}`, {
                headers: {
                    Authorization: `${token}`
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
    // console.log(userAdd)
    // const placeOrder = async () => {
    //     const payload = {
    //         userId: user,
    //         // userId: "65bdec7cd9d5ba44d8d5e2ae",
    //         products:[{
    //             productId: cartItems._id,
    //             quantity: cartItems.quantity,
    //             price: cartItems.price,
    //             status: "Pending"
    //         }],
    //         paymentMethod: "Credit Card",
    //         // address: "60eab1d6c105d12288b5b7a3"
    //         address: userAdd._id
    //     }
    //     try {
    //         const response = await axios.post(`${base_url}/api/order/place`, payload,{
    //             headers:{
    //                 Authorization:`${token}`
    //             }
    //         })
    //         console.log(response.data,"hiii")
    //     } catch (error) {
    //         console.log(error)
    //     }

    // }

    const handleRadioChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    const placeOrder = async () => {
        if (userAdd.length == 0) {
            alert("Please Add Address")
            return;
        }
        const payload = {
            userId: user._id,
            products: cartItems.map(item => ({
                productId: item.product._id,
                quantity: item.quantity,
                price: item.product.price,
                status: "Pending"
            })),
            paymentMethod: paymentMethod,
            address: userAdd[0]._id
        };

        // console.log("Order Payload:", payload);

        try {
            const response = await axios.post(`${base_url}/api/order/place`, payload, {
                headers: {
                    Authorization: `${token}`
                }
            });
            console.log("Place Order Response:", response.data);
            // alert(response.data.message)
            alert(response.data.msg)
        } catch (error) {
            console.error("Error placing order:", error);
            alert(error.response.data.message)
        }
    };

    return (
        <>
            {/* <Nav ></Nav> */}
            <section>
                <div className="container-fluid p-5">
                    <div className="row">
                        <div className="col-md-8" style={{ backgroundColor: 'aliceblue' }}>
                            <div className="card w-100 mt-4">
                                <div className="card-body">
                                    <div className="row">
                                        <div className='col-1'>
                                            <div className='bg-success text-white' style={{ border: '1px solid ', height: 30, width: 30, textAlign: 'center' }}>
                                                1
                                            </div>
                                        </div>
                                        <div className="col-11"><h6>User<i class="fa-solid fa-check font-weight-bold ml-3 text-success"></i></h6>
                                        </div>
                                        <div className="col-1"></div>
                                        <div className="col-11">
                                            {user.mobileNo}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="card mt-4">
                                <div className="card-header bg-primary">
                                    <div className="row">
                                        <div className="col-1">2</div>
                                        <div className="col-11">Delivery address</div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <button className='btn btn-lg btn-primary'>use My current Location</button><br />
                                    <div className="row">
                                        <div className="col-md-6 mt-4">
                                            <input className='form-control' type='text' placeholder='Name' />
                                        </div>
                                        <div className="col-md-6 mt-4">
                                            <input className='form-control' type='text' placeholder='10-digit mobile number' />
                                        </div>
                                        <div className="col-md-6 mt-4">
                                            <input className='form-control' type='text' placeholder='Pincode' />
                                        </div>
                                        <div className="col-md-6 mt-4">
                                            <input className='form-control' type='text' placeholder='Locality' />
                                        </div>
                                        <div className="col-md-12 mt-4">
                                            <textarea className='form-control w-100' placeholder='Address'></textarea>
                                        </div>
                                        <div className="col-md-6 mt-4">
                                            <input className='form-control' type='text' placeholder='City/district/town' />
                                        </div>
                                        <div className="col-md-6 mt-4">
                                            <select className='form-control'>
                                                <option>select state</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6 mt-4">
                                            <input className='form-control' type='text' placeholder='Landmark(optional)' />
                                        </div>
                                        <div className="col-md-6 mt-4">
                                            <input className='form-control' type='text' placeholder='Alternate Phone' />
                                        </div>
                                        <div className="col-12 mt-4">
                                            address type :
                                        </div>
                                        <div className="col-6">
                                            <input type='radio'></input> Home(All day delivery)
                                        </div>
                                        <div className="col-6">
                                            <input type='radio'></input>Work(Delivery between 10am to 5pm)
                                        </div>
                                        <button className='btn btn-lg btn-warning mt-4'>Save and deliver here</button>
                                    </div>
                                </div>
                            </div> */}
                            <div className="card w-100 mt-4">
                                <div className="card-body">
                                    <div className="row">
                                        <div className='col-1'>
                                            <div className='bg-success text-white' style={{ border: '1px solid ', height: 30, width: 30, textAlign: 'center' }}>
                                                2
                                            </div>
                                        </div>
                                        <div className="col-11"><h6> Select Delivery Address</h6>
                                        </div>
                                        <div className="col-1"></div>
                                        <div className="col-11">
                                            {userAdd?.map((item, index) => {
                                                return (
                                                    // <div className="col-12">
                                                    //     <input type='radio' name='address' value={item.address} checked={selectedAddress === item.address} onChange={(e)=>setSelectedAddress(e.target.value)}/>
                                                    //     <label>{item.address}</label>
                                                    //     <button className='btn btn-sm' onClick={() => handleDelete(item._id)}><i class="fa-solid fa-trash"></i></button>
                                                    // </div>
                                                    <div className="row">
                                                        <div style={{ display: "flex", flexDirection: "column" }}>
                                                            <div className='ml-3'>
                                                                <input
                                                                    type='radio'
                                                                    name='address'
                                                                    value={item.address}
                                                                    checked={selectedAddress === item.address}
                                                                    onChange={(e) => setSelectedAddress(e.target.value)}
                                                                    style={{ height: "15px", width: "15px", marginRight: "5px", marginTop: "10px" }}
                                                                />
                                                                <label htmlFor="checkbox">
                                                                    {item?.address}
                                                                </label>
                                                            </div>
                                                            <button className='btn   btn-outline-danger p-1' style={{ alignSelf: 'end' }} onClick={() => handleDelete(item._id)}><i class="fa-solid fa-trash ml-1 mr-1"></i></button>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        {/* <div className="col-2">
                                            <NavLink to="/editadd"><button className='btn btn-lg btn-warning'>Change</button></NavLink>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="card  w-100  mt-4">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-12 text-primary" onClick={() => setAddressToggle(!addressToggle)}>
                                            Add a new address +
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {
                                addressToggle &&
                                <DeliveryAddress getAddress={getAddress} setAddressToggle={setAddressToggle} />
                            }

                            {/* <div className="card mt-4">
                                <div className="card-header bg-primary">
                                    <div className="row">
                                        <div className="col-1">3</div>
                                        <div className="col-11">Order Summary</div>
                                    </div>
                                </div>
                                {cartItems?.map((item, index) => {
                                    return (
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-3">
                                                    <div className="col-12">
                                                        <img src={item.product.images[0].url} alt={item.product.title} className='w-100' />
                                                    </div>
                                                    <div className="col-12 text-center mt-4">
                                                        <button>-</button> {item.quantity} <button>+</button>
                                                    </div>
                                                </div>
                                                <div className="col-9">
                                                    <h3>{item.product.title}</h3>
                                                    <p>{item.product.description}</p>
                                                    <p><i class="fa-solid fa-indian-rupee-sign"></i>{item.product.price} {item.product.offer} Off</p>
                                                    <p>{`Price: ${item.price}, Discount: ${item.discount}`}</p>
                                                    <button onClick={() => handleRemoveItem(item._id)}>Remove</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div> */}
                            <div className="card w-100 mt-4" onClick={() => setOrderToggle(!orderToggle)}>
                                <div className="card-body">
                                    <div className="row">
                                        <div className='col-1'>
                                            <div className='bg-success text-white' style={{ border: '1px solid ', height: 30, width: 30, textAlign: 'center' }}>
                                                3
                                            </div>
                                        </div>
                                        <div className="col-11"><h6> Order summary </h6>
                                        </div>
                                        <div className="col-1"></div>
                                        <div className="col-11">
                                            <p>{cartItems.length} items</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {
                                orderToggle &&
                                <div className="card mt-4">
                                    <div className="card-header bg-light">
                                        <div className="row">
                                            <div className='col-1'>
                                                <div className='bg-success text-white' style={{ border: '1px solid ', height: 30, width: 30, textAlign: 'center' }}>
                                                    3
                                                </div>
                                            </div>
                                            <div className="col-11"><h6> Order summary </h6>
                                            </div>
                                        </div>
                                    </div>
                                    {cartItems?.map((item, index) => {
                                        return (
                                            <div className="card  mt-4 mb-5 p-2" key={index} style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-3">
                                                            <div className="col-12" style={{ height: 140, borderRadius: 20 }}>
                                                                <img src={item?.product?.images[0].url} alt={item?.product?.title} className='w-75 h-100' style={{ borderRadius: 20 }} />
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
                                                                <button onClick={() => handlequantity(item._id, "decrement")} className='btn btn-outline-success'>-</button>&nbsp;&nbsp; {item.quantity}&nbsp;&nbsp; <button className='btn btn-outline-success' onClick={() => handlequantity(item._id, "increment")}>+</button>
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

                                    {/* <div className="row">
                                        <div className="col-12">
                                            <button className='btn btn-lg btn-warning float-right'>Continue</button>
                                        </div>
                                    </div> */}
                                </div>
                            }

                            <div className="card w-100 mt-4" onClick={() => setPaymentToggle(!paymentToggle)}>
                                <div className="card-body">
                                    <div className="row">
                                        <div className='col-1'>
                                            <div className='bg-success text-white' style={{ border: '1px solid ', height: 30, width: 30, textAlign: 'center' }}>
                                                4
                                            </div>
                                        </div>
                                        <div className="col-11"><h6> Payment Options</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {
                                paymentToggle &&
                                <div className="card mt-4">
                                    <div className="card-header bg-light">
                                        <div className="row">
                                            <div className='col-1'>
                                                <div className='bg-success text-white' style={{ border: '1px solid ', height: 30, width: 30, textAlign: 'center' }}>
                                                    4
                                                </div>
                                            </div>
                                            <div className="col-11"><h6> Payment Options</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div style={{ display: "flex", flexDirection: "column" }}>
                                                <div className='ml-3 mt-3 mr-4'>
                                                    <input
                                                        type='radio'
                                                        name='paymethod'
                                                        value="Card"
                                                        // checked={selectedAddress === item.address}
                                                        onChange={handleRadioChange}
                                                        style={{ height: "15px", width: "15px", marginRight: "5px", marginTop: "10px" }}
                                                    />
                                                    <label htmlFor="checkbox">
                                                    Credit/Debit/ATM Card
                                                    </label>
                                                </div>
                                                <div className='ml-3 mt-3 mr-4'>
                                                    <input
                                                        type="radio"
                                                        name='paymethod'
                                                        value="Net Banking"
                                                        onChange={handleRadioChange}
                                                        style={{ height: "15px", width: "15px", marginRight: "5px" }}
                                                    />
                                                    <label htmlFor="checkbox">
                                                    Net Banking
                                                    </label>
                                                </div>
                                                <div className='ml-3 mt-3 mr-4'>
                                                    <input
                                                        type="radio"
                                                        name='paymethod'
                                                        value="UPI"
                                                        onChange={handleRadioChange}
                                                        style={{ height: "15px", width: "15px", marginRight: "5px" }}
                                                    />
                                                    <label htmlFor="checkbox">
                                                    UPI
                                                    </label>
                                                </div>
                                                <div className='ml-3 mt-3 mr-4'>
                                                    <input
                                                        type="radio"
                                                        name='paymethod'
                                                        value="Cash on Delivery"
                                                        onChange={handleRadioChange}
                                                        style={{ height: "15px", width: "15px", marginRight: "5px" }}
                                                    />
                                                    <label htmlFor="checkbox">
                                                    Cash on Delivery
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <input type='radio' name='paymethod' value="Card" onChange={handleRadioChange} />
                                        <label>Credit/Debit/ATM Card</label> */}
                                        {/* </div>
                                <div className="card-body"> */}
                                        {/* <input type='radio' name='paymethod' value="Net Banking" onChange={handleRadioChange} />
                                        <label>Net Banking</label> */}
                                        {/* </div>
                                <div className="card-body"> */}
                                        {/* </div>
                                <div className="card-body"> */}
                                        {/* <input type='radio' name='paymethod' value="UPI" onChange={handleRadioChange} />
                                        <label>UPI</label> */}
                                        {/* </div>
                                <div className="card-body"> */}
                                        {/* <input type='radio' name='paymethod' value="Cash On Delivery" onChange={handleRadioChange} />
                                        <label>Cash on Delivery</label> */}
                                    </div>
                                </div>
                            }
                            {/* <div className="card mt-4">
                                <div className="card-header">
                                    <div className="row">
                                        <div className="col-1">2</div>
                                        <div className="col-11">Review items and delivery
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 p-3">
                                    <h5>Guaranteed delivery: 18 Mar 2024</h5>
                                </div>
                                {cartItems?.map((item, index) => {
                                    return (
                                        <div className="card  mt-4 mb-5 p-2" key={index} style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-3">
                                                        <div className="col-12">
                                                            <img src={item.product.images[0].url} alt={item.product.title} className='w-100' />
                                                        </div>
                                                    </div>
                                                    <div className="col-5">
                                                        <h6>{item.product.title}</h6>
                                                        <p><i className="fa-solid fa-indian-rupee-sign"></i>{item.product.price} {item.product.offer} Off</p>
                                                        <p>{`Price: ${item.product.price}, Discount: ${item.product.offer}`}</p>
                                                    </div>
                                                    <div className="col-3">
                                                        <div className="col-12 text-center mt-4">
                                                            <button onClick={() => handlequantity(item._id, "decrement")} className='btn'>-</button>&nbsp; {item.quantity}&nbsp; <button className='btn' onClick={() => handlequantity(item._id, "increment")}>+</button>
                                                        </div>
                                                    </div>
                                                    <div className="col-1">
                                                        <button onClick={() => handleRemoveItem(item._id)} className='btn btn-outline-dark'><i className="fa-solid fa-trash"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                                
                            </div> */}
                            <div className="card mt-4 mb-5 p-4">
                                <div className="col-12">
                                    <button className='btn btn-lg btn-success float-right' onClick={placeOrder}>Place your order</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            {/* <div className="card mt-4">
                                <div className="card-header bg-white">
                                    <h3>PRICE DETAILS</h3>
                                </div>
                                <div className="card-body">
                                    <table className='w-100'>
                                        <tr>
                                            <td>Total Product Price</td>
                                            <td><i className="fa-solid fa-indian-rupee-sign"></i>{totalAmt}</td>
                                        </tr>
                                        <tr>
                                            <td>Delivery Charges</td>
                                            <td><i className="fa-solid fa-indian-rupee-sign"></i></td>
                                        </tr>
                                    </table>
                                </div>
                                <div className="card-footer bg-white">
                                    <table className='w-100'>
                                        <tr>
                                            <td>Order total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                                            <td><i className="fa-solid fa-indian-rupee-sign"></i>{totalAmt}</td>
                                        </tr>
                                    </table>
                                </div>
                            </div> */}
                            <Total totalAmt={totalAmt}></Total>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Checkout
