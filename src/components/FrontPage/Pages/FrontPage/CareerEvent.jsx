import React from 'react';
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';

const CareerEvent = () => {
    const career = [
        {
            id: 1,
            name: "Dhaka",
            img: "https://img.freepik.com/free-photo/sunset-illuminates-gothic-architecture-reflecting-water-generated-by-ai_188544-23671.jpg?size=626&ext=jpg&ga=GA1.2.2060036261.1681297115&semt=sph"
        },
        {
            id: 2,
            name: "Dhaka",
            img: "https://img.freepik.com/free-photo/toronto-skyline-from-park_649448-3488.jpg?size=626&ext=jpg&ga=GA1.2.2060036261.1681297115&semt=sph"
        },
        {
            id: 3,
            name: "Dhaka",
            img: "https://img.freepik.com/free-photo/theatine-church-sunlight-cloudy-sky-munich-germany_181624-10436.jpg?size=626&ext=jpg&ga=GA1.1.2060036261.1681297115&semt=sph"
        },

    ]
    return (
        <div>
            <h1 className='text-2xl text-center py-3  font-semibold primaryColor uppercase'>Get Your Dream Job At</h1>
            <div className=' grid md:grid-cols-3 gap-5 w-full py-5'>
                {
                    career.map(data =>
                        <Card
                            key={data.id}
                            style={{
                                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${data.img})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',

                            }}
                            className="mt-6 w-96 mx-auto card"
                        >
                            <CardBody style={{
                                zIndex: 2,
                                position: 'relative',
                                color: '#ffffff',
                                padding: '20px',
                            }}>
                                <img src="https://i.ibb.co/SxHrh3G/plan.png" alt=""  className="mb-4 h-16 w-16" />
                                <Typography style={{
                                    zIndex: 2,
                                    position: 'relative',
                                }} variant="h5" className="mb-2 text-yellow-900">
                                    UI/UX Review Check
                                </Typography>
                                <Typography>
                                    Because it&apos;s about motivating the doers. Because I&apos;m here to
                                    follow my dreams and inspire others.
                                </Typography>
                            </CardBody>
                            <CardFooter  style={{
                                zIndex: 2,
                                position: 'relative',
                            }} className="pt-0 flex justify-center">
                                <Link to="/applyEvent" className="inline-block">
                                    <Button size="sm" variant="text" color='blue' className="flex border items-center text-white gap-2">
                                        Apply Now
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
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    )
                }
            </div>
        </div>
    );
};

export default CareerEvent;