
import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

const CUSTOM_ANIMATION = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
};

const AccordionSection = () => {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <>
            <div className=" flex flex-col  bg-gray-50 p-5">
                <Accordion open={open === 1} animate={CUSTOM_ANIMATION}>
                    <AccordionHeader onClick={() => handleOpen(1)}>
                        What services do you offer?
                    </AccordionHeader>
                    <AccordionBody className=" text-xl">
                        We offer a wide range of services, including web design, digital
                        marketing, and branding.In addition to web design, digital
                        marketing, and branding, we also provide a wide range of
                        complementary services, including web development, e-commerce
                        solutions, and marketing analytics. you.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} animate={CUSTOM_ANIMATION}>
                    <AccordionHeader onClick={() => handleOpen(2)}>
                        How can I contact your agency?
                    </AccordionHeader>
                    <AccordionBody className=" text-xl">
                        You can contact us through our websites contact form or by calling
                        our office at (123) 456-7890.Provide your name, email, and a brief
                        message Accordion your inquiry. We ll get back to you as soon as
                        possible
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} animate={CUSTOM_ANIMATION}>
                    <AccordionHeader onClick={() => handleOpen(3)}>
                        Do you offer custom solutions for clients?
                    </AccordionHeader>
                    <AccordionBody className=" text-xl">
                        Yes, we provide customized solutions to meet the unique needs of our
                        clients. Please contact us to discuss your specific requirements.
                    </AccordionBody>
                </Accordion>
            </div>
        </>
    );
};
export default AccordionSection;