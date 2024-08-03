import React, { useEffect, useState } from 'react'
import R_and_d from '../Component/R_and_d'
import Production_fac from '../Component/Production_fac'
import Research_farm from '../Component/Research_farm'
import Quality_comp from '../Component/Quality_comp'
import { useParams } from 'react-router-dom';

const Innovation = () => {
  const {section} = useParams();
  const [currentComp,setCurrentComp]=useState(section||"r&d")

  useEffect(()=>{
    setCurrentComp(section)
  },[section])
  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="row">
          <div className="col-12 image-container">
              <img src="https://t4.ftcdn.net/jpg/07/92/50/39/240_F_792503905_PoWvfmapH78Zbr89f7Ytdu4h3FWjZOxw.jpg" class="d-block w-100 zoom-image" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h1 className='mb-5'>Innovation And Technology</h1>
              </div>
            </div>
          </div>
          <div className="row pt-5 pl-3 pr-3 pb-5 background-image-opacity">
            <div className="col-md-3 p-3 bg-white" style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
              <hr style={{ backgroundColor: 'green' }} />
              <div className={` col-12 ${currentComp === "r&d" ? "text-success font-weight-bold" : ""}`} onClick={() => setCurrentComp("r&d")}>R & D</div><hr style={{ backgroundColor: 'green' }} />
              <div className={` col-12 ${currentComp === "production" ? "text-success font-weight-bold" : ""}`} onClick={() => setCurrentComp("production")}>Production Facility</div><hr style={{ backgroundColor: 'green' }} />
              <div className={` col-12 ${currentComp === "quality" ? "text-success font-weight-bold" : ""}`} onClick={() => setCurrentComp("quality")}>Quality Compliance</div><hr style={{ backgroundColor: 'green' }} />
              <div className={` col-12 ${currentComp === "research" ? "text-success font-weight-bold" : ""}`} onClick={() => setCurrentComp("research")}>Research Farm</div><hr style={{ backgroundColor: 'green' }} />
              </div>
            <div className="col-md-9 p-4">
              {currentComp == "r&d" &&
                <R_and_d />
              }
              {currentComp == "production" &&
                <Production_fac />
              }
              {currentComp == "quality" &&
                <Quality_comp/>
              }
              {currentComp == "research" &&
                <Research_farm />
              }
            </div>
          </div>
        </div>
      </section >
    </>
  )
}

export default Innovation
