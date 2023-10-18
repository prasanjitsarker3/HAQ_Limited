import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    CardFooter,
    Tooltip,
} from "@material-tailwind/react";
import { FaMapMarkerAlt, FaTwitter } from 'react-icons/fa';
import { HiLink, HiOutlinePhone, HiMail, HiOutlineHome } from "react-icons/hi";

const ManPower = ({ categoryData }) => {
    return (
        <div className='grid md:grid-cols-2 gap-5 py-10'>
            {
                categoryData.map((data, index) =>
                    <Card key={data.id} className="w-full  grid md:grid-cols-2 p-3">
                        <CardHeader
                            shadow={false}
                            floated={false}
                            className="m-0  shrink-0 rounded-r-none p-3 flex flex-col"
                        >
                            <img
                                src={data.logo_url}
                                alt="card-image"
                                className="h-full"
                            />

                        </CardHeader>
                        <CardBody className='m-0 p-3 flex flex-col space-y-3'>
                            <Typography variant="h5" color="blue-gray" className="mb-2">
                                {data.title}
                            </Typography>
                            <Typography color="gray" className=" font-normal text-justify">
                                {data.description}
                            </Typography>


                        </CardBody>


                    </Card>
                )
            }
        </div>
    );
};

export default ManPower;