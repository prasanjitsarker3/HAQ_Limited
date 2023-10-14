import { Button, Typography } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import { Parallax } from 'react-parallax';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const SiteCalculation = () => {
    const [couut, setCount] = useState(false);

    const backgroundImageUrl = "https://img.freepik.com/premium-photo/top-view-business-group-multiethnic-busy-people-meeting-with-other-modern-office-with-laptop-computer-smartphone-tablet-coffee-document-table_71455-2558.jpg?size=626&ext=jpg&ga=GA1.2.2060036261.1681297115&semt=ais";

    const containerStyle = {
        position: 'relative',
    };

    const backgroundStyle = {
        content: '""',
        backgroundImage: `url(${backgroundImageUrl})`,
        filter: 'grayscale(100%)', // Apply grayscale to make the background image black and white
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
    };

    return (
        <div>
            <Parallax className='h-50vh' blur={3} bgImage="https://img.freepik.com/free-photo/small-table-lamp-plane-world-map_169016-29599.jpg?size=626&ext=jpg&ga=GA1.1.2060036261.1681297115&semt=sph" bgImageAlt="the cat" strength={200}>
                <div className="grid md:grid-cols-3 text-center text-white py-24">
                    <div className='flex justify-center items-center py-2'>
                        <div>
                            <div className='flex justify-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/3293/3293466.png" alt="" className='h-20 w-20' />
                            </div>
                            <ScrollTrigger onEnter={() => setCount(true)} onExit={() => setCount(false)}>
                                <p className='text-4xl pt-2 primaryColor'>
                                    {couut && <CountUp start={0} end={920} duration={2} delay={0} />} +
                                </p>
                            </ScrollTrigger>
                            <p className='text-2xl'>Happy User</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center py-2'>
                        <div>
                            <div className='flex justify-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/3061/3061341.png" alt="" className='h-20 w-20' />
                            </div>
                            <ScrollTrigger onEnter={() => setCount(true)} onExit={() => setCount(false)}>
                                <p className='text-4xl pt-2 primaryColor'>
                                    {couut && <CountUp start={0} end={120} duration={2} delay={0} />} +
                                </p>
                            </ScrollTrigger>
                            <p className='text-2xl'>Forigen Company</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div>
                            <div className='flex justify-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/11498/11498770.png" alt="" className='h-20 w-20' />
                            </div>
                            <ScrollTrigger onEnter={() => setCount(true)} onExit={() => setCount(false)}>
                                <p className='text-4xl pt-2 primaryColor'>
                                    {couut && <CountUp start={0} end={19} duration={2} delay={0} />} +
                                </p>
                            </ScrollTrigger>
                            <p className='text-2xl'>Country</p>
                        </div>
                    </div>
                </div>
            </Parallax>
        </div>
    );
};

export default SiteCalculation;
