import React from 'react';
// import { Link, Element } from 'react-scroll';
// import "../Css/style.css";
import about_img from '../Assets/Images/about4.jpg'
const About = () => {
  return (
    <>
      <div className="row">
        <div className="col-12 text-center mb-3 ">
          <h3>About Us</h3>
        </div>
        {/* <div className="col-md-8  mb-3">
          <img src={about_img} className='w-100 about_img' style={{ borderRadius: 20 }} />
        </div> */}
        <div className="col-9 text-center pr-5 pl-5 ">
          <p style={{ fontStyle: 'Sans Serif' }}>
            <div className='p-3 c1 l-bg-green mt-2' style={{ width: '100%', height: 'auto', borderTopLeftRadius: 30, borderBottomRightRadius: 30, borderBottomLeftRadius: 30 }}>
              Biocyll is a premier e-commerce platform dedicated to providing a comprehensive range of agriculture-related products, including high-quality fertilizers, seeds, pesticides, and farming equipment. Headquartered in Pune, Biocyll operates independently, driven by a mission to revolutionize the agricultural sector through innovative and sustainable solutions.
            </div>
          </p>
        </div>
        <div className="col-3"></div>
        <div className="col-3"></div>
        <div className="col-9 text-center pr-5 pl-5 ">
          <p style={{ fontStyle: 'Sans Serif' }}>
            <div className='p-3 c1 l-bg-orange mt-2' style={{ width: '100%', height: 'auto', borderTopRightRadius: 30, borderBottomRightRadius: 30, borderBottomLeftRadius: 30 }}>
              With a rich legacy of excellence, Biocyll has established itself as a trusted name in India, celebrated for its strong values and commitment to ethical business practices. We have a robust operational footprint across India and are steadily expanding our global presence. Our primary mission is to exceed customer expectations through superior product quality and reliable delivery, all while creating substantial value for our customers and maintaining a balanced approach to the interests of shareholders, employees, and the broader community.
            </div>
          </p>
        </div>
        <div className="col-9 text-center pr-5 pl-5 ">
          <p style={{ fontStyle: 'Sans Serif' }}>
            <div className='p-3 c1 l-bg-cyan mt-2' style={{ width: '100%', height: 'auto', borderTopLeftRadius: 30, borderBottomRightRadius: 30, borderBottomLeftRadius: 30 }}>
              Biocyll leverages its strength from a solid financial foundation, technological excellence, and a dedicated team of skilled professionals. Our commitment to innovation and sustainability drives us to continuously enhance our product offerings and services, ensuring that we meet the evolving needs of the agricultural sector. At Biocyll, we are passionate about empowering farmers and agricultural businesses with the best tools and resources to achieve optimal productivity and success.
            </div>
          </p>
        </div>
      </div>
      {/* <section id='about_us'>
        <div  className="container-fluid  bg-light content" id="animatedContent" style={{boxShadow:' rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
          <div className="row pl-5 pr-5 pb-5"> */}
      {/* <div className="col-md-12">
              <div className="row"> */}
      {/* <div className="col-12 text-center m-4"> */}
      {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5eWdY0tdJxzIqJJME6lB2mel1BxRWi-oondI0cx1J-kftPFvF_5HhCW4gTmXvg1j8VRc&usqp=CAU' className='w-100 ' style={{ borderRadius: 10 }} />
                </div>
                <div className="col-4">
                  <img src='data:image/jpeg;base64,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' className='w-100 ' style={{ borderRadius: 10 }} />
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9ypsocV17VuI2XLxMDf10YUn1pXkg_Eq7EwmQZaFyBTT6SIzVdxli0eKtYr8LqmGrM_s&usqp=CAU' className='about_img' /> */}
      {/* <img src={about_img} style={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}/>
            </div> */}
      {/* </div>
            </div> */}
      {/* <div className="col-12 text-center">
              <h1 className='pb-3' ><i>Why Choose Us</i></h1>
            </div>
            <div className="col-12 text-center" >
              <div className='pl-5 pr-5'>
                <p>At Biocyll, we are passionate about cultivating a sustainable future through the power of organic fertilizers. Our commitment to environmental stewardship, innovation, and quality sets us apart as a leader in the organic agriculture industry.
                </p>
              </div> */}
      {/* <div className="row">
                <div className="col-md-4">
                  <img src='https://themewagon.github.io/furni/images/truck.svg'></img>
                  <p>Premium Quality</p>
                  <small> Our organic fertilizers are crafted using the highest quality </small>
                </div>
                <div className="col-md-4">
                  <img src='https://themewagon.github.io/furni/images/bag.svg'></img>
                  <p>Sustainability</p>
                  <small>We are committed to sustainable practices, from sourcing raw. </small>
                </div>
                <div className="col-md-4">
                  <img src='https://themewagon.github.io/furni/images/return.svg' />
                  <p>Innovation</p>
                  <small>Embracing cutting-edge research and technology, we continuously strive </small>
                </div>
              </div> */}
      {/* </div>
          </div>
        </div>
        <div className="container-fluid p-5">
          <div className="row pl-5 pr-5">
            <div className="col-md-3 text-center" style={{margin:'auto'}}>
              <img src='https://themewagon.github.io/furni/images/truck.svg' ></img>
              <p>Premium Quality</p>
              <small> Our organic fertilizers are crafted using the highest quality </small>
            </div>
            <div className="col-md-3 text-center" style={{margin:'auto'}}>
              <img src='https://themewagon.github.io/furni/images/bag.svg'></img>
              <p>Sustainability</p>
              <small>We are committed to sustainable practices, from sourcing raw. </small>
            </div>
            <div className="col-md-3 text-center" style={{margin:'auto'}}>
              <img src='https://themewagon.github.io/furni/images/return.svg' />
              <p>Innovation</p>
              <small>Embracing cutting-edge research and technology, we continuously strive </small>
            </div>
            <div className="col-md-3 text-center" style={{margin:'auto'}}>
              <img src='https://themewagon.github.io/furni/images/truck.svg'></img>
              <p>Premium Quality</p>
              <small> Our organic fertilizers are crafted using the highest quality </small>
            </div>
          </div>
        </div>
      </section> */}

    </>
  )
}

export default About
