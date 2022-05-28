import { useState } from 'react'
import Axios from '../axios/axios';

const Registration = () => {
    const [email, setLogin] = useState('');
    const [password, setPassword] = useState('');
    
    const registrationHandler = () => {
        Axios.post('/registration', {
            email,
            password
        });
    }
  
    return (
      <div>
          <input value={email} onChange={(e) => setLogin(e.target.value)} placeholder={'Email'}></input>
          <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder={'Password'}></input>
          <button onClick={registrationHandler}>Registration</button>
      </div>
    )
}

export default Registration