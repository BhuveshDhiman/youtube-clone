import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import './header.css';

function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <MenuIcon></MenuIcon>
        <img
          className='header__logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/1280px-YouTube_Logo.svg.png'
          alt=''
        ></img>
      </div>

      <div className='header__input'>
        <input type='text' placeholder='Search'></input>
        <SearchIcon className='header__inputButton'></SearchIcon>
      </div>

      <div className='header__icons'>
        <VideoCallIcon className='header__icon'></VideoCallIcon>
        <AppsIcon className='header__icon'></AppsIcon>
        <NotificationsIcon className='header__icon'></NotificationsIcon>
        <Avatar
          src='https://lh3.googleusercontent.com/a-/AOh14GjiFhcmcsQwx1gYPia4xKTJzT9G07r56k1mVsoLHQ=s88-c-k-c0x00ffffff-no-rj-mo'
          alt='Profile Picture'
        ></Avatar>
      </div>
    </div>
  );
}

export default Header;
