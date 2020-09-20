import React from 'react';
import ChannelRow from './ChannelRow';
import ChannelVideos from './ChannelVideos';
import TuneIcon from '@material-ui/icons/Tune';
import './searchpage.css';
import Sdata from './SearchData';

const SearchPage=()=> {
    return (
        <div className="searchpage">
            <div className="searchpage_filter">
                <TuneIcon className="icon"/>
                <h3>Filter</h3>
            </div>
            <hr />
            <ChannelRow verified channelName="Taimoor Salahuddin aka Mooroo "
            subs="932k" videos="196" description="born in lahore to a muslim family, 
was at a young age guaged to have interests suitable for a promising career in mechanics,
fond of breaking apart toys and constructing music boxes,
Mooroo found that to him there was something more to the music boxes than their actual mechanical functioning,  
He later discovered that 'something', to be Music.  
Music just made more sense than anything else. 
The sort of sense he found hard to explain to people.
Earlier when asked why he stayed locked up in his room for hours at end listening to music, he would break into hyperbolic descriptions of how it made his mind and body feel, often embarrassed by the end, he would retreat back to his room and escape into the cassettes of sajjad ali and billy joel. 
Music had become the most important thing to him in his life and for the life of him he couldn't figure out why......" />
      <hr />
      <h3>Latest from Taimoor Salahuddin aka Moroo</h3>

      { Sdata.map ((val,index)=>{
          return <ChannelVideos thumbnail={val.thumbnailImage} title={val.title} channelName={val.channelName}
                   views={val.views} timestamp={val.timestamp} description={val.description} />
      })  }  
        </div>
    );
}

export default SearchPage;