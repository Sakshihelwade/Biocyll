import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { base_url } from '../Config/Index';
import { UserContext } from '../Context/CreateContext';

const Team = () => {
  const { user, token, login, logout } = useContext(UserContext);

  const [team, setTeam] = useState([]);
// console.log(team)
  useEffect(() => {
    getTeam()
  }, [])

  const getTeam = async () => {
    try {
      const response = await axios.get(`${base_url}/api/get/teams`, {
        headers: {
          Authorization: `${token}`
        }
      })
      setTeam(response.data)
      // console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      {/* <div className="row">
        <div className="col-12 text-center mt-0 mb-4">
          <h3>Our Team</h3>
        </div>
        <div className="col-md-7 mb-5" style={{ margin: 'auto' }}>
          <div className="card bg-light p-3" >
            <div className="row" >
              <div className="col-4" style={{ height: 150 }}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8iteO_88LFFgzf7wGG_lj06xPu7znEUszmWX2QVOs5A&s' className='w-100 h-100' />
              </div>
              <div className="col-8" style={{ height: 150 }}>
                <h4>Mr. Saurabh Bhandari</h4>
                <p>Web development refers to the overall process of creating websites or web applications, including the project's design, layout, coding, content creation, and functionality.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-7 mb-5" style={{ margin: 'auto' }}>
          <div className="card bg-light p-3" >
            <div className="row" >
              <div className="col-4" style={{ height: 150 }}>
                <img src='https://smartcdn.gprod.postmedia.digital/financialpost/wp-content/uploads/2015/09/jack-dorsey-twitter-inc.jpg' className='w-100 h-100' />
              </div>
              <div className="col-8" style={{ height: 150 }}>
                <h4>Mr. abhishek korde</h4>
                <p>Web development refers to the overall process of creating websites or web applications, including the project's design, layout, coding, content creation, and functionality.</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="row"  >
        <div className="col-12 text-center mt-0 mb-4 headings">
          <h3>Our Team</h3>
        </div>
      </div>
      <div className="row p-4">
        {team.map((item, index) => (
          // return(
            <div className="col-md-3 card " style={{ fontStyle: 'Sans Serif',  fontSize:'100%'}} >
            <div className="row">
              <div className="col-12 p-2">
                <img src={item?.image} className='w-100 h-100' />
              </div>
              <div className="col-12 bg-light">
                <p><b>{item?.name}</b><br />
                  {item?.position}</p>
              </div>
            </div>
          </div>
          
        ))}
      </div>
    </>
  )
}

export default Team
