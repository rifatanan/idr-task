import Category from '@/components/Category';
import Dua from '@/components/Dua';
import React from 'react';

const page = () => {
    return (
        <div className="flex">
            <div className="fixed top-[100px] left-[130px] w-full lg:w-[430px] h-full overflow-y-auto z-0">
                <Category />
            </div>
            <div className="fixed top-[100px] right-[270px] w-full lg:w-[690px] h-full overflow-y-auto z-0">
                <Dua />
            </div>
        </div>
    );
};

export default page;
