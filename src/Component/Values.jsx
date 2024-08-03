import React from 'react'
import { NavLink } from 'react-router-dom'
import s3 from "../Assets/Images/s3.png"
import s4 from "../Assets/Images/s4.png"
import s5 from "../Assets/Images/s5.png"
import s6 from "../Assets/Images/s6.png"
import s7 from "../Assets/Images/s7.png"

const Values = () => {
  return (
    <>
    <div className="row">
      <div className="col-12 pr-5 pl-5 text-center mb-3 headings ">
        <h3>Core Values</h3>
        Get to know us better with these core values that define us not only as a company but as a group of like-minded individuals who have a common goal of creating a better tomorrow.
      </div>
    </div>
    <section>
            <div className="container-fluid p-5 services">
                <div className="row">
                    <div className="col-md-8 mt-3 service_area " style={{margin:'auto'}}>
                        <div className="row">
                            <div className="col-4">
                                <img src={s3}  className='w-100'/>
                            </div>
                            <div className="col-8 headings">
                                <h4>ETHICS</h4>
                               <p>We conduct ourselves and our business affairs in accordance with the highest ethical standards.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 mt-3 service_area  " style={{margin:'auto'}}>
                        <div className="row">
                            <div className="col-4">
                                <img src={s4}  className='w-100'/>
                            </div>
                            <div className="col-8 headings">
                                <h4>LONG TERM</h4>
                               <p>We base our decisions on maximizing the long-term success of our company.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 mt-3 service_area" style={{margin:'auto'}}> 
                        <div className="row">
                            <div className="col-4">
                                <img src={s4}  className='w-100'/>
                            </div>
                            <div className="col-8 headings">
                                <h4>CUSTOMER FIRST</h4>
                               <p>We will work towards a customer focussed organization, keeping the customer front and center in all we do.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 mt-3 service_area " style={{margin:'auto'}}>
                        <div className="row">
                            <div className="col-4">
                                <img src={s5}  className='w-100'/>
                            </div>
                            <div className="col-8 headings">
                                <h4>OWNERSHIP </h4>
                               <p>Each individual doing what it takes to win.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 mt-3 service_area "  style={{margin:'auto'}}>
                        <div className="row">
                            <div className="col-4">
                                <img src={s6}  className='w-100'/>
                            </div>
                            <div className="col-8 headings">
                                <h4> QUALITY</h4>
                               <p>We take responsibility for quality. Our product and services will be amongst the best in terms of value delivered.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Values