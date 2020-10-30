import React from 'react';
import './App.css';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import RecommendedVideos from './Recommended Videos/RecommendedVideos';

function App() {
  return (
    <div className='app'>
      <Header></Header>
      <div className='app__page'>
        <Sidebar></Sidebar>
        <RecommendedVideos></RecommendedVideos>
      </div>
    </div>
  );
}

export default App;
