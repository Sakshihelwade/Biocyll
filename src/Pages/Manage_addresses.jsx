import React, { useContext, useEffect, useState } from 'react'
import Nav from '../Component/Nav'
import { UserContext } from '../Context/CreateContext';
import Footer from '../Component/Footer';
import DeliveryAddress from '../Component/DeliveryAddress';
import { base_url } from '../Config/Index';
import axios from 'axios';


const Manage_addresses = () => {
    const { user, token, login, logout } = useContext(UserContext);
    const [manageAdd, setManageAdd] = useState(false);
    const [addList, setAddList] = useState();
    useEffect(() => {
        getAddList()
    }, [])

    const getAddList = async () => {
        try {
            const response = await axios.get(`${base_url}/api/get/user/address`, {
                headers: {
                    Authorization: `${token}`
                }
            })
            console.log(response)
            setAddList(response.data)
        } catch (error) {
            console.log(error);
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
            getAddList()
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            {/* <Nav userData={user}></Nav> */}
            <section className='p-3'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="card p-3 mt-5 mb-5">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h4>Manage Addresses</h4>
                                    </div>
                                    <div className="col-12">
                                        <div className="card p-3">
                                            <div className="row">
                                                <div className="col-1">
                                                    <div className='bg-success text-white' style={{ border: '1px solid green', height: 30, width: 30, textAlign: 'center' }}>1</div>
                                                </div>
                                                <div className="col-11">Manage Your Addresses
                                                </div>
                                                <div className="col-1">
                                                </div>
                                                <div className="col-11">
                                                    {addList?.map((item, index) => {
                                                        return (
                                                            <>
                                                                <div className="card mt-4 p-3">
                                                                    <div className="row">
                                                                        <div className="col-11">
                                                                            <text>{item.address}</text>
                                                                        </div>
                                                                        <div className="col-1">
                                                                            <button className='btn btn-outline-danger' onClick={() => handleDelete(item._id)} ><i className="fa-solid fa-trash"></i></button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="card p-3 mt-3">
                                            <small className='text-success' onClick={() => setManageAdd(!manageAdd)}><i className="fa-solid fa-plus" style={{ marginLeft: 15, marginRight: 70 }}></i>ADD NEW ADDRESS</small>
                                        </div>
                                    </div>
                                    {
                                        manageAdd &&
                                        <div className="col-12">
                                            <DeliveryAddress getAddress={getAddList} setAddressToggle={setManageAdd}/>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <Footer></Footer> */}
        </>
    )
}

export default Manage_addresses
