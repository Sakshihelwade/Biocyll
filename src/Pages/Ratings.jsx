import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import Nav from '../Component/Nav';
import Footer from '../Component/Footer';
import { UserContext } from '../Context/CreateContext';
import { useParams,useNavigate } from 'react-router-dom';
import { base_url } from '../Config/Index';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Ratings = () => {
  const { user, token, login, logout } = useContext(UserContext);
  const { id } = useParams()
  console.log(id)
  const navigate =useNavigate();
  const [rating, setRating] = useState({
    rating: 0,
    text: "",
  })
  const handleChange = (event) => {
    setRating({ ...rating, [event.target.name]: event.target.value });
    // console.log(rating)
  }

  const handleSubmit = async () => {
    try {
      const response = await axios.patch(`${base_url}/add-review/${id}`, rating, {
        headers: {
          Authorization: `${token}`
        }
      }
      );
      console.log(response)
      setRating({
        rating: 0,
        text: "",
      })
      alert(response.data.msg)
      navigate(`/product_details/${id}`)
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      {/* <Nav userData={user} /> */}
      <section className='bg-light pl-5 pr-5'>
        <div className="container-fluid p-5">
          <h1 className='text-center mb-2'>Add Review</h1>
          <div className="row p-5">
            <div className='col-md-6 p-5' style={{ margin: 'auto', boxShadow: ' rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
              <div className='col-md-12'>
                <h4>Rate This Product</h4>
              </div>
              <div className='col-md-12'>
                <input type="number" name='rating' onChange={(e) => handleChange(e)} />
              </div>
              <div className="col-md-12 mt-4">
                <h4>Review this product</h4>
              </div>
              <div className="col-md-12 mt-2">
                <textarea placeholder='Description' name='text' onChange={(e) => handleChange(e)} className='form-control w-100' style={{ border: '1px solid yellowgreen' }}></textarea>
              </div>
              <div className="col-md-12 text-right mt-3">
                <button className='btn btn-success btn-lg' onClick={handleSubmit}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Ratings;
