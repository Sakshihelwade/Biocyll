import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../Context/CreateContext';
import axios from 'axios';
import { base_url } from '../Config/Index';

const Total = ({totalAmt}) => {

    return (
        <>
            <div className="card mt-4 bg-white" style={{boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
                <div className="card-header bg-white">
                    <h5>PRICE DETAILS</h5>
                </div>
                <div className="card-body">
                    <table className='w-100'>
                        <tr>
                            <td>Total Product Price</td>
                            <td><i className="fa-solid fa-indian-rupee-sign mr-2"></i>{totalAmt}</td>
                        </tr>
                        <tr>
                            <td>Delivery Charges</td>
                            <td><i className="fa-solid fa-indian-rupee-sign mr-2"></i></td>
                        </tr>
                    </table>
                </div>
                <div className="card-footer bg-white">
                    <table className='w-100'>
                        <tr>
                            <td>Order total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                            <td><i className="fa-solid fa-indian-rupee-sign mr-2"></i>{totalAmt}</td>
                        </tr>
                    </table>
                </div>
            </div >
        </>
    )
}

export default Total
