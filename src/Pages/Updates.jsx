import React, { useEffect, useState } from 'react'
import News_and_events from '../Component/News_and_events'
import Blogs from '../Component/Blogs'
import { useParams } from 'react-router-dom'

const Updates = () => {
  const {section} =useParams();
  const [currentComp,setCurrentComp]=useState(section||"news");

  useEffect(()=>{
    setCurrentComp(section)
  },[section])
  return (
    <>
      <section>
        <div className="container-fluid">
        <div className="row">
        {/* <div className="col-12 image-container">
              <img src="https://t4.ftcdn.net/jpg/07/92/50/39/240_F_792503905_PoWvfmapH78Zbr89f7Ytdu4h3FWjZOxw.jpg" class="d-block w-100 zoom-image" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h1>Updates</h1>
              </div>
            </div> */}
          </div>
          <div className="row pt-5 pl-3 pr-3 pb-4 background-image-opacity">
            {/* <div className="col-3 p-3  bg-white sidebar-fixed-height" style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
              <hr style={{ backgroundColor: 'green' }} />
              <div className={` col-12 ${currentComp === "news" ? "text-success font-weight-bold" : ""}`} onClick={() => setCurrentComp("news")}>News and Events</div><hr style={{ backgroundColor: 'green' }} />
              <div className={` col-12 ${currentComp === "blog" ? "text-success font-weight-bold" : ""}`} onClick={() => setCurrentComp("blog")}>Blogs</div><hr style={{ backgroundColor: 'green' }} />
            </div> */}
            <div className="col-md-3 p-3 bg-white sidebar-fixed-height" style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}><hr style={{ backgroundColor: 'green' }} />
            
            <div className={` col-12 ${currentComp === "news" ? "text-success font-weight-bold" : ""}`} onClick={() => setCurrentComp("news")}>News and Events</div><hr style={{ backgroundColor: 'green' }} />
            <div className={` col-12 ${currentComp === "blog" ? "text-success font-weight-bold" : ""}`} onClick={() => setCurrentComp("blog")}>Blogs</div><hr style={{ backgroundColor: 'green' }} />
            </div>
            <div className="col-9">
              {currentComp == "news" &&
                <News_and_events />
              }
              {currentComp == "blog" &&
                <Blogs />
              }
            </div>
          </div>
        </div>
      </section >
    </>
  )
}

export default Updates
