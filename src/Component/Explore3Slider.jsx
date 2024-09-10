// import React from 'react'

// const Explore3Slider = () => {
//   return (
//     <div>
//       <div className="container-fluid">
//         <div className="row">
//             <div className="col-12 text-center">
//                 <h3>Innovations Paving the Way for Tomorrow!</h3>
//             </div>
//             <div className="col-12 text-center">
//                 <h6>Biocyll Laboratories Pvt. Ltd. operates a top-tier Technology & Innovation Center, featuring a cutting-edge R&D facility equipped with advanced Laboratory Machinery Equipments.</h6>
//             </div>
//             <div className="col-12">
//                 <h4>Manufacturing Process</h4>
//                 <p>Scaling up the production of naturally sourced living microorganisms for bio inoculants, ensuring high potency, density, reliability, and consistent efficacy, presents a significant challenge. However, we have achieved mastery in both the art and technology of product development through whole-cell mass multiplication of bio inoculants.</p>
//             </div>
//             <div className="col-12">
//                 <h4>Ongoing Enhancement</h4>
//                 <p>To maintain consistent quality, all commercialized products undergo regular revalidation. Moreover, these products are subject to continuous improvement initiatives aimed at enhancing effectiveness, extending shelf life, improving stress tolerance, and optimizing other relevant parameters. As a result of these rigorous practices, Biocyll Laboratories Pvt. Ltd. products demonstrate continuous enhancement in both quality and efficacy year after year.</p>
//             </div>
//             <div className="col-12">
//                 <h4>Human Capital</h4>
//                 <p>The formidable team at the Technology & Innovation Center is fortified with expertise spanning various disciplines. This comprehensive approach ensures the integration of diverse perspectives in the development of new products.</p>
//             </div>
//             <div className="col-12">
//                 <h4>Contamination-Free Environment</h4>
//                 <p>We maintain the highest technological standards to guarantee production free from contamination, ensuring the delivery of premium quality products.</p>
//             </div>
//             <div className="col-12">
//                 <h4>ISO 9001:2018 Accreditation</h4>
//                 <p>With ISO 9001:2018 certification for Quality Management Systems, we guarantee the utmost quality and safety in the manufacturing process of our Biofertilizers, Bio-fungicides, Bio-insecticides, and Bio-stimulants.</p>
//             </div>
//             <div className="col-12">
//                 <h4>ISO 9001:14001 Accreditation</h4>
//                 <p>With ISO 9001:14001 certification for Environmental Management Systems, we guarantee the utmost systematic approach for measuring and improving environmental impact in the manufacturing process of our Biofertilizers, Bio-fungicides, Bio-insecticides, and Bio-stimulants.</p>
//             </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Explore3Slider

import React from 'react';
import "../Css/style.css";
const Explore3Slider = () => {
  return (
    <div className="container-fluid py-5 bg-light">
      <div className="row justify-content-center">
        <div className="col-12 text-center mb-5" style={{ fontStyle: 'Sans Serif',  fontSize:'130%'}}>
          <h3 className="font-weight-bold" style={{ fontStyle: 'Sans Serif',  fontSize:'130%'}}>Innovations Paving the Way for Tomorrow!</h3>
        </div>
        <div className="col-10 col-md-8 text-center mb-5" style={{ fontStyle: 'Sans Serif',  fontSize:'130%'}}>
          <h6 className='text-muted' style={{ fontStyle: 'Sans Serif',  fontSize:'130%'}}>
            Biocyll Laboratories Pvt. Ltd. operates a top-tier Technology & Innovation Center, featuring a cutting-edge R&D facility equipped with advanced Laboratory Machinery Equipments.
          </h6>
        </div>

        {/* Card for each section */}
        {[
          {
            title: "Manufacturing Process",
            description: "Scaling up the production of naturally sourced living microorganisms for bio inoculants, ensuring high potency, density, reliability, and consistent efficacy, presents a significant challenge. However, we have achieved mastery in both the art and technology of product development through whole-cell mass multiplication of bio inoculants."
          },
          {
            title: "Ongoing Enhancement",
            description: "To maintain consistent quality, all commercialized products undergo regular revalidation. These products are subject to continuous improvement initiatives aimed at enhancing effectiveness, extending shelf life, improving stress tolerance, and optimizing other relevant parameters."
          },
          {
            title: "Human Capital",
            description: "The formidable team at the Technology & Innovation Center is fortified with expertise spanning various disciplines. This comprehensive approach ensures the integration of diverse perspectives in the development of new products."
          },
          {
            title: "Contamination-Free Environment",
            description: "We maintain the highest technological standards to guarantee production free from contamination, ensuring the delivery of premium quality products."
          },
          {
            title: "ISO 9001:2018 Accreditation",
            description: "With ISO 9001:2018 certification for Quality Management Systems, we guarantee the utmost quality and safety in the manufacturing process of our Biofertilizers, Bio-fungicides, Bio-insecticides, and Bio-stimulants."
          },
          {
            title: "ISO 9001:14001 Accreditation",
            description: "With ISO 9001:14001 certification for Environmental Management Systems, we guarantee the utmost systematic approach for measuring and improving environmental impact in the manufacturing process."
          }
        ].map((item, index) => (
          <div className="col-12 col-md-6 mb-4" key={index}>
            <div className="card shadow-sm rounded-3 border-0">
              <div className="card-body">
                <h4 className="card-title mb-3">{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore3Slider;
