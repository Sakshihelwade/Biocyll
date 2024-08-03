import React from 'react'
import Nav from '../Component/Nav'
import Total from '../Component/Total'

const EditAdd = () => {
    return (
        <>
            <Nav></Nav>
            <section>
                <div className="container-fluid p-5">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card w-100">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-1">1</div>
                                        <div className="col-9"><h6> Login <i class="fa-solid fa-check"></i></h6> </div>
                                        <div className="col-12">
                                            Login Mobile no.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card mt-4">
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
                            </div>

                            <div className="col-12 mt-4">
                                + Add a new address
                            </div>
                            <div className="card w-100">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-1">3</div>
                                        <div className="col-9"><h6> Order summary <i className="fa-solid fa-check"></i></h6> </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card w-100">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-1">4</div>
                                        <div className="col-9"><h6>Payment option <i className="fa-solid fa-check"></i></h6> </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-md-4">
                            <Total></Total>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default EditAdd
