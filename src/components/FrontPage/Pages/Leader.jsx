import { Button } from '@material-tailwind/react';
import React, { useState } from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';

const Leader = () => {
    const [leader, setLeader] = useState(false);
    return (
        <div className={`transition-all  duration-5000 ease-in-out ${leader ? 'bg-blue-500' : 'bg-white'}`}>
            <div className='grid md:grid-cols-2 py-12 gap-5' onMouseOver={() => setLeader(true)} onMouseLeave={() => setLeader(false)}>
                <div className='flex justify-center px-7'>
                    <div>
                        <h1 className=' text-2xl'>Our Team</h1>
                        <h1 className=' text-5xl font-semibold primaryColor py-2'>Meet the Leaders</h1>
                        <p className=' text-lg'>It takes dedicated, capable, and experienced leaders to ensure MUNSHI stays a global leader in workforce service for many years to come. We are confident we have the right team in place to continue positive growth of the company.</p>
                        <div className='py-3 flex'>
                            <Button color="amber" className='text-white py-3 flex justify-center items-center gap-3'><span>Our Team</span><FaLongArrowAltRight /></Button>
                        </div>
                    </div>
                </div>
                <div className='grid md:grid-cols-2 gap-5 px-6'>
                    <div className='card absolute'>
                        <img className='md:w-[320px]  md:h-[260px]' src="https://img.freepik.com/free-photo/young-builder-man-wearing-construction-uniform-smiling-holding-safety-helmet_141793-33750.jpg?size=626&ext=jpg&ga=GA1.1.2060036261.1681297115&semt=ais" alt="" />
                        <div className='card-body h-full w-full top-0 py-2'>
                            <h1 className='card-title text-xl text-white  uppercase font-bold  text-center!'>Md Monir Hossen</h1>
                            <h1 className='capitalize text-lg font-light text-white'>CEO Of HAO Limited</h1>
                            <h1 className='card-info text-left text-white'>Some Information In Her ...</h1>
                        </div>
                        <h1 className=' relative bottom-7 mx-12 rounded-md bg-blue-gray-50 text-center font-serif p-1'>1Md Monir Hossen</h1>
                    </div>
                    <div className='card '>
                        <img className='md:w-[320px]  md:h-[260px]' src="https://img.freepik.com/free-photo/young-builder-man-wearing-construction-uniform-smiling-holding-safety-helmet_141793-33750.jpg?size=626&ext=jpg&ga=GA1.1.2060036261.1681297115&semt=ais" alt="" />
                        <div className='card-body h-full w-full top-0 py-2'>
                            <h1 className='card-title text-xl text-white  uppercase font-bold  text-center!'>Md Monir Hossen</h1>
                            <h1 className='capitalize text-lg font-light text-white'>Managing Director</h1>
                            <h1 className='card-info text-left text-white'>Some Information In Her ...</h1>
                        </div>
                        <h1 className=' relative bottom-7 mx-12 rounded-md bg-blue-gray-50 text-center font-serif p-1'>1Md Monir Hossen</h1>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Leader;