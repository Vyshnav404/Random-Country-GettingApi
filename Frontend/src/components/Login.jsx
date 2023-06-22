import React, { useState } from 'react';
import loginImg from '../assets/loginImg.jpg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleSignIn = async(e) => {
    e.preventDefault();
    try {
        console.log("hai", username,password);
        const response = await axios.post('http://localhost:8080/api/login', {username,password});
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        navigate('/');
      } catch (error) {
        console.error(error);
      }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="bg-white flex flex-col justify-center">
        <form className="max-w-[400px] w-full mx-auto px-8 p-8" onSubmit={handleSignIn}>
          <h2 className="font-bold text-6xl">Sign In</h2>
          <p className="font-bold my-3">
            New user ?<span className="text-blue-400 ms-1" onClick={()=>navigate('/signup')}>Create an account</span>
          </p>
          <div>
            <input
              type="text"
              className="text-gray-800 border-2 border-black placeholder-gray-500 p-3 my-2"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              className="text-gray-800 border-2 border-black placeholder-gray-500 p-3"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="my-3 flex items-center">
            <input type="checkbox" className="w-10 h-10 border-2 border-black" />
            <p className="font-bold text-gray-700 ml-2">Keep me signed in</p>
          </div>
          <button type="submit" className="w-full bg-gray-600 text-white p-3">
            SIGN IN
          </button>
        </form>
      </div>

      <div className="hidden sm:block">
        <img className="h-full w-full" src={loginImg} alt="" />
      </div>
    </div>
  );
}

export default Login;
