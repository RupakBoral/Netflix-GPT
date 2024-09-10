import React from 'react';
import { useEffect } from 'react'
import logo from '../images/logo.png'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../redux/UserSlice';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store?.userInfo?.user);

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
            <img 
                onClick={()=>{
                    if(user) navigate('/browse')
                    else navigate('/')
            }} className='w-44 absolute z-40 pl-14 -top-2 md:top-6 cursor-pointer' src={logo} alt='logo' />
        </div>
    );
}

export default Header;
