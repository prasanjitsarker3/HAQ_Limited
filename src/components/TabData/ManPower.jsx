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
                    <Card key={data.id} className="w-full  grid md:grid-cols-2">
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
                            <div className=' mt-auto'>
                                <Typography variant="h6" color="gray" className="pt-3 uppercase primaryColor">
                                    {data.name}
                                </Typography>
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                    {data.title}
                                </Typography>
                                <div className='flex items-center gap-5'>
                                    <FaMapMarkerAlt className='h-6 w-6 primaryColor' />
                                    <Typography className=' text-xl'>{data.location}</Typography>
                                </div>
                            </div>
                        </CardHeader>
                        <CardBody className='m-0 p-3 flex flex-col'>
                            <Typography color="gray" className=" font-normal">
                                {data.description}
                            </Typography>
                            <hr className="border-2 border-dashed border-amber-200 my-2 mt-auto" style={{ borderColor: 'primaryColor', color:"primaryColor" }} />
                            <div className='flex justify-center gap-5 cursor-pointer mt-auto'>
                                <Tooltip content={data.website}>
                                    <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 primaryColor  transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                                    <HiLink className='h-6 w-6' />
                                    </span>
                                </Tooltip>
                                <Tooltip content={data.phone}>
                                    <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 primaryColor  transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                                    <HiOutlinePhone className='h-6 w-6' />
                                    </span>
                                </Tooltip>
                                <Tooltip content={data.contact_email}>
                                    <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 primaryColor  transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                                    <HiMail className='h-6 w-6' />
                                    </span>
                                </Tooltip>
                            </div>

                        </CardBody>


                    </Card>
                )
            }
        </div>
    );
};

export default ManPower;