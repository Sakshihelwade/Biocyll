// import React from 'react'
// import "../Css/style.css"
// const Production_fac = () => {
//   return (
//     <section className='journey-section'>
//       <div class="container-fluid">
//         <div class="row">
//           <div className="col-md-6">
//             <img src='http://iplbiologicals.com/wp-content/uploads/2023/09/Production-Technology.jpg'/>
//           </div>
//           <div class="col-md-6">
//             <div class="journey-text">
//               <h3 className='mb-2'>Production Facilities</h3>
//               <p> The manufacturing facility of Biocyll Laboratories Pvt. Ltd. in Pune, is furnished with contemporary, cutting-edge machinery, which includes bioreactors and associated utilities, an aseptic filling unit, as well as downstream equipment tailored for the production of liquid, powder, and granule formulations.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Production_fac
import React from 'react';
import "../Css/style.css";

const Production_fac = () => {
  return (
    <section className='journey-section'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <img 
              src='http://iplbiologicals.com/wp-content/uploads/2023/09/Production-Technology.jpg' 
              className='img-fluid' 
              alt='Production Facilities'
              style={{ maxWidth: '100%', height: 'auto' }} 
            />
          </div>
          <div className="col-md-6" >
            <div className="journey-text">
              <h3 className='mb-2'><b>Production Facilities</b></h3>
              <p style={{ fontStyle: 'Sans Serif',  fontSize:'130%'}}>The manufacturing facility of Biocyll Laboratories Pvt. Ltd. in Pune, is furnished with contemporary, cutting-edge machinery, which includes bioreactors and associated utilities, an aseptic filling unit, as well as downstream equipment tailored for the production of liquid, powder, and granule formulations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Production_fac;
