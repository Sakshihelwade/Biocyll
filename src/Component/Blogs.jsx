import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { base_url } from '../Config/Index';
import axios from 'axios';

const Blogs = () => {
  const [blog, setBlog] = useState();

  useEffect(() => {
    handleBlog()
  }, [])

  const handleBlog = async () => {
    try {
      const response = await axios.get(`${base_url}/api/get/Blog`);
      setBlog(response.data)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 headings text-center pb-3">
              <h3>Blogs</h3>
            </div>
            {blog?.map((item, index) => {
              return (
                <div className="col-md-4 bg-white">
                  <div className="card">
                    <div className="card-header">
                      {/* <img src={item.image} className='w-100' /> */}
                      <img
                     src={item.image}
                      className="w-100"
                      alt={item.title || 'News Image'}
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    </div>
                    <div className="card-body">
                      <h5 className='mb-2'>
                        {item.heading}
                      </h5>
                      <p>
                        {item.description}
                      </p>
                      {item.Link}
                      {/* <small>Date/Link</small> */}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Blogs
