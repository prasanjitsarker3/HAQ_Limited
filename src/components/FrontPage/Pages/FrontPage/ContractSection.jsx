import { Button, Card, Input, Textarea } from '@material-tailwind/react';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Provider/AuthProvider';
import date from '../../../CustomComponentPage/Date/Date';
import AccordionSection from '../AccordionSection';

const ContractSection = () => {
    const { user } = useContext(AuthContext);
    const { control, handleSubmit, register, formState: { errors } } = useForm();
    const dateTime = date;
    console.log(dateTime)
    // const onSubmit = (data) => {
    //     const contractData = { name: data.name, email: data.email, contract: data.contract, subject: data.subject, message: data.message, date: dateTime };
    //     fetch("https://hqa-server.vercel.app/message", {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(contractData)
    //     })
    //         .then(res => res.json())
    //         .then((data) => {
    //             console.log("Contract:", data);
    //         })
    //     console.log("Contract data", data);
    // };
    return (
        <div className='px-12 mx-12 my-12'>
            {/* <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid md:grid-cols-2 gap-7 py-7'>
                    <div className=' space-y-5'>
                        <Input {...register("name")} label="Enter Name" />
                        <Input {...register("contract")} label="Enter Contract" className='' />
                        <Input defaultValue={user?.email}  {...register("email")} type='email' label="Email" />
                        <Input {...register("subject")} label="Subject Here..." className='' />
                        <Textarea {...register("message")} label="Message" />
                        <Button type='submit' fullWidth>Send Message</Button>
                    </div>

                </div>
            </form> */}
            <div className='grid md:grid-cols-2 gap-7 py-7'>
                <div>
                    <AccordionSection />
                </div>
                <div>
                    <iframe className=' w-full h-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d912.7471018198211!2d90.42534153979757!3d23.783427146331693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7e8b1ec3971%3A0x4eeaac0820774865!2sMisal%20International!5e0!3m2!1sen!2sbd!4v1697215687910!5m2!1sen!2sbd"
                    ></iframe>
                </div>
            </div>

        </div>
    );
};

export default ContractSection;