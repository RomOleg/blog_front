import { useEffect, useState } from "react";
import Axios from "./axios/axios";
import Blog from "./components/Blog";
import { getCookie } from './helpers/cookie'
import './App.css'
import Login from "./components/Login";
import Registration from "./components/Registration";

function App() {

  const [blogs, setBlogs] = useState([]);
  const [auth, setAuth] = useState(getCookie('accessToken'));
  const [newBlog, setNewBlog] = useState('');

  useEffect(() => {
    fetchBlogs()
  }, [setBlogs]);

  const fetchBlogs = async () => {
    const {data} = await Axios.get('/blog/all');
    setBlogs(data)
  }

  const signOut = () => {
    setAuth('');
  }

  const addBlog = async () => {
    await Axios.post('/blog/create', {
        name: newBlog
    }, {headers: { 'Authorization': `Bearer ${auth}` }});
    fetchBlogs()
  }

  return (
    <div className="App">
      <nav className="nav">
        {auth
          ? <button onClick={signOut}>SingOut</button>
          : <div><Login auth={setAuth} /> <Registration /></div>
        }
      </nav>
      
        {
          auth &&
            <div>
              <input value={newBlog} onChange={(e) => setNewBlog(e.target.value)} placeholder={'Name'}></input>
              <button onClick={addBlog}>Add blog</button>
            </div>
        }        
        {
          blogs.length === 0 
          ? 'Нет блогов...'
          : 
          blogs.map(blog => 
            <Blog key={blog.id} blog={blog} auth={auth}/>
          )
        }
    </div>
  );
}

export default App;
