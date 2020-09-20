import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import './videocard.css';
const VideoCard=(props)=> {
    return (
        <div className="videocard">
        <img className="videocard_thumbnail" src={props.thumbnailImage} alt="Thumbnail Pic" />
        <div className="videocard_info">
            <Avatar className="videocard_avatar" alt="Channel Owner" src={props.channelImage} />
        
        <div className="videocard_text">
            <h4>{props.title}</h4>
            <p>{props.channelName}</p>
            <p>{props.views} . {props.timestamp}</p>
        </div>

        </div>    
        </div>
    )
}

export default VideoCard
