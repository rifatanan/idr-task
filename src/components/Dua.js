'use client';
import { DuaIcon } from '@/lib/duaIcon';
import Image from 'next/image';

import React, { useContext, useRef, useState } from 'react';
import AppContext from '@/contextApi/AppContext';

const Dua = () => {
    const { toggleDua, indexDua, duaData, subCategoryTitle } =
        useContext(AppContext);

    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const finalDuaData =
        duaData && duaData.filter(item => item.subcat_id === indexDua);

    const togglePlayPause = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }

        setIsPlaying(!isPlaying);
    };

    console.log('filter dua', finalDuaData);

    return (
        <div
            className={`${
                toggleDua === false ? 'hidden' : 'visible'
            } w-[690px] flex flex-col gap-[10px] relative`}
        >
            <div className="bg-white rounded-[3px] px-[30px] py-[15px] flex flex-col gap-[10px]">
                <p>
                    <span className="text-[#1FA45B] font-inter font-[600] text-[16px] leading-[25px]">
                        Section:{' '}
                    </span>
                    {subCategoryTitle ? subCategoryTitle : 'Loading...'}
                </p>
            </div>
            {finalDuaData &&
                finalDuaData.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-[3px] px-[30px] py-[15px] flex flex-col gap-[10px]"
                    >
                        <div className="flex flex-col gap-[14px]">
                            <div className="flex items-center gap-[10px]">
                                <Image
                                    src={'/Images/dua-images/allah.png'}
                                    width={35}
                                    height={35}
                                    alt="image"
                                ></Image>
                                <h1 className="text-[#1FA45B] font-inter font-[600] text-[16px] leading-[25px]">
                                    {item.id}. {item.dua_name_en}
                                </h1>
                            </div>
                            <div className="flex flex-col gap-[14px]">
                                <div>{item.top_en}</div>
                                <p dir="rtl">{item.dua_arabic}</p>
                                <p
                                    className={`text-[16px] leading-[25px] ${
                                        item.transliteration_en === null
                                            ? 'hidden'
                                            : 'visible'
                                    }`}
                                >
                                    <span className="font-[600]">
                                        Transliteration:
                                    </span>
                                    <span className="italic font-[400] ">
                                        {item.transliteration_en}
                                    </span>
                                </p>
                                <p
                                    className={`${
                                        item.transliteration_en === null
                                            ? 'hidden'
                                            : 'visible'
                                    }`}
                                >
                                    <span className="font-[600]">
                                        Translation:
                                    </span>
                                    {item.translation_en}
                                </p>
                            </div>
                            <div>
                                <p className="text-[#1FA45B] font-inter font-[600] text-[16px] leading-[25px]">
                                    Reference:
                                </p>
                                <p>{item.refference_en}</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="w-[44px] h-[44px] bg-[#1FA45B] flex justify-center items-center rounded-full">
                                <audio
                                    ref={audioRef}
                                    src="https://api.duaruqyah.com/duaaudiofinal/782.mp3"
                                ></audio>
                                <button onClick={togglePlayPause}>
                                    <Image
                                        width={23}
                                        height={23}
                                        src={'/Images/dua-images/play.png'}
                                        alt="play"
                                    ></Image>
                                </button>
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
                ))}
        </div>
    );
};

export default Dua;
