import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';




function SignUpPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
        console.log("hai", username,password);
        const response = await axios.post('http://localhost:8080/api/signup', {username,password});
        navigate('/');
      } catch (error) {
        console.error(error);
      }
  };

  return (
    <div className='grid grid-cols-1 h-screen w-full'>
      <div className='bg-gray-200 flex flex-col justify-center'>
        <form
          className='max-w-[400px] w-ful mx-auto px-8 bg-gray-800 p-8'
          onSubmit={handleSignUp}
        >
          <h2 className='text-white font-bold text-2xl text-center'>SIGN UP</h2>
          <div className='text-center m-2'>
            <label>Username</label>
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
            SIGN UP
          </button>
          <p className='text-white text-center'>
            Already have an account?{' '}
            <span className='font-bold cursor-pointer' onClick={() => navigate('/')}>
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
