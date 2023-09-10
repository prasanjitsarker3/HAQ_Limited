import { Button, Card, CardBody, CardFooter, IconButton, Typography } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import ServiceTab from '../../ViewRoutingPage/ServiceTab';

const ResourceService = () => {
    const [service, setService] = useState([]);
    const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

    useEffect(() => {
        fetch("service.json")
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    // const tab=true;
    return (
        <div>

            <h1 className='text-center py-6 lg:text-4xl text-xl'>Our Company Resource <span className='primaryColor'>Services</span></h1>

            <div className='grid md:grid-cols-3 gap-5 pb-12'>
                {
                    service.map((data, index) =>
                        <Card

                            onMouseEnter={() => setHoveredCardIndex(index)}
                            onMouseLeave={() => setHoveredCardIndex(null)}
                            key={index}
                            className='mt-6 w-96 mx-auto shadow-sm'
                        >
                            <CardBody>
                                <div className={`${hoveredCardIndex === index ? 'scale-110' : 'scale-100'
                                    } flex justify-center transform transition-transform duration-300 ease-in-out`}>
                                    <img src={data.image} alt="" className='h-[90px] w-[90px] serviceBorder rounded-full p-2' />
                                </div>
                                <Typography variant="h5" color="blue-gray" className="py-2 text-center">
                                    {data.name}
                                </Typography>
                                <Typography variant="h5" color="blue-gray" className="py-2 text-center">
                                    {data?.title || ''}
                                </Typography>

                                <Typography className={`${hoveredCardIndex === index ? "primaryColor" : ""}`}>
                                    {data.description}
                                </Typography>
                            </CardBody>
                            <CardFooter className="pt-0 flex justify-center">
                                <a href="#" className="inline-block">
                                    <IconButton size='lg' className={`${hoveredCardIndex === index ? "white bg-orange-700" : ""} rounded-full`}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="currentColor"
                                            className="h-4 w-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                            />
                                        </svg>
                                    </IconButton>
                                </a>
                            </CardFooter>
                        </Card>
                    )
                }
            </div>
        </div>
    );
};

export default ResourceService;