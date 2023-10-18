import React from 'react';
import Marquee from "react-fast-marquee";
import { FaWhatsapp } from 'react-icons/fa';

const MovingHead = () => {
    return (
        <div>
            <Marquee className='border-b border-gray-600'>
                <div className=' flex justify-center md:gap-28 gap-6 m-0 p-0 '>
                    <div className=' flex items-center gap-3'>
                        <FaWhatsapp className=' w-5 h-5 text-[#27ae60] font-semibold' />
                        <h1>+8801711979475</h1>
                    </div>
                    <div className=' flex items-center gap-3'>
                        <FaWhatsapp className=' w-5 h-5 text-[#27ae60] font-semibold' />
                        <h1>+8801711416611</h1>
                    </div>
                    <div className=' flex items-center gap-3'>
                        <FaWhatsapp className=' w-5 h-5 text-[#27ae60] font-semibold' />
                        <h1>+8801775281033</h1>
                    </div>
                    <div className=' flex items-center gap-3'>
                        <FaWhatsapp className=' w-5 h-5 text-[#27ae60] font-semibold' />
                        <h1>+8801711353034</h1>
                    </div>
                    <div className=' flex items-center gap-3'>
                        <FaWhatsapp className=' w-5 h-5 text-[#27ae60] font-semibold' />
                        <h1>+8801711383036</h1>
                    </div>
                    <div className=' flex items-center gap-3'>
                        <FaWhatsapp className=' w-5 h-5 text-[#27ae60] font-semibold' />
                        <h1>+8801711353034</h1>
                    </div>
                    
                </div>
            </Marquee>
        </div>
    );
};

export default MovingHead;