import React, { useContext, useState } from "react";
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
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Provider/AuthProvider";
import SocialLogin from "./SocialLogin";
import date from "../CustomComponentPage/Date/Date";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [eye, setEye] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";
  const handleEyeClick = () => {
    setEye(!eye);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name).then(() => {
          const saveUser = { date: date, name: data.name, email: data.email };
          fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                setError("");
                setSuccess("User Login Successfully !");
                reset();
                navigate(from, { replace: true });
              }
            });
        });
      })
      .catch((error) => {
        setSuccess("");
        setError(error.message);
        console.log(error.message);
      });
  };
  return (
    <div className="py-12">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <img
            src="https://img.freepik.com/free-photo/computer-security-with-login-password-padlock_107791-16191.jpg?size=626&ext=jpg&ga=GA1.2.2060036261.1681297115&semt=sph"
            alt=""
          />
        </div>
        <div className="flex md:justify-start justify-center items-center">
          <Card className="w-96">
            <CardHeader
              variant="gradient"
              color="gray"
              className="mb-4 grid h-28 place-items-center"
            >
              <Typography variant="h3" color="white">
                Sign Up
              </Typography>
            </CardHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
              <CardBody className="flex flex-col gap-4">
                <Input
                  type="text"
                  size="lg"
                  label="Name"
                  {...register("name", { required: true })}
                />
                {errors.name && <p>Name is required.</p>}
                <Input
                  type="email"
                  size="lg"
                  label="Email"
                  {...register("email", { required: true })}
                />
                {errors.email && <p>Email is required.</p>}
                <Input
                  label="Password"
                  type={eye ? "text" : "password"}
                  size="lg"
                  {...register("password", { required: true })}
                  icon={
                    <FaEye
                      onClick={handleEyeClick}
                      className="h-5 w-5 text-blue-gray-300 cursor-pointer"
                    />
                  }
                />
                {errors.password && <p>Password is required.</p>}
                <div className="-ml-2.5 m-0 p-0">
                  <Checkbox label="Remember Me" />
                </div>
              </CardBody>
              <CardFooter className="pt-0">
                <Button type="submit" variant="gradient" fullWidth>
                  Sign Up
                </Button>
                <p className="text-center text-green-800">{success}</p>
                <p className="text-center text-red-700">{error}</p>
                <Typography
                  variant="small"
                  className="my-1 flex justify-center"
                >
                  Already have an account?
                  <Link
                    to="/login"
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

export default Register;
