import React from 'react';
import './RecommendedVideos.css';
import VideoCard from './VideoCard/VideoCard';

function RecommendedVideos() {
  return (
    <div className='recommendedVideos'>
      <h2>Recommended</h2>
      <div className='recommendedVideos__videos'>
        <VideoCard
          title='DHARIA - Sugar & Brownies'
          views='167M Views'
          timestamp='2 years ago'
          channelImage='https://yt3.ggpht.com/a-/AOh14GgdlUE-IRgfV7zmpRdxH9sNhkjakric8nrMpQ=s68-c-k-c0x00ffffff-no-rj-mo'
          channel='Thrace Music'
          image='https://i.ytimg.com/an_webp/y2tEPmwWEiI/mqdefault_6s_480x270.webp?du=3000&sqp=CIiO-vwF&rs=AOn4CLA67RcRrpM3b0RS7JrNSYAw5kjwlw'
        ></VideoCard>

        <VideoCard
          title='CS:GO, but you can BOUNCE'
          views='251K Views'
          timestamp='6 days ago'
          channelImage='https://yt3.ggpht.com/a-/AOh14GjyyqCex06So89nuoy7ztgOIURj_Epdu3rqrw=s68-c-k-c0x00ffffff-no-rj-mo'
          channel='Nade King'
          image='https://i.ytimg.com/an_webp/XA5YC-pvEP4/mqdefault_6s.webp?du=3000&sqp=CNi4-vwF&rs=AOn4CLA4F_wWDsknsfAr6ADEC6pN_wI-ew'
        ></VideoCard>

        <VideoCard
          title='MY NEW MANSION *OFFICIAL TOUR*'
          views='1.2M Views'
          timestamp='1 day ago'
          channelImage='https://yt3.ggpht.com/a-/AOh14GhEEaPvxnSi56zNE2cIh0gtIjfwkjmg2YwoWw=s68-c-k-c0x00ffffff-no-rj-mo'
          channel='Mo Vlogs'
          image='https://i.ytimg.com/an_webp/6EPYJ3MMPYE/mqdefault_6s.webp?du=3000&sqp=CNy--vwF&rs=AOn4CLCUJDJZS2z6utnQJYk4OM36WlLahQ'
        ></VideoCard>

        <VideoCard
          title='Apple iPhone 12 Pro Unboxing & First Look'
          views='3M Views'
          timestamp='1 week ago'
          channelImage='https://yt3.ggpht.com/a-/AOh14GieBl5bhpG0o40TRvr-rV-WlrpRe0B4QhzD2w=s68-c-k-c0x00ffffff-no-rj-mo'
          channel='Technical Guruji'
          image='https://i.ytimg.com/an_webp/Y15GPvzSolY/mqdefault_6s.webp?du=3000&sqp=CIKs-vwF&rs=AOn4CLALguS3wm5tHo07F_-OIO9IRkGkgQ'
        ></VideoCard>

        <VideoCard
          title='When I Met Kapil Sharma in Dubai'
          views='6.7M Views'
          timestamp='8 months ago'
          channelImage='https://yt3.ggpht.com/a-/AOh14GhIXCEjtFlQuen1_vKIflViRHccDOaMCdEKyA=s68-c-k-c0x00ffffff-no-rj-mo'
          channel='Gaurav Chaudhary'
          image='https://i.ytimg.com/an_webp/H6ss8jerulY/mqdefault_6s_480x270.webp?du=3000&sqp=CPr_-fwF&rs=AOn4CLDITAd0QfXgX7MKJP90rOneHpNqFQ'
        ></VideoCard>
      </div>
    </div>
  );
}

export default RecommendedVideos;
