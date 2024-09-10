import React, { useEffect, useState } from 'react'
import Contract_mfg from '../Component/Contract_mfg'
import Why_choose from '../Component/Why_choose'
import { useParams } from 'react-router-dom'
import banner from "../Assets/Images/banner.jpg"
import ProductPortfolio from '../Component/ProductPortfolio'

const B2b = () => {
  const { section, categoryId } = useParams();
  const [currentComp, setCurrentComp] = useState(section || "contract_mfg")

  useEffect(() => {
    setCurrentComp(section || "contract_mfg")
  }, [section])

  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="row">
            {/* <div className="col-12 image-container">
              <img src={banner} className="d-block w-100 zoom-image" alt="banner" /> */}
            {/* <div className="carousel-caption d-none d-md-block">
                <h1>B2B Solutions</h1> */}
            {/* </div> */}
            {/* </div> */}
          </div>
          <div className="row pt-5 pl-3 pr-3 pb-5 background-image-opacity">
            <div className="col-md-3 p-3 bg-white sidebar-fixed-height" style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}><hr style={{ backgroundColor: 'green' }} />
              <div className={`col-12 ${currentComp === "contract_mfg" ? "text-success font-weight-bold" : ""}`} onClick={() => setCurrentComp("contract_mfg")}>Contract_Manufacturing</div><hr style={{ backgroundColor: 'green' }} />
              <div className={`col-12 ${currentComp === "product-portfolio" ? "text-success font-weight-bold" : ""}`} onClick={() => setCurrentComp("product-portfolio")}>Product Portfolio</div><hr style={{ backgroundColor: 'green' }} />
              <div className={`col-12 ${currentComp === "why_choose" ? "text-success font-weight-bold" : ""}`} onClick={() => setCurrentComp("why_choose")}>Why Choose Us ?</div><hr style={{ backgroundColor: 'green' }} />
            </div>
            <div className="col-9 p-4">
              {currentComp === "contract_mfg" && <Contract_mfg />}
              {currentComp === "why_choose" && <Why_choose />}
              {currentComp === "product-portfolio" && <ProductPortfolio categoryId={categoryId} />}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default B2b
