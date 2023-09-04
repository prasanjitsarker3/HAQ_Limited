import React, { useState } from 'react';
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
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
                        <Typography variant="h4" className="primaryColor">
                            Please Sign In !
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            Enter your details to Sign In.
                        </Typography>
                        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                            <div className="mb-4 flex flex-col gap-6">
                                <Input type='email' size="lg" label="Email" />
                                <Input
                                    label="Password"
                                    type={eye ? "text" : "password"} size="lg"

                                    icon={
                                        <FaEye onClick={handleEyeClick} className="h-5 w-5 text-blue-gray-300 cursor-pointer" />
                                    }
                                />
                            </div>
                            <Button className="mt-6" fullWidth>
                                Sign In
                            </Button>
                            <Typography color="gray" className="mt-4 text-center font-normal">
                                Create a new account?{" "}
                                <Link to="/register" className="font-medium text-blue-500">
                                    Sign Up
                                </Link>
                            </Typography>
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Login;