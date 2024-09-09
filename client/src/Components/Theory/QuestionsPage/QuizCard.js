import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const QuizCard = () => {
    const percentage1 = 80

    return (
        <section className='m-3 '>

            <div className='bg-[#1E2736] w-full md:w-[31.25rem]   mx-auto md:p-5'>
                <div className='flex justify-between'>
                    <button className='border border-[#01B6FF] text-[#01B6FF] lggg:text-lg text-sm px-6 py-1'>341 Points</button>
                    <p className='text-[#01B6FF] lggg:text-2xl text-base font-bold border border-[#01B6FF] px-2'>Java Variable</p>
                </div>
                <div className='w-28 md:w-40 mx-auto relative font-bold shadow-2xl text-[#01B6FF]'>

                    <CircularProgressbar
                        styles={buildStyles({
                            strokeLinecap: 'butt',
                            textSize: '18px',
                            pathTransitionDuration: 0.5,
                            pathColor: '#01B6FF',
                            textColor: '#01B6FF',
                            trailColor: '#333F50',

                        })}
                        value={percentage1} text={`${percentage1}/100`} />

                </div>
                <div className='flex justify-start gap-x-5 mt-9 md:mt-20'>
                    <div>
                        <h1 className='text-[#ECAA00] lggg:text-lg text-base uppercase'>Skipped</h1>
                        <hr className='border-[#01B6FF] w-[9.375rem] md:w-[13.7rem]  my-3' />
                        <div className='flex justify-between gap-x-5'>
                            <p className='text-white lggg:text-base text-sm'>5 questions</p>
                            <p className='text-[#01B6FF] lggg:text-base text-sm'>10 points</p>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-[#FF5454] lggg:text-lg text-base uppercase'>False</h1>
                        <hr className='border-[#01B6FF] w-[9.375rem] md:w-[13.7rem]  my-3' />
                        <div className='flex justify-between gap-x-5'>
                            <p className='text-white lggg:text-base text-sm'>8 questions</p>
                            <p className='text-[#01B6FF] lggg:text-base text-sm'>24 points</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-start gap-x-5 mt-5 md:mt-10'>
                    <div>
                        <h1 className='text-[#24FF00] lggg:text-lg text-base uppercase'>True</h1>
                        <hr className='border-[#01B6FF] w-[9.375rem] md:w-[13.7rem]  my-3' />
                        <div className='flex justify-between gap-x-5'>
                            <p className='text-white lggg:text-base text-sm'>5 questions</p>
                            <p className='text-[#01B6FF] lggg:text-base text-sm'>375 points</p>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-[#01B6FF] lggg:text-lg text-base uppercase'>Total</h1>
                        <hr className='border-[#01B6FF] w-[9.375rem] md:w-[13.7rem]  my-3' />
                        <div className='flex justify-end gap-x-5'>
                            <p className='text-[#01B6FF] lggg:text-base text-sm'>341 points</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default QuizCard;