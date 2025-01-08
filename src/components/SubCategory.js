'use client';
import Link from 'next/link';

import React, { useContext } from 'react';
import AppContext from '@/contextApi/AppContext';

const SubCategory = ({ id, index, activeIndex }) => {
    const { subCategoryData, setToggleDua, setIndexDua, setSubCategoryTitle } =
        useContext(AppContext);

    //console.log('sub', subCategoryData);

    let subCategoryFilteredValue = subCategoryData.filter(
        item => item.cat_id === id,
    );

    const handleToggleDua = (index, title) => {
        console.log('title', title);

        setIndexDua(index);
        setToggleDua(true);
        setSubCategoryTitle(title);
    };

    return (
        <div
            className={`${
                activeIndex === index ? 'visible' : 'hidden'
            } m-2 relative max-w-[430px]`}
        >
            {subCategoryFilteredValue.map((item, index) => (
                <button
                    key={index}
                    onClick={() =>
                        handleToggleDua(item.id, item.subcat_name_en)
                    }
                    className="flex justify-center flex-col border-dotted border-l-2 border-green-500 gap-[10px] py-[8px] cursor-pointer"
                >
                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full absolute left-[-4px]"></div>
                    <div className="pl-2">{item.subcat_name_en.trim()}</div>
                </button>
            ))}
        </div>
    );
};

export default SubCategory;
