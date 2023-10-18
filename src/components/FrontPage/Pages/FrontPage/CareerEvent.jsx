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
            name: "Poland",
            city: " Warsaw City",
            date: "13/10/2023",
            role: "Active",
            applied: 12,
            des: "Poland's employment rate for the 15-64 age group was 70.3 percent in 2021, 13.3 percentage points higher than in 2010. Despite having the highest reported unemployment rate in the EU, unemployment is expected to reduce to 5.4% by 2023. The number of job openings has reduced, and the minimum gross pay is predicted to rise to 4,300 zloty in July 2024, representing a 19.4% increase over 2023. The country has one of the lowest rates of unemployment among EU countries.",
            about: "Poland, formally known as the Republic of Poland, is a Central European country. Poland's labor market is large and expanding, with probability for both Polish and international workers. To understand the current job market and any requirement for work in Poland, it is critical to conduct research on the specific industry and region you are interested in.",
            img: "https://img.freepik.com/free-photo/sunset-illuminates-gothic-architecture-reflecting-water-generated-by-ai_188544-23671.jpg?size=626&ext=jpg&ga=GA1.2.2060036261.1681297115&semt=sph"
        },
        {
            id: 2,
            name: "Hungary",
            city: " Debrecen City",
            date: "16/09/2023",
            role: "Processing",
            applied: 23,
            about: "Hungary, located in Central Europe, has a diverse job sector with opportunities in various industries. The country's economy is stable and rising, making it an appealing location for both domestic and international workers. ",
            des: "Working in Hungary for foreigners in 2023 is an excellent place to start if you want to move to Europe permanently or temporarily enhance your family's finances. Of course, it's not that easy. The labor force from third countries is practically scrutinized in every EU member state. So, let us try to figure out how to locate a job in Hungary in 2023, identify potential jobs and salaries, and look at the relocating process.",
            img: "https://img.freepik.com/free-photo/toronto-skyline-from-park_649448-3488.jpg?size=626&ext=jpg&ga=GA1.2.2060036261.1681297115&semt=sph"
        },
        {
            id: 3,
            name: "Kingdom of Sadi Arabia",
            city: " Riyadh City",
            date: "11/10/2023",
            role: "Processing",
            applied: 33,
            about: "Saudi Arabia, formally known as the Kingdom of Saudi Arabia, is a country in the Arabian Peninsula in the Middle East. It is well-known for its rich history, culture, and historical significance in the Islamic world. ",
            des: "Saudi Arabia is gaining prominence as a global recruitment market due to its large, experienced workforce, strategic location, and expanding economy. Employers are increasingly seeking top-tier candidates with global experience and skills. The country is open to both domestic and foreign workers, with English and international business culture norms making it easier for professionals to conduct business. ",
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
                                <img src="https://i.ibb.co/SxHrh3G/plan.png" alt="" className="mb-4 h-16 w-16" />
                                <Typography style={{
                                    zIndex: 2,
                                    position: 'relative',
                                }} variant="h5" className="mb-2 text-yellow-900">
                                    {data?.name}
                                </Typography>
                                <Typography className=' text-justify'>
                                    {data?.about.slice(0, 130)} ...
                                </Typography>
                            </CardBody>
                            <CardFooter style={{
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