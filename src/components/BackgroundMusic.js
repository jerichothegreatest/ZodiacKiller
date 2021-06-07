import React from 'react'

// Sound Imports
import Sound from 'react-sound';
import Smash from '../resources/smash.mp3';


function BackgroundMusic(props) {
    return (
        <div>
        <Sound
            url={Smash}
            playStatus={props.isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
            playFromPosition={0}
            loop={true}
        />
        </div>
    )
    
};

export default BackgroundMusic