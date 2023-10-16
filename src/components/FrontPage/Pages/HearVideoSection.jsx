import React from 'react';
import video from '../../../assets/Ocean Sea Waves _ Drone Aerial View _ Free stock footage _ Free HD Videos - no copyright.mp4'
import { Button, Rating } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const HearVideoSection = () => {
    return (
        <div className=' px-12'>
            <h1 className=' text-4xl font-serif text-yellow-800 text-center py-5'>Hear From Us</h1>
            <div>
                <div className=' grid md:grid-cols-2 gap-12'>
                    <video className="h-full w-full rounded-lg" controls autoPlay muted>
                        <source src={video} type="video/mp4" />

                    </video>
                    <div>
                        <h1 className=' text-2xl font-semibold text-blue-600 font-serif'>Explore Our Video Content</h1>
                        <h1 className=' py-3 text-lg text-gray-700'>
                            At our video section, we are excited to share an extensive and diverse range of video content covering a wide array of topics. Whether you're looking for
                            educational tutorials, engaging entertainment,
                            or informative discussions, we've got you covered.To ensure you never miss out on our exciting content, don't forget to hit that subscribe button. By subscribing, you'll stay updated with our newest releases and be a part of our growing community of viewers.

                        </h1>
                        <div className='flex items-center md:gap-12 pb-3'>
                            <h1 className=' text-xl font-sans font-normal'>Total Video: <span className='text-blue-600'>75 +</span></h1>
                            <Rating value={4} readonly />
                        </div>

                        <div className="flex items-center">
                            <Button
                                size="lg"
                                variant="outlined"
                                color="red"
                                className="flex items-center gap-3 "
                            >
                                subscribe
                                <img src="https://cdn-icons-png.flaticon.com/128/174/174883.png" alt="metamask" className="h-6 w-6 rounded-full" />
                            </Button>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div>
            <div className=' flex justify-center py-8'>
                <Link to="/customPost/video">
                    <Button color="amber" variant="outlined">Watch All Video</Button>
                </Link>
            </div>

        </div>
    );
};

export default HearVideoSection;