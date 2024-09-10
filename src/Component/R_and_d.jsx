// import React from 'react'
// import "../Css/style.css"

// const R_and_d = () => {
//   return (
//     <>
//       <section className='journey-section'>
//         <div class="container-fluid">
//           <div class="row">
//             <div class="col-md-12">
//               <div class="journey-text">
//                 <h3 className='mb-2'>Research and Development</h3>
//               </div>
//             </div>
//             <div className="col-md-6">
//               <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxepJDRf9DAt9m_u2niFxkFJF6sNUi-KxM4Q&s' />
//             </div>
//             <div className="col-md-6 journey-text">
//               <p>We specialize in pinpointing and extracting the most potent microbial strains from various niche sources, including soil, infected insects, plants, composts, and more. Upon rigorous validation, these strains are commercialized.</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default R_and_d
import React from 'react';
import "../Css/style.css";

const R_and_d = () => {
  return (
    <>
      <section className='journey-section'>
        <div className="container-fluid" >
          <div className="row">
            <div className="col-md-12">
              <div className="journey-text">
                <h3 className='mb-2'><b>Research & Development</b></h3>
              </div>
            </div>
            <div className="col-md-6">
              <img 
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxepJDRf9DAt9m_u2niFxkFJF6sNUi-KxM4Q&s' 
                className='img-fluid' 
                alt='Research and Development'
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
            <div className="col-md-6 journey-text" >
              <p>We specialize in pinpointing and extracting the most potent microbial strains from various niche sources, including soil, infected insects, plants, composts, and more. Upon rigorous validation, these strains are commercialized.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default R_and_d;
