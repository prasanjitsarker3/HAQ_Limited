
import { Button, Input, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const ApplyEvent = () => {
    const history = useNavigate();

    const handleGoBack = () => {
        // history.goBack();
        history(-1);
    };
    return (
        <div className="mx-auto rounded-md md:px-12 md:pb-5">
            <div className=" flex justify-center w-full mx-auto  p-3">
                <div className="grid md:grid-cols-2 gap-5 px-12 ">
                    <figure className="relative w-full md:w-[400px] mx-auto">
                        <img
                            className="h-full w-full rounded-xl object-cover object-center"
                            src="https://img.freepik.com/free-photo/theatine-church-sunlight-cloudy-sky-munich-germany_181624-10436.jpg?size=626&ext=jpg&ga=GA1.1.2060036261.1681297115&semt=sph"
                            alt="nature image"
                        />
                        <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                            <div>
                                <Typography variant="h5" color="blue-gray">
                                    Riyadh City
                                </Typography>
                                <Typography color="gray" className="mt-2 font-normal">
                                    20 July 2023
                                </Typography>
                            </div>
                            <Typography variant="h5" className=" text-green-800" color="blue-gray">
                                Processing
                            </Typography>
                        </figcaption>
                    </figure>
                    <div className="w-full md:w-[400px] mx-auto ">
                        <div className=" space-y-3 w-fll  mx-auto p-5 bg-deep-orange-50 rounded shadow-md py-10">
                            <h1 className=" text-2xl font-semibold text-light-blue-500 text-center">
                                Riyadh,Kingdom of Sadi Arabia
                            </h1>
                            <h1 className=" text-lg text-gray-800 text-justify">
                                Saudi Arabia, formally known as the Kingdom of Saudi Arabia, is a country in the Arabian Peninsula in the Middle East. It is well-known for its rich history, culture, and historical significance in the Islamic world
                            </h1>
                            <div className=" flex justify-around">
                                <h1>12/09/2023, 9 AM</h1>
                                <h1>Applied: <span className=" text-green-500 font-semibold">12 +</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" w-full md:w-3/4    mx-auto p-2 ">
                <div className=" grid md:grid-cols-2 px-16 gap-3">
                    <Input className="" variant="standard" label="Enter Name " />
                    <Input variant="standard" label="Enter Address" />
                    <Input variant="standard" label="Enter Contract" />
                    <Input variant="standard" label="Question ?" />
                    <Button className="md:mx-12 " color="blue">Apply Now</Button>
                    <Button onClick={handleGoBack} className="md:mx-12" color="red">Back page</Button>
                </div>
            </div>

        </div>
    );
};

export default ApplyEvent;