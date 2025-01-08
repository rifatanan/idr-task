'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import iWantToSupport from '../../public/Images/i-want-to-support.png';

import { ImagesList } from '@/lib/Images';

const SideNavBar = () => {
    const [currentIndex, setCurrentIndex] = useState(null);
    return (
        <div className="w-full lg:w-[90px] flex lg:flex-col lg:gap-y-[50px] h-[760px] lg:p-[22px] shadow-lg bg-slate-200 fixed lg:bg-white rounded-[24px] items-center">
            <div className="hidden lg:flex w-[57px] h-[56px]">
                <Link href={'/'}>
                    <Image
                        src={'/Images/logo.png'}
                        width={57}
                        height={57}
                        alt="logo"
                    ></Image>
                </Link>
            </div>

            <div className="flex felx-row lg:flex-col lg:justify-between lg:gap-[27px] w-full justify-evenly lg:items-center  py-5">
                {ImagesList.map((item, index) => (
                    <Link
                        href={item.path}
                        key={index}
                        className={`w-[38px] h-[38px] bg-[#E8F0F5] rounded-full flex justify-center items-center cursor-pointer ${
                            index > 4 ? 'hidden lg:flex' : 'flex'
                        }`}
                    >
                        <Image
                            src={item.imgSrc}
                            width={20}
                            height={20}
                            alt="logo"
                            className="w-[20px] h-[20px]"
                        ></Image>
                    </Link>
                ))}
            </div>

            <div className="hidden lg:flex bg-[#1FA45B] w-[57px] h-[56px] rounded-[10px] justify-center items-center">
                <Link href={'/'}>
                    <Image
                        src={iWantToSupport}
                        width={20}
                        height={20}
                        alt="logo"
                    ></Image>
                </Link>
            </div>
        </div>
    );
};

export default SideNavBar;
