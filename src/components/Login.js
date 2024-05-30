import React, { useState } from 'react';
import {Link,useNavigate } from 'react-router-dom';

function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const loggedUser =JSON.parse(localStorage.getItem('user'));
    if(input.email === loggedUser.email && input.password === loggedUser.password){
      localStorage.setItem("loggedIn",true)
      navigate('/')
    }
    else{
      alert("Invalid email and password")
    }
  }

  return (
    <div className="container w-[30rem] mx-auto p-4 pt-6 pb-8 bg-white rounded shadow-md">
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Email ID
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name='email'
            value={input.email}
            onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
            placeholder="Enter your Email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            name='password'
            value={input.password}
            onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
            placeholder="Enter your password"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
        </div>
        <p className='text-center mt-5 mb-0'>
          Have already an account?
          <Link
            className="inline-block align-baseline font-bold text-sm text-orange-500 hover:text-orange-800"
            to="/register"
          >
            Register here
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;

