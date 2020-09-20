import React from 'react'
import './Recommendedvideos.css';
import VideoCard from './VideoCard';
import VideoCardData from './VideoCardData'
const RecommendedVideos =()=> {
    return (
        <div className="recommended_videos">
        <h2>Recommended</h2>
        <div className="videos">
            
            {
                VideoCardData.map((value,index)=>{
                    return <VideoCard thumbnailImage={value.thumbnailImage} title={value.title}
                    channelName={value.channelName} channelImage={value.channelImage}
                    views={value.views} timestamp={value.timestamp} />
                })
            }

        </div>    
        </div>
    );
}

export default RecommendedVideos;