import React from 'react'
import './channelvideos.css';
const ChannelVideos=(props)=> {
    return (
        <div className="channelvideos">
        <img className="channelvideos_thumbnail" src={props.thumbnail} alt="Thumbnail Pic" />        
        <div className="channelvideos_text">
            <h4>{props.title}</h4>
            <p>{props.channelName}</p>
            <p>{props.views} . {props.timestamp}</p>
            <p>{props.description}</p>
        </div>

        </div>    
    
    )
}

export default ChannelVideos;
