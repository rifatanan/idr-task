'use client';
import SideNavBar from '@/components/SideNavBar';
import './globals.css';
import NavBar from '@/components/NavBar';
import AppContext from '@/contextApi/AppContext';
import { useEffect, useState } from 'react';

export default function RootLayout({ children }) {
    const [categoryData, setCategoryData] = useState(null);
    const [subCategoryData, setSubCategoryData] = useState(null);
    const [duaData, setDuaData] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const sendingMethod = {
                    method: 'POST',
                };

                const responseCategory = await fetch(
                    'http://localhost:3000/api/category',
                    sendingMethod,
                );
                const responseSubCategory = await fetch(
                    'http://localhost:3000/api/sub_category',
                    sendingMethod,
                );
                const responseDua = await fetch(
                    'http://localhost:3000/api/dua',
                    sendingMethod,
                );

                const categoryJson = await responseCategory.json();
                const subCategoryJson = await responseSubCategory.json();
                const duaJson = await responseDua.json();

                setCategoryData(categoryJson.result);
                setSubCategoryData(subCategoryJson);
                setDuaData(duaJson);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        })();
    }, []);

    return (
        <html lang="en">
            <body className="lg:p-[20px] flex w-full gap-[22px]  flex-col lg:flex-row min-h-screen">
                <div className="lg:w-[100px] w-full lg:h-auto h-[50px] fixed bottom-[20px] lg:static ">
                    <SideNavBar />
                </div>

                <main className="flex flex-col gap-2">
                    <NavBar />
                    <AppContext.Provider
                        value={{
                            categoryData,
                            subCategoryData,
                            duaData,
                        }}
                    >
                        {children}
                    </AppContext.Provider>
                </main>
            </body>
        </html>
    );
}
