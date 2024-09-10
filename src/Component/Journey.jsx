import React from 'react'
import "../Css/style.css";
const Journey = () => {
  return (
    <>
      {/* <div className="row" >
        <div className="col-12 text-center mb-4">
          <h3>Our Journey</h3>
          At IPL Biologicals Limited, we believe in a sustainable future. Our indigenous microbial-based solutions improve soil health, crop yield, and quality while managing pests and residue. Since 1994, we have been pioneering sustainable agricultural practices by innovating biological solutions to create a better world for generations to come.

          Our story is of growth, resilience, and a relentless commitment to fostering food quality and safety based on our key principles:
          Prioritize safe and sustainable farming practices.
          Use Integrated Nutrient and Pest Management for balanced soil and effective pest control.
          Reduce chemical substances with microbial-based solutions.
          Care for the planet and customers’ well-being.
          Farmers trust us for high-quality yields and better return on investments (ROI).
        </div>
      </div> */}
      <section class="journey-section ">
        <div class="container-fluid">
          <div class="row ">
          <div className="col-md-12 text-center">
          <h3 className='mb-3'>Our Journey</h3>
          </div>
            <div className="col-md-12 ">
              <card>
                {/* <img src='https://images.pexels.com/photos/614484/pexels-photo-614484.jpeg?cs=srgb&dl=pexels-tiana-18128-614484.jpg&fm=jpg' className='w-75 h-50' /> */}
                <img src='https://media.licdn.com/dms/image/D4D12AQEnYjQB8btP6Q/article-cover_image-shrink_720_1280/0/1696486706433?e=2147483647&v=beta&t=DhTzMCJt2byaYFgF02_YB3Ky5BJ7rfj6FLROr2XNTE8' className='w-75 h-50' />
              </card>
            </div>
            <div class="col-md-12  d-flex m-auto p-5 ">
              <div class="journey-text p-5 bg-light w-75" style={{marginTop:-300,borderRadius:10 }}>
                <p style={{ fontStyle: 'Sans Serif',  fontSize:'130%'}}>Started back in 2012 in a very tiny manufacturing facility of 500 sq.ft. area, Biocyll draws inspiration from the noble thought of helping farmers with innovative solutions leading to more yield, helping them achieve prosperity in farming. Starting with the combined experience of more than 50 years of promoters, Biocyll has come so far as to acquire many technologies and products from industry, institutions, and industry stalwarts. Now Biocyll is impacting more than millions of farmers and is recognized as the Best Company in Biologicals by Agriculture Today, Biocyll Laboratories Pvt. Ltd. stands as a testament to the growth and pioneering advancements in biological technologies.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Journey
