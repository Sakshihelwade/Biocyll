import React, { useContext, useState } from 'react'
import { UserContext } from '../Context/CreateContext';
import axios from 'axios';
import { base_url } from '../Config/Index';

const ContactForm = () => {
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
            <section>

                <div className="container-fluid p-5">
                    <div className="row">
                        <div className="col-12  bg-light">
                            <b><h3 className=''>Get in Touch</h3></b>
                        </div>
                        <div className="col-8 p-3">
                            <p>Reach out to us for any inquiries or information you require that isn't available here, and we'll respond promptly.</p>
                        </div>
                        <div className="col-md-5 p-5" style={{ background: 'linear-gradient(to bottom, lightgreen, green)' , color: 'white',boxShadow:' rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'}}>
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
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactForm
