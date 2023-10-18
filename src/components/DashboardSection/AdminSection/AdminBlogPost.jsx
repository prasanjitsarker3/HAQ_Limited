import { Button, Input, Textarea, Typography } from '@material-tailwind/react';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import date from '../../CustomComponentPage/Date/Date';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const AdminBlogPost = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);
    const { user } = useContext(AuthContext);
    // const [selectedVideo, setSelectedVideo] = useState(null);



    const handleFileSelect = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            const imageURL = URL.createObjectURL(selectedFile);
            setSelectedImage(imageURL);
        }
    };

    const onSubmit = data => {
        const saveData = { name: data.name, about:data.about, email: user?.email, image: selectedImage, role: selectedOption.value, location: data.location, info: data.info, des: data.extra, data: date }
        fetch("http://localhost:5000/apply", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(saveData)
        })
            .then(res => res.json())
            .then((data) => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Successfully Send Your Message',
                    showConfirmButton: false,
                    timer: 1500
                })
                reset()
               
            })

    }
    // const handleVideoSelect = (event) => {
    //     const file = event.target.files[0];
    //     const videoURL = URL.createObjectURL(file);

    //     setSelectedVideo(videoURL);
    // };
    const options = [
        { value: 'processing', label: 'processing' },
        { value: 'active', label: 'Active' },
        { value: 'running', label: 'Running' },
    ]
    console.log(selectedOption)
    return (
        <div style={{ backgroundImage: 'url("https://www.shutterstock.com/image-photo/red-leaves-japan-648020077")', backgroundSize: 'cover', backgroundPosition: 'center' }} className=' h-screen'>
            <h1 className=' pt-12 text-center text-2xl text-blue-600'>Post Blog || Video</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='px-12  md:w-2/3 mx-auto bg-opacity-80 backdrop-blur-md bg-blue-gray-100 shadow-lg p-5 rounded-lg'>

                <div className=' grid md:grid-cols-2 gap-5 pt-12 pb-5'>
                    <div className=' flex flex-col'>
                        <Input type='text' className='  text-lg' size="lg" label="Apply Title or Name"  {...register('name')} />
                    </div>
                    <div className=' flex flex-col'>
                        <Input
                            color="blue"
                            label='Select Photo'
                            type="file"
                            id="image-upload"
                            accept="image/*"
                            onChange={handleFileSelect}
                        />
                    </div>

                </div>
                <div className=' grid md:grid-cols-2 gap-5 pb-5'>
                    <div className=' flex flex-col'>
                        <Input type='text' size="lg" label="Country Location || City"  {...register('location', { required: true })} />
                        {errors.slogan && <p className='pt-1 text-red-500'>Company Slogan is required.</p>}
                    </div>
                    <div className=' flex flex-col'>
                        <Input type='text' size="lg" label="Extra Information"  {...register('info')} />
                    </div>

                </div>
                <div className='grid md:grid-cols-2 gap-5'>
                    <div className='flex flex-col'>
                        {/* <Input
                            label='Select Video'
                            type="file"
                            accept="video/*"
                            onChange={handleVideoSelect}
                            className="w-full p-2 border  border-gray-300 rounded-md mb-4 h-full"
                        /> */}
                        <div className=' '>
                            <Input type='text' size="lg" label="Job City Or Country City"  {...register('extra')} />
                        </div>
                        <div className='mt-5 text-black'>
                            <Select
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                options={options}
                            />
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <Textarea
                            type='text'
                            size="lg"
                            className='text-lg h-full'
                            label="Card Sub Heading"
                            {...register('about', { required: true })}
                        />
                    </div>
                </div>


                <div className='md:px-48'>
                    <Button type='submit' color='blue' className=' my-5 uppercase' variant="gradient" fullWidth>
                        POST BLOG
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default AdminBlogPost;