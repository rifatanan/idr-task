import Category from '@/components/Category';
import Dua from '@/components/Dua';
import NavBar from '@/components/NavBar';
import React from 'react';

const page = () => {
    return (
        <div className="flex gap-2">
            <Category />
            <Dua />
        </div>
    );
};

export default page;
