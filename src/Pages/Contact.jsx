import React, { useContext, useState } from 'react'
import '../Css/style.css'
import Nav from '../Component/Nav'
import Footer from '../Component/Footer'
import Logo from '../Assets/Images/logo.png'
import { UserContext } from '../Context/CreateContext'
import axios from 'axios'
import { base_url } from '../Config/Index'
const Contact = () => {
  const { user, token, login, logout } = useContext(UserContext);
  const [contact, setContact] = useState(
    {
      Name: "",
      Email: "",
      Phone: "",
      Company: "",
      Occupation: "",
      Message: "",
    }
  );


  const handleChange = (event) => {
    setContact({ ...contact, [event.target.name]: event.target.value })
  }

  const handleSubmit = async () => {
    const payload = {
      Name: contact.Name,
      Email: contact.Email,
      Phone: contact.Phone,
      Company: contact.Company,
      Occupation: contact.Occupation,
      Message: contact.Message,
    }

    try {
      const response = await axios.post(`${base_url}/api/contactus/post`, payload, {
        headers: {
          Authorization: `${token}`
        }
      });
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {/* <Nav userData={user}></Nav> */}
      {/* <section>
        <div className="container-fluid p-5">
          <div className="row" >
            <div className="col-md-5 pl-5 pr-5 contact_text">
              <div className=' text-center' style={{ width: 100, height: 100, marginBottom:10}}>
                <img src={Logo} className='w-100 h-100' />
              </div>
              <p>Contact us</p>
              <h5>Feel free to contact us anytime</h5>
              <p>thank you for chooosin us we provide best organic fertilixers. you may support to us by sharing your review and sharing our webite to your farmer friends </p>
            </div>
            <div className="col-md-5 contact_form">
              <form>
                <input type='text' placeholder='your name' className='mt-3 bg-light' />
                <input type='text' placeholder='your email' className='mt-3 bg-light' />
                <textarea className="w-100 mt-2 p-3" placeholder='your message'></textarea>
                <button className='btn btn-success float-right'>Send message</button>
              </form>
            </div>
          </div>
        </div>
      </section> */}
      {/* <Footer></Footer> */}
      <section>
        <div className="container-fluid">
          <div className="row">
          <div className="col-12 image-container ">
              <img src="https://t4.ftcdn.net/jpg/07/92/50/39/240_F_792503905_PoWvfmapH78Zbr89f7Ytdu4h3FWjZOxw.jpg" class="d-block w-100 zoom-image" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h3 style={{ marginBottom: 20 }}>Contact us</h3>
                {/* <p>Reach out to us for any inquiries or information you require that isn't available here, and we'll respond promptly.</p> */}
              </div>
            </div>
          </div>
          <div className="row p-5" style={{display:'flex',margin:'auto'}} >
            <p style={{padding:15,fontSize:25}}>Reach out to us for any inquiries or information you require that isn't available here, and we'll respond promptly.</p>
            <div className="col-md-5 bg-success p-5 text-white">
              <b><h3 className='mb-2'>Get in Touch</h3></b><br />
              <p className='mb-4'><b>Phone Number :</b><br />+91 20 60202626</p>
              <p className='mb-4'><b>Email :</b><br />  hr@biocyll.com</p>
              <p className='mb-4'><b>Office Address :</b><br />Office No 404, Karle Chowk, Karle Empire, Nanded City Phase 2, Sinhagad Road Pune 411041</p>
              <p className='mb-4'><b>Mfg Address :</b><br />Sr. No 168/3B Mear Sakal Press, Behind Laxmi Vajan Kata, Urli Devachi, Tal. Haveli, Dist Pune 412308</p>
              <p className='mb-4'><b>Office Hours :</b><br />09:30 AM to 06:30 PM</p>
            </div>
            <div className="col-md-7 bg-light pl-5 pr-5 pb-3">
              <form>
                <div className="row">
                  <div className="col-md-6 mt-3">
                    Full Name :
                    <input placeholder='Enter Your Name' name='Name' value={contact.Name} onChange={handleChange} />
                  </div>
                  <div className="col-md-6 mt-3">
                    Email :
                    <input placeholder='Enter Your Email' name='Email' value={contact.Email} onChange={handleChange} />
                  </div>
                  <div className="col-md-6 mt-3">
                    Phone :
                    <input placeholder='Enter Your Phone Number' name='Phone' value={contact.Phone} onChange={handleChange} />
                  </div>
                  <div className="col-md-6 mt-3">
                    Company Name :
                    <input placeholder='Enter Your Company Name' name='Company' value={contact.Company} onChange={handleChange} />
                  </div>
                  <div className="col-md-6 mt-3">
                    Occupation :
                    <select className='form-control mt-2' name='Occupation' value={contact.Occupation} onChange={handleChange}>
                      <option>Select occupation</option>
                      <option>Farmer Enquiry</option>
                      <option>Business enquiry</option>
                    </select>
                  </div>
                  <div className='col-md-12 mt-3'>
                    Message :
                    <textarea placeholder='Message' className='form-control' name='Message' value={contact.Message} onChange={handleChange} />
                  </div>
                  <div className='col-md-12 mt-3'>
                    <button className='btn btn-success btn-lg' onClick={handleSubmit}>Submit</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-12  mb-5 mt-5">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.70948203036!2d73.69780369915064!3d18.52487031958421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1714217138530!5m2!1sen!2sin" width="100%" style={{ height: 400 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact