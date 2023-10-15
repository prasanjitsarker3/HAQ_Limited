import React from 'react';
import video from '../../../assets/Ocean Sea Waves _ Drone Aerial View _ Free stock footage _ Free HD Videos - no copyright.mp4'
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const HearVideoSection = () => {
    return (
        <div className=' px-12'>
            <h1 className=' text-4xl font-serif text-yellow-800 text-center py-5'>Hear From Us</h1>
            <video className="h-full w-full rounded-lg" controls autoPlay muted>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className=' flex justify-center py-5'>
                <Link to="/customPost/video">
                    <Button color="amber" variant="outlined">Sell All Video</Button>
                </Link>
            </div>

        </div>
    );
};

export default HearVideoSection;