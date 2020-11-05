import { TuneOutlined } from '@material-ui/icons';
import React from 'react';
import ChannelRow from './ChannelRow/ChannelRow';
import './SearchPage.css';
import VideoRow from './VideoRow/VideoRow';
import { useSelector } from 'react-redux';

function SearchPage() {
  const videosData = useSelector((state) => state.reducer.videoResponse);
  console.log('<><><><><>', videosData);

  return (
    <div className='searchPage'>
      <div className='searchPage__filter'>
        <TuneOutlined></TuneOutlined>
        <h2>Filter</h2>
      </div>

      <hr></hr>

      {videosData.map((item, index) => {
        return item.id.kind === 'youtube#channel' ? (
          <ChannelRow
            key={index}
            image={item.snippet.thumbnails.default.url}
            channel={item.snippet.channelTitle}
            verified
            subs='19.7M'
            noOfVideos={3372}
            desc={item.snippet.description}
          />
        ) : null;
      })}

      <hr></hr>

      {videosData.map((item, index) => {
        return item.id.kind === 'youtube#video' ? (
          <VideoRow
            key={index}
            subs='19.7M'
            views='1M'
            desc={item.snippet.description}
            timestamp='1 week ago'
            channel={item.snippet.channelTitle}
            title={item.snippet.title}
            image={item.snippet.thumbnails.medium.url}
          />
        ) : null;
      })}

      {/* <VideoRow
        views='4.2M'
        subs='19.7'
        desc='Namaskaar Dosto, is video mein maine aapse baat ki hai Apple ke latest iPhone 12 family ke baare mein jaha pe hai'
        timestamp='1 week ago'
        channel='Technical Guruji'
        title='Apple iPhone 12 unboxing & first look'
        image='https://i.ytimg.com/an_webp/tCvnOZ1_XbI/mqdefault_6s.webp?du=3000&sqp=CPbO-vwF&rs=AOn4CLCssCZvtL9Zd3FV1qZhWhmfG9dPOg'
      ></VideoRow>

      <VideoRow
        views='301K'
        subs='19.7'
        desc='Namaskar Dosto, is video mein maine aapse baat ki hai November 2020 mein launch hone waale phones ke baare'
        timestamp='6 hours ago'
        channel='Technical Guruji'
        title='Top Upcoming Smartphones November 2020'
        image='https://i.ytimg.com/an_webp/web39G7-ZfQ/mqdefault_6s.webp?du=3000&sqp=CPS_-vwF&rs=AOn4CLDKaPJVxyJoJ94tRF7vYOjCZiddYQ'
      ></VideoRow>

      <VideoRow
        views='378K'
        subs='19.7'
        desc='Namaskaar Dosto, Tech Talks ke is Episode mein maine aapse kuch interesting Tech News Share ki hai jaise Micromax IN Exclusive, Samsung Budget Folding, V20 SE, Japan China Drone, SD 875 Power aur bahut kuch. Mujhe umeed hai ki yeh video aapko pasand aayega.'
        timestamp='23 hours ago'
        channel='Technical Guruji'
        title='Tech Talks #1275'
        image='https://i.ytimg.com/an_webp/Ayw9JXl-4eE/mqdefault_6s.webp?du=3000&sqp=CLzN-vwF&rs=AOn4CLA3rsDhpEnPlUAULxZQ_r1XQpqlWQ'
      ></VideoRow> */}
    </div>
  );
}

export default SearchPage;
