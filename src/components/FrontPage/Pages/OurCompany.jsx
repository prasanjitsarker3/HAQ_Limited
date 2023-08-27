import { Button, Card, CardBody, CardFooter, Typography } from '@material-tailwind/react';
import { useEffect, useState } from 'react';

const OurCompany = () => {
    const [company, setCompany] = useState([]);
    const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

    useEffect(() => {
        fetch("ourcompany.json")
            .then(res => res.json())
            .then(data => setCompany(data))
    }, [])

    return (
        <div>
            <h1 className='text-center text-2xl font-semibold py-9 text-teal-600 font-serif '>Our Company Service</h1>
            <div className='grid md:grid-cols-3 gap-5 pb-12'>
                {
                    company.map((com, index) =>
                        <Card
                            onMouseEnter={() => setHoveredCardIndex(index)}
                            onMouseLeave={() => setHoveredCardIndex(null)}
                            key={com.id}
                            className='mt-6 w-96 mx-auto shadow-sm'
                        >
                            <CardBody>
                                <div className={`${hoveredCardIndex === index ? 'scale-110' : 'scale-100'
                                    } flex justify-center transform transition-transform duration-300 ease-in-out`}>
                                    <img src={com.image} alt="" className='h-[80px] w-[80px]' />
                                </div>
                                <Typography variant="h5" color="blue-gray" className="py-2 text-center">
                                    {com.title}
                                </Typography>
                                <Typography className={`${hoveredCardIndex ===index ? "primaryColor":""}`}>
                                    {com.description}
                                </Typography>
                            </CardBody>
                            <CardFooter className="pt-0 flex justify-center">
                                <a href="#" className="inline-block">
                                    <Button size="sm" variant="text" className={`${hoveredCardIndex ===index ? "primaryColor":""} flex items-center gap-2`} >
                                        See More
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
                                </a>
                            </CardFooter>
                        </Card>
                    )
                }
            </div>
        </div>
    );
};

export default OurCompany;
