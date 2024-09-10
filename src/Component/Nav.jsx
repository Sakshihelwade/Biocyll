// import React, { useContext, useEffect, useState } from 'react'
// import "../Css/style.css"
// import logo from '../Assets/Images/logo.png';
// import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
// import { UserContext, useUser } from '../Context/CreateContext'
// import { useAuth } from '../Context/CreateContext';
// import axios from 'axios';
// import { base_url } from '../Config/Index';

// const Nav = () => {
//   const { id } = useParams();
//   const { user, token, login, logout } = useContext(UserContext);
//   // console.log(user)
//   const [isSearchOpen, setSearchOpen] = useState(false);
//   const [searchText, setSearchText] = useState("")
//   const [isNavbarOpen, setIsNavbarOpen] = useState(false);
//   const [searchResults, setSearchResults] = useState([])
//   const [cartItems, setCartitems] = useState(0)

//   const navigate = useNavigate();

//   const toggleNavbar = () => {
//     setIsNavbarOpen(!isNavbarOpen);
//   };

//   const toggleSearch = () => {
//     setSearchOpen(!isSearchOpen);
//   };

//   const handleSearchInputChange = (e) => {
//     setSearchText(e.target.value);
//   };

//   const clearSearchText = () => {
//     setSearchText('');
//   };

//   useEffect(() => {
//     getCartItems()
//   }, [token])
//   console.log(cartItems)

//   const handleSearch = (q) => {
//     axios.get(`${base_url}/api/search/products?search=${q}`)
//       .then((res) => {
//         setSearchResults(res.data)
//         console.log(res.data)
//       })
//       .catch((err) => {
//         console.log(err)
//       })
//   }

//   const getCartItems = async () => {
//     try {
//       const response = await axios.get(`${base_url}/api/get/card`, {
//         headers: {
//           Authorization: `${token}`
//         }
//       })
//       setCartitems(response.data.items.length)
//     } catch (error) {
//       // console.log(error)
//       setCartitems(0)
//     }
//   }

//   return (
//     <>
//       <section className='nav1' style={{ boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px' }}>
//         <div className="container-fluid">
//           <div className="row">
//             <div className="col-1">
//               <NavLink to="/"><img src={logo} className='w-100' /></NavLink>
//             </div>
//             <div className="col-7 mt-4">
//               <form className="form-inline my-2 my-lg-0">
//                 <div className="position-relative w-100">
//                   <input
//                     className="form-controle-100 "
//                     type="search"
//                     placeholder="Search for a Product.."
//                     aria-label="Search"
//                     style={{ borderRadius: 20, marginBottom: '20px' }}
//                     value={searchText}
//                     onChange={(e) => {
//                       setSearchText(e.target.value);
//                       handleSearch(e.target.value);
//                     }}
//                   />

//                   {/* Search Suggestions */}
//                   {searchResults.length > 0 && (
//                     <div className="search-suggestions mb-3">
//                       {searchResults.map((result) => (
//                         <div key={result._id} className="search-suggestion" onClick={() => {
//                           navigate(`/product_details/${result._id}`);
//                           setSearchResults([])
//                           setSearchText(result.title)
//                         }}>
//                           {result.title}
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               </form>
//             </div>
//             {/* <div className="col-2 mt-4 text-right">
//               <button className='btn btn-sm  text-white  mr-5' style={{marginTop:'5px', background: 'linear-gradient(to right, lightgreen, green)' }} onClick={() => {
//                 navigate('/product_page')
//               }}>Shop Now</button>
//               <NavLink to="/cart">
//                 <i className="fa-solid fa-cart-shopping text-success mr-3" style={{ fontSize: 25 }}></i><text style={{ fontSize: 20, color: 'black' }}></text>
//               </NavLink>
//               {cartItems > 0 && (
//                 <span className="cart-count-badge" > {cartItems}</span>
//               )}
//             </div> */}
//             <div className="col-2  text-right d-flex align-items-center justify-content-end">
//               {/* Shop Now Button */}
//               <div className="shop-now-button mr-3">
//                 <button
//                   className="btn btn-sm text-white"
//                   style={{
//                     // marginTop: "5px",
//                     background: "linear-gradient(to right, lightgreen, green)",
//                   }}
//                   onClick={() => {
//                     navigate("/product_page");
//                   }}
//                 >
//                   Shop Now
//                 </button>
//               </div>

//               {/* Cart Icon Section */}
//               <div className="cart-icon">
//                 <NavLink to="/cart">
//                   <i
//                     className="fa-solid fa-cart-shopping text-success"
//                     style={{ fontSize: 25 }}
//                   ></i>
//                 </NavLink>
//                 {/* {cartItems > 0 && <span className="cart-count-badge">{cartItems}</span>} */}
//                 {cartItems > 0 && (
//                   <span
//                     className="cart-count-badge position-absolute"
//                     style={{ bottom: "10px", width: "25px", height: "25px", marginTop: "40px" }}
//                   >
//                     {cartItems}
//                   </span>
//                 )}
//               </div>
//             </div>

//             <div className="col-2 mt-4">
//               {!user ? (
//                 <>
//                   <div class="dropdown">
//                     <button class="btn btn-success  " style={{ display: 'flex', margin: 'auto' }} type="button" data-toggle="dropdown" aria-expanded="false">
//                       Login
//                     </button>
//                     <div class="dropdown-menu text-center">
//                       <NavLink to="/register" className="text-dark"><a className=" dropdown-item w-100 ">Sign Up</a></NavLink>
//                       <NavLink to="/login" className="text-dark"><a className="  dropdown-item w-100 ">Sign in</a></NavLink>
//                     </div>
//                   </div>

//                 </>
//               ) : (
//                 <>
//                   <div className="dropdown">
//                     <div className='p-1 dropdown-toggle text-light' role="button" data-toggle="dropdown" aria-expanded="false" style={{ background: 'linear-gradient(to right, lightgreen, green)', borderTopLeftRadius: 20, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
//                       <text style={{ fontSize: 18, color: 'white' }}>👋🏻Hello, <b>{user.username.split(" ")[0]}</b></text>
//                     </div>

//                     <div className="dropdown-menu p-2">
//                       <a className="dropdown-item" href="#">
//                         <div className="row">
//                           <div className="col-3">
//                             <i className="fa-solid fa-circle-user text-success mt-2" style={{ fontSize: 30 }} ></i>
//                           </div>
//                           <div className="col-9  " >
//                             Hello<br /><small>{user.username}</small>
//                           </div>
//                         </div>
//                       </a>
//                       <NavLink to="/my_orders"><text className="dropdown-item p-1">My Orders</text></NavLink>
//                       <NavLink to="/manage_add"><text className="dropdown-item p-1"> Manage Addresses</text></NavLink>
//                       <a className="  dropdown-item p-1" onClick={logout}>logout</a>
//                     </div>
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>

//           <div className="row bg-light">
//             <div className="col-12">
//               <ul
//                 style={{
//                   display: 'flex',
//                   listStyleType: 'none',
//                   justifyContent: 'space-between',
//                 }}
//               >
//                 <li className="mt-2">
//                   <div className="dropdown">
//                     {/* <a
//                       className="nav-link dropdown-toggle font-weight-bold"
//                       href="#"
//                       id="aboutDropdown"
//                       role="button"
//                       aria-haspopup="true"
//                       aria-expanded="false"
//                     >
//                       About Us
//                     </a> */}
//                     <button
//                       className="w-100 font-weight-bold btn dropdown-toggle custom-dropdown-toggle"
//                       type="button"
//                       data-toggle="dropdown"
//                       aria-expanded="false"
//                     >
//                       About Us
//                     </button>
//                     <div className="dropdown-menu" aria-labelledby="aboutDropdown">
//                       <Link className="dropdown-item" to="/aboutus/about-us">
//                         About us
//                       </Link>
//                       <Link className="dropdown-item" to="/aboutus/journey">
//                         Our Journey
//                       </Link>
//                       <Link className="dropdown-item" to="/aboutus/vision">
//                         Vision and Mission
//                       </Link>
//                       <Link className="dropdown-item" to="/aboutus/values">
//                         Core Values
//                       </Link>
//                       <Link className="dropdown-item" to="/aboutus/team">
//                         Our Team
//                       </Link>
//                       <Link className="dropdown-item" to="/aboutus/clients">
//                         Our Clients
//                       </Link>
//                       <Link className="dropdown-item" to="/aboutus/cert">
//                         Certifications
//                       </Link>
//                     </div>
//                   </div>
//                 </li>

//                 <li className="mt-2">
//                   <div className="dropdown">
//                     <button
//                       className="w-100 font-weight-bold btn dropdown-toggle custom-dropdown-toggle"
//                       type="button"
//                       data-toggle="dropdown"
//                       aria-expanded="false"
//                     >
//                       Innovations
//                     </button>
//                     <div
//                       className="dropdown-menu"
//                       aria-labelledby="innovationDropdown"
//                     >
//                       <Link
//                         className="dropdown-item"
//                         to="/innovation/slider3content"
//                       >
//                         Our premier technology and innovation facility
//                       </Link>
//                       <Link className="dropdown-item" to="/innovation/r&d">
//                         R & D
//                       </Link>
//                       <Link className="dropdown-item" to="/innovation/production">
//                         Production Facility
//                       </Link>
//                       <Link className="dropdown-item" to="/innovation/quality">
//                         Quality Compliance
//                       </Link>
//                       <Link className="dropdown-item" to="/innovation/research">
//                         Research Farm
//                       </Link>
//                     </div>
//                   </div>
//                 </li>

//                 <li className="mt-2">
//                   <div className="dropdown">
//                     <button
//                       className="w-100 font-weight-bold btn dropdown-toggle custom-dropdown-toggle"
//                       type="button"
//                       data-toggle="dropdown"
//                       aria-expanded="false"
//                     >
//                       B2B Solutions
//                     </button>
//                     <div className="dropdown-menu" aria-labelledby="b2bDropdown">
//                       <Link className="dropdown-item" to="/b2b/contract_mfg">
//                         Contract Manufacturing
//                       </Link>
//                       <Link className="dropdown-item" to="/b2b/product-portfolio">
//                         Product Portfolio
//                       </Link>
//                       <Link className="dropdown-item" to="/b2b/why_choose">
//                         Why Choose Us?
//                       </Link>
//                     </div>
//                   </div>
//                 </li>

//                 <li className="mt-2">
//                   <div className="dropdown">
//                     <button
//                       className="w-100 font-weight-bold btn dropdown-toggle custom-dropdown-toggle"
//                       type="button"
//                       data-toggle="dropdown"
//                       aria-expanded="false"
//                     >
//                       Careers
//                     </button>
//                     <div className="dropdown-menu" aria-labelledby="careersDropdown">
//                       <Link className="dropdown-item" to="/career/openings">
//                         Current Openings
//                       </Link>
//                       <Link className="dropdown-item" to="/career/culture">
//                         Our Culture
//                       </Link>
//                     </div>
//                   </div>
//                 </li>

//                 <li className="mt-2">
//                   <div className="dropdown">
//                     <button
//                       className="w-100 font-weight-bold btn dropdown-toggle custom-dropdown-toggle"
//                       type="button"
//                       data-toggle="dropdown"
//                       aria-expanded="false"
//                     >
//                       Updates
//                     </button>
//                     <div className="dropdown-menu" aria-labelledby="updatesDropdown">
//                       <Link className="dropdown-item" to="/updates/news">
//                         News & Events
//                       </Link>
//                       <Link className="dropdown-item" to="/updates/blog">
//                         Blogs
//                       </Link>
//                     </div>
//                   </div>
//                 </li>

//                 <li className="mt-2 font-weight-bold">
//                   <NavLink to="/contact" className="text-dark">
//                     Contact Us
//                   </NavLink>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section >

//       <section className='nav2'>
//         <div className="container-fluid mb-2">
//           {!isSearchOpen && (
//             <div className="row">
//               <div className="col-6 col-md-8">
//                 <img src={logo} className='NavLogo' />
//                 {/* src={`/${logo}/id`} */}
//               </div>
//               <div className="col-6 col-md-4 mt-4 text-right">
//                 <i className="fa-solid fa-cart-shopping text-success mr-4"></i>
//                 <i className="fa-solid fa-magnifying-glass mr-4" onClick={toggleSearch}></i>
//                 <button className='btn btn-light' onClick={toggleNavbar}><i className="fa-solid fa-bars"></i></button>
//               </div>
//             </div>
//           )}
//           <hr />
//           {isNavbarOpen && (
//             <ul style={{ display: 'flex', flexDirection: 'column', listStyleType: 'none', gap: 10, alignItems: 'center' }}>
//               {/* <li className='mt-2 '>
//                 <Link to="/" ><button className=' font-weight-bold btn'>Home</button></Link>
//               </li> */}
//               <li className='mt-2'>
//                 <div className="dropdown">
//                   <button className="w-100 font-weight-bold btn dropdown-toggle custom-dropdown-toggle"
//                     type="button"
//                     data-toggle="dropdown"
//                     aria-expanded="false">
//                     About Us
//                   </button>
//                   <div className="dropdown-menu">
//                     <Link className="dropdown-item" to="/aboutus">About us</Link>
//                     <Link className="dropdown-item" to={`/aboutus/journey`}>Our Journey</Link>
//                     <Link className="dropdown-item" to={`/aboutus/vision`}>Vision and Mission</Link>
//                     <Link className="dropdown-item" to={`/aboutus/values`}>Core Values</Link>
//                     <Link className="dropdown-item" to={`/aboutus/team`}>Our Team</Link>
//                     <Link className='dropdown-item' to={`/aboutus/clients`}>Our Clients</Link>
//                     <Link className='dropdown-item' to={`/aboutus/cert`}>Certifications</Link>
//                   </div>
//                 </div>
//               </li>
//               <li className='mt-2'>
//                 <div className="dropdown">
//                   <button className=" w-100 font-weight-bold btn dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
//                     Innovations
//                   </button>
//                   <div className="dropdown-menu">
//                     <Link className="dropdown-item" to="/">R & D</Link>
//                     <Link className="dropdown-item" to="/">Production Facility</Link>
//                     <Link className="dropdown-item" to="/">Quality Compliance</Link>
//                     <Link className="dropdown-item" to="/">Research Farm</Link>
//                   </div>
//                 </div>
//               </li>
//               <li className='mt-2'>
//                 <div className="dropdown">
//                   <button className=" w-100 font-weight-bold btn dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
//                     B2B Solutions
//                   </button>
//                   <div className="dropdown-menu">
//                     <Link className="dropdown-item" to="/">Contract Manufacturing</Link>
//                     <Link className="dropdown-item" to="/">Why Choose Us</Link>
//                   </div>
//                 </div>
//               </li>
//               <li className='mt-2'>
//                 <div className="dropdown">
//                   <button className=" w-100 font-weight-bold btn dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
//                     Careers
//                   </button>
//                   <div className="dropdown-menu">
//                     <Link className="dropdown-item" to="/">Current Openings</Link>
//                     <Link className="dropdown-item" to="/">Our Culture</Link>
//                   </div>
//                 </div>
//               </li>
//               <li className='mt-2'>
//                 <div className="dropdown">
//                   <button className=" w-100 font-weight-bold btn dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
//                     Updates
//                   </button>
//                   <div className="dropdown-menu">
//                     <Link className="dropdown-item" to="/">News & Events</Link>
//                     <Link className="dropdown-item" to="/">Blogs</Link>
//                   </div>
//                 </div>
//               </li>
//               <li className='mt-2'>
//                 <NavLink to="/" ><button className=' font-weight-bold btn'>Contact Us</button></NavLink>
//               </li>
//               {/* Add other menu items */}
//             </ul>
//           )}
//           {!isSearchOpen && !isNavbarOpen && (
//             <div className="row nav2row2">
//               <div className="col-6">
//                 <button className='btn btn-success btn-sm float-left' onClick={() => navigate('/product_page')}>Shop Now</button>
//               </div>
//               {!user ? (
//                 <>
//                   <div className="col-6 text-right">
//                     <div className="dropdown">
//                       <button className="btn btn-success" style={{ display: 'flex', margin: 'auto' }} type="button" data-toggle="dropdown" aria-expanded="false">
//                         Login
//                       </button>
//                       <div className="dropdown-menu">
//                         <NavLink to="/register" className="text-dark"><a className=" btn dropdown-item h-100">Sign Up</a></NavLink>
//                         <NavLink to="/login" className="text-dark"><a className=" btn dropdown-item">Sign in</a></NavLink>
//                       </div>
//                     </div>
//                   </div>
//                 </>
//               ) : (
//                 <>
//                   <div className="col-6 text-right">
//                     <div className="dropdown">
//                       <a role="button" data-toggle="dropdown" aria-expanded="false">
//                         <text style={{ fontSize: 16, color: 'black' }}>👋🏻Hello, {user.username.split(" ")[0]}</text>
//                       </a>

//                       <div className="dropdown-menu p-2">
//                         <a className="dropdown-item" >
//                           <div className="row">
//                             <div className="col-3">
//                               <i className="fa-solid fa-circle-user text-success mt-2" style={{ fontSize: 30 }} ></i>
//                             </div>
//                             <div className="col-9">
//                               Hello<br /><small>{user.username}</small>
//                             </div>
//                           </div>
//                         </a>
//                         <NavLink className="dropdown-item p-1" to="/my_orders">My Orders</NavLink>
//                         <NavLink className="dropdown-item p-1" to="/manage_add">Manage Addresses</NavLink>
//                         <a className="dropdown-item p-1" onClick={logout}>logout</a>
//                       </div>
//                     </div>
//                   </div>
//                 </>
//               )}
//             </div>
//           )}
//         </div>
//         {/* {isSearchOpen && (
//           <div className="container-fluid">
//             <div className="row p-3">
//               <div className="col-12 ">
//                 <input style={{ position: 'relative' }} type="text" placeholder="Search for a Product.." value={searchText} onChange={(e) => setSearchText(e.target.value)} />
//                 {searchText && (
//                   <i className="fa-solid fa-xmark" onClick={clearSearchText} style={{
//                     position: 'absolute',
//                     top: '50%',
//                     right: '30px',
//                     transform: 'translateY(-50%)',
//                     cursor: 'pointer'
//                   }} ></i>
//                 )}
//               </div>
//             </div>
//           </div>
//         )} */}
//         {isSearchOpen && (
//           <div className="container-fluid">
//             <div className="row p-3">
//               <div className="col-12 ">
//                 <div style={{ position: 'relative' }}>
//                   <i
//                     className="fa-solid fa-arrow-left"
//                     onClick={toggleSearch}
//                     style={{
//                       position: 'absolute',
//                       top: '50%',
//                       left: '-20px',
//                       transform: 'translateY(-50%)',
//                       cursor: 'pointer'
//                     }}
//                   />
//                   <input
//                     type="text"
//                     placeholder="Search for a Product.."
//                     value={searchText}
//                     onChange={(e) => {
//                       setSearchText(e.target.value);
//                       handleSearch(e.target.value);
//                     }}
//                   />
//                   {searchText && (
//                     <i
//                       className="fa-solid fa-xmark"
//                       onClick={clearSearchText}
//                       style={{
//                         position: 'absolute',
//                         top: '50%',
//                         right: '10px',
//                         transform: 'translateY(-50%)',
//                         cursor: 'pointer'

//                       }}
//                     />
//                   )}
//                   {searchResults.length > 0 && (
//                     <div className="search-suggestions mb-3">
//                       {searchResults.map((result) => (
//                         <div key={result._id} className="search-suggestion">
//                           {result.title}
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </section>
//     </>
//   )
// }

// export default Nav





import React, { useContext, useEffect, useState } from 'react'
import "../Css/style.css"
import logo from '../Assets/Images/logo.png';
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import { UserContext, useUser } from '../Context/CreateContext'
import { useAuth } from '../Context/CreateContext';
import axios from 'axios';
import { base_url } from '../Config/Index';

// const AboutDropdown = () => {
//   const [hoveredItem, setHoveredItem] = useState('');
//   const setHoveredItem = (item) => {
//     setHoveredItem(item);
//   };
//   const images = {
//     aboutUs: 'path/to/about-us-image.jpg',
//     journey: 'path/to/ourjourney-image.jpg',
//     vision: 'path/to/vision-mission-image.jpg',
//     values: 'path/to/core-values-image.jpg',
//     team: 'path/to/our-team-image.jpg',
//     clients: 'path/to/our-clients-image.jpg',
//     cert: 'path/to/certifications-image.jpg',
//   };

// }

const Nav = () => {
  const { id } = useParams();
  const { user, token, login, logout } = useContext(UserContext);
  // console.log(user)
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("")
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([])
  const [cartItems, setCartitems] = useState(0)

  const navigate = useNavigate();

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!isSearchOpen);
  };

  const handleSearchInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const clearSearchText = () => {
    setSearchText('');
  };

  useEffect(() => {
    getCartItems()
  }, [token])
  console.log(cartItems)

  const handleSearch = (q) => {
    axios.get(`${base_url}/api/search/products?search=${q}`)
      .then((res) => {
        setSearchResults(res.data)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const getCartItems = async () => {
    try {
      const response = await axios.get(`${base_url}/api/get/card`, {
        headers: {
          Authorization: `${token}`
        }
      })
      setCartitems(response.data.items.length)
    } catch (error) {
      // console.log(error)
      setCartitems(0)
    }
  }

  return (
    <>
      <section className='nav1' style={{ boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px' }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-1">
              <NavLink to="/"><img src={logo} className='w-100' /></NavLink>
            </div>
            <div className="col-7 mt-4">
              <form className="form-inline my-2 my-lg-0">
                <div className="position-relative w-100">
                  <input
                    className="form-controle-100 "
                    type="search"
                    placeholder="Search for a Product.."
                    aria-label="Search"
                    style={{ borderRadius: 20, marginBottom: '20px' }}
                    value={searchText}
                    onChange={(e) => {
                      setSearchText(e.target.value);
                      handleSearch(e.target.value);
                    }}
                  />

                  {/* Search Suggestions */}
                  {searchResults.length > 0 && (
                    <div className="search-suggestions mb-3">
                      {searchResults.map((result) => (
                        <div key={result._id} className="search-suggestion" onClick={() => {
                          navigate(`/product_details/${result._id}`);
                          setSearchResults([])
                          setSearchText(result.title)
                        }}>
                          {result.title}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </form>
            </div>
            {/* <div className="col-2 mt-4 text-right">
              <button className='btn btn-sm  text-white  mr-5' style={{marginTop:'5px', background: 'linear-gradient(to right, lightgreen, green)' }} onClick={() => {
                navigate('/product_page')
              }}>Shop Now</button>
              <NavLink to="/cart">
                <i className="fa-solid fa-cart-shopping text-success mr-3" style={{ fontSize: 25 }}></i><text style={{ fontSize: 20, color: 'black' }}></text>
              </NavLink>
              {cartItems > 0 && (
                <span className="cart-count-badge" > {cartItems}</span>
              )}
            </div> */}
            <div className="col-2  text-right d-flex align-items-center justify-content-end">
              {/* Shop Now Button */}
              <div className="shop-now-button mr-3">
                <button
                  className="btn btn-sm text-white"
                  style={{
                    // marginTop: "5px",
                    background: "linear-gradient(to right, lightgreen, green)",
                  }}
                  onClick={() => {
                    navigate("/product_page");
                  }}
                >
                  Shop Now
                </button>
              </div>

              {/* Cart Icon Section */}
              <div className="cart-icon" style={{
                marginLeft: "30px",  
                // marginRight: "15px",
              }}>
                <NavLink to="/cart">
                  <i
                    className="fa-solid fa-cart-shopping text-success"
                    style={{ fontSize: 25 }}
                  ></i>
                </NavLink>
                {/* {cartItems > 0 && <span className="cart-count-badge">{cartItems}</span>} */}
                {cartItems > 0 && (
                  <span
                    className="cart-count-badge position-absolute"
                    style={{ bottom: "10px", width: "25px", height: "25px", marginTop: "40px" }}
                  >
                    {cartItems}
                  </span>
                )}
              </div>
            </div>

            <div className="col-2 mt-4">
              {!user ? (
                <>
                  <div class="dropdown">
                    <button class="btn btn-success  " style={{ display: 'flex', margin: 'auto' }} type="button" data-toggle="dropdown" aria-expanded="false">
                      Login
                    </button>
                    <div class="dropdown-menu text-center">
                      <NavLink to="/register" className="text-dark"><a className=" dropdown-item w-100 ">Sign Up</a></NavLink>
                      <NavLink to="/login" className="text-dark"><a className="  dropdown-item w-100 ">Sign in</a></NavLink>
                    </div>
                  </div>

                </>
              ) : (
                <>
                  <div className="dropdown">
                    <div className='p-1 dropdown-toggle text-light' role="button" data-toggle="dropdown" aria-expanded="false" style={{ background: 'linear-gradient(to right, lightgreen, green)', borderTopLeftRadius: 20, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
                      <text style={{ fontSize: 18, color: 'white' }}>👋🏻Hello, <b>{user.username.split(" ")[0]}</b></text>
                    </div>

                    <div className="dropdown-menu p-2">
                      <a className="dropdown-item" href="#">
                        <div className="row">
                          <div className="col-3">
                            <i className="fa-solid fa-circle-user text-success mt-2" style={{ fontSize: 30 }} ></i>
                          </div>
                          <div className="col-9  " >
                            Hello<br /><small>{user.username}</small>
                          </div>
                        </div>
                      </a>
                      <NavLink to="/my_orders"><text className="dropdown-item p-1">My Orders</text></NavLink>
                      <NavLink to="/manage_add"><text className="dropdown-item p-1"> Manage Addresses</text></NavLink>
                      <a className="  dropdown-item p-1" onClick={logout}>logout</a>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="row bg-light">
            <div className="col-12">
              <ul
                style={{
                  display: 'flex',
                  listStyleType: 'none',
                  justifyContent: 'space-between',
                }}
              >


                <li className="mt-2">
                  <div className="dropdown">
                    <button
                      className="w-100 font-weight-bold btn dropdown-toggle custom-dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Innovations
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="innovationDropdown"
                    >
                      <Link
                        className="dropdown-item"
                        to="/innovation/slider3content"
                      >
                        Our premier technology and innovation facility
                      </Link>
                      <Link className="dropdown-item" to="/innovation/r&d">
                        R & D
                      </Link>
                      <Link className="dropdown-item" to="/innovation/production">
                        Production Facility
                      </Link>
                      <Link className="dropdown-item" to="/innovation/quality">
                        Quality Compliance
                      </Link>
                      <Link className="dropdown-item" to="/innovation/research">
                        Research Farm
                      </Link>
                    </div>
                  </div>
                </li>

                <li className="mt-2">
                  <div className="dropdown">
                    <button
                      className="w-100 font-weight-bold btn dropdown-toggle custom-dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      B2B Solutions
                    </button>
                    <div className="dropdown-menu" aria-labelledby="b2bDropdown">
                      <Link className="dropdown-item" to="/b2b/contract_mfg">
                        Contract Manufacturing
                      </Link>
                      <Link className="dropdown-item" to="/b2b/product-portfolio">
                        Product Portfolio
                      </Link>
                      <Link className="dropdown-item" to="/b2b/why_choose">
                        Why Choose Us?
                      </Link>
                    </div>
                  </div>
                </li>

                <li className="mt-2">
                  <div className="dropdown">
                    <button
                      className="w-100 font-weight-bold btn dropdown-toggle custom-dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Careers
                    </button>
                    <div className="dropdown-menu" aria-labelledby="careersDropdown">
                      <Link className="dropdown-item" to="/career/openings">
                        Current Openings
                      </Link>
                      <Link className="dropdown-item" to="/career/culture">
                        Our Culture
                      </Link>
                    </div>
                  </div>
                </li>

                <li className="mt-2">
                  <div className="dropdown">
                    <button
                      className="w-100 font-weight-bold btn dropdown-toggle custom-dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Updates
                    </button>
                    <div className="dropdown-menu" aria-labelledby="updatesDropdown">
                      <Link className="dropdown-item" to="/updates/news">
                        News & Events
                      </Link>
                      <Link className="dropdown-item" to="/updates/blog">
                        Blogs
                      </Link>
                    </div>
                  </div>
                </li>
                <li className="mt-2">
                  <div className="dropdown">
                    <button
                      className="w-100 font-weight-bold btn dropdown-toggle custom-dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      About Us
                    </button>
                    <div className="dropdown-menu" aria-labelledby="aboutDropdown">
                      <Link className="dropdown-item" to="/aboutus/about-us">
                        About us
                      </Link>
                      <Link className="dropdown-item" to="/aboutus/journey"
                      // onMouseEnter={() => setHoveredItem('journey')}
                      //   onMouseLeave={() => setHoveredItem('')}
                      >
                        Our Journey
                      </Link>
                      <Link className="dropdown-item" to="/aboutus/vision" >
                        Vision and Mission
                      </Link>
                      <Link className="dropdown-item" to="/aboutus/values">
                        Core Values
                      </Link>
                      <Link className="dropdown-item" to="/aboutus/team">
                        Our Team
                      </Link>
                      <Link className="dropdown-item" to="/aboutus/clients">
                        Our Clients
                      </Link>
                      <Link className="dropdown-item" to="/aboutus/cert">
                        Certifications
                      </Link>
                    </div>
                  </div>
                </li>
                <li className="mt-2 font-weight-bold">
                  <NavLink to="/contact" className="text-dark">
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section >

      <section className='nav2'>
        <div className="container-fluid mb-2">
          {!isSearchOpen && (
            <div className="row">
              <div className="col-6 col-md-8">
                <img src={logo} className='NavLogo' />
                {/* src={`/${logo}/id`} */}
              </div>
              <div className="col-6 col-md-4 mt-4 text-right">
                <i className="fa-solid fa-cart-shopping text-success mr-4"></i>
                <i className="fa-solid fa-magnifying-glass mr-4" onClick={toggleSearch}></i>
                <button className='btn btn-light' onClick={toggleNavbar}><i className="fa-solid fa-bars"></i></button>
              </div>
            </div>
          )}
          <hr />
          {isNavbarOpen && (
            <ul style={{ display: 'flex', flexDirection: 'column', listStyleType: 'none', gap: 10, alignItems: 'center' }}>
              {/* <li className='mt-2 '>
                <Link to="/" ><button className=' font-weight-bold btn'>Home</button></Link>
              </li> */}
              <li className='mt-2'>
                <div className="dropdown">
                  <button className="w-100 font-weight-bold btn dropdown-toggle custom-dropdown-toggle"
                    type="button"
                    data-toggle="dropdown"
                    aria-expanded="false">
                    About Us
                  </button>
                  <div className="dropdown-menu">
                    <Link className="dropdown-item" to="/aboutus">About us</Link>
                    <Link className="dropdown-item" to={`/aboutus/journey`}>Our Journey</Link>
                    <Link className="dropdown-item" to={`/aboutus/vision`}>Vision and Mission</Link>
                    <Link className="dropdown-item" to={`/aboutus/values`}>Core Values</Link>
                    <Link className="dropdown-item" to={`/aboutus/team`}>Our Team</Link>
                    <Link className='dropdown-item' to={`/aboutus/clients`}>Our Clients</Link>
                    <Link className='dropdown-item' to={`/aboutus/cert`}>Certifications</Link>
                  </div>
                </div>
              </li>
              <li className='mt-2'>
                <div className="dropdown">
                  <button className=" w-100 font-weight-bold btn dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                    Innovations
                  </button>
                  <div className="dropdown-menu">
                    <Link className="dropdown-item" to="/">R & D</Link>
                    <Link className="dropdown-item" to="/">Production Facility</Link>
                    <Link className="dropdown-item" to="/">Quality Compliance</Link>
                    <Link className="dropdown-item" to="/">Research Farm</Link>
                  </div>
                </div>
              </li>
              <li className='mt-2'>
                <div className="dropdown">
                  <button className=" w-100 font-weight-bold btn dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                    B2B Solutions
                  </button>
                  <div className="dropdown-menu">
                    <Link className="dropdown-item" to="/">Contract Manufacturing</Link>
                    <Link className="dropdown-item" to="/">Why Choose Us</Link>
                  </div>
                </div>
              </li>
              <li className='mt-2'>
                <div className="dropdown">
                  <button className=" w-100 font-weight-bold btn dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                    Careers
                  </button>
                  <div className="dropdown-menu">
                    <Link className="dropdown-item" to="/">Current Openings</Link>
                    <Link className="dropdown-item" to="/">Our Culture</Link>
                  </div>
                </div>
              </li>
              <li className='mt-2'>
                <div className="dropdown">
                  <button className=" w-100 font-weight-bold btn dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                    Updates
                  </button>
                  <div className="dropdown-menu">
                    <Link className="dropdown-item" to="/">News & Events</Link>
                    <Link className="dropdown-item" to="/">Blogs</Link>
                  </div>
                </div>
              </li>
              <li className='mt-2'>
                <NavLink to="/" ><button className=' font-weight-bold btn'>Contact Us</button></NavLink>
              </li>
              {/* Add other menu items */}
            </ul>
          )}
          {!isSearchOpen && !isNavbarOpen && (
            <div className="row nav2row2">
              <div className="col-6">
                <button className='btn btn-success btn-sm float-left' onClick={() => navigate('/product_page')}>Shop Now</button>
              </div>
              {!user ? (
                <>
                  <div className="col-6 text-right">
                    <div className="dropdown">
                      <button className="btn btn-success" style={{ display: 'flex', margin: 'auto' }} type="button" data-toggle="dropdown" aria-expanded="false">
                        Login
                      </button>
                      <div className="dropdown-menu">
                        <NavLink to="/register" className="text-dark"><a className=" btn dropdown-item h-100">Sign Up</a></NavLink>
                        <NavLink to="/login" className="text-dark"><a className=" btn dropdown-item">Sign in</a></NavLink>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="col-6 text-right">
                    <div className="dropdown">
                      <a role="button" data-toggle="dropdown" aria-expanded="false">
                        <text style={{ fontSize: 16, color: 'black' }}>👋🏻Hello, {user.username.split(" ")[0]}</text>
                      </a>

                      <div className="dropdown-menu p-2">
                        <a className="dropdown-item" >
                          <div className="row">
                            <div className="col-3">
                              <i className="fa-solid fa-circle-user text-success mt-2" style={{ fontSize: 30 }} ></i>
                            </div>
                            <div className="col-9">
                              Hello<br /><small>{user.username}</small>
                            </div>
                          </div>
                        </a>
                        <NavLink className="dropdown-item p-1" to="/my_orders">My Orders</NavLink>
                        <NavLink className="dropdown-item p-1" to="/manage_add">Manage Addresses</NavLink>
                        <a className="dropdown-item p-1" onClick={logout}>logout</a>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        {isSearchOpen && (
          <div className="container-fluid">
            <div className="row p-3">
              <div className="col-12 ">
                <div style={{ position: 'relative' }}>
                  <i
                    className="fa-solid fa-arrow-left"
                    onClick={toggleSearch}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '-20px',
                      transform: 'translateY(-50%)',
                      cursor: 'pointer'
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Search for a Product.."
                    value={searchText}
                    onChange={(e) => {
                      setSearchText(e.target.value);
                      handleSearch(e.target.value);
                    }}
                  />
                  {searchText && (
                    <i
                      className="fa-solid fa-xmark"
                      onClick={clearSearchText}
                      style={{
                        position: 'absolute',
                        top: '50%',
                        right: '10px',
                        transform: 'translateY(-50%)',
                        cursor: 'pointer'

                      }}
                    />
                  )}
                  {searchResults.length > 0 && (
                    <div className="search-suggestions mb-3">
                      {searchResults.map((result) => (
                        <div key={result._id} className="search-suggestion">
                          {result.title}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  )
}

export default Nav

