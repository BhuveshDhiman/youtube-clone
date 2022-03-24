import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import youtube from "../API/youtube";
import { useDispatch } from "react-redux";
import "./header.css";
import * as actions from "../actions";
import statistics from "../API/statistics";

function Header() {
	const dispatch = useDispatch();

	const [inputSearch, setInputSearch] = useState("");

	const handleSubmit = async () => {
		const response = await youtube.get("/search", {
			params: {
				q: inputSearch,
			},
		});
		const videos = response.data.items.filter((item) => item.id.kind === "youtube#video");
		const videoIdArray = videos.map((item) => `${item.id.videoId}`).join(",");
		const channels = response.data.items.filter((item) => item.id.kind === "youtube#channel");

		const channelIdArray = channels.map((item) => `${item.id.channelId}`).join(",");

		await getStats(videoIdArray, channelIdArray, videos, channels);
	};

	const getStats = async (videoIdArray, channelIdArray, videos, channels) => {
		const videoStatResponse = await statistics.get("/videos", {
			params: {
				id: videoIdArray,
			},
		});

		const channelStatResponse = await statistics.get("/channels", {
			params: {
				id: channelIdArray,
			},
		});

		dispatch(actions.videoResponse(videos));
		dispatch(actions.channelResponse(channels));
		dispatch(actions.videoStatResponse(videoStatResponse.data.items));
		dispatch(actions.channelStatResponse(channelStatResponse.data.items));
	};

	return (
		<div className="header">
			<div className="header__left">
				<MenuIcon></MenuIcon>
				<Link to="/">
					<img className="header__logo" src={`${process.env.PUBLIC_URL}/youtube.png`} alt="youtube"></img>
				</Link>
			</div>

			<div className="header__input">
				<input
					type="text"
					placeholder="Search"
					value={inputSearch}
					onChange={(e) => {
						setInputSearch(e.target.value);
					}}
				></input>
				<Link to={`/search/${inputSearch}`}>
					<div className="header__inputButtonCont" onClick={() => handleSubmit()}>
						<SearchIcon className="header__inputButton"></SearchIcon>
					</div>
				</Link>
			</div>

			<div className="header__icons">
				<VideoCallIcon className="header__icon"></VideoCallIcon>
				<AppsIcon className="header__icon"></AppsIcon>
				<NotificationsIcon className="header__icon"></NotificationsIcon>
				<Avatar
					src="https://lh3.googleusercontent.com/a-/AOh14GjiFhcmcsQwx1gYPia4xKTJzT9G07r56k1mVsoLHQ=s88-c-k-c0x00ffffff-no-rj-mo"
					alt="Profile Picture"
				></Avatar>
			</div>
		</div>
	);
}

export default Header;
