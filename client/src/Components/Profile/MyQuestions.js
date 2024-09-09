import React from 'react';
import { FaRegClock } from 'react-icons/fa';
import roundImage from '../../assets/roundImage.png';

const MyQuestions = () => {
    return (
        <section className='mb-10'>
            <h1 className='text-2xl text-[#01B6FF] mb-3'>My Questions</h1>
            <div className='grid md:grid-cols-8 grid-cols-6 md:gap-x-4 gap-x-2'>
                <div className='md:col-span-2 bg-[#263448]'>
                    <p className=' md:text-base text-[6px] text-center uppercase font-semibold mdd:p-5  px-2 py-2'>UserName</p>
                </div>
                <div className=' bg-[#263448]'>
                    <p className=' md:text-base text-[6px] text-center uppercase font-semibold mdd:p-5  px-2 py-2'>CATEGORY</p>
                </div>
                <div className='md:col-span-2 bg-[#263448]'>
                    <p className=' md:text-base text-[5px] text-center uppercase font-semibold mdd:p-5  px-2 py-2'>SUB-CATEGORY</p>
                </div>
                <div className=' bg-[#263448]'>
                    <p className=' md:text-base text-[6px] text-center uppercase font-semibold mdd:p-5  px-2 py-2'>VIEWS</p>
                </div>
                <div className=' bg-[#263448]'>
                    <p className=' md:text-base text-[6px] text-center uppercase font-semibold mdd:p-5  px-2 py-2'>POINTS</p>
                </div>
                <div className=' bg-[#263448]'>
                    <p className=' md:text-base text-[6px] text-center uppercase font-semibold mdd:p-5  px-2 py-2'>STATUS</p>
                </div>
            </div>
            <div className='grid md:grid-cols-8 grid-cols-6 md:gap-x-4 gap-x-2 my-3 '>
                <div className='md:col-span-2 bg-[#263448] '>
                    <div className='md:flex items-center  gap-2 md:gap-5 mdd:p-5  px-2 py-2 '>

                        <img src={roundImage} alt="" className='md:w-auto w-5 mx-auto' />
                        <div className='md:space-y-2 w-fit mx-auto md:-ml-[15%]'>
                            <p className='md:text-base text-[8px]'>jenny_white</p>
                            <div className='md:flex items-center ml-2 mt-1 md:ml-0 md:mt-0 text-[#9EB2D2] md:text-sm text-[5px] gap-2  text-center'>
                                <FaRegClock />
                                <p className='-mt-1.5 -ml-2 md:-mt-0 md:-ml-0'>11 A.M.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-[#263448] flex items-center justify-center  mdd:p-5  px-2 py-2'>
                    <p className=' md:text-base text-[6px] text-center uppercase font-semibold '>Java</p>
                </div>
                <div className='md:col-span-2 bg-[#263448] flex items-center justify-center  mdd:p-5  px-2 py-2'>
                    <p className=' md:text-base text-[6px] text-center uppercase font-semibold mdd:p-5  px-2 py-2'>Java Inheritence</p>
                </div>
                <div className='bg-[#263448] flex items-center justify-center  mdd:p-5  px-2 py-2'>
                    <p className=' md:text-base text-[6px] text-center uppercase font-semibold mdd:p-5  px-2 py-2'>425</p>
                </div>
                <div className='bg-[#263448] flex items-center justify-center  mdd:p-5  px-2 py-2'>
                    <p className=' md:text-base text-[6px] text-center uppercase font-semibold mdd:p-5  px-2 py-2'>4</p>
                </div>
                <div className='bg-[#263448] flex items-center justify-center  mdd:p-5  px-2 py-2'>
                    <p className=' md:text-base text-[6px] text-center uppercase font-semibold mdd:p-5  px-2 py-2'>Pending</p>
                </div>
            </div>
            {/* <div className='grid md:grid-cols-8 grid-cols-6 md:gap-x-5 gap-x-1 md:mt-5 mt-2'>
                <div className='md:col-span-2 bg-[#333F50] md:p-5 p-2'>
                    <div className='flex md:flex-row flex-col justify-center items-center md:gap-5 gap-2'>
                        <img src={roundImage} alt="" className='md:w-auto w-5' />
                        <div>
                            <p className='md:text-base text-[8px]'>jenny_white</p>
                            <div className='flex items-center justify-center text-[#9EB2D2] md:text-sm text-[5px] gap-2'>
                                <FaRegClock />
                                <p>11 A.M.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p className=' bg-[#263448] md:text-base text-[8px] text-center font-semibold md:p-10 p-2'>Java</p>
                </div>
                <div className='md:col-span-2'>
                    <p className=' bg-[#263448] md:text-base text-[8px] text-center font-semibold md:p-10 p-2'>Java Inheritence</p>
                </div>
                <div>
                    <p className=' bg-[#263448] md:text-base text-[8px] text-center font-semibold md:p-10 p-2'>425</p>
                </div>
                <div>
                    <p className=' bg-[#263448] md:text-base text-[8px] text-center font-semibold md:p-10 p-2'>4</p>
                </div>
                <div>
                    <p className=' bg-[#263448] md:text-base text-[8px] text-center font-semibold md:text-[#FFC836] md:p-10 p-2'>Pending</p>
                </div>
            </div> */}

        </section>
    );
};

export default MyQuestions;