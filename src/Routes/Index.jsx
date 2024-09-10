import React from 'react'
import Home from '../Pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Contact from '../Pages/Contact'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import Product_page from '../Pages/Product_page'
import Product_details from '../Pages/Product_details'
import Cart from '../Pages/Cart'
import Similar_product from '../Component/Similar_product'
import Checkout from '../Pages/Checkout'
import EditAdd from '../Pages/EditAdd'
import My_Orders from '../Pages/My_Orders'
import Nav from '../Component/Nav'
import Ratings from '../Pages/Ratings'
import Manage_addresses from '../Pages/Manage_addresses'
import About_us from '../Pages/About_us'
import Privacy_policy from '../Pages/Privacy_policy'
import PrivacyPolicies from '../Component/PrivacyPolicies'
import Innovation from '../Pages/Innovation'
import B2b from '../Pages/B2b'
import Career from '../Pages/Career'
import Updates from '../Pages/Updates'
import Job_details from '../Pages/Job_details'
import News_details from '../Pages/News_details'
import Journey from '../Component/Journey'
import Explore from '../Pages/Explore'
import Shipping from '../Component/Shipping'
import Return from '../Component/Return'
import Cancellation from '../Component/Cancellation'
const Index = () => {
  return (
    <div>
      {/* <Router> */}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/product_page' element={<Product_page />}></Route>
        {/* <Route path='/product_details/:id' element={<Product_details />}></Route> */}
        <Route path="/product_details/:id" element={<Product_details />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />}></Route>
        <Route path='/editadd' element={<EditAdd />}></Route>
        <Route path='/my_orders' element={<My_Orders />}></Route>
        <Route path='/ratings/:id' element={<Ratings />}></Route>
        <Route path='/manage_add' element={<Manage_addresses />}></Route>
        <Route path='/aboutus' element={<About_us />}></Route>
        {/* <Route path='/privacy' element={<Privacy_policy />}></Route> */}
        <Route path="/privacypolicies" element={<PrivacyPolicies />} />
        <Route path ="/shipping" element={<Shipping/>}/>
        <Route path='/return' element={<Return/>}></Route>
        <Route path='/cancellation' element={<Cancellation/>}></Route>
        <Route path='/innovation' element={<Innovation />}></Route>
        <Route path='/b2b' element={<B2b />}></Route>
        <Route path='/career' element={<Career />}></Route>
        <Route path='/updates' element={<Updates />}></Route>
        <Route path='/jobdetails/:id' element={<Job_details />}></Route>
        <Route path='/News_details' element={<News_details />}></Route>
        <Route path='aboutus/:section' element={<About_us />}></Route>
        <Route path='innovation/:section' element={<Innovation />}></Route>
        <Route path='/b2b/:section/:categoryId?' element={<B2b />} />
        <Route path='career/:section' element={<Career />}></Route>
        <Route path='updates/:section' element={<Updates />}></Route>
        <Route path='explore/:section' element={<Explore />}></Route>
      </Routes>
      {/* </Router> */}
    </div>
  )
}

export default Index
