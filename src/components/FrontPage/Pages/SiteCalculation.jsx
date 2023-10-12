import { Button, Typography } from '@material-tailwind/react';
import React from 'react';
import { Parallax } from 'react-parallax';

const SiteCalculation = () => {
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
            <Parallax blur={3} bgImage="https://img.freepik.com/premium-photo/top-view-business-group-multiethnic-busy-people-meeting-with-other-modern-office-with-laptop-computer-smartphone-tablet-coffee-document-table_71455-2558.jpg?size=626&ext=jpg&ga=GA1.2.2060036261.1681297115&semt=ais" bgImageAlt="the cat" strength={200}>
                <div className="grid md:grid-cols-4 text-center text-white py-24">
                    <div className='flex justify-center items-center py-2'>
                        <div>
                            <div className='flex justify-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/3293/3293466.png" alt="" className='h-20 w-20' />
                            </div>
                            <p className='primaryColor font-bold text-xl pt-2'>1200+</p>
                            <p className='text-xl'>Happy User</p> 
                        </div>
                    </div>
                    <div className='flex justify-center items-center py-2'>
                        <div>
                            <div className='flex justify-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/3061/3061341.png" alt="" className='h-20 w-20' />
                            </div>
                            <p className='text-xl pt-2 primaryColor'>120+</p>
                            <p className='text-xl'>Forigen Company</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div>
                            <div className='flex justify-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/11498/11498770.png" alt="" className='h-20 w-20' />
                            </div>
                            <p className='text-xl pt-2 primaryColor'>12+</p>
                            <p className='text-xl'>Country</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div>
                            <div className='flex justify-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/8820/8820245.png" alt="" className='h-20 w-20' />
                            </div>
                            <p className='text-xl pt-2 primaryColor'>120+</p>
                            <p className='text-xl'>Awards Winner</p>
                        </div>
                    </div>
                </div>
            </Parallax>
        </div>
    );
};

export default SiteCalculation;
