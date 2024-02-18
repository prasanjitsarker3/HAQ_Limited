import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import date from "../../CustomComponentPage/Date/Date";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../../DashboardCustomHook/useAxiosSecure";
import { toast } from "sonner";

const imageToken = import.meta.env.VITE_imageToken;
const AdminBlogPost = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  // const [selectedVideo, setSelectedVideo] = useState(null);

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const imageURL = URL.createObjectURL(selectedFile);
      setSelectedImage(imageURL);
    }
  };

  const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${imageToken}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(imageHostingUrl, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageResponse) => {
        const imgURL = imageResponse.data.display_url;
        const saveData = {
          name: data.name,
          about: data.about,
          email: user?.email,
          image: imgURL,
          role: selectedOption.value,
          location: data.location,
          info: data.info,
          des: data.extra,
          data: date,
        };
        axiosSecure.post("/apply", saveData).then((data) => {
          if (data.data.insertedId) {
            reset();
            toast.success("Successfully Post Blog !");
          } else {
            toast.error("Something went wrong !");
          }
        });
      });
  };

  const options = [
    { value: "processing", label: "processing" },
    { value: "active", label: "Active" },
    { value: "running", label: "Running" },
  ];
  console.log(selectedOption);
  console.log(imageToken);
  return (
    <div>
      <h1 className=" pt-12 text-center text-2xl text-blue-600">Blog Post</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="px-12  md:w-2/3 mx-auto  shadow-lg p-5 rounded-lg"
      >
        <div className=" grid md:grid-cols-2 gap-5 pt-12 pb-5">
          <div className=" flex flex-col">
            <Input
              type="text"
              className="text-lg"
              size="lg"
              label="Apply Title or Name"
              {...register("name")}
            />
          </div>
          <div className="flex flex-col">
            <Input
              color="blue"
              label="Select Photo"
              type="file"
              id="image-upload"
              {...register("image", { required: true })}
            />
          </div>
        </div>
        <div className=" grid md:grid-cols-2 gap-5 pb-5">
          <div className=" flex flex-col">
            <Input
              type="text"
              size="lg"
              label="Country Location || City"
              {...register("location", { required: true })}
            />
            {errors.slogan && (
              <p className="pt-1 text-red-500">Company Slogan is required.</p>
            )}
          </div>
          <div className=" flex flex-col">
            <Input
              type="text"
              size="lg"
              label="Extra Information"
              {...register("info")}
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="flex flex-col">
            {/* <Input
                            label='Select Video'
                            type="file"
                            accept="video/*"
                            onChange={handleVideoSelect}
                            className="w-full p-2 border  border-gray-300 rounded-md mb-4 h-full"
                        /> */}
            <div className=" ">
              <Input
                type="text"
                size="lg"
                label="Job City Or Country City"
                {...register("extra")}
              />
            </div>
            <div className="mt-5 text-black">
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <Textarea
              type="text"
              size="lg"
              className="text-lg h-full"
              label="Card Sub Heading"
              {...register("about", { required: true })}
            />
          </div>
        </div>

        <div className="md:px-48">
          <Button
            type="submit"
            color="blue"
            className=" my-5 uppercase"
            variant="gradient"
            fullWidth
          >
            POST BLOG
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AdminBlogPost;
