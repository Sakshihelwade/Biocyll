// import axios from 'axios';
// import React, { useContext, useEffect, useState } from 'react'
// import { base_url } from '../Config/Index';
// import { UserContext } from '../Context/CreateContext';

// const Clients = () => {
//   const [client, setClient] = useState();
//   const { user, token, login, logout } = useContext(UserContext);

//   useEffect((item, index) => {
//     getClients()
//   }, [])

//   const getClients = async () => {
//     try {
//       const response = await axios.get(`${base_url}/api/get/Client`, {
//         headers: {
//           Authorization: `${token}`
//         }
//       })
//       console.log(response.data)
//       setClient(response.data)
//     } catch (error) {
//       console.log(error)
//     }
//   }
//   return (
//     <>
//       <div className="row" >
//         <div className="col-12 text-center mt-0 mb-4 headings">
//           <h3>Our Clients</h3>
//         </div>
//       </div>
//       <div className="row p-4">
//         {client.map((item, index) => (
//           <div className="col-md-3 card" >
//             <div className="row">
//               <div className="col-12 p-2">
//                 <img src={item.image} className='w-100 h-100' />
//               </div>
//               <div className="col-12 bg-light">
//                 <p><b>{item.company_name}</b><br />
//                   {item.decription}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   )
// }

// export default Clients


import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { base_url } from '../Config/Index';
import { UserContext } from '../Context/CreateContext';

const Clients = () => {
  const [client, setClient] = useState([]); // Initialize client as an empty array
  const { token } = useContext(UserContext); // Destructure only needed values

  useEffect(() => {
    getClients(); // Fetch clients when the component mounts
  }, []);

  const getClients = async () => {
    try {
      const response = await axios.get(`${base_url}/api/get/Client`, {
        headers: {
          Authorization: `${token}`,
        },
      });
      console.log(response.data);
      setClient(response.data); // Set client state with response data
    } catch (error) {
      console.log('Error fetching clients:', error); // Improved error handling
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-12 text-center mt-0 mb-4 headings">
          <h3>Our Clients</h3>
        </div>
      </div>
      <div className="row p-4">
        {client.length > 0 ? (
          client.map((item, index) => (
            <div className="col-md-3 card" key={index}> {/* Added key prop */}
              <div className="row">
                <div className="col-12 p-2">
                  <img
                    src={item.image}
                    className="w-100 h-100"
                    alt="Client Logo" // Added alt attribute
                  />
                </div>
                <div className="col-12 bg-light">
                  <p>
                    <b>{item.company_name}</b>
                    <br />
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="col-12 text-center">No clients found.</p> 
        )}
      </div>
    </>
  );
};

export default Clients;
