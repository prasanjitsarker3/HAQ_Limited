import {
  Button,
  Card,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const AdminVideoPost = () => {
  const { register, reset, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const newData = {
      blogTitle: data.blogTitle,
      blogLink: data.blogLink,
      blogTag: data.blogTag,
      blogDescription: data.blogDescription,
    };
    fetch("http://localhost:5000/videoBlog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          reset();
          toast.success("Successfully Video Blog Post !");
        } else {
          toast.error("Something went wrong!");
        }
      });
  };

  return (
    <div>
      <Card className=" flex justify-center items-center h-[100vh] w-full">
        <form
          onClick={handleSubmit(onSubmit)}
          className="mt-8 mb-2 w-full max-w-screen-lg sm:w-96  p-3 shadow-lg"
        >
          <div className="mb-1 flex flex-col gap-4 ">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Blog Title
            </Typography>
            <Input
              size="lg"
              placeholder="Enter Blog Title..."
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              {...register("blogTitle")}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Blog Link
            </Typography>
            <Input
              size="lg"
              placeholder="Paste Blog Link..."
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              {...register("blogLink")}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Blog Tag
            </Typography>
            <Input
              size="lg"
              type="link"
              placeholder="Enter Blog Tag..."
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              {...register("blogTag")}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Blog Description
            </Typography>
            <Textarea
              type="text"
              size="lg"
              placeholder="Enter Description..."
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              {...register("blogDescription")}
            />
          </div>

          <Button type="submit" color="blue" className="mt-6" fullWidth>
            Video Blog Post
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AdminVideoPost;
