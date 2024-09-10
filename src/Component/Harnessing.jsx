// import React from 'react'

// const Harnessing = () => {
//     return (
//         <div>
//             <div className="container-fluid">
//                 <div className="row">
//                     <div className="col-md-6">
//                         <img src='' className='w-100' />
//                     </div>
//                     <div className="col-md-12">
//                         <h3>Harnessing the potential of microbes, we propel sustainable agriculture forward.</h3>
//                         <p>Crafted with high CFU Counts and extended shelf life, our innovative microbial formulations are tailored to bolster farmers in fostering sustainable development across the crop lifecycle. we aspire to transform the agricultural landscape by engineering products that surpass the efficacy of existing offerings in the market.</p>
//                     </div>
//                 </div>
//                 <div className="col-12 bg-warning p-4">
//                     <div className="row">
//                         <div className="col-md-3 card p-4">
//                             <img src='#' />
//                             <h6>Augmented Effectiveness</h6>
//                             <p>Discovering the most potent strains and amplifying their potency manifold.</p>
//                         </div>
//                         <div className="col-md-3 card">
//                             <img src='#' />
//                             <h6>Cutting-edge Microbial Solutions</h6>
//                             <p>Manufacturing high CFU, contaminant-free, and enduring products in diverse forms (liquid, powder, granules, tablets, capsules).</p>
//                         </div>
//                         <div className="col-md-3 card">
//                             <img src='#' />
//                             <h6>Extended Shelf Life</h6>
//                             <p>Prolonged durability (up to 5 years depending on technology) even under adverse storage conditions.</p>
//                         </div>
//                         <div className="col-md-3 card">
//                             <img src='#' />
//                             <h6>Resilience in Adverse Environments</h6>
//                             <p>Highly effective solutions in broad and unfavorable environmental conditions, including humidity, temperature fluctuations, and varying soil pH levels.</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Harnessing
import React from 'react';

const Harnessing = () => {
  return (
    <div className="harnessing-section">
      <div className="container-fluid py-5">
        <div className="row align-items-center mb-4">
          {/* Image Section */}
          <div className="col-md-6 mb-3 mb-md-0">
            <img
              src="https://media.licdn.com/dms/image/D4D12AQEnYjQB8btP6Q/article-cover_image-shrink_720_1280/0/1696486706433?e=2147483647&v=beta&t=DhTzMCJt2byaYFgF02_YB3Ky5BJ7rfj6FLROr2XNTE8"
              alt="Microbial Potential"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Text Section */}
          <div className="col-md-6">
            <h3 className="mb-3">
              Harnessing the potential of microbes, we propel sustainable
              agriculture forward.
            </h3>
            <p style={{ fontStyle: 'Sans Serif',  fontSize:'130%'}}>
              Crafted with high CFU Counts and extended shelf life, our
              innovative microbial formulations are tailored to bolster farmers
              in fostering sustainable development across the crop lifecycle. We
              aspire to transform the agricultural landscape by engineering
              products that surpass the efficacy of existing offerings in the
              market.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-warning p-4 rounded">
          <div className="row text-center">
            {/* Card 1 */}
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card h-100 p-3">
                <img src="https://media.licdn.com/dms/image/D4D12AQEnYjQB8btP6Q/article-cover_image-shrink_720_1280/0/1696486706433?e=2147483647&v=beta&t=DhTzMCJt2byaYFgF02_YB3Ky5BJ7rfj6FLROr2XNTE8" alt="Augmented Effectiveness" className="img-fluid" />
                <h6 className="mt-3">Augmented Effectiveness</h6>
                <p style={{ fontStyle: 'Sans Serif',  fontSize:'130%'}}>
                  Discovering the most potent strains and amplifying their
                  potency manifold.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card h-100 p-3">
                <img src="https://media.licdn.com/dms/image/D4D12AQEnYjQB8btP6Q/article-cover_image-shrink_720_1280/0/1696486706433?e=2147483647&v=beta&t=DhTzMCJt2byaYFgF02_YB3Ky5BJ7rfj6FLROr2XNTE8" alt="Cutting-edge Microbial Solutions" className="img-fluid" />
                <h6 className="mt-3">Cutting-edge Microbial Solutions</h6>
                <p style={{ fontStyle: 'Sans Serif',  fontSize:'130%'}}>
                  Manufacturing high CFU, contaminant-free, and enduring
                  products in diverse forms (liquid, powder, granules, tablets,
                  capsules).
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card h-100 p-3">
                <img src="https://media.licdn.com/dms/image/D4D12AQEnYjQB8btP6Q/article-cover_image-shrink_720_1280/0/1696486706433?e=2147483647&v=beta&t=DhTzMCJt2byaYFgF02_YB3Ky5BJ7rfj6FLROr2XNTE8" alt="Extended Shelf Life" className="img-fluid" />
                <h6 className="mt-3">Extended Shelf Life</h6>
                <p style={{ fontStyle: 'Sans Serif',  fontSize:'130%'}}>
                  Prolonged durability (up to 5 years depending on technology)
                  even under adverse storage conditions.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card h-100 p-3">
                <img src="https://media.licdn.com/dms/image/D4D12AQEnYjQB8btP6Q/article-cover_image-shrink_720_1280/0/1696486706433?e=2147483647&v=beta&t=DhTzMCJt2byaYFgF02_YB3Ky5BJ7rfj6FLROr2XNTE8" alt="Resilience in Adverse Environments" className="img-fluid" />
                <h6 className="mt-3">Resilience in Adverse Environments</h6>
                <p style={{ fontStyle: 'Sans Serif',  fontSize:'130%'}}>
                  Highly effective solutions in broad and unfavorable
                  environmental conditions, including humidity, temperature
                  fluctuations, and varying soil pH levels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Harnessing;
