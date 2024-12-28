import React, { useEffect, useState, useTransition } from 'react';
import { Link } from 'react-router-dom';
import bagtypes from "../../../api/bagtypes.json";

export const Hero = () => {
    const [bags, setBags] = useState();

    useEffect(() => {
        setBags(bagtypes);
    }, []);


    return (
        <div>
            <div className="bg-[#d8d9db]">
                <div className="max-w-[78rem] mx-auto py-16 px-6">
                    {/* Hero Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-8">
                        {/* Text Content */}
                        <div className="flex flex-col items-center md:items-start justify-center gap-7 md:gap-11 md:pt-3 p-2 md:p-2 order-2 md:order-1">
                            <h2 className="lg:text-[40px] md:text-[30px] text-[25px] font-black">
                                Full Set Of Great Features To Make You Look Fresh
                            </h2>
                            <p className="pb-3 p-2">
                                Massa sed elementum tempus egestas sed sed risus. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit.
                            </p>
                            <Link to="/shop">
                                <button className="bg-[#0A0500] hover:bg-[#FFCD05] hover:text-black p-4 text-white text-center text-[19px] w-[14rem]">
                                    See Collection
                                </button>
                            </Link>
                        </div>

                        {/* Image */}
                        <div className="p-0 md:p-5 order-1 md:order-2">
                            <img
                                className="object-cover rounded-full w-[19rem] md:w-[30rem]"
                                src="../images/hero.jpeg"
                                alt="Hero section showing fresh looks"
                            />
                        </div>
                    </div>

                </div>
            </div>

            {/* card section */}
            <div>
                <div className='min-h-[60vh] max-w-[78rem] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 place-items-center'>
                    <div className='bg-white flex flex-col gap-10 p-10 min-h-[30rem] md:h-[40rem]'>
                        <div className='flex gap-5'>
                            <div className='h-16 w-16 rounded-full'>
                                <img className='object-cover' src="../images/mid-2.jpg" alt="" />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <p className='font-black text-lg'>Landon Peters</p>
                                <p className='text-[14px]'>Sportsman / Champion / Backpack</p>
                            </div>
                        </div>
                        <p className='text-2xl md:text-4xl font-black'>Quisque Diam Quam Elementum</p>
                        <p className='text-lg'>Condimentum id venenatis a condimentum vitae sapien. Ullamcorper malesuada proin libero nunc consequat interdum varius sit. Enim neque volutpat ac tincidunt vitae.</p>
                        <p className='text-lg'>Fringilla urna porttitor rhoncus dolor purus non. Nulla malesuada pellentesque elit eget gravida cum.</p>
                    </div>

                    <div className='h-[30rem] md:h-[40rem] relative'>
                        <img className='object-cover h-[30rem] md:h-[40rem]' src="../images/mid-1.jpeg" alt="" />
                        <div className='text-white flex flex-col gap-4 absolute top-40 left-9'>
                            <h1 className='font-black text-4xl'>Hot Discount – 70% OFF</h1>
                            <p className='text-lg mt-2'>Fringilla urna porttitor rhoncus dolor purus non. Nulla malesuada pellentesque elit eget gravida cum.</p>
                            <Link to="/shop">
                                <button className="bg-[#0A0500] hover:bg-[#FFCD05] hover:text-black p-4 text-white text-center text-[17px] w-[14rem] mt-4">
                                    Find Out More
                                </button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>

            {/* BagPack Types */}
            <div>
                <div className="max-w-[78rem] px-6 mx-auto pt-16">
                    <div className='bg-white'>
                        <div className='grid place-items-center gap-1'>
                            <h1 className='text-2xl md:text-4xl font-black'>Backpack Types</h1>
                            <p className='p-1 text-gray-500'>Molestie ac feugiat sed lectus.</p>
                        </div>

                        <div className='grid place-items-center grid-cols-2 lg:grid-cols-4 gap-3 pt-14 md:pt-16 md:p-0'>
                            {
                                bags?.map((bag, index) => (
                                    <div key={index} className='relative w-full overflow-hidden hover:scale-105 transition-transform duration-200 ease-in-out'>
                                        <img className='h-[23rem] md:h-[35rem] object-cover w-full rounded-2xl' src={bag.images} alt="" />
                                        <div className='absolute inset-0 text-white p-2 flex flex-col items-center justify-center gap-5 bg-black bg-opacity-50 rounded-lg'>
                                            <p className='text-xl font-black'>{bag.title}</p>
                                            <p>{bag.description}</p>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};
