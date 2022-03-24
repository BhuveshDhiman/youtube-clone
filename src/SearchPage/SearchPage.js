import { TuneOutlined } from "@material-ui/icons";
import React from "react";
import ChannelRow from "./ChannelRow/ChannelRow";
import "./SearchPage.css";
import VideoRow from "./VideoRow/VideoRow";
import { useSelector } from "react-redux";

function SearchPage() {
	const videosData = useSelector((state) => state.reducer.videoResponse);
	const channelsData = useSelector((state) => state.reducer.channelResponse);
	const videoStatData = useSelector((state) => state.reducer.videoStatResponse);
	const channelStatData = useSelector((state) => state.reducer.channelStatResponse);

	return (
		<div className="searchPage">
			<div className="searchPage__filter">
				<TuneOutlined></TuneOutlined>
				<h2>Filter</h2>
			</div>
			<hr></hr>
			{channelStatData && channelStatData.length && channelsData && channelsData.length
				? channelsData.map((item, index) => (
						<ChannelRow
							key={index}
							image={item.snippet.thumbnails.default.url}
							channel={item.snippet.channelTitle}
							subs={channelStatData[index] && channelStatData[index].statistics.subscriberCount}
							noOfVideos={channelStatData[index] && channelStatData[index].statistics.videoCount}
							desc={item.snippet.description}
						/>
				  ))
				: null}
			<hr></hr>
			{videoStatData && videoStatData.length && videosData && videosData.length
				? videosData.map((item, index) => {
						return (
							<VideoRow
								key={index}
								views={videoStatData[index] && videoStatData[index].statistics.viewCount}
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
