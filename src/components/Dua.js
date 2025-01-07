'use client';
import { DuaIcon } from '@/lib/duaIcon';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Dua = ({ id }) => {
    const [data, setData] = useState(null);
    const sendingMethod = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const sendingMethod = {
                    method: 'POST',
                };

                const response = await fetch(
                    'http://localhost:3000/api/dua',
                    sendingMethod,
                );

                const dataJson = await response.json();
                setData(dataJson);
                console.log('Fetched Data:', dataJson);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // Call the async function
        fetchData();
    }, []);

    console.log('data Result', data);

    // const

    return (
        <div className="w-[690px]  flex flex-col gap-[10px]">
            <div className="bg-white rounded-[3px] px-[30px] py-[15px]">
                <p>
                    <span>Section: </span> Section Title
                </p>
            </div>
            <div className="bg-white rounded-[3px] px-[30px] py-[15px]">
                <div>
                    <div className="flex items-center gap-[10px]">
                        <Image
                            src={'/Images/dua-images/allah.png'}
                            width={35}
                            height={35}
                            alt="image"
                        ></Image>
                        <h1>Dua title</h1>
                    </div>
                    <div>
                        <div>English</div>
                        <div>arabic</div>
                        <div>Teansilation</div>
                        <div>translation</div>
                    </div>
                    <div>Refernce div</div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="w-[44px] h-[44px] bg-[#1FA45B] flex justify-center items-center rounded-full">
                        <Image
                            width={23}
                            height={23}
                            src={'/Images/dua-images/play.png'}
                            alt="play"
                        ></Image>
                    </div>
                    <div className="flex gap-[39px]">
                        {DuaIcon.map((item, index) => (
                            <Image
                                className="cursor-pointer"
                                key={index}
                                width={24}
                                height={24}
                                src={item.src}
                                alt="play"
                            ></Image>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dua;
