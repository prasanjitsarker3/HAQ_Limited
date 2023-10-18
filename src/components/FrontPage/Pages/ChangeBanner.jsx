import React, { useState, useEffect } from 'react';
import { Carousel, Typography, Button } from "@material-tailwind/react";

const ChangeBanner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        {
            src: "https://i.ibb.co/pyzQhP3/First.jpg",
            title: "Move to Saudi Arabia",
            description: "Find your dream job at Saudi Arab with more than 35 Lakhs Bangladeshi"
        },
        {
            src: "https://i.ibb.co/kKm1z59/Second.jpg",
            title: "Overseas Job Market",
            description: "Struggling to find a job in Bangladesh. Overseas job market is presented to you"
        },
        {
            src: "https://i.ibb.co/0ZtY8R5/thirdjpg.jpg",
            title: "Contribution",
            description: "Contribute to the economy of your FAMILY & BANGLADESH"
        }
    ];

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const autoChangeSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(autoChangeSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full">
            <Carousel className="rounded-xl  h-[87vh]">
                <div className="relative w-full h-full">
                    <img
                        src={images[currentIndex].src}
                        alt={`image ${currentIndex + 1}`}
                        className="h-[87vh] w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
                        <div className="text-center">
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-4 text-xl md:text-3xl lg:text-3xl primaryColor"
                            >
                                {images[currentIndex].title}
                            </Typography>
                            <Typography
                                variant="lead"
                                color="white"
                                className="mb-12 py-5 px-12 opacity-80 md:text-xl text-xs"
                            >
                                {images[currentIndex].description}
                            </Typography>
                            <div className="flex justify-center">
                                <Button
                                    size="lg"
                                    variant="outlined"
                                    color="white"
                                    className="flex items-center gap-3 primaryColor"
                                >
                                    <img src="https://img.freepik.com/free-vector/branding-identity-corporate-logo-vector-design-template_460848-13992.jpg?size=626&ext=jpg&ga=GA1.1.2060036261.1681297115&semt=sph" alt="metamask" className="h-6 w-6 rounded-full" />
                                    HAO  Limited
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default ChangeBanner;
