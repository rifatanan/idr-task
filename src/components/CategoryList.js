'use client';
import Image from 'next/image';
import SubCategory from './SubCategory';

import React, { useContext, useState } from 'react';
import AppContext from '@/contextApi/AppContext';

const CategoryList = ({ data, subResponse }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const { categoryData } = useContext(AppContext);

    const handleClick = index => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="max-h-[550px] overflow-scroll">
            {categoryData &&
                categoryData.map((item, index) => (
                    <div key={index} className="flex flex-col w-full">
                        <div
                            className="m-2 flex gap-[10px] items-center cursor-pointer"
                            onClick={() => handleClick(index)}
                        >
                            <div className="bg-[#CFE0E5] w-[60px] h-[60px] rounded-[5px] p-[10px] flex items-center justify-center">
                                <Image
                                    src={'/Images/category-images/1.png'}
                                    width={40}
                                    height={40}
                                    alt="category-img"
                                />
                            </div>
                            <div className="flex-grow">
                                <div
                                    className={`font-[600] text-[17px] leading-[20px] ${
                                        activeIndex === index
                                            ? 'text-[#1FA45B]'
                                            : 'text-black'
                                    }`}
                                >
                                    {item.cat_name_en}
                                </div>
                                <div className="font-sans font-[400] text-[17px] leading-[20px]">
                                    Subcategory:{item.no_of_subcat}
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="font-[600] text-[17px] leading-[20px]">
                                    {item.no_of_dua}
                                </div>
                                <div className="font-sans font-[400] text-[17px] leading-[20px]">
                                    Duas
                                </div>
                            </div>
                        </div>
                        <SubCategory
                            id={item.cat_id}
                            index={index}
                            activeIndex={activeIndex}
                        />
                    </div>
                ))}
        </div>
    );
};

export default CategoryList;
