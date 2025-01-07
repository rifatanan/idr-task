import HomePage from '@/components/HomePage';
import React from 'react';

const page = async () => {
    let valueJson;

    const sendingMethod = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    let response = await fetch(
        'http://localhost:3000/api/category',
        sendingMethod,
    );
    valueJson = await response.json();
    console.log('value json', valueJson);

    return <div>aa</div>;
};

export default page;
