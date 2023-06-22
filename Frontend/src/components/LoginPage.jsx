import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async(e) => {
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
    <div className='grid grid-cols-1 h-screen w-full'>
      <div className='bg-gray-200 flex flex-col justify-center'>
        <form className='max-w-[400px] w-ful mx-auto px-8 bg-gray-800 p-8' onSubmit={handleLogin}>
          <h2 className='text-white font-bold text-2xl text-center'>LOGIN</h2>
          <div className='text-center m-2'>
            <label>UserName</label>
            <input
              className='rounded-lg border-2 p-2'
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className='text-center m-2'>
            <label>Password</label>
            <input
              className='rounded-lg border-2 p-2'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className='w-full bg-blue-400 p-2 my-4 rounded-lg' type='submit'>
            SIGN IN
          </button>
          <p className='text-white text-center'>
            Create an account?{' '}
            <span className='font-bold cursor-pointer' onClick={() => navigate('/signup')}>
              Sign up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
