import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { base_url } from '../Config/Index';

const JobCard = ({ job }) => {
  const navigate = useNavigate();

  return (
    <div className="col-12 p-3 mb-3 bg-white" style={{ border: '1px solid green', boxShadow: 'rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px' }}>
      <div className="row">
        <div className="col-md-5">
          <p>{job.position}</p>
        </div>
        <div className="col-md-2">
          {job.Location}
        </div>
        <div className="col-md-3">
          {job.Status}
        </div>
        <div className="col-md-2">
          <button
          style={{float:'right'}}
            className='btn btn-sm btn-success'
            onClick={() => navigate(`/jobdetails/${job._id}`, { state: job })}
          >
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

const CurrentOpenings = () => {
  const [openings, setOpenings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOpenings = async () => {
      try {
        const response = await axios.get(`${base_url}/api/get/career`);
        setOpenings(response.data);
      } catch (err) {
        setError('Failed to fetch job openings. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchOpenings();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          {/* <div className="col-12 text-center pb-3">
            <h4>Check Open Positions</h4>
          </div> */}
          {openings.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentOpenings;
