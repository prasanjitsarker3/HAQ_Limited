
import { Input, Typography } from '@material-tailwind/react';
import React from 'react';
import { useForm } from 'react-hook-form';

const CompanyFrom = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    return ( 
        <div className='pb-12'>
            <div>
                <Typography className=' text-2xl text-center py-5 font-serif primaryColor font-medium'>Registration CompanyFrom</Typography>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='px-12'>
                <Typography className=' text-2xl font-serif  font-medium py-3 primaryColor'>Account Information</Typography>
                <div className=' grid md:grid-cols-3 gap-5 '>
                    <div className=' flex flex-col'>
                        <Input type='text' size="lg" className=' text-lg' label="First Name"  {...register('firstName', { required: true })} />
                        {errors.firstName && <p className='pt-1 text-red-500'>Name is required.</p>}
                    </div>
                    <div className=' flex flex-col'>
                        <Input type='text' size="lg" label="Second Name"  {...register('secondName', { required: true })} />
                        {errors.secondName && <p className='pt-1 text-red-500'>Name is required.</p>}
                    </div>
                    <div className=' flex flex-col'>
                        <Input type='email' size="lg" label="Enter Email"  {...register('email', { required: true })} />
                        {errors.email && <p className='pt-1 text-red-500'>Email is required.</p>}
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CompanyFrom;