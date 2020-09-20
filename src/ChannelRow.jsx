import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import taimoor from './images/taimoor.jpg';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import './channelrow.css';

const ChannelRow=(props)=>{
    console.log(props);
    return (
        <div className="channelrow">

            <Avatar className="channelrow_avatar" alt="Taimoor" src={taimoor} />
            <div className="channelrow_info">
                <h4>{props.channelName}{props.verified && <VerifiedUserIcon />}</h4>
                
                <p>{props.subs} subscribers . {props.videos} videos</p>
                <p>{props.description}</p>
                
            </div>
        </div>
    );
}
export default ChannelRow;