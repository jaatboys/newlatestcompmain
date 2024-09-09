import React from 'react';
import prize from '../../assets/Prize.png';
import python from '../../assets/python.png';
import dollar from '../../assets/dollar.png';
import approve from '../../assets/approve.png';
import Diamond from '../../assets/diamond.png';
import Gold from '../../assets/gold.png';
import Silver from '../../assets/silver.png';
import Bronze from '../../assets/bronze.png';

const Ranking = () => {
    return (
        <section className='mb-10'>
            <div className='grid grid-cols-12 gap-2'>
                <div className='bg-[#263448] col-span-3 md:col-span-2  flex justify-center items-center'>
                    <p className='text-center text-xs md:text-lg font-bold'>
                        Ranking <br />
                        XP
                    </p>
                </div>


                <div className='bg-[#333F50] col-span-9 md:col-span-10 flex items-center justify-center py-6 md:py-8'>
                    <div className='w-full mx-6 md:mx-10'>

                        <div className='bg-[#D9D9D9] w-full rounded-3xl'>
                            <div className='h-full bg-[#01B6FF] w-[70%] p-1 md:p-2 rounded-3xl'>
                            </div>
                        </div>
                        <div className='flex justify-around'>
                            <img src={prize} alt="" className='w-[7%]' />
                            <img src={prize} alt="" className='w-[7%]' />
                            <img src={prize} alt="" className='w-[7%]' />
                            <img src={prize} alt="" className='w-[7%]' />
                        </div>
                    </div>
                </div>

            </div>
            {/* skills */}
            <div className='grid grid-cols-12 gap-2 my-3'>
                <div className='col-span-3 md:col-span-2 bg-[#333F50] flex flex-col items-center  justify-between'>
                    <img src={python} alt="" className='w-12 smm:w-16 mdd:w-24 py-1 md:p-3' />
                    <p className='text-center bg-[#273448] w-full mt-1 md:py-2 '>Python</p>
                </div>
                <div className='col-span-3  space-y-2 flex flex-col gap-1'>
                    <div className=' flex gap-2 justify-center items-center bg-[#333F50] h-1/2'>
                        <img src={dollar} alt="" className='w-[12%] md:w-[14%]' />
                        <p className='text-xs md:text-base'>248 Coins</p>
                    </div>
                    <div className='flex gap-2 justify-center items-center bg-[#333F50] h-1/2'>
                        <img src={approve} alt="" className='w-[12%] md:w-[14%]' />
                        <p className='text-xs md:text-base'>Eligibility</p>
                    </div>
                </div>
                <div className='col-span-6 md:col-span-7 bg-[#333F50] p-3 md:p-4 space-y-3'>
                    <h5 className='text-base md:text-xl'>Badges</h5>
                    <div className='flex justify-between'>
                        <img src={Bronze} alt="" className='w-[10%] md:w-[7%]' />
                        <img src={Silver} alt="" className='w-[10%] md:w-[7%]' />
                        <img src={Gold} alt="" className='w-[10%] md:w-[7%]' />
                        <img src={Diamond} alt="" className='w-[10%] md:w-[7%]' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ranking;