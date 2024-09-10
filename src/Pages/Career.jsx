import React, { useState } from 'react'
import Current_openings from '../Component/Current_openings'
import Our_culture from '../Component/Our_culture'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import { base_url } from '../Config/Index'

const Career = () => {
  const { section } = useParams();
  const [currentComp, setCurrentComp] = useState(section || "openings");

  useEffect(()=>{
    setCurrentComp(section)
  },[section])
  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="row">
            {/* <div className="col-12 image-container"> */}
              {/* <img src="https://t4.ftcdn.net/jpg/07/92/50/39/240_F_792503905_PoWvfmapH78Zbr89f7Ytdu4h3FWjZOxw.jpg" className="d-block w-100 zoom-image" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h1>Careers</h1> */}
                {/* <p >Careers <i class="fa-solid fa-chevron-right"></i> {currentComp}</p> */}
              {/* </div> */}
            {/* </div> */}
          </div>
          <div className="row background-image-opacity p-4">
                {/* <div className="col-12 text-center mb-4 mt-4 ">
                  <h3>Our Perks</h3>
                </div> */}
                <div class="col-xl-2 col-lg-2">
                  <div class="card c1 l-bg-blue-dark">
                    <div class="card-statistic-3 p-4">
                      <div class="card-icon card-icon-large"><i class="fa-solid fa-clock" style={{fontSize:70}}></i></div>
                      <div class="mb-4">
                        {/* <h5 class="card-title mb-0">Flexible Working Hours</h5> */}
                      </div>
                      <div class="row align-items-center mb-2 d-flex">
                        <div class="col-8">
                          <h2 class="d-flex align-items-center mb-0">
                          <h5 class="card-title mb-2">Flexible Working Hours</h5>
                          </h2>
                        </div>
                        {/* <div class="col-4 text-right">
                          <span>100% </span>
                        </div> */}
                      </div>
                      <div class="progress mt-1 " data-height="8" >
                        <div class="progress-bar l-bg-green" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-2 col-lg-2">
                  <div class="card c1 l-bg-green-dark">
                    <div class="card-statistic-3 p-4">
                      <div class="card-icon card-icon-large"><i class="fa-solid fa-people-group" style={{fontSize:70}}></i></div>
                      <div class="mb-4">
                        {/* <h5 class="card-title mb-0"> Team Outings</h5> */}
                      </div>
                      <div class="row align-items-center mb-2 d-flex">
                        <div class="col-8">
                          <h2 class="d-flex align-items-center mb-0">
                          <h5 class="card-title mb-2"> Team Outings</h5>
                          </h2>
                        </div>
                        {/* <div class="col-4 text-right">
                          <span>100% </span>
                        </div> */}
                      </div>
                      <div class="progress mt-1 " data-height="8" >
                        <div class="progress-bar l-bg-orange" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-2 col-lg-2">
                  <div class="card c1 l-bg-orange-dark">
                    <div class="card-statistic-3 p-4">
                      <div class="card-icon card-icon-large"><i class="fa-solid fa-house-laptop" style={{fontSize:70}}></i></div>
                      <div class="mb-4">
                        {/* <h5 class="card-title mb-0">WFH Facility</h5> */}
                      </div>
                      <div class="row align-items-center mb-2 d-flex">
                        <div class="col-8">
                          <h2 class="d-flex align-items-center mb-0">
                          <h5 class="card-title mb-0">WFH Facility</h5>
                          </h2>
                        </div>
                        {/* <div class="col-4 text-right">
                          <span>100%</span>
                        </div> */}
                      </div>
                      <div class="progress mt-1 " data-height="8" >
                        <div class="progress-bar l-bg-cyan" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-2 col-lg-2">
                  <div class="card c1 l-bg-yellow-dark">
                    <div class="card-statistic-3 p-4">
                      <div class="card-icon card-icon-large"><i class="fa-solid fa-wallet" style={{fontSize:70}}></i></div>
                      <div class="mb-4">
                        {/* <h5 class="card-title mb-0">PF/ ESIC Facility</h5> */}
                      </div>
                      <div class="row align-items-center mb-2 d-flex">
                        <div class="col-8">
                          <h2 class="d-flex align-items-center mb-0">
                          <h5 class="card-title mb-0">PF/ ESIC Facility</h5> 
                          </h2>
                        </div>
                        {/* <div class="col-4 text-right">
                        <span>100%</span>
                        </div> */}
                      </div>
                      <div class="progress mt-1 " data-height="8" >
                        <div class="progress-bar l-bg-cyan" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-2 col-lg-2">
                  <div class="card c1 l-bg-red-dark">
                    <div class="card-statistic-3 p-4">
                      <div class="card-icon card-icon-large"><i class="fa-solid fa-money-check-dollar" style={{fontSize:70}}></i></div>
                      <div class="mb-4">
                        {/* <h5 class="card-title mb-0">Loans and Advance</h5> */}
                      </div>
                      <div class="row align-items-center mb-2 d-flex">
                        <div class="col-8">
                          <h2 class="d-flex align-items-center mb-0">
                          <h5 class="card-title mb-0">Loans and Advance</h5>
                          </h2>
                        </div>
                        {/* <div class="col-4 text-right">
                        <span>100%</span>
                        </div> */}
                      </div>
                      <div class="progress mt-1 " data-height="8" >
                        <div class="progress-bar l-bg-green" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-2 col-lg-2">
                  <div class="card c1 l-bg-brown-dark">
                    <div class="card-statistic-3 p-4">
                      <div class="card-icon card-icon-large"><i class="fa-solid fa-award" style={{fontSize:70}}></i></div>
                      <div class="mb-4">
                        {/* <h5 class="card-title mb-0"> Quarterly Rewards and Recognitions</h5> */}
                      </div>
                      <div class="row align-items-center mb-2 d-flex">
                        <div class="col-8">
                          <h2 class="d-flex align-items-center mb-0">
                          <h5 class="card-title mb-0"> Quarterly Rewards and Recognitions</h5>
                          </h2>
                        </div>
                        {/* <div class="col-4 text-right">
                        <span>100%</span>
                        </div> */}
                      </div>
                      <div class="progress mt-1 " data-height="8" >
                        <div class="progress-bar l-bg-orange" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          <div className="row pt-5 pl-3 pr-3 pb-5 background-image-opacity" >
            <div className="col-md-3 p-3 bg-white sidebar-fixed-height" style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
              <hr style={{ backgroundColor: 'green' }} />
              <div className={` col-12 ${currentComp === "openings" ? "text-success font-weight-bold" : ""}`} onClick={() => setCurrentComp("openings")}>Current Openings</div><hr style={{ backgroundColor: 'green' }} />
              <div className={` col-12 ${currentComp === "culture" ? "text-success font-weight-bold" : ""}`} onClick={() => setCurrentComp("culture")}>Our Culture</div><hr style={{ backgroundColor: 'green' }} />
            </div>
            <div className="col-md-9 p-4">
              {currentComp == "openings" &&
                <Current_openings />
              }
              {currentComp == "culture" &&
                <Our_culture />
              }
            </div>
          </div>
        </div>
      </section >
    </>
  )
}

export default Career
