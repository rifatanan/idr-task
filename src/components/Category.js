import Image from 'next/image';
import React from 'react';
import CategoryList from './CategoryList';
import CategorySearch from './CategorySearch';

const Category = async () => {
    return (
        <div className="w-full lg:w-[430px] bg-white rounded-[10px] flex flex-col flex-wrap gap-2">
            <div className="flex flex-col">
                <h1 className="text-[#FFFFFF] bg-[#1FA45B] text-center py-[18px] font-[600] text-[17px] leading-[20px] rounded-tr-[10px] rounded-tl-[10px] relative z-10">
                    Categories
                </h1>
                <CategorySearch />
            </div>
            <CategoryList />
        </div>
    );
};

export default Category;
