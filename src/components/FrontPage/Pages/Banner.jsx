import { Button, Carousel, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselData = [
        {
            id: "1",
            image: "https://img.freepik.com/premium-photo/dedicated-service-creates-dedicated-customers-shot-young-man-using-headset-computer-modern-office_590464-34656.jpg?size=626&ext=jpg&ga=GA1.1.2060036261.1681297115&semt=ais",
            title: "24/7 Call Center Support",
            description: " Our dedicated call center team is available around the clock to assist you with any questions or issues. We take pride in delivering prompt, courteous, and effective solutions to all your inquiries."
        },
        {
            id: "2",
            image: "https://img.freepik.com/premium-photo/dedicated-service-creates-dedicated-customers-shot-young-man-using-headset-computer-modern-office_590464-34656.jpg?size=626&ext=jpg&ga=GA1.1.2060036261.1681297115&semt=ais",
            title: "24/8 Call",
            description: " Our dedicated call center team is available around the clock to assist you with any questions or issues. We take pride in delivering prompt, courteous, and effective solutions to all your inquiries."
        },
        {
            id: "3",
            image: "https://img.freepik.com/premium-photo/dedicated-service-creates-dedicated-customers-shot-young-man-using-headset-computer-modern-office_590464-34656.jpg?size=626&ext=jpg&ga=GA1.1.2060036261.1681297115&semt=ais",
            title: "24/9 Call Center Support",
            description: " Our dedicated call center team is available around the clock to assist you with any questions or issues. We take pride in delivering prompt, courteous, and effective solutions to all your inquiries."
        }
    ]
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
        }, 3000); 

        return () => clearInterval(interval); 
    }, [carouselData]);
    return (
        <div>
            <Carousel
                className="w-full md:h-[530px]"
                navigation={({ setActiveIndex, activeIndex, length }) => (
                    <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                        {new Array(length).fill("").map((_, i) => (
                            <span
                                key={i}
                                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"}`}
                                onClick={() => setActiveIndex(i)}
                            />
                        ))}
                    </div>
                )}
                activeIndex={currentIndex}
            >
                {carouselData.map((data, i) => (
                    <div key={i} className="relative w-full h-full">
                        <img
                            src={data.image}
                            alt={`image ${i + 1}`}
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
                            <div className="text-center">
                                <Typography
                                    variant="h1"
                                    color="white"
                                    className="mb-4 text-xl md:text-2xl lg:text-3xl primaryColor"
                                >
                                    {data.title}
                                </Typography>
                                <Typography
                                    variant="lead"
                                    color="white"
                                    className="mb-12 px-12 opacity-80 md:text-lg text-xs"
                                >
                                    {data.description}
                                </Typography>
                                <div className="flex justify-center">
                                    <Button
                                        size="lg"
                                        variant="outlined"
                                        color="white"
                                        className="flex items-center gap-3 primaryColor"
                                    >
                                        <img src="https://img.freepik.com/free-vector/branding-identity-corporate-logo-vector-design-template_460848-13992.jpg?size=626&ext=jpg&ga=GA1.1.2060036261.1681297115&semt=sph" alt="metamask" className="h-6 w-6 rounded-full" />
                                        HAO Limited
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Banner;