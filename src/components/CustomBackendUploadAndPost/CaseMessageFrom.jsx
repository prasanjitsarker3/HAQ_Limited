import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, IconButton, Input, Textarea } from '@material-tailwind/react';
import React, { useContext, useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider';
import date from '../CustomComponentPage/Date/Date';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';

const CaseMessageFrom = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    const { user } = useContext(AuthContext);
    const dateTime = date;
    const { reset, handleSubmit, register, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const contractData = { name: data.name, email: user?.email, message: data.message, date: dateTime };
        fetch("http://localhost:5000/message", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(contractData)
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
                setOpen(!open)
            })
        console.log("Contract data", data);
    }



    return (
        <div>
            <Button onClick={handleOpen} color='blue' className='uppercase'>Start here</Button>

            <Dialog open={open} handler={handleOpen}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex items-center justify-between">
                        <DialogHeader>New message to @</DialogHeader>
                        <IconButton onClick={handleOpen} variant="gradient" color='red' className="rounded-full mr-3">
                            <FaTimes />
                        </IconButton>

                    </div>
                    <DialogBody divider>
                        <div className="grid gap-6">
                            <Input {...register("name")} label="Username" />
                            <Textarea {...register("message")} label="Message" />
                        </div>
                    </DialogBody>
                    <DialogFooter className="space-x-2">
                        <Button variant="gradient" color="red" onClick={handleOpen}>
                            close
                        </Button>
                        <Button variant="gradient" color="blue" type='submit' >
                            send message
                        </Button>
                    </DialogFooter>
                </form>
            </Dialog>
        </div>
    );
};

export default CaseMessageFrom;