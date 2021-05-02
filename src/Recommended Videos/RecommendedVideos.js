import React from "react";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard/VideoCard";

function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos__videos">
                <VideoCard
                    title="DHARIA - Sugar & Brownies"
                    views="167M Views"
                    timestamp="2 years ago"
                    channelImage="https://yt3.ggpht.com/a-/AOh14GgdlUE-IRgfV7zmpRdxH9sNhkjakric8nrMpQ=s68-c-k-c0x00ffffff-no-rj-mo"
                    channel="Thrace Music"
                    image="https://i.ytimg.com/vi/y2tEPmwWEiI/mqdefault.jpg"
                ></VideoCard>

                <VideoCard
                    title="CS:GO, but you can BOUNCE"
                    views="251K Views"
                    timestamp="6 days ago"
                    channelImage="https://yt3.ggpht.com/a-/AOh14GjyyqCex06So89nuoy7ztgOIURj_Epdu3rqrw=s68-c-k-c0x00ffffff-no-rj-mo"
                    channel="Nade King"
                    image="https://i.ytimg.com/vi/XA5YC-pvEP4/mqdefault.jpg"
                ></VideoCard>

                <VideoCard
                    title="MY NEW MANSION *OFFICIAL TOUR*"
                    views="1.2M Views"
                    timestamp="1 day ago"
                    channelImage="https://yt3.ggpht.com/a-/AOh14GhEEaPvxnSi56zNE2cIh0gtIjfwkjmg2YwoWw=s68-c-k-c0x00ffffff-no-rj-mo"
                    channel="Mo Vlogs"
                    image="https://i.ytimg.com/vi/6EPYJ3MMPYE/mqdefault.jpg"
                ></VideoCard>

                <VideoCard
                    title="Apple iPhone 12 Pro Unboxing & First Look"
                    views="3M Views"
                    timestamp="1 week ago"
                    channelImage="https://yt3.ggpht.com/a-/AOh14GieBl5bhpG0o40TRvr-rV-WlrpRe0B4QhzD2w=s68-c-k-c0x00ffffff-no-rj-mo"
                    channel="Technical Guruji"
                    image="https://i.ytimg.com/vi/Y15GPvzSolY/mqdefault.jpg"
                ></VideoCard>

                <VideoCard
                    title="When I Met Kapil Sharma in Dubai"
                    views="6.7M Views"
                    timestamp="8 months ago"
                    channelImage="https://yt3.ggpht.com/a-/AOh14GhIXCEjtFlQuen1_vKIflViRHccDOaMCdEKyA=s68-c-k-c0x00ffffff-no-rj-mo"
                    channel="Gaurav Chaudhary"
                    image="https://i.ytimg.com/vi/H6ss8jerulY/mqdefault.jpg"
                ></VideoCard>
            </div>
        </div>
    );
}

export default RecommendedVideos;
