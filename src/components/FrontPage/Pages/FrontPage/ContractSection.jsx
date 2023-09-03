import { Button, Card, Input, Textarea } from '@material-tailwind/react';
import React from 'react';

const ContractSection = () => {
    return (
        <div className='px-12'> 
   
            <div className='grid md:grid-cols-2 gap-7 py-7'>
                <div className=' space-y-5'>
                    <Input label="Enter Name" />
                    <Input label="Enter Contract" className='' />
                    <Input type='email' label="Email" />
                    <Input label="Subject Here..." className='' />
                    <Textarea label="Message" />
                    <Button fullWidth>Send Message</Button>
                </div>
                <div>
                    <img src="https://img.freepik.com/free-vector/informational-city-map-with-streets-name_23-2148309621.jpg?size=626&ext=jpg&ga=GA1.2.2060036261.1681297115&semt=ais" alt="" />
                </div>
            </div>
        </div>
    );
};

export default ContractSection;