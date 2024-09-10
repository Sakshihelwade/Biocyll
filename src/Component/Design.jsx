// import React, { useContext, useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../Css/style.css';
// import axios from 'axios';
// import { base_url } from '../Config/Index';
// import { UserContext } from '../Context/CreateContext';

// const Design = () => {
//     const [categories, setCategories] = useState([]);
//     const { token } = useContext(UserContext);
//     const navigate = useNavigate();

//     useEffect(() => {
//         getCategories();
//     }, []);

//     const getCategories = async () => {
//         try {
//             const response = await axios.get(`${base_url}/api/getall/categories`, {
//                 headers: {
//                     Authorization: `${token}`
//                 }
//             });
//             setCategories(response.data);
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     const handleCategoryClick = (categoryId) => {
//         navigate(`/b2b/product-portfolio/${categoryId}`);
//     };

//     return (
//         <section style={{ margin: 70 }}>
//             <div className="container-fluid p-5">
//                 <div className="row" style={{ display: 'flex' }}>
//                     <div className="col-12 text-center">
//                         <h5>Environmentally Responsible Solutions</h5>
//                         <p>Adhering to Regulations</p>
//                         <button className='btn'>Promoting Sustainable Farming</button>
//                     </div>
//                     {categories.map((item) => (
//                         <div className="col-4 image-container" key={item._id}>
//                             <img src='https://moneycheck.com/wp-content/uploads/2018/09/brexit-fruit-veg-prices.jpg' className='w-0 h-100' alt={item.category} />
//                             <div className="title-overlay">
//                                 <h2>{item.category}</h2>
//                             </div>
//                             <div className="hover-overlay" onClick={() => handleCategoryClick(item._id)}>
//                                 <button className='btn btn-light'>Shop Now</button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Design;
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Css/style.css';
import axios from 'axios';
import { base_url } from '../Config/Index';
import { UserContext } from '../Context/CreateContext';

const Design = () => {
  const [categories, setCategories] = useState([]);
  const { token } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    try {
      const response = await axios.get(`${base_url}/api/getall/categories`, {
        headers: {
          Authorization: `${token}`,
        },
      });
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCategoryClick = (categoryId) => {
    navigate(`/b2b/product-portfolio/${categoryId}`);
  };

  return (
    <section style={{ margin: 70 }}>
      <div className="container-fluid p-5">
        <div className="row">
          <div className="col-12 text-center mb-4">
            <h5>Environmentally Responsible Solutions</h5>
            <p>Adhering to Regulations</p>
            <button className="btn btn-primary">Promoting Sustainable Farming</button>
          </div>
          {categories.map((item) => (
            <div className="col-12 col-md-6 col-lg-4 mb-4" key={item._id}>
              <div className="image-container position-relative">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9bDFhppbEVZQyFLOT-uuCDmTO4iLAb7cw_A&s"
                  className="img-fluid w-100"
                  alt={item.category}
                />
                <div className="title-overlay position-absolute w-10 text-center">
                  <h2>{item.category}</h2>
                </div>
                <div
                  className="hover-overlay position-absolute w-100 text-center d-flex justify-content-center align-items-center"
                  style={{ top: 0, bottom: 0, left: 0, right: 0 }}
                  onClick={() => handleCategoryClick(item._id)}
                >
                  <button className="btn btn-light">Shop Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Design;
