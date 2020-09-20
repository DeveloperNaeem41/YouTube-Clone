import React,{useState} from 'react'
import './Header.css';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
// import {NavLink} from 'react-router-dom';

import pic from './images/Naeem.jpg';
import { NavLink } from 'react-router-dom';

const Header=()=> {
    const [inputSearch,setInputSearch]= useState('');



    return (
        
        <div className="header">

        <NavLink to='/'>

            <div className="header_left">
            <MenuSharpIcon />
            <img className="youtube_logo" 
            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" 
            alt="youtubelogo" />
            </div>

        </NavLink>    
        

            <div className="header_input">
            <input onChange={(e)=>setInputSearch(e.target.value)} value={inputSearch} type="text" placeholder="Search" />
            <NavLink to={`/search/${inputSearch}`}>
            <SearchSharpIcon className="header_inputButton" />
            </NavLink>
            </div>

            <div className="header_icons">
            <VideoCallSharpIcon className="header_icon" />
            <AppsIcon className="header_icon" />
            <NotificationsIcon className="header_icon" />
            <Avatar src={pic} alt="Naeem Shahzad" className="header_icon" />
            </div>

        </div>
        
    
    );
}

export default Header;