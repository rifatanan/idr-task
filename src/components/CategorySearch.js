'use client';
import Image from 'next/image';
import React from 'react';

const CategorySearch = () => {
    return (
        <div className="flex items-center border-solid border-[1.5px] border-[#E2E2E2] rounded-[7px] m-2 p-[8px] gap-[10px]">
            <Image
                src={'/Images/search.png'}
                width={16}
                height={16}
                alt="search"
            ></Image>
            <input
                className="outline-none focus:outline-none w-full border-none rounded-[7px]"
                placeholder="Search by Categories"
            />
        </div>
    );
};

export default CategorySearch;
