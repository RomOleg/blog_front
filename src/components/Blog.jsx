import React, { useState } from 'react'
import '../App.css'
import Axios from '../axios/axios';
import { getCookie } from '../helpers/cookie';

const Blog = ({ blog, auth }) => {

  const [name, setName] = useState('');

  const changeBlog = async () => {
    await Axios.patch('/blog', {
      id: blog.id,
      name
    });
  }
  
  const deleteBlog = async () => {
    await Axios.delete(`/blog/${blog.id}`);
  }

  return (
    <div className='blog'>
        <p>Name: <span>{blog.name}</span></p>
        <p>Author: <span>{blog.user.email}</span></p>
        <p>Date: <span>{blog.date}</span></p>
        {
          auth && getCookie('id') == blog.user.id &&
          <p>
              <button onClick={changeBlog} >Change</button>
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder={'Name'} ></input>
              <button onClick={deleteBlog} >Delete</button>
          </p>
        }
        
    </div>
  )
}

export default Blog;