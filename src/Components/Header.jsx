import React from 'react';
import { useEffect } from 'react'
import logo from '../images/logo.png'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../redux/UserSlice';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const email = user.email;
                // console.log(user.email);
                dispatch(addUser(email));
                navigate('/browse');
            } else {
                dispatch(removeUser());
                navigate('/');
            }
          });
          
        //   unsubscribe will be called when the components unmounts
          return () => unsubscribe();
    }, [])

    return (
        <div className='bg-black w-screen'>
            <img className='w-44 absolute z-30 pl-14 top-6 cursor-pointer' src={logo} alt='logo' />
        </div>
    );
}

export default Header;
