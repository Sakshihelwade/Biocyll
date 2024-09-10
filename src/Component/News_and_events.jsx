// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import "../Css/style.css"
// import axios from 'axios';
// import { base_url } from '../Config/Index';
// const News_and_events = () => {
//   const [news,setNews]= useState();
//   const { user, token, login, logout } = useContext(UserContext);


//   useEffect(()=>{
//     getNews()
//   },[])

//   const getNews =async()=>{
//     try {
//       const response = await axios.get(`${base_url}/api/get/News`,{
//         headers:{
//           Authorization:`${token}`
//         }
//       })
//       console.log(response.data)
//     } catch (error) {

//     }
//   }
//   return (
//     <section>
//       <div className="container-fluid">
//         <div className="row" style={{display:'flex',gap:0}}>
//           <div className="col-12 p-3 headings text-center">
//             <h3>News and Updates</h3>
//           </div>
//           <div className="col-md-4 news_card" >
//             <div className="row">
//             <div className="col-12 mb-3">
//               <img src='https://diplo-media.s3.eu-central-1.amazonaws.com/2023/08/march-16-2022-brazil-this-photo-illustration-woman-holds-smartphone-with-facebook-logo-displayed-screen-with-meta-platforms-logo-displayed-background-1024x670.jpg' className='w-100' />
//             </div>
//             <div className="col-12 mb-3">
//               <h6>EU probes Meta platforms for deceptive ads</h6>
//             </div>
//             <div className="col-12 mb-3">
//               <p>The European Commission has launched an investigation into Meta Platforms’ Facebook and Instagram over suspected failures </p>
//             </div>
//             <div className="col-12 mb-3">
//               <Link to="/news-details"><button className='btn btn-sm btn-success'>Read more</button></Link>
//             </div>
//             </div>
//           </div>
//           <div className="col-md-4 news_card" >
//             <div className="row">
//             <div className="col-12 mb-3">
//               <img src='https://diplo-media.s3.eu-central-1.amazonaws.com/2023/08/march-16-2022-brazil-this-photo-illustration-woman-holds-smartphone-with-facebook-logo-displayed-screen-with-meta-platforms-logo-displayed-background-1024x670.jpg' className='w-100' />
//             </div>
//             <div className="col-12 mb-3">
//               <h6>EU probes Meta platforms for deceptive ads</h6>
//             </div>
//             <div className="col-12 mb-3">
//               <p>The European Commission has launched an investigation into Meta Platforms’ Facebook and Instagram over suspected failures </p>
//             </div>
//             <div className="col-12 mb-3">
//               <Link to="/news-details"><button className='btn btn-sm btn-success'>Read more</button></Link>
//             </div>
//             </div>
//           </div>
//           <div className="col-md-4 news_card" >
//             <div className="row">
//             <div className="col-12 mb-3">
//               <img src='https://diplo-media.s3.eu-central-1.amazonaws.com/2023/08/march-16-2022-brazil-this-photo-illustration-woman-holds-smartphone-with-facebook-logo-displayed-screen-with-meta-platforms-logo-displayed-background-1024x670.jpg' className='w-100' />
//             </div>
//             <div className="col-12 mb-3">
//               <h6>EU probes Meta platforms for deceptive ads</h6>
//             </div>
//             <div className="col-12 mb-3">
//               <p>The European Commission has launched an investigation into Meta Platforms’ Facebook and Instagram over suspected failures </p>
//             </div>
//             <div className="col-12 mb-3">
//               <Link to="/news-details"><button className='btn btn-sm btn-success'>Read more</button></Link>
//             </div>
//             </div>
//           </div>
//           <div className="col-md-4 news_card" >
//             <div className="row">
//             <div className="col-12 mb-3">
//               <img src='https://diplo-media.s3.eu-central-1.amazonaws.com/2023/08/march-16-2022-brazil-this-photo-illustration-woman-holds-smartphone-with-facebook-logo-displayed-screen-with-meta-platforms-logo-displayed-background-1024x670.jpg' className='w-100' />
//             </div>
//             <div className="col-12 mb-3">
//               <h6>EU probes Meta platforms for deceptive ads</h6>
//             </div>
//             <div className="col-12 mb-3">
//               <p>The European Commission has launched an investigation into Meta Platforms’ Facebook and Instagram over suspected failures </p>
//             </div>
//             <div className="col-12 mb-3">
//               <Link to="/news-details"><button className='btn btn-sm btn-success'>Read more</button></Link>
//             </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default News_and_events
import React, { useEffect, useState } from 'react'; // Corrected import
import { Link, useNavigate } from 'react-router-dom';
import "../Css/style.css";
import axios from 'axios';
import { base_url } from '../Config/Index';
// import { UserContext } from '../Context/UserContext'; 
import { useContext } from 'react';
import { UserContext } from '../Context/CreateContext';
import News_details from '../Pages/News_details';

const News_and_events = () => {
  const [news, setNews] = useState([]); // Initializing news as an empty array to store fetched data
  const { user, token } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    try {
      const response = await axios.get(`${base_url}/api/get/News`, {
        headers: {
          Authorization: `Bearer ${token}`, // Correcting the authorization header format
        },
      });
      setNews(response.data); // Updating the news state with fetched data
    } catch (error) {
      console.error('Error fetching news:', error); // Log the error for debugging
    }
  };

  return (
    <section>
      <div className="container-fluid">
        <div className="row" style={{ display: 'flex', gap: 0 }}>
          <div className="col-12 p-3 headings text-center bg-white mt-4">
            <h3>News and Updates</h3>
          </div>
          {news.length > 0 ? (
            news.map((item, index) => (
              <div className="col-md-4 news_card" key={index}>
                <div className="row">
                  <div className="col-12 mb-3">
                    {/* <img src={item.image || 'default_image_url.jpg'} className="w-100"  alt={item.title || 'News Image'} />  */}
                    <img
                      src={item.image || 'default_image_url.jpg'}
                      className="w-100"
                      alt={item.title || 'News Image'}
                      style={{ height: '200px', objectFit: 'cover' }}
                    />

                  </div>
                  <div className="col-12 mb-3">
                    <h6>{item.title}</h6>
                  </div>
                  <div className="col-12 mb-3">
                    <p>{item.description}</p> {/* Dynamically rendering description */}
                  </div>
                  <div className="col-12 mb-3">
                    {/* <Link to={`/news-details/${item.id}`}><button className="btn btn-sm btn-success">Read more</button></Link> Link to details */}
                    <button
                      className="btn btn-sm btn-success"
                      style={{
                        // marginTop: "5px",
                        background: "linear-gradient(to right, lightgreen, green)",
                      }}
                      onClick={() => {
                        navigate("/news_details")
                      }}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center">
              <p>No news available at the moment.</p> {/* Message when no news is available */}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
<News_details />
export default News_and_events;

