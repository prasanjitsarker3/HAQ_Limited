import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Testimonial = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    const testimonials = [
        {
            id: 1,
            image: 'https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?size=626&ext=jpg&ga=GA1.2.2060036261.1681297115&semt=ais',
            name: 'John Doe',
            title: 'CEO, ABC Company',
            rating: "5",
            content: 'The event was a phenomenal success! From the engaging speakers to the seamless organization, I was thoroughly ',
        },
        {
            id: 2,
            image: 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg&ga=GA1.2.2060036261.1681297115&semt=ais',
            name: 'Jane Lizza',
            title: 'Designer, XYZ Studio',
            rating: "4.5",
            content: 'Impressive event! Speakers were enlightening, and workshops engaging. The venue and staff. ',
        },
        {
            id: 3,
            image: 'https://img.freepik.com/premium-photo/closeup-portrait-handsome-smartlooking-smiling-with-toothy-smile-male-posing-social-advertisement-isolated-white-background-with-copy-space-your-promotional-information-content_616427-3101.jpg?size=626&ext=jpg&ga=GA1.2.2060036261.1681297115&semt=ais',
            name: 'Michael Johnson',
            title: 'Founder, QRS Ventures',
            rating: "4",
            content: 'Outstanding event! Speakers delivered valuable insights, and the networking opportunities were excellent.',
        },
    ];
    return (
        <div className=''>
            <div className='py-5'>
                <h1 className='primaryColor text-4xl text-center'>Testimonial</h1>
                <h2 className='text-center text-2xl pt-3 primaryColor font-bold'>" <span className='text-black font-normal'>What Our Customers Are Saying</span> "</h2>
            </div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper px-24"
            >


                {
                    testimonials.map(test =>
                        <SwiperSlide className='md:px-32 '>
                            <div className='grid md:grid-cols-2  p-5 py-10 bg-[#1FAA59]'>
                                <div className='flex justify-center px-5'>
                                    <img
                                        src={test.image} className="w-[200px] h-[200px] rounded-full p-2 bg-gradient-to-br from-blue-300 to-purple-400"
                                    />
                                </div>
                                <div className='flex justify-center items-center px-5'>
                                    <div className="mb-4 text-center">
                                        <h3 className="text-xl font-inter font-semibold py-3 primaryColor">{test.name}</h3>
                                        <p className=" font-thin">{test.content}</p>
                                        <div className="flex justify-center pt-2">
                                            <Rating
                                                style={{ maxWidth: 120 }}
                                                value={test.rating}
                                                readOnly
                                            />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                    )
                }

                <div className="autoplay-progress rounded-full bg-[#1FAA59]" slot="container-end">
                    <svg className='text-yellow-700' viewBox="0 0 48 48" ref={progressCircle}>
                        <circle className='text-yellow-600' cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span className='text-yellow-500' ref={progressContent}></span>
                </div>
            </Swiper>

        </div>
    );
};

export default Testimonial;