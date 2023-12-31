import React, { useContext, useState } from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
} from "@material-tailwind/react";
import { FaEye } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../Provider/AuthProvider';
import SocialLogin from './SocialLogin';

const Login = () => {
    const { userLogin } = useContext(AuthContext);
    const [eye, setEye] = useState(false);
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
    const location = useLocation(); 
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || "/";
    const handleEyeClick = () => {
        setEye(!eye);
    }
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        userLogin(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setError('')
                setSuccess("User Login Successfully !")
                reset();
                navigate(from, { replace: true })
            })
            .catch(error => {
                setSuccess('')
                setError(error.message);
                console.log(error.message)
            })
    }
    return (
        <div className='py-12'>
            <div className='grid md:grid-cols-2 gap-5'>
                <div>
                    <img src="https://img.freepik.com/free-photo/computer-security-with-login-password-padlock_107791-16191.jpg?size=626&ext=jpg&ga=GA1.2.2060036261.1681297115&semt=sph" alt="" />
                </div>
                <div className='flex md:justify-start justify-center items-center'>
                    <Card className="w-96">
                        <CardHeader
                            variant="gradient"
                            color="gray"
                            className="mb-4 grid h-28 place-items-center"
                        >
                            <Typography variant="h3" color="white">
                                Sign In
                            </Typography>
                        </CardHeader>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <CardBody className="flex flex-col gap-4">

                                <Input type='email' size="lg" label="Email"  {...register('email', { required: true })} />
                                {errors.email && <p>Email is required.</p>}
                                <Input
                                    label="Password"
                                    type={eye ? "text" : "password"} size="lg"
                                    {...register('password', { required: true })}
                                    icon={
                                        <FaEye onClick={handleEyeClick} className="h-5 w-5 text-blue-gray-300 cursor-pointer" />
                                    }
                                />
                                {errors.password && <p>Password is required.</p>}
                                <div className="-ml-2.5 m-0 p-0">
                                    <Checkbox label="Remember Me" />
                                </div>
                            </CardBody>
                            <CardFooter className="pt-0 mt-0">
                                <Button type='submit' variant="gradient" fullWidth>
                                    Sign In
                                </Button>
                                <p className="text-center text-green-800">{success}</p>
                                <p className="text-center text-red-700">{error}</p>
                                <Typography variant="small" className="py-1 flex justify-center">
                                    Don&apos;t have an account?
                                    <Link to="/register"
                                        as="a"
                                        href="#signup"
                                        variant="small"
                                        color="blue-gray"
                                        className="ml-1 font-bold"
                                    >
                                        Sign up
                                    </Link>
                                </Typography>
                                <SocialLogin></SocialLogin>
                            </CardFooter>
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Login;