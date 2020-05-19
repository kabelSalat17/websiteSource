import React from 'react';
import "../../../node_modules/video-react/dist/video-react.css";
import { Player, BigPlayButton } from 'video-react';



function Video(video) {
    return (
        <Player
            playsInline
            poster="/assets/poster.png"
            src= { video.video} 
            type="video/mp4"
            fluid={false}
            width={250}
            height={200}
        >
            <BigPlayButton position="center" />
        </Player>
    )
}

export default Video
