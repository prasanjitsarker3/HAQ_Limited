
import { Button, Input, Typography } from '@material-tailwind/react';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';
import date from '../../CustomComponentPage/Date/Date';

const CompanyFrom = () => {
    const {user}=useContext(AuthContext);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        const companyData={ email:user?.email,date:date, name:data.companyName, location:data.location, country:data.country, slogan:data.slogan, state:data.state }
        fetch("http://localhost:5000/company", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(companyData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId){
                    reset()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Item added successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    return (  
        <div className='pb-12'>
            <div>
                <Typography className=' text-2xl text-center py-5 font-serif primaryColor font-medium'>Registration CompanyFrom</Typography>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='px-12 md:w-3/4 mx-auto bg-gray-100 shadow-xl rounded-lg p-3'>
                <Typography className=' text-2xl font-serif  font-medium py-3 primaryColor'>Company Information</Typography>
                <div className=' grid md:grid-cols-3 gap-5'>
                    <div className=' flex flex-col'>
                        <Input defaultValue={user?.email} type='email' size="lg" className=' text-lg' label="Enter Email"  {...register('email', { required: true })} />
                        {errors.email && <p className='pt-1 text-red-500'>Email is required.</p>}
                    </div>
                    <div className=' flex flex-col'>
                        <Input type='text' size="lg" label="Company Name"  {...register('companyName', { required: true })} />
                        {errors.companyName && <p className='pt-1 text-red-500'>Company Name is required.</p>}
                    </div>
                    <div className=' flex flex-col'>
                        <Input type='text' size="lg" label="Company Slogan"  {...register('slogan', { required: true })} />
                        {errors.slogan && <p className='pt-1 text-red-500'>Company Slogan is required.</p>}
                    </div>
                </div>
                <Typography className=' text-2xl font-serif  font-medium py-3 primaryColor'>Company Location</Typography>
                <div className=' grid md:grid-cols-3 gap-5'>
                    <div className=' flex flex-col'>
                        <Input type='text' size="lg" className=' text-lg' label="Enter Country"  {...register('country', { required: true })} />
                        {errors.country && <p className='pt-1 text-red-500'>Country is required.</p>}
                    </div>
                    <div className=' flex flex-col'>
                        <Input type='text' size="lg" label="Company State"  {...register('state', { required: true })} />
                        {errors.state && <p className='pt-1 text-red-500'>Company State is required.</p>}
                    </div>
                    <div className=' flex flex-col'>
                        <Input type='text' size="lg" label="Company Location"  {...register('location', { required: true })} />
                        {errors.location && <p className='pt-1 text-red-500'>Company Slogan is required.</p>}
                    </div>
                </div>

                <div className='md:px-48'>
                    <Button type='submit' color='blue' className=' my-5 uppercase' variant="gradient" fullWidth>
                       Submit
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default CompanyFrom;