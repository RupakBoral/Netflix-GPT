import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Step1SignUp = () => {

    const email = useSelector((store) => store.userInfo.email)

    return (
        <div className='text-center m-auto flex flex-col gap-6 w-1/4 h-screen justify-center'>
            <img src='https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Devices.png' alt='tv'/>
            <p className='text-xl font-medium text-gray-600'>STEP 1 OF 2</p>
            <h3 className='text-2xl font-bold text-gray-700'>Account Created</h3>
            <p className='text-xl font-medium text-gray-600'>Use this email to access your account: <span className='text-xl font-bold text-gray-800'>{email}</span></p>
            <Link className='bg-red-600 text-center py-4 rounded-md text-xl text-white' to='/signUpStep2'>
                <button>
                    Next
                </button>
            </Link>
        </div>
    );
}

export default Step1SignUp;
