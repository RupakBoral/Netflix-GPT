import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import validateForm from '../utils/validate';
import { signInWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../utils/firebase';

const Login = () => {

    const email = useRef(null);
    const password = useRef(null);
    const [errorMssg, seterrorMssg] = useState(null);

    const handleSignIn = () => {
        const mail = email?.current?._valueTracker?.getValue()
        const pass = password?.current?._valueTracker?.getValue()
        const mssg = validateForm(mail, pass);
        seterrorMssg(mssg);
        if(mssg === null){
            signInWithEmailAndPassword(auth, mail, pass)
                .then(() => {
                    seterrorMssg('');
                })
                
                .catch((error) => {
                    const errorMessage = error.message;
                    seterrorMssg(errorMessage)
                    // console.log(errorMessage);
                });
        }
    }

    return (
        <div className='bg-black w-full h-full'>
            <div className='relative'>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_large.jpg' alt='bg'/>
                <div className="absolute inset-0 bg-black opacity-60 h-full"></div>
                <div className='text-white flex flex-col gap-8 rounded-lg absolute top-[20%] h-4/6 w-2/6 left-[35%] py-8 px-12 bg-black bg-opacity-60'>
                    <h2 className='text-white text-4xl z-20'>Sign In</h2>
                    <form onSubmit={(e)=>e.preventDefault()} className='space-y-6'>
                        <input ref={email} className='border-gray-400 border rounded-lg font-medium text-white bg-transparent p-4 py-6 w-full' placeholder='Email' type='email'/>
                        <input ref={password} className='border-gray-400 border rounded-lg font-medium text-white bg-transparent p-4 py-6 w-full' placeholder='Password' type='password'/>
                        <p className='text-lg font-semibold text-red-600'>{errorMssg}</p>
                    </form>
                    <button onClick={handleSignIn} className='bg-red-700 text-white px-6 py-3 rounded-lg w-full'>Sign In</button>
                    <p className='text-gray-400 font-medium text-center'>OR</p>
                    <p className='font-medium text-gray-200 text-center'>Forget Password?</p>
                    <p className='font-medium text-gray-300 text-center'>New to Netflix? <span><Link to={'/'}>Sign up Now</Link></span></p>
                </div>
            </div>
        </div>
    );
}

export default Login;
