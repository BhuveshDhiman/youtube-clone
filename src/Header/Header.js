import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';

function Header() {
  return (
    <div className='header'>
      <h1>I am header</h1>
      <MenuIcon></MenuIcon>
      <img
        className='header__logo'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/1280px-YouTube_Logo.svg.png'
        alt=''
      ></img>
      <input type='text'></input>
      <SearchIcon></SearchIcon>
      <VideoCallIcon></VideoCallIcon>
      <AppsIcon></AppsIcon>
      <NotificationsIcon></NotificationsIcon>
      <Avatar
        src='https://lh3.googleusercontent.com/a-/AOh14GjiFhcmcsQwx1gYPia4xKTJzT9G07r56k1mVsoLHQ=s88-c-k-c0x00ffffff-no-rj-mo'
        alt=''
      ></Avatar>
    </div>
  );
}

export default Header;
