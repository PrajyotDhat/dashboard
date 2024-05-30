import React from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate();
    const userName = JSON.parse(localStorage.getItem('user'));

    const handleLogOut = () => {
        localStorage.removeItem('loggedIn')
        navigate('/login')
    }

    return (
        <div className="container w-[30rem] mx-auto p-4 pt-6 pb-8 bg-white rounded shadow-md">
            <h1 className='text-center mb-5 font-bold'>HOMEPAGE</h1>
            <p className='text-center'>Welcome - {userName.name} </p>
            <button
                onClick={handleLogOut}
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
            >
                Logout
            </button>
        </div>
    )
}

export default Home
