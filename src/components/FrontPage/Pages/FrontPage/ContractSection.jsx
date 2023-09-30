import { Button, Card, Input, Textarea } from '@material-tailwind/react';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Provider/AuthProvider';

const ContractSection = () => {
    const { user } = useContext(AuthContext);
    const { control, handleSubmit, register, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const contractData = { name: data.name, email: data.email, contract: data.contract, subject: data.subject, message: data.message };
        fetch([], {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(saveUser)
        })
            .then(res => res.json())
            .then((data) => {
                console.log("Contract:", data);
            })
        console.log("Contract data", data);
    };
    return (
        <div className='px-12'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid md:grid-cols-2 gap-7 py-7'>
                    <div className=' space-y-5'>
                        <Input {...register("name")} label="Enter Name" />
                        <Input {...register("contract")} label="Enter Contract" className='' />
                        <Input defaultValue={user?.email}  {...register("email")} type='email' label="Email" />
                        <Input {...register("subject")} label="Subject Here..." className='' />
                        <Textarea {...register("message")} label="Message" />
                        <Button type='submit' fullWidth>Send Message</Button>
                    </div>
                    <div>
                        <img src="https://img.freepik.com/free-vector/informational-city-map-with-streets-name_23-2148309621.jpg?size=626&ext=jpg&ga=GA1.2.2060036261.1681297115&semt=ais" alt="" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ContractSection;