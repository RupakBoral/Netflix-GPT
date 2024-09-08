import React, { useState } from 'react';
import user_logo from '../../images/User logo.png'
import { signOut } from 'firebase/auth';
import { auth } from '../../utils/firebase';
import { removeUser } from '../../redux/UserSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ToggleGPTSearchView } from '../../redux/gptSlice';
import { LANGUAGE } from '../../utils/constants';
import lang from '../../utils/langConstants';
import { ToggleLang } from '../../redux/LanguageSlice';

const UpdateHeader = () => {

    const dispatch = useDispatch();
    const currentLang = useSelector((store) => store?.Language?.lang)
    const [TogglePage, setTogglePage] = useState(true);
    // console.log(currentLang);

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                dispatch(removeUser());
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
            });
    }

    const handleSearch = () => {
        setTogglePage(!TogglePage)
        dispatch(ToggleGPTSearchView())
    }

    return (
        <div className='flex z-40 bg-transparent gap-6 absolute right-10 top-16'>
            <select className='px-4 py-2 rounded-md text-gray-100 bg-transparent bg-black font-semibold cursor-pointer'>
                {
                    LANGUAGE.map((lang) => <option key={lang.identifier} value={lang.identifier}
                        onClick={() => {
                            // console.log(lang.identifier);
                            dispatch(ToggleLang(lang.identifier))
                        }}
                        className='text-gray-700 bg-zinc-300'>{lang.name}</option>)
                }
            </select>
            <button 
                onClick={handleSearch}
                className='px-3 py-2 bg-emerald-700 text-white rounded-md font-semibold flex gap-2'>
                {
                    // GPT or Home
                    (TogglePage === true) ? lang[currentLang].GPTSearch : ''
                }
                {
                    // Search icon or Home icon
                    (TogglePage === true) ? <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>
                }
            </button>
            <img className='w-12 h-12 cursor-pointer' src={user_logo} alt='user'/>
            <button
                onClick={handleSignOut}
                className='py-2 rounded-md text-gray-200 text-xl font-semibold'>Sign Out
            </button>
        </div>
    );
}

export default UpdateHeader;
