import {
  Button,
  Input,
  Option,
  Select,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { json } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import date from "../../CustomComponentPage/Date/Date";
// const imgHostingToken = import.meta.e/nv.VITE_img_token;
const CandidateFrom = () => {
  const { user } = useContext(AuthContext);
  const [country, setCountry] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  // const imgHostingURL = `https://api.imgbb.com/1/upload?expiration=600&key=${imgHostingToken}`
  const onSubmit = (data) => {
    const candidateData = {
      date: date,
      name: data.firstName,
      secondName: data.secondName,
      birth: data.birthDate,
      city: data.city,
      companyName: data.companyName,
      country: data.country,
      degree: data.degree,
      des: data.description,
      descriptionPosition: data.descriptionPosition,
      email: user?.email,
      uniStart: data.start,
      uniEnd: data.finished,
      endExperience: data.finishedPosition,
      startExperience: data.startPosition,
      institution: data.institution,
      occupation: data.occupation,
      phone: data.phone,
      photo: data.photo,
      experienceTile: data.positionTitle,
      professional: data.professional,
      profileSummary: data.profile,
      state: data.state,
    };
    fetch("http://localhost:5000/candidate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(candidateData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Item added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const options = [
    { label: "Dhaka", value: "dhaka" },
    { label: "Chattogram", value: "chattogram" },
    { label: "Rajshahi", value: "rajshahi" },
    { label: "Khulna", value: "khulna" },
    { label: "Barishal", value: "barishal" },
    { label: "Rangpur", value: "rangpur" },
    { label: "Mymensingh", value: "mymensingh" },
  ];
  const cities = [
    { name: "Dhaka", value: "dhaka" },
    { name: "Chattogram", value: "chattogram" },
    { name: "Khulna", value: "khulna" },
    { name: "Sylhet", value: "sylhet" },
    { name: "Rajshahi", value: "rajshahi" },
    { name: "Barishal", value: "barishal" },
    { name: "Rangpur", value: "rangpur" },
    { name: "Comilla", value: "comilla" },
    { name: "Gazipur", value: "gazipur" },
    { name: "Narayanganj", value: "narayanganj" },
    { name: "Mymensingh", value: "mymensingh" },
    { name: "Cox's Bazar", value: "coxs_bazar" },
    { name: "Tangail", value: "tangail" },
    { name: "Jessore", value: "jessore" },
    { name: "Bogura", value: "bogura" },
    { name: "Narsingdi", value: "narsingdi" },
    { name: "Dinajpur", value: "dinajpur" },
    { name: "Pabna", value: "pabna" },
    { name: "Faridpur", value: "faridpur" },
    { name: "Jamalpur", value: "jamalpur" },
  ];
  const administrativeOccupations = [
    { id: 1, label: "Administrator", name: "Administrator" },
    { id: 2, label: "Office Manager", name: "Office Manager" },
    { id: 3, label: "Executive Assistant", name: "Executive Assistant" },
    { id: 4, label: "HR Manager", name: "HR Manager" },
    { id: 5, label: "Secretary", name: "Secretary" },
    {
      id: 6,
      label: "Administrative Assistant",
      name: "Administrative Assistant",
    },
    { id: 7, label: "Office Coordinator", name: "Office Coordinator" },
    { id: 8, label: "Data Entry Clerk", name: "Data Entry Clerk" },
    { id: 9, label: "Receptionist", name: "Receptionist" },
    { id: 10, label: "Billing Coordinator", name: "Billing Coordinator" },
    { id: 11, label: "Office Administrator", name: "Office Administrator" },
    {
      id: 12,
      label: "Customer Service Manager",
      name: "Customer Service Manager",
    },
    { id: 13, label: "Office Supervisor", name: "Office Supervisor" },
    { id: 14, label: "Executive Secretary", name: "Executive Secretary" },
    {
      id: 15,
      label: "Administrative Coordinator",
      name: "Administrative Coordinator",
    },
  ];

  return (
    <div>
      <div>
        <Typography className=" text-2xl text-center py-5 font-serif primaryColor font-medium">
          Registration CANDIDATE
        </Typography>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="px-12 md:w-3/4 mb-12 mx-auto bg-gray-100"
      >
        <div>
          <Typography className=" text-2xl font-serif  font-medium py-3 primaryColor">
            Account Information
          </Typography>
          <div className=" grid md:grid-cols-3 gap-5 ">
            <div className=" flex flex-col">
              <Input
                type="text"
                size="lg"
                className=" text-lg"
                label="First Name"
                {...register("firstName", { required: true })}
              />
              {errors.firstName && (
                <p className="pt-1 text-red-500">Name is required.</p>
              )}
            </div>
            <div className=" flex flex-col">
              <Input
                type="text"
                size="lg"
                label="Second Name"
                {...register("secondName", { required: true })}
              />
              {errors.secondName && (
                <p className="pt-1 text-red-500">Name is required.</p>
              )}
            </div>
            <div className=" flex flex-col">
              <Input
                type="email"
                defaultValue={user?.email}
                size="lg"
                label="Enter Email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="pt-1 text-red-500">Email is required.</p>
              )}
            </div>
          </div>
          <div className=" grid md:grid-cols-3 gap-5 pt-3">
            <div className=" flex flex-col">
              <Input
                type="text"
                size="lg"
                label="Phone Number"
                {...register("phone", { required: true })}
              />
              {errors.phone && (
                <p className="pt-1 text-red-500">Phone number is required.</p>
              )}
            </div>
            <div className=" flex flex-col">
              <Input
                type="date"
                size="lg"
                label="Date of Birth"
                {...register("birthDate", { required: true })}
              />
              {errors.birthDate && (
                <p className="pt-1 text-red-500">Date of birth is required.</p>
              )}
            </div>
            <div className=" flex flex-col">
              <Input
                type="file"
                size="lg"
                label="Upload Photo"
                {...register("photo", { required: true })}
              />
              {errors.photo && (
                <p className="pt-1 text-red-500">Photo is required.</p>
              )}
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-5 pt-5">
            <div className="mb-4 flex flex-col">
              <label
                htmlFor="country"
                className="block text-gray-700 text-sm mb-1"
              >
                Select Country:
              </label>
              <select
                {...register("country", { required: true })}
                className="w-full px-3 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              >
                <option value="bangladesh"> Bangladesh</option>
              </select>
              {errors.country && (
                <p className="text-red-500 text-sm pt-1">
                  Please select a Country.
                </p>
              )}
            </div>
            <div className="mb-4 flex flex-col">
              <label
                htmlFor="gender"
                className="block text-gray-700 text-sm mb-1"
              >
                Select State:
              </label>
              <select
                {...register("state", { required: true })}
                className="w-full px-3 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              >
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.state && (
                <p className="text-red-500 text-sm pt-1">
                  Please select a State.
                </p>
              )}
            </div>
            <div className="mb-4 flex flex-col">
              <label
                htmlFor="gender"
                className="block text-gray-700 text-sm  mb-1"
              >
                Select City:
              </label>
              <select
                {...register("city", { required: true })}
                className="w-full px-3 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              >
                {cities.map((option) => (
                  <option key={option.value} value={option.value} className="">
                    {option.name}
                  </option>
                ))}
              </select>
              {errors.city && (
                <p className="text-red-500 text-sm pt-1">
                  Please select a State.
                </p>
              )}
            </div>
          </div>

          <div>
            <h1 className=" text-2xl font-serif font-normal primaryColor">
              Education (Add Education)
            </h1>
            <div>
              <div className="grid md:grid-cols-2 gap-5 pt-5">
                <div className=" flex flex-col ">
                  <Input
                    type="text"
                    size="lg"
                    className=" text-lg"
                    label="Institution"
                    {...register("institution", { required: true })}
                  />
                  {errors.institution && (
                    <p className="pt-1 text-red-500">
                      Institution is required.
                    </p>
                  )}
                </div>
                <div className=" flex flex-col ">
                  <Input
                    type="text"
                    size="lg"
                    className=" text-lg"
                    label="Degree"
                    {...register("degree", { required: true })}
                  />
                  {errors.degree && (
                    <p className="pt-1 text-red-500">Degree is required.</p>
                  )}
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-5 pt-5">
                <div>
                  <div className=" flex flex-col pt-3">
                    <Input
                      type="date"
                      size="lg"
                      className=" text-lg"
                      label="Started"
                      {...register("start", { required: true })}
                    />
                    {errors.start && (
                      <p className="pt-1 text-red-500">Started is required.</p>
                    )}
                  </div>
                  <div className=" flex flex-col pt-3">
                    <Input
                      type="date"
                      size="lg"
                      className=" text-lg"
                      label="Finished"
                      {...register("finished", { required: true })}
                    />
                    {errors.finished && (
                      <p className="pt-1 text-red-500">Finished is required.</p>
                    )}
                  </div>
                </div>
                <div className=" flex flex-col pt-3">
                  <Textarea
                    type="text"
                    size="lg"
                    className=" text-lg"
                    label="Description"
                    {...register("description", { required: true })}
                  />
                  {errors.description && (
                    <p className="pt-1 text-red-500">
                      Description is required.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="pt-7">
            <h1 className=" text-2xl font-serif font-normal primaryColor">
              Experience (Add Experience)
            </h1>
            <div>
              <div className="grid md:grid-cols-2 gap-5 pt-5">
                <Input
                  type="text"
                  size="lg"
                  className=" text-lg"
                  label="Company Name"
                  {...register("companyName")}
                />
                <Input
                  type="text"
                  size="lg"
                  className=" text-lg"
                  label="Position Title"
                  {...register("positionTitle")}
                />
              </div>
              <div className="grid md:grid-cols-2 gap-5 pt-5">
                <div>
                  <Input
                    type="date"
                    size="lg"
                    className=" text-lg"
                    label="Started"
                    {...register("startPosition")}
                  />
                  <div className="pt-5">
                    <Input
                      type="date"
                      size="lg"
                      className=" text-lg"
                      label="Finished"
                      {...register("finishedPosition")}
                    />
                  </div>
                </div>
                <Textarea
                  type="text"
                  size="lg"
                  className=" text-lg"
                  label="Description"
                  {...register("descriptionPosition")}
                />
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-5 pt-5">
            <div>
              <div className="mb-4 flex flex-col">
                <label
                  htmlFor="gender"
                  className="block text-gray-700 text-sm  mb-2"
                >
                  Select Administrative Occupations:
                </label>
                <select
                  {...register("occupation", { required: true })}
                  className="w-full px-3 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                >
                  {administrativeOccupations.map((option) => (
                    <option key={option.id} value={option.value} className="">
                      {option.name}
                    </option>
                  ))}
                </select>
                {errors.city && (
                  <p className="text-red-500 text-sm pt-1">
                    Please select a State.
                  </p>
                )}
              </div>
              <div className=" flex flex-col">
                <Input
                  type="text"
                  size="lg"
                  className=" text-lg"
                  label="Professional Headline"
                  {...register("professional", { required: true })}
                />
                {errors.professional && (
                  <p className="pt-1 text-red-500">Professional is required.</p>
                )}
              </div>
            </div>
            <div className=" flex flex-col pt-7">
              <Textarea
                type="text"
                size="lg"
                className=" text-lg"
                label="Profile Summary"
                {...register("profile", { required: true })}
              />
              {errors.profile && (
                <p className="pt-1 text-red-500">Profile is required.</p>
              )}
            </div>
          </div>
        </div>
        <div className="md:px-48">
          <Button type="submit" className=" my-5" variant="gradient" fullWidth>
            Submit Information
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CandidateFrom;
