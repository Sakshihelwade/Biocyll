// import axios from 'axios';
// import React, { useContext, useState } from 'react'
// import { base_url } from '../Config/Index';
// import { UserContext } from '../Context/CreateContext';

// const DeliveryAddress = ({ getAddress, setAddressToggle }) => {

//   const [address, setAddress] = useState({
//     name: "",
//     mobile: "",
//     locality: '',
//     city: '',
//     state: '',
//     country: '',
//     pincode: '',
//     formattedAddress: '',
//     alternateNo: "",
//     addressType: ""
//   });

//   const { user, token, login, logout } = useContext(UserContext);


//   const handleChange = (event) => {
//     if (event.target.checked) {
//       setAddress({ ...address, addressType: event.target.value });
//     } else {
//       setAddress({ ...address, [event.target.name]: event.target.value });
//     }
//     // console.log(addPost)
//   };

//   const getLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         position => {
//           const { latitude, longitude } = position.coords;
//           fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDSJd_5Z15qL44wRKIFmqkQjyHEeF1ozQA`)
//             .then(response => response.json())
//             .then(data => {
//               if (data.results && data.results.length > 0) {
//                 const addressComponents = data.results[0].address_components;
//                 const formattedAddress = data.results[0].formatted_address;
//                 const address = {
//                   locality: getAddressComponent(addressComponents, 'locality'),
//                   city: getAddressComponent(addressComponents, 'administrative_area_level_2'),
//                   state: getAddressComponent(addressComponents, 'administrative_area_level_1'),
//                   country: getAddressComponent(addressComponents, 'country'),
//                   pincode: getAddressComponent(addressComponents, 'postal_code'),
//                   formattedAddress: formattedAddress
//                 };
//                 setAddress(address);
//                 console.log(address)
//               } else {
//                 setAddress({
//                   locality: 'Address not found',
//                   city: '',
//                   state: '',
//                   country: '',
//                   pincode: '',
//                   formattedAddress: ''
//                 });
//               }
//             })
//             .catch(error => {
//               console.error('Error getting address:', error);
//               setAddress({
//                 locality: 'Error getting address',
//                 city: '',
//                 state: '',
//                 country: '',
//                 pincode: '',
//                 formattedAddress: ''
//               });
//             });
//         },
//         error => {
//           console.error('Error getting location:', error);
//           setAddress({
//             locality: 'Error getting location',
//             city: '',
//             state: '',
//             country: '',
//             pincode: '',
//             formattedAddress: ''
//           });
//         }
//       );
//     } else {
//       console.error('Geolocation is not supported by this browser.');
//       setAddress({
//         locality: 'Geolocation not supported',
//         city: '',
//         state: '',
//         country: '',
//         pincode: '',
//         formattedAddress: ''
//       });
//     }
//   };

//   const getAddressComponent = (addressComponents, componentType) => {
//     const component = addressComponents.find(
//       component => component.types.includes(componentType)
//     );
//     return component ? component.long_name : '';
//   };

//   // console.log(address)

//   const handleSubmit = async () => {
//     const payload = {
//       pincode: Number(address.pincode),
//       state: address.state,
//       city: address.city,
//       locality: address.locality,
//       address: address.formattedAddress,
//       name: address.name,
//       landmark: address.landmark,
//       alternatePhone: address.alternateNo,
//       addressType: address.addressType
//     }
//     // console.log(payload)
//     try {
//       const response = await axios.post(`${base_url}/api/post/address`, payload, {
//         headers: {
//           Authorization: `${token}`
//         }
//       })
//       // setAddpost(response.data)
//       alert(response.data.message)
//       console.log(response)
//       setAddressToggle(false)
//       getAddress()
//     } catch (error) {
//       console.log(error)
//       alert(error.response.data.message)
//     }
//   }
//   return (
//     <>
//       <div className="card mt-4">
//         <div className="card-header ">
//           <div className="row">
//             <div className="col-1">
//               <div className='bg-success text-white' style={{ border: '1px solid green', height: 30, width: 30, textAlign: 'center' }}>2</div>
//             </div>
//             <div className="col-11">Delivery address
//             </div>
//           </div>
//         </div>
//         <div className="card-body">
//           <button className='btn p-2 btn-success' onClick={getLocation}>Use My current Location</button><br />
//           <div className="row">
//             <div className="col-md-6 mt-4">
//               <input className='form-control' type='text' placeholder='Name' onChange={(e) => handleChange(e)} name='name' />
//             </div>
//             <div className="col-md-6 mt-4">
//               <input className='form-control' type='text' placeholder='10-digit mobile number' value={user.mobileNo} onChange={(e) => handleChange(e)} name='mobile' />
//             </div>
//             <div className="col-md-6 mt-4">
//               <input className='form-control' type='text' placeholder='Pincode' onChange={(e) => handleChange(e)} name='pincode' value={address.pincode} />
//             </div>
//             <div className="col-md-6 mt-4">
//               <input className='form-control' type='text' placeholder='Locality' onChange={(e) => handleChange(e)} name='locality' value={address.locality} />
//             </div>
//             <div className="col-md-6 mt-4">
//               <textarea className='form-control' placeholder='Village' onChange={(e) => handleChange(e)} name='address' value={address.formattedAddress} ></textarea>
//             </div>
//             <div className="col-md-6 mt-4">
//               <input className='form-control' type='text' placeholder='City/district/town' onChange={(e) => handleChange(e)} name='city' value={address.city} />
//             </div>
//             <div className="col-md-6 mt-4">
//               <input className='form-control' type='text' placeholder='Landmark(optional)' onChange={(e) => handleChange(e)} name='landmark' />
//             </div>
//             <div className="col-md-6 mt-4">
//               <input className='form-control' type='text' placeholder='Alternate Phone' onChange={(e) => handleChange(e)} name='alternateNo' />
//             </div>
//             <div className="col-12 mt-4">
//               address type :
//             </div>
//             <div className="col-12">
//               {/* <input type='radio' onChange={(e) => handleChange(e)} name='addressType' value="home" /><label> Home(All day delivery)</label>
//               <input type='radio' onChange={(e) => handleChange(e)} name='addressType' value="office" /><label>Work(Delivery between 10am to 5pm)</label> */}
//               <div className="row">
//                 <div style={{ display: "flex", flexDirection: "column" }}>
//                   <div className='ml-3'>
//                     <input
//                       type='radio'
//                       name='addressType'
//                       value="home"
//                       // checked={selectedAddress === item.address}
//                       onChange={(e) => handleChange(e)}
//                       style={{ height: "15px", width: "15px", marginRight: "5px", marginTop: "10px" }}
//                     />
//                     <label htmlFor="checkbox">
//                     Home(All day delivery)
//                     </label>
//                   </div>
//                   <div className='ml-3'>
//                     <input
//                       type="radio"
//                       name='addressType'
//                       value="home"
//                       // checked={priceRange === 'highToLow'}
//                       onChange={(e) => handleChange(e)}
//                       style={{ height: "15px", width: "15px", marginRight: "5px" }}
//                     />
//                     <label htmlFor="checkbox">
//                     Work(Delivery between 10am to 5pm)
//                     </label>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-12 text-right">
//               <button className='btn p-2 btn-success mt-4 ml-3' onClick={handleSubmit}>Save and deliver here</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default DeliveryAddress

import axios from 'axios';
import React, { useContext, useState } from 'react';
import { base_url } from '../Config/Index';
import { UserContext } from '../Context/CreateContext';

const DeliveryAddress = ({ getAddress, setAddressToggle }) => {
  const [address, setAddress] = useState({
    name: "",
    mobile: "",
    locality: '',
    city: '',
    state: '',
    country: '',
    pincode: '',
    formattedAddress: '',
    landmark: "",
    alternateNo: "",
    addressType: ""
    
  });

  const { user, token } = useContext(UserContext);

  // const handleChange = (event) => {
  //   const { name, value, type, checked } = event.target;
  //   if (type === 'radio') {
  //     setAddress({ ...address, addressType: value });
  //   } else {
  //     setAddress({ ...address, [name]: value });
  //   }
  // };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === 'radio') {
      setAddress({ ...address, addressType: value });
    } else {
      setAddress({ ...address, [name]: value });
    }
  };
  
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDSJd_5Z15qL44wRKIFmqkQjyHEeF1ozQA`)
            .then(response => response.json())
            .then(data => {
              if (data.results && data.results.length > 0) {
                const addressComponents = data.results[0].address_components;
                const formattedAddress = data.results[0].formatted_address;
                const newAddress = {
                  ...address,
                  locality: getAddressComponent(addressComponents, 'locality'),
                  city: getAddressComponent(addressComponents, 'administrative_area_level_2'),
                  state: getAddressComponent(addressComponents, 'administrative_area_level_1'),
                  country: getAddressComponent(addressComponents, 'country'),
                  pincode: getAddressComponent(addressComponents, 'postal_code'),
                  formattedAddress: formattedAddress
                };
                setAddress(newAddress);
              } else {
                setAddress({
                  ...address,
                  locality: 'Address not found',
                  city: '',
                  state: '',
                  country: '',
                  pincode: '',
                  formattedAddress: ''
                });
              }
            })
            .catch(error => {
              console.error('Error getting address:', error);
              setAddress({
                ...address,
                locality: 'Error getting address',
                city: '',
                state: '',
                country: '',
                pincode: '',
                formattedAddress: ''
              });
            });
        },
        error => {
          console.error('Error getting location:', error);
          setAddress({
            ...address,
            locality: 'Error getting location',
            city: '',
            state: '',
            country: '',
            pincode: '',
            formattedAddress: ''
          });
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      setAddress({
        ...address,
        locality: 'Geolocation not supported',
        city: '',
        state: '',
        country: '',
        pincode: '',
        formattedAddress: ''
      });
    }
  };

  const getAddressComponent = (addressComponents, componentType) => {
    const component = addressComponents.find(
      component => component.types.includes(componentType)
    );
    return component ? component.long_name : '';
  };

  const validateAddress = () => {
    const requiredFields = ['name', 'mobile', 'locality', 'city', 'state', 'country', 'pincode', 'addressType'];
    
    for (const field of requiredFields) {
      if (!address[field] || address[field].trim() === '') {
        alert(`Please fill in the ${field} field.`);
        return false;
      }
    }
  
    // Additional validation for mobile field to ensure it is a 10-digit number
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(address.mobile)) {
      alert('Please enter a valid 10-digit mobile number.');
      return false;
    }
  
    return true;
  };
  

  // const handleSubmit = async () => {
  //   const payload = {
  //     pincode: Number(address.pincode),
  //     state: address.state,
  //     city: address.city,
  //     locality: address.locality,
  //     address: address.formattedAddress,
  //     name: address.name,
  //     landmark: address.landmark,
  //     alternatePhone: address.alternateNo,
  //     addressType: address.addressType
  //   };

  //   try {
  //     const response = await axios.post(`${base_url}/api/post/address`, payload, {
  //       headers: {
  //         Authorization: `${token}`
  //       }
  //     });
  //     alert(response.data.message);
  //     setAddressToggle(false);
  //     getAddress();
  //   } catch (error) {
  //     console.error(error);
  //     alert(error.response.data.message);
  //   }
  // };
  const handleSubmit = async () => {
    if (!validateAddress()) return; // Stop if validation fails
  
    const payload = {
      pincode: Number(address.pincode),
      state: address.state,
      city: address.city,
      locality: address.locality,
      address: address.formattedAddress,
      name: address.name,
      landmark: address.landmark,
      mobile: address.mobile, // Ensure the mobile field is included
      alternatePhone: address.alternateNo,
      addressType: address.addressType,
    };
  
    try {
      const response = await axios.post(`${base_url}/api/post/address`, payload, {
        headers: {
          Authorization: `${token}`,
        },
      });
      alert(response.data.message);
      setAddressToggle(false);
      getAddress();
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || 'An error occurred');
    }
  };
  

  
  
  return (
    <>
      <div className="card mt-4">
        <div className="card-header">
          <div className="row">
            <div className="col-1">
              <div className='bg-success text-white' style={{ border: '1px solid green', height: 30, width: 30, textAlign: 'center' }}>2</div>
            </div>
            <div className="col-11">Delivery address</div>
          </div>
        </div>
        <div className="card-body">
          <button className='btn p-2 btn-success' onClick={getLocation}>Use My current Location</button><br />
          <div className="row">
            <div className="col-md-6 mt-4">
              <input className='form-control' type='text' placeholder='Name' onChange={handleChange} name='name' value={address.name} />
            </div>
            <div className="col-md-6 mt-4">
              <input className='form-control' type='text' placeholder=' mobile number' onChange={handleChange} name='mobile' value={address.mobile || user.mobileNo} />
            </div>
            <div className="col-md-6 mt-4">
              <input className='form-control' type='text' placeholder='Pincode' onChange={handleChange} name='pincode' value={address.pincode} />
            </div>
            <div className="col-md-6 mt-4">
              <input className='form-control' type='text' placeholder='Locality' onChange={handleChange} name='locality' value={address.locality} />
            </div>
            {/* <div className="col-md-6 mt-4">
              <textarea className='form-control' placeholder='Village' onChange={handleChange} name='formattedAddress' value={address.formattedAddress}></textarea>
            </div> */}
            <div className="col-md-6 mt-4">
              <input className='form-control' type='text' placeholder='City/district/town' onChange={handleChange} name='city' value={address.city} />
            </div>

            <div className="col-md-6 mt-4">
              <input className='form-control' type='text' placeholder='State' onChange={handleChange} name='state' value={address.state} />
            </div>

            <div className="col-md-6 mt-4">
              <input className='form-control' type='text' placeholder='Country' onChange={handleChange} name='country' value={address.country} />
            </div>
            <div className="col-md-6 mt-4">
              <textarea className='form-control' placeholder='Address' onChange={handleChange} name='formattedAddress' value={address.formattedAddress}></textarea>
            </div>
            <div className="col-md-6 mt-4">
              <input className='form-control' type='text' placeholder='Landmark(optional)' onChange={handleChange} name='landmark' value={address.landmark} />
            </div>
            <div className="col-md-6 mt-4">
              <input className='form-control' type='text' placeholder='Alternate Phone' onChange={handleChange} name='alternateNo' value={address.alternateNo} />
            </div>
            <div className="col-12 mt-4">
              address type :
            </div>
            <div className="col-12">
              <div className="row">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div className='ml-3'>
                    <input
                      type='radio'
                      name='addressType'
                      value="home"
                      onChange={handleChange}
                      style={{ height: "15px", width: "15px", marginRight: "5px", marginTop: "10px" }}
                    />
                    <label htmlFor="checkbox">Home(All day delivery)</label>
                  </div>
                  <div className='ml-3'>
                    <input
                      type="radio"
                      name='addressType'
                      value="office"
                      onChange={handleChange}
                      style={{ height: "15px", width: "15px", marginRight: "5px" }}
                    />
                    <label htmlFor="checkbox">Work(Delivery between 10am to 5pm)</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 text-right">
              <button className='btn p-2 btn-success mt-4 ml-3' onClick={handleSubmit}>Save and deliver here</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeliveryAddress;
