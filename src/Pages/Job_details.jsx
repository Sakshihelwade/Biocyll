import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { base_url } from '../Config/Index';

const JobDetails = () => {
  const location = useLocation();
  const { state: item } = location;
  const { id: jobId } = useParams();
  const [jobDetails, setJobDetails] = useState(item || null);
  const [loading, setLoading] = useState(!item);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    resume: null,
  });

  useEffect(() => {
    if (!item) {
      const fetchJobDetails = async () => {
        try {
          const response = await axios.get(`${base_url}/api/get/career`);
          const jobData = response.data.find((job) => job._id === jobId);
          setJobDetails(jobData);
        } catch (err) {
          setError('Failed to fetch job details. Please try again later.');
          console.error(err);
        } finally {
          setLoading(false);
        }
      };
      fetchJobDetails();
    }
  }, [item, jobId]);

  const handleApplyNowClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleFormChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
   const payload = new FormData()
   payload.append("name",formData.name)
   payload.append("email",formData.email)
   payload.append("mobile",formData.mobile)
   payload.append("file",formData.resume)

   axios.post(`${base_url}/api/post/resume`,payload,{
    headers:{
        "Content-Type" : "multipart/form-data"
    }
   })
   .then((res)=>{
    console.log(res)
    console.log('Form submitted:', formData);   
   })
   .catch((err)=>{
    console.log(err)
   })
    handleCloseModal();
    
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!jobDetails) {
    return <div>Job details not found.</div>;
  }

  return (
    <section>
      <div className="container-fluid">
        <div className="row">
        <div className="col-12 image-container">
              <img src="https://t4.ftcdn.net/jpg/07/92/50/39/240_F_792503905_PoWvfmapH78Zbr89f7Ytdu4h3FWjZOxw.jpg" className="d-block w-100 zoom-image" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h3 style={{ marginBottom: 180 }}>Job Openings</h3>
            </div>
          </div>
        </div>
        <div className="row p-4" style={{backgroundColor:'rgb(239, 252, 232)'}}>
          <div
            className="col-md-3 p-5 bg-light mt-4"
            style={{
              width: '100px',
              height: '300px',
              borderRadius: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <i className="fa-solid fa-user" style={{ fontSize: '180px', color: 'green' }}></i>
          </div>
          <div className="col-md-9 p-5">
            <h5>{jobDetails.position}</h5>
            <p>Description: {jobDetails.Description}</p>
            <b>Status:</b> {jobDetails.Status}<br />
            <b>Experience:</b> {jobDetails.Experience}<br />
            <b>Qualifications:</b> {jobDetails.Qualifications}<br />
            <b>Location:</b> {jobDetails.Location}<br />
            <b>Salary:</b> {jobDetails.salary}<br />
            <h5 className='mt-4 mb-3'>Roles & Responsibilities:</h5>
            <ul>
              {jobDetails.Roles_Responsibilities?.map((role, index) => (
                <li key={index}><small>{role}</small></li>
              ))}
            </ul>
            <button className='btn btn-success float-right' onClick={handleApplyNowClick}>
              Apply now
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header bg-success">
                <h5 className="modal-title  text-white">Apply for {jobDetails.position}</h5>
                <button type="button" className="close" onClick={handleCloseModal} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {/* Job application form */}
                <form onSubmit={handleFormSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleFormChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleFormChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="mobile">Mobile Number</label>
                    <input type="tel" className="form-control" id="mobile" name="mobile" value={formData.mobile} onChange={handleFormChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="resume">Resume</label>
                    <input type="file" className="form-control-file" id="resume" name="resume" onChange={handleFormChange} required />
                  </div>
                  <button type="submit" className="btn btn-success" style={{float:'right'}}>Submit</button>
                </form>
                <br/>
                <div className="col-12 text-center">
                    <p>or</p>
                    <br/>
                    <a href="mailto:hsakshi28@gmail.com">Share resume on hr@biocyll.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default JobDetails;
