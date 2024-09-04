import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signIn } from '../../Redux/UserSlice';
import validateForm from '../../utils/validate';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../utils/firebase';

const Step2SignUp = () => {

    const dispatch = useDispatch();

    const email = useSelector((store) => store.userInfo.email)
    const password = useRef(null)
    const [errorMssg, seterrorMssg] = useState(null);

    const handleSignUp = () => {
        const pass = password?.current?._valueTracker?.getValue()
        const mssg = validateForm(email, pass);
        seterrorMssg(mssg);
        // console.log(password.current._valueTracker.getValue());
        if(mssg){
            createUserWithEmailAndPassword(auth, email, pass)
                .then((userCredential) => {
                    // const user = userCredential.user;
                    seterrorMssg('');
                    // console.log(user);
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    seterrorMssg(errorMessage)
                });
        }
    }

    return (
        <div className='m-auto flex flex-col gap-4 w-1/3 h-screen justify-center'>
            <p className='text-xl font-medium text-gray-600'>STEP 2 OF 2</p>
            <h2 className='text-4xl font-semibold text-gray-800'>Create a password to start your membership</h2>
            <h3 className='text-xl font-medium text-gray-700'>Just a few more steps and you're done! </h3>
            <p className='text-xl font-medium text-gray-700'>We hate paperwork, too.</p>
            <form onSubmit={(e)=>e.preventDefault} className='flex flex-col gap-4'>
                <input onChange={(e)=>{
                    dispatch(signIn(e.target.value))
                }} placeholder='Email' defaultValue={email} type='email' className='border border-gray-500 text-gray-700 font-medium p-4 rounded-md'/>
                <input ref={password} placeholder='Password' type='password' className='border border-gray-500 text-gray-700 font-medium p-4 rounded-md'/>
                </form>
                <p className='text-red-800 font-medium text-xl'>{errorMssg}</p>
                <button className='bg-red-600 text-center py-4 rounded-md text-xl text-white' onClick={handleSignUp} >Next</button>
        </div>
    );
}

export default Step2SignUp;
