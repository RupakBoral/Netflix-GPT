import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='bg-black w-full h-full'>
            <div className='relative'>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_large.jpg' alt='bg'/>
                <div className="absolute inset-0 bg-black opacity-60 h-full"></div>
                <form className='text-white flex flex-col gap-8 rounded-lg absolute top-[20%] h-4/6 w-2/6 left-[35%] py-8 px-12 text-center bg-black bg-opacity-60'>
                    <h2 className='text-white text-4xl z-20'>Sign In</h2>
                    <div className='space-y-6'>
                        <input className='border-gray-400 border rounded-lg font-medium text-white bg-transparent p-4 py-6 w-full' placeholder='Email or mobile number' type='email'/>
                        <input className='border-gray-400 border rounded-lg font-medium text-white bg-transparent p-4 py-6 w-full' placeholder='Password' type='password'/>
                    </div>
                    <Link to={'./browser'} >
                        <button className='bg-red-700 text-white px-6 py-3 rounded-lg w-full'>Sign In</button>
                    </Link>
                    <p className='text-gray-400 font-medium'>OR</p>
                    <p className='font-medium text-gray-200'>Forget Password?</p>
                    <p className='font-medium text-gray-300'>New to Netflix? <span><Link to={'/'}>Sign up Now</Link></span></p>
                </form>
            </div>
        </div>
    );
}

export default Login;
