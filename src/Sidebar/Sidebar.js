import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow/SidebarRow';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import {
  ExpandMoreOutlined,
  History,
  OndemandVideo,
  ThumbUpAltOutlined,
  VideoLibrary,
  WatchLater,
} from '@material-ui/icons';

function Sidebar() {
  return (
    <div className='sidebar'>
      <SidebarRow selected title='Home' Icon={HomeIcon}></SidebarRow>
      <SidebarRow title='Trending' Icon={WhatshotIcon}></SidebarRow>
      <SidebarRow title='Subscription' Icon={SubscriptionsIcon}></SidebarRow>
      <hr></hr>
      <SidebarRow title='Library' Icon={VideoLibrary}></SidebarRow>
      <SidebarRow title='History' Icon={History}></SidebarRow>
      <SidebarRow title='Your Videos' Icon={OndemandVideo}></SidebarRow>
      <SidebarRow title='Watch Later' Icon={WatchLater}></SidebarRow>
      <SidebarRow title='Liked Videos' Icon={ThumbUpAltOutlined}></SidebarRow>
      <SidebarRow title='Show More' Icon={ExpandMoreOutlined}></SidebarRow>
    </div>
  );
}

export default Sidebar;
