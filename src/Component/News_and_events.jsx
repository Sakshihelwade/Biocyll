import React from 'react'
import { Link } from 'react-router-dom'
import "../Css/style.css"
const News_and_events = () => {
  return (
    <section>
      <div className="container-fluid">
        <div className="row" style={{display:'flex',gap:0}}>
          <div className="col-12 p-3 headings text-center">
            <h3>News and Updates</h3>
          </div>
          <div className="col-md-4 news_card" >
            <div className="row">
            <div className="col-12 mb-3">
              <img src='https://diplo-media.s3.eu-central-1.amazonaws.com/2023/08/march-16-2022-brazil-this-photo-illustration-woman-holds-smartphone-with-facebook-logo-displayed-screen-with-meta-platforms-logo-displayed-background-1024x670.jpg' className='w-100' />
            </div>
            <div className="col-12 mb-3">
              <h6>EU probes Meta platforms for deceptive ads</h6>
            </div>
            <div className="col-12 mb-3">
              <p>The European Commission has launched an investigation into Meta Platforms’ Facebook and Instagram over suspected failures </p>
            </div>
            <div className="col-12 mb-3">
              <Link to="/news-details"><button className='btn btn-sm btn-success'>Read more</button></Link>
            </div>
            </div>
          </div>
          <div className="col-md-4 news_card" >
            <div className="row">
            <div className="col-12 mb-3">
              <img src='https://diplo-media.s3.eu-central-1.amazonaws.com/2023/08/march-16-2022-brazil-this-photo-illustration-woman-holds-smartphone-with-facebook-logo-displayed-screen-with-meta-platforms-logo-displayed-background-1024x670.jpg' className='w-100' />
            </div>
            <div className="col-12 mb-3">
              <h6>EU probes Meta platforms for deceptive ads</h6>
            </div>
            <div className="col-12 mb-3">
              <p>The European Commission has launched an investigation into Meta Platforms’ Facebook and Instagram over suspected failures </p>
            </div>
            <div className="col-12 mb-3">
              <Link to="/news-details"><button className='btn btn-sm btn-success'>Read more</button></Link>
            </div>
            </div>
          </div>
          <div className="col-md-4 news_card" >
            <div className="row">
            <div className="col-12 mb-3">
              <img src='https://diplo-media.s3.eu-central-1.amazonaws.com/2023/08/march-16-2022-brazil-this-photo-illustration-woman-holds-smartphone-with-facebook-logo-displayed-screen-with-meta-platforms-logo-displayed-background-1024x670.jpg' className='w-100' />
            </div>
            <div className="col-12 mb-3">
              <h6>EU probes Meta platforms for deceptive ads</h6>
            </div>
            <div className="col-12 mb-3">
              <p>The European Commission has launched an investigation into Meta Platforms’ Facebook and Instagram over suspected failures </p>
            </div>
            <div className="col-12 mb-3">
              <Link to="/news-details"><button className='btn btn-sm btn-success'>Read more</button></Link>
            </div>
            </div>
          </div>
          <div className="col-md-4 news_card" >
            <div className="row">
            <div className="col-12 mb-3">
              <img src='https://diplo-media.s3.eu-central-1.amazonaws.com/2023/08/march-16-2022-brazil-this-photo-illustration-woman-holds-smartphone-with-facebook-logo-displayed-screen-with-meta-platforms-logo-displayed-background-1024x670.jpg' className='w-100' />
            </div>
            <div className="col-12 mb-3">
              <h6>EU probes Meta platforms for deceptive ads</h6>
            </div>
            <div className="col-12 mb-3">
              <p>The European Commission has launched an investigation into Meta Platforms’ Facebook and Instagram over suspected failures </p>
            </div>
            <div className="col-12 mb-3">
              <Link to="/news-details"><button className='btn btn-sm btn-success'>Read more</button></Link>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default News_and_events
