import React from 'react';
import './MyExam.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import CourseArticleHeader from '../../Header/CourseArticleHeader';

const MyExams = () => {
    const percentage1 = 80
    return (
        <>
            {/* <CourseArticleHeader></CourseArticleHeader> */}
            <section className='max-w-[1440px] mx-auto my-10'>
                <div className='mx-5'>
                    <h1 className='text-2xl text-white mb-3'>My Exams</h1>
                    {/* card 01 */}
                    <div className='bg-[#333F50] md:w-full  flex justify-between mt-5'>
                        <div className='bg-[#333F50] flex justify-center items-center'>
                            <p className='text-[#01B6FF] text-3xl py-5 pl-10'>Python</p>
                        </div>
                        <div className='bg-[#333F50] flex ml-[30%] p-5'>
                            <div className=' w-20 relative font-bold shadow-2xl text-[#01B6FF]'>

                                <CircularProgressbar
                                    styles={buildStyles({
                                        strokeLinecap: 'butt',
                                        textSize: '20px',
                                        pathTransitionDuration: 0.5,
                                        pathColor: '#01B6FF',
                                        textColor: '#01B6FF',
                                        trailColor: '#333F50',
                                        backgroundColor: '#333F50'

                                    })}
                                    value={percentage1} text={`${percentage1}%`} />
                                <p className='text-[12px] lg:text-xs absolute -top-0  right-[97%] text-[#00FF2A]'>Eligible</p>
                            </div>
                            <div className='flex items-center gap-x-1 ml-28'>
                                <p className='font-bold text-[#01B6FF] text-4xl'>309</p>
                                <sup className='text-[#FFC836] text-sm'>Points</sup>
                            </div>
                        </div>
                        <div className='bg-[#263448] p-10'>
                            <p className='uppercase text-[#00FF2A] text-2xl'>Start Quiz</p>
                        </div>
                    </div>
                    {/* card 02 */}
                    <div className='bg-[#333F50] md:w-full  flex justify-between shadow-[0px_0px_1.25rem_#01B6FF] mt-5'>
                        <div className='bg-[#333F50] flex justify-center items-center'>
                            <p className='text-[#01B6FF] text-3xl py-5 pl-10'>Python</p>
                        </div>
                        <div className='bg-[#333F50] md:shadow-[0px_0px] shadow-[30px_0px_1.25rem_#01B6FF] flex ml-[30%] p-5'>
                            <div className='w-20 relative font-bold shadow-2xl text-[#01B6FF]'>

                                <CircularProgressbar
                                    styles={buildStyles({
                                        strokeLinecap: 'butt',
                                        textSize: '20px',
                                        pathTransitionDuration: 0.5,
                                        pathColor: '#01B6FF',
                                        textColor: '#01B6FF',
                                        trailColor: '#333F50',

                                    })}
                                    value={percentage1} text={`${percentage1}%`} />
                                <p className='text-[12px] lg:text-xs absolute -top-0     right-[97%] text-[#00FF2A]'>Eligible</p>
                            </div>
                            <div className='flex items-center gap-x-1 ml-28'>
                                <p className='font-bold text-[#01B6FF] text-4xl'>309</p>
                                <sup className='text-[#FFC836] text-sm'>Points</sup>
                            </div>
                        </div>
                        <div className='bg-[#263448] md:shadow-[0px_0px] shadow-[10px_0px_1.25rem_#01B6FF] p-10'>
                            <p className='uppercase text-[#00FF2A] text-2xl'>Start Quiz</p>
                        </div>
                    </div>
                    {/* card 03 */}
                    <div className='bg-[#333F50] md:w-full  flex justify-between mt-5'>
                        <div className='bg-[#333F50] flex justify-center items-center'>
                            <p className='text-[#01B6FF] text-3xl py-5 pl-10'>Python</p>
                        </div>
                        <div className='bg-[#333F50] flex ml-[30%] p-5'>
                            <div className='w-20 relative font-bold shadow-2xl text-[#01B6FF]'>

                                <CircularProgressbar
                                    styles={buildStyles({
                                        strokeLinecap: 'butt',
                                        textSize: '20px',
                                        pathTransitionDuration: 0.5,
                                        pathColor: '#01B6FF',
                                        textColor: '#01B6FF',
                                        trailColor: '#333F50',

                                    })}
                                    value={percentage1} text={`${percentage1}%`} />
                                <p className='text-[12px] lg:text-xs absolute -top-0  right-[97%] text-[#00FF2A]'>Eligible</p>
                            </div>
                            <div className='flex items-center gap-x-1 ml-28'>
                                <p className='font-bold text-[#01B6FF] text-4xl'>309</p>
                                <sup className='text-[#FFC836] text-sm'>Points</sup>
                            </div>
                        </div>
                        <div className='bg-[#263448] p-10'>
                            <p className='uppercase text-[#00FF2A] text-2xl'>Start Quiz</p>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
};

export default MyExams;