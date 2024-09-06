import React from 'react';
import user_logo from '../../images/User logo.png'
import { signOut } from 'firebase/auth';
import { auth } from '../../utils/firebase';
import { removeUser } from '../../redux/UserSlice';
import { useDispatch } from 'react-redux';

const UpdateHeader = () => {

    const dispatch = useDispatch();

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                dispatch(removeUser());
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
            });
    }

    return (
        <div className='flex z-30 bg-transparent gap-8 absolute right-10 top-16'>
                <img className='w-12 h-12 cursor-pointer' src={user_logo} alt='user'/>
                <button
                    onClick={handleSignOut}
                    className='px-3 py-2 rounded-md bg-gray-100 text-red-600 text-lg font-semibold'>Sign Out</button>
        </div>
    );
}

export default UpdateHeader;
