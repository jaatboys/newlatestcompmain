import React from 'react';
import { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { IconCE, IconEqual } from '../Svg';
import SarIcon from './Img/Group 72.png'

const HomePageHeader = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className=' bg-[#1E2736]   shadow-xl '>
            {/* header desktop */}
            <head className=' flex  justify-between items-center max-w-[1440px] mx-auto p-3 z-10 '>

            <a href="/">  <h1 className=' flex gap-1 items-center text-lg sm:text-xl lg:text-3xl text-white'><span><IconCE className={'sm:w-14 w-12'}></IconCE></span> Code<span className='text-[#01B6FF]'>Exampler</span></h1></a>  

                <div className='flex sm:gap-8 gap-4 text-white items-center'>
                    <a href="/" className=''>Home</a>
                    <a href="/programming-language-to-learn" className='text-xl max-sm:text-sm  font-bold  py-2 rounded-lg bg-[#1E405D] sm:w-36 w-20 text-center'>Tutorials</a>
                </div>
            </head>



        </div>
    );
};

export default HomePageHeader;