import React, { useState } from 'react';
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';

const Register = () => {
    const [eye, setEye] = useState(false);
    const handleEyeClick = () => {
        setEye(!eye);
    }
    return (
        <div className='py-12'>
            <div className='grid md:grid-cols-2 gap-5'>
                <div>
                    <img src="https://img.freepik.com/free-photo/computer-security-with-login-password-padlock_107791-16191.jpg?size=626&ext=jpg&ga=GA1.2.2060036261.1681297115&semt=sph" alt="" />
                </div>
                <div className='flex md:justify-start justify-center items-center'>
                    <Card color="transparent" shadow={false}>
                        <Typography variant="h4" color="blue-gray">
                            Please Sign Up !
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            Enter your details to Sign Up.
                        </Typography>
                        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                            <div className="mb-4 flex flex-col gap-6">
                                <Input size="lg" label="Name" />
                                <Input type='email' size="lg" label="Email" />
                                <Input
                                    label="Password"
                                    type={eye ? "text" : "password"} size="lg"

                                    icon={
                                        <FaEye onClick={handleEyeClick} className="h-5 w-5 text-blue-gray-300 cursor-pointer" />
                                    }
                                />
                            </div>
                            <Checkbox
                                label={
                                    <Typography
                                        variant="small"
                                        color="gray"
                                        className="flex items-center font-normal"
                                    >
                                        I agree the
                                        <a
                                            href="#"
                                            className="font-medium transition-colors hover:text-gray-900"
                                        >
                                            &nbsp;Terms and Conditions
                                        </a>
                                    </Typography>
                                }
                                containerProps={{ className: "-ml-2.5" }}
                            />
                            <Button className="mt-6" fullWidth>
                                Register
                            </Button>
                            <Typography color="gray" className="mt-4 text-center font-normal">
                                Already have an account?{" "}
                                <Link to="/login" className="font-medium text-blue-500">
                                    Sign In
                                </Link>
                            </Typography>
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Register;