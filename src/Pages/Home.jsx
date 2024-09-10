// import React, { useContext, useEffect, useState } from 'react'
// import Nav from '../Component/Nav'
// import Footer from '../Component/Footer'
// import Slider from '../Component/Slider'
// import About from '../Component/About'
// import Services from '../Component/Services'
// import Design from '../Component/Design'
// // import Products from '../Component/Products_list'
// import { Context, UserContext } from '../Context/CreateContext'
// import axios from 'axios'
// import { base_url } from '../Config/Index'
// // import OurProducts from '../Component/OurProducts'
// import AllProducts from '../Component/AllProducts'
// import ContactForm from '../Component/ContactForm'
// import HowCanCrowdFundingHelp from '../Component/HowCanCrowdFundingHelp'
// import GiveEveryMonth from '../Component/GiveEveryMonth'
// import CategoriWise from '../Component/CategoriWise'
// import ProductPortfolio from '../Component/ProductPortfolio'
// import Journey from '../Component/Journey'
// import Harnessing from '../Component/Harnessing'
// const Home = (userData) => {
//   const { user, token, login, logout } = useContext(UserContext);
//   console.log(token)
//   console.log("Sakshi")
//   const [product, setProduct] = useState();

//   // useEffect(() => {
//   //   if (token,userData) {
//   //     // User is logged in, you can use userData here
//   //     console.log('User is logged in:', userData);
//   //   } else {
//   //     // User is not logged in, maybe redirect to login page
//   //     console.log('User is not logged in');
//   //   }
//   // }, [token, userData]);

//   useEffect(() => {
//     getAllProducts()
//   }, [])

//   async function getAllProducts() {
//     try {
//       const response = await axios.get(`${base_url}/api/get/all/products`, {
//         headers: {
//           Authorization: `${token}`
//         }
//       });
//       setProduct(response.data);
//       console.log("hi", setProduct);
//     } catch (error) {
//       // Handle errors
//       if (error.response) {
//         // The request was made and the server responded with a status code
//         console.error('Error:', error.response.status, error.response.data);
//       } else if (error.request) {
//         // The request was made but no response was received
//         console.error('No response from the server');
//       } else {
//         // Something happened in setting up the request that triggered an Error
//         console.error('Error:', error.message);
//       }
//     }
//   }


//   return (
//     <div>
//       {/* <Nav userData={user}></Nav> */}
//       <Slider></Slider>
//       <AllProducts product={product}></AllProducts>
//       <Design/>
//       {/* <ProductPortfolio/> */}
//       <Journey/>
//       <Harnessing/>
//       <Services></Services>
//       {/* <CategoriWise/> */}
//       <ContactForm/>
//       {/* <Footer></Footer> */}
//     </div>

//   )
// }

// export default Home
import React, { useContext, useEffect, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner'; // Import the loader component
import Nav from '../Component/Nav';
import Footer from '../Component/Footer';
import Slider from '../Component/Slider';
import About from '../Component/About';
import Services from '../Component/Services';
import Design from '../Component/Design';
import { Context, UserContext } from '../Context/CreateContext';
import axios from 'axios';
import { base_url } from '../Config/Index';
import AllProducts from '../Component/AllProducts';
import ContactForm from '../Component/ContactForm';
import Journey from '../Component/Journey';
import Harnessing from '../Component/Harnessing';

const Home = (userData) => {
  const { user, token, login, logout } = useContext(UserContext);
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    getAllProducts();
  }, []);

  async function getAllProducts() {
    try {
      const response = await axios.get(`${base_url}/api/get/all/products`, {
        headers: {
          Authorization: `${token}`
        }
      });
      setProduct(response.data);
    } catch (error) {
      if (error.response) {
        console.error('Error:', error.response.status, error.response.data);
      } else if (error.request) {
        console.error('No response from the server');
      } else {
        console.error('Error:', error.message);
      }
    } finally {
      setLoading(false); 
    }
  }

  return (
    <div>
      {loading ? ( 
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
          <ThreeDots 
            height={60}
            width={60}
            color="success"
            ariaLabel="loading"
            secondaryColor="#ccc"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      ) : (
        <>
          {/* <Nav userData={user}></Nav> */}
          <Slider></Slider>
          <AllProducts product={product}></AllProducts>
          <Design/>
          <Journey/>
          <Harnessing/>
          <Services></Services>
          <ContactForm/>
          {/* <Footer></Footer> */}
        </>
      )}
    </div>
  );
};

export default Home;
