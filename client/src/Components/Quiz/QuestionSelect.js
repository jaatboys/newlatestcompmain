import React, { useState } from 'react';
import javaImage from '../../assets/java.png';
import doubleDown from '../../assets/Double Down.png';
import doubleUp from '../../assets/Double Up.png';

const QuestionSelect = () => {
    const [open, setOpen] = useState(false);

    return (
        <section className='md:container md:mx-auto mx-3 mt-5'>
            <h1 className='md:text-3xl text-xl font-bold text-white'>Question Selection</h1>
            <div className='flex justify-between mt-5'>
                <h4 className='md:text-xl text-lg font-semibold text-white'>Java</h4>
                <div className='flex gap-x-5'>
                    <p className='text-[#01B6FF] md:text-base text-sm'>
                        Questions Selected:
                        <span className='text-white ml-1'>23</span>
                    </p>
                    <p className='text-[#01B6FF] md:text-base text-sm'>
                        Point:
                        <span className='text-white ml-1'>23</span>
                    </p>
                </div>
            </div>
            {/* Quizes  */}
            <div className="mt-3" id="accordionExample5">
                <div>
                    <div className="flex justify-between items-center bg-[#333F50] mb-0 md:px-10 md:py-5 p-3" id="headingOne1">
                        <button className="relative flex items-center md:text-xl text-sm font-normal text-white text-left bg-[#333F50] border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne1" aria-expanded="true"
                            aria-controls="collapseOne1">
                            <img src={javaImage} alt="" className='md:mr-10 mr-3 md:w-auto w-5' />
                            <span>Java Inheritance</span>
                        </button>
                        <div className='flex items-center md:gap-x-5 gap-x-3 md:text-base text-[10px]'>
                            <p className='text-[#9EB2D2]'>
                                Total Questions:
                                <span className='text-[#01B6FF] ml-1'>309</span>
                            </p>
                            <p className='text-[#9EB2D2]'>
                                Points:
                                <span className='text-[#01B6FF] ml-1'>120</span>
                            </p>
                            <button onClick={() => setOpen(!open)} className='bg-[#263448] rounded-lg p-2 md:ml-20 ml-0' type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne1" aria-expanded="true"
                                aria-controls="collapseOne1">
                                {
                                    open ? <img src={doubleUp} alt="doubleUp" className='md:w-full w-5' />
                                        : <img src={doubleDown} alt="doubleDown" className='md:w-full w-5' />
                                }
                            </button>
                        </div>
                    </div>
                    <div id="collapseOne1" className={`${open ? 'block' : 'hidden'}`} aria-labelledby="headingOne1">
                        <div className="my-3">
                            {/* option 01 */}
                            <div className='flex justify-between bg-[#263448] md:px-10 py-5 px-5'>
                                <p className='text-[#01B6FF] md:text-base text-sm'>
                                    1.
                                    <span className='text-[#9EB2D2] ml-5'>What is Java?</span>
                                </p>
                                <div className='flex'>
                                    <p className='text-[#9EB2D2] md:text-base text-sm'>
                                        Points:
                                        <span className='text-[#01B6FF] ml-1'>2</span>
                                    </p>
                                    <div className='border-[1px] border-[#01B6FF] w-6 md:ml-16 ml-5'>
                                    </div>
                                </div>
                            </div>
                            {/* option 02 */}
                            <div className='flex justify-between bg-[#263448] md:px-10 py-5 px-5'>
                                <p className='text-[#01B6FF] md:text-base text-sm'>
                                    2.
                                    <span className='text-[#9EB2D2] ml-5'>What is Java?</span>
                                </p>
                                <div className='flex'>
                                    <p className='text-[#9EB2D2] md:text-base text-sm'>
                                        Points:
                                        <span className='text-[#01B6FF] ml-1'>2</span>
                                    </p>
                                    <div className='border-[1px] border-[#01B6FF] w-6 md:ml-16 ml-5'>
                                    </div>
                                </div>
                            </div>
                            {/* option 03 */}
                            <div className='flex justify-between bg-[#263448] md:px-10 py-5 px-5'>
                                <p className='text-[#01B6FF] md:text-base text-sm'>
                                    3.
                                    <span className='text-[#9EB2D2] ml-5'>What is Java?</span>
                                </p>
                                <div className='flex'>
                                    <p className='text-[#9EB2D2] md:text-base text-sm'>
                                        Points:
                                        <span className='text-[#01B6FF] ml-1'>2</span>
                                    </p>
                                    <div className='border-[1px] border-[#01B6FF] bg-[#01B6FF] w-6 md:ml-16 ml-5'>
                                    </div>
                                </div>
                            </div>
                            {/* option 04 */}
                            <div className='flex justify-between bg-[#263448] md:px-10 py-5 px-5'>
                                <p className='text-[#01B6FF] md:text-base text-sm'>
                                    4.
                                    <span className='text-[#9EB2D2] ml-5'>What is Java?</span>
                                </p>
                                <div className='flex'>
                                    <p className='text-[#9EB2D2] md:text-base text-sm'>
                                        Points:
                                        <span className='text-[#01B6FF] ml-1'>2</span>
                                    </p>
                                    <div className='border-[1px] border-[#01B6FF] w-6 md:ml-16 ml-5'>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QuestionSelect;