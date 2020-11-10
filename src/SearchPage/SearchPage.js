import { TuneOutlined } from '@material-ui/icons';
import React from 'react';
import ChannelRow from './ChannelRow/ChannelRow';
import './SearchPage.css';
import VideoRow from './VideoRow/VideoRow';
import { useSelector } from 'react-redux';

function SearchPage() {
  const videosData = useSelector((state) => state.reducer.videoResponse);
  const channelsData = useSelector((state) => state.reducer.channelResponse);
  const videoStatData = useSelector((state) => state.reducer.videoStatResponse);
  const channelStatData = useSelector(
    (state) => state.reducer.channelStatResponse
  );

  return (
    <div className='searchPage'>
      <div className='searchPage__filter'>
        <TuneOutlined></TuneOutlined>
        <h2>Filter</h2>
      </div>
      <hr></hr>
      {channelStatData != 1
        ? channelsData.map((item, index) => (
            <ChannelRow
              key={index}
              image={item.snippet.thumbnails.default.url}
              channel={item.snippet.channelTitle}
              subs={channelStatData[index].statistics.subscriberCount}
              noOfVideos={channelStatData[index].statistics.videoCount}
              desc={item.snippet.description}
            />
          ))
        : null}
      <hr></hr>
      {videoStatData != 1
        ? videosData.map((item, index) => {
            return (
              <VideoRow
                key={index}
                views={videoStatData[index].statistics.viewCount}
                desc={item.snippet.description}
                channel={item.snippet.channelTitle}
                title={item.snippet.title}
                image={item.snippet.thumbnails.medium.url}
              />
            );
          })
        : null}
    </div>
  );
}

export default SearchPage;
