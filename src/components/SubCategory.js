'use client';
import Link from 'next/link';

import React, { useContext, useState } from 'react';
import AppContext from '@/contextApi/AppContext';

const SubCategory = ({ id }) => {
    const { categoryData } = useContext(AppContext);

    let subCategoryFilteredValue = subResponse.result.filter(
        item => item.cat_id === id,
    );
    return (
        <div
            className={`${
                activeIndex === index ? 'visible' : 'hidden'
            } m-2 relative max-w-[430px]`}
        >
            {subCategoryFilteredValue.map((item, index) => (
                <Link
                    key={index}
                    href={'/'}
                    className="flex justify-center flex-col border-dotted border-l-2 border-green-500 gap-[10px] py-[8px] cursor-pointer"
                >
                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full absolute left-[-4px]"></div>
                    <div className="pl-2">{item.subcat_name_en}</div>
                </Link>
            ))}
        </div>
    );
};

export default SubCategory;
