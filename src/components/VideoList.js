import React from 'react';
import VideoItem from './VideoItem';
// const VideoList = (props) =>{  
//      return <div> {props.videos.length}</div>;
// };
//if don't want to keep writing props can do it like this. 
// const VideoList = ({videos}) =>{  
//     return <div> {videos.length}</div>;
// };

const VideoList = ({videos, onVideoSelect}) =>{ 
    //inner fuction will be called one time for every object inside videos array 
    const renderedList = videos.map((video) => {
        // console.log(video);
        return <VideoItem key ={video.id.videoId} onVideoSelect= {onVideoSelect} video= {video}/>;

    });
    return <div className= "ui relaxed divided list"> {renderedList}</div>;
};
export default VideoList;