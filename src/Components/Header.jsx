import React from 'react';
import logo from '../images/logo.png'

const Header = () => {
    return (
        <div className='bg-gradient-to-b from-black'>
            <img className='z-10 w-44 absolute top-1 left-10 cursor-pointer' src={logo} alt='logo' />
        </div>
    );
}

export default Header;
