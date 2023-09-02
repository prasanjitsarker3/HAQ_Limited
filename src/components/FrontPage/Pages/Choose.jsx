import React from 'react';
import ScrollCarousel from 'scroll-carousel-react';

const Choose = () => {

    const chooses = [
        {
            id: 1,
            name: "Call Center",
            title: "Call Center Information"
        },
        {
            id: 2,
            name: "Call Center",
            title: "Call Center Information"
        },
        {
            id: 3,
            name: "Call Center",
            title: "Call Center Information"
        },
        {
            id: 3,
            name: "Call Center",
            title: "Call Center Information"
        },
        {
            id: 4,
            name: "Call Center",
            title: "Call Center Information"
        },
        {
            id: 5,
            name: "Call Center",
            title: "Call Center Information"
        },
        {
            id: 6,
            name: "Call Center",
            title: "Call Center Information"
        },
    ]
    return (
        <div>
            <ScrollCarousel
                autoplay
                autoplaySpeed={4}
                speed={7}
                onReady={() => console.log('I am ready')}
            >
                {
                    chooses.map(data => (
                        <div key={data.id} className='border p-5'>
                            <h1>{data.name}</h1>
                            <h2>{data.title}</h2>
                        </div>
                    ))
                }
            </ScrollCarousel>
        </div>
    );
};

export default Choose;