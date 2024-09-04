import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signIn } from '../Redux/UserSlice';

const Home = () => {

    const [email, setemail] = useState('');

    const dispatch = useDispatch();
    const handler = (email) => {
        dispatch(signIn(email));
    }

    return (
        <div className='overflow-x-hidden'>
            <div className='relative'>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_large.jpg' alt='bg'/>
                <div className="absolute inset-0 bg-black opacity-60 h-full"></div>
            </div>
            <div className='z-10 space-y-6 absolute top-[40%] left-[25%] text-center text-white'>
                <h1 className='text-5xl'>Unlimited movies, TV shows and more</h1>
                <h3 className='text-3xl font-thin'>Starts at ₹149. Cancel anytime.</h3>
                <p className='text-xl font-medium'>Ready to watch? Enter your email to create or restart your membership.</p>
            </div>
            <div className="flex gap-4 z-10 absolute top-[70%] left-[35%] text-center text-white">
                <input
                    onChange={(e)=>{
                        setemail(e.target.value);
                    }}
                    className="bg-transparent font-medium border border-gray-400 py-3 px-3 w-96" type="email" placeholder="Email Address"/>
                <div className="flex flex-grow gap-4 items-center justify-center bg-red-600 hover:bg-red-700 h-full rounded-md">
                    <Link to={'/signUpStep1'}
                        onClick={() => handler(email)}
                    >
                        <button className="py-3 px-6 text-white font-bold">Get Started</button>
                    </Link>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                    <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
                    </svg>
                </div>
            </div>
            <div className='flex items-center absolute top-[80%] left-[45%] gap-6'>
                <p className='text-white font-medium '>Existing User?</p>
                <Link to={'/login'} >
                    <button className='text-white bg-red-600 hover:bg-red-700 rounded-md px-6 py-3'>Login</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;
