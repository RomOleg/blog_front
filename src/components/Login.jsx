import { useState } from 'react'
import Axios from '../axios/axios'

const Login = ({ auth }) => {

  const [email, setLogin] = useState('');
  const [password, setPassword] = useState('');
  
  const loginHandler = async () => {
      const { data } = await Axios.post('/login', {
          email,
          password
      });
      localStorage.setItem('AccessToken', data.token);
      auth(data.token);
      document.cookie = `id=${data.dto.id}`
  }

  return (
    <div>
        <input value={email} onChange={(e) => setLogin(e.target.value)} placeholder={'Email'}></input>
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder={'Password'}></input>
        <button onClick={loginHandler}>Login</button>
    </div>
  )
}

export default Login