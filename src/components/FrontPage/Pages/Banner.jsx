import { Button, Carousel, Typography } from "@material-tailwind/react";

const Banner = () => {
    return (
        <div>
            <Carousel
                className="w-full h-[530px]"
                navigation={({ setActiveIndex, activeIndex, length }) => (
                    <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                        {new Array(length).fill("").map((_, i) => (
                            <span
                                key={i}
                                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                                    }`}
                                onClick={() => setActiveIndex(i)}
                            />
                        ))}
                    </div>
                )}
            >
                <div className="relative w-full h-full">
                    <img
                        src="https://img.freepik.com/premium-photo/dedicated-service-creates-dedicated-customers-shot-young-man-using-headset-computer-modern-office_590464-34656.jpg?size=626&ext=jpg&ga=GA1.1.2060036261.1681297115&semt=ais"
                        alt="image 1"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
                        <div className="text-center">
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-4 text-xl md:text-2xl lg:text-3xl primaryColor"
                            >
                                24/7 Call Center Support
                            </Typography>
                            <Typography
                                variant="lead"
                                color="white"
                                className="mb-12 px-12 opacity-80 md:text-lg text-xs"
                            >
                                Our dedicated call center team is available around the clock to assist you with any questions or issues.
                                We take pride in delivering prompt, courteous, and effective solutions to all your inquiries.
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
                <div className="relative w-full h-full">
                    <img
                        src="https://img.freepik.com/free-photo/man-preparing-travel_53876-24709.jpg?size=626&ext=jpg&ga=GA1.1.2060036261.1681297115&semt=ais"
                        alt="image 1"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
                        <div className="text-center">
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-4 text-xl md:text-2xl lg:text-3xl primaryColor"
                            >
                                Your Dream Starts Here
                            </Typography>
                            <Typography
                                variant="lead"
                                color="white"
                                className="mb-12 px-12 opacity-80 md:text-lg text-xs"
                            >
                                Expedite your passport application with our efficient and speedy processing.Trust in our reliable services to ensure your passport is ready when you need it.
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
                <div className="relative w-full h-full">
                    <img
                        src="https://img.freepik.com/free-vector/success-concept-ladder-with-glowing-light-bulb_1017-32076.jpg?size=626&ext=jpg&ga=GA1.1.2060036261.1681297115&semt=ais"
                        alt="image 1"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
                        <div className="text-center">
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-4 text-xl md:text-2xl lg:text-3xl primaryColor"
                            >
                                Get Your Dream Job
                            </Typography>
                            <Typography
                                variant="lead"
                                color="white"
                                className="mb-12 px-20 opacity-80 md:text-lg text-xs"
                            >
                                Your journey to a fulfilling career begins with us. Unlock opportunities and find your dream job that aligns with your passions and aspirations.
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

            </Carousel>
        </div>
    );
};

export default Banner;