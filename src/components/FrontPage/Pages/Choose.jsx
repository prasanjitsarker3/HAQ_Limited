import { Avatar } from '@material-tailwind/react';
import React from 'react';
import ScrollCarousel from 'scroll-carousel-react';
import ChooseTime from '../../CustomComponentPage/ChooseTime';

const Choose = () => {

    const chooses = [
        {
            id: 1,
            name: "Compensation Consulting",
            title: "Compensation Consulting are always help for a companies marketing, customer growths.",
            image: "https://cdn-icons-png.flaticon.com/128/1651/1651602.png",
        },
        {
            id: 2,
            name: "Leadership Training",
            title: "The Leadership Training are always help for a companies marketing, customer growths.",
            image: "https://cdn-icons-png.flaticon.com/128/3287/3287033.png"
        },
        {
            id: 3,
            name: "Corporated Programs",
            title: "The Corporated Programs are always help for a companies marketing, customer growths.",
            image: "https://cdn-icons-png.flaticon.com/128/4073/4073056.png"
        }
    ]
    return (
        <div className='px-12 '>
            <div>
                <h1 className='text-center text-4xl font-sans font-semibold  py-5'>Why <span className='primaryColor'>Choose</span>Us</h1>
                <p className='text-center text-lg pb-5'>We have our special functions are added to a business. We feel that this special function is part of HR its piece of the successful business.</p>
            </div>
            <div class="w-full md:flex md:flex-row flex-col py-12">
                <div className=' flex justify-center items-center md:w-3/4 mx-auto md:px-5'>
                    <div className=' grid  md:grid-cols-3 gap-3 mx-auto'>
                        {
                            chooses.map(item =>
                                <div key={item.id} className=' shadow-lg rounded-md'>
                                    <div className='flex justify-center items-center p-3'>
                                        <img className='bg-white p-3 rounded-md h-[100px] w-[100px] shadow-md' src={item.image} alt="avatar" variant="rounded" />
                                    </div>
                                    <h1 className='text-center text-xl py-2 primaryColor'>{item.name}</h1>
                                    <h1 className='text-center px-1 py-3'>{item.title}</h1>
                                </div>
                            )
                        } 
                    </div>
                </div>
                <div className='w-full md:w-1/4 md:pt-0 pt-6'>
                    <ChooseTime></ChooseTime>
                </div>
            </div>
        </div>
    );
};

export default Choose;