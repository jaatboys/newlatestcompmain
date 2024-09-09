import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet  from "react-helmet";
import CNavBar from '../CNav';
import CBar from '../../../sidebars/CBar';
import CodeEditorFiled from '../../../CodeEditorFiled/CodeEditorFiled';

export default function CElement() {
    const [ListActioveMobile, setListActiveMobile] = useState(false)

    //previous and next button action functin start
    const list = JSON.parse(localStorage.getItem('list'))
    const pathname = window.location.pathname.replace('/', '')
    const handlePreviousAndNext = (condition) => {
        if (condition === 'previous') {
            if (list.indexOf(pathname) !== 0) {
                window.location.pathname = `/${list[list.indexOf(pathname) - 1]}`
            }
        } else {
            if (list.indexOf(pathname) !== list.length) {
                window.location.pathname = `/${list[list.indexOf(pathname) + 1]}`
            }
        }
    }
    //previous and next button action functin end


    return (
        <div className=' bg-[#1E2736] text-[#9EB2D2] min-h-screen font-Poppins'>

<CNavBar/>
<Helmet>
 
 <title>Master the Art of Basic element in c: A Beginner's Tutorial Guide by CodeExampler</title>
 <meta name="description" content="Basic element in c tutorial for beginners.Basic element computer programming in c,CodeExampler provides Multiple Programming Examples for Beginners,CodeExampler provides Free Online Tutorials for beginners" />
 <meta name="keywords" content="codeexampler,C element programming language,Character Element in C tutorial for begineers,learn code in free," />
 <link rel="canonical" href="https://www.codeexampler.com/c-element" />
 </Helmet>


           <main className='max-w-[1440px] mx-auto flex gap-14 justify-between relative py-3 px-4'>
                {/* Python bur component   */}
                <CBar ListActioveMobile={ListActioveMobile} setListActiveMobile={setListActiveMobile}></CBar>

                <div className='w-full relative '>
                    {/* only mobile mode show */}
                    <button onClick={() => setListActiveMobile(!ListActioveMobile)} className='absolute -top-3 left-0 bg-[#01B6FF] rounded-br-2xl rounded-bl-2xl p-2.5 lg:hidden text-white'>All Topics</button>
                    {/* ----------------- */}
                    <div className='flex justify-between mt-3'>
                        <div className='block lg:hidden'>

                        </div>
                        <button onClick={() => handlePreviousAndNext('previous')} className='hidden lg:flex  text-lg gap-1 text-[#9EB2D2] no-underline '><BsFillArrowLeftCircleFill className='text-4xl mt-1'></BsFillArrowLeftCircleFill> <span className='mt-2'>Previous</span></button>
                        <h1 className='mt-8 font-semibold lg:mt-0 text-3xl  no-underline text-[#01B6FF] capitalize'>{window.location.pathname.replace('/', '').replaceAll('-', ' ')}</h1>
                        <button onClick={() => handlePreviousAndNext('next')} className='hidden lg:flex text-lg gap-1 text-[#9EB2D2] no-underline '><span className='mt-2'>Next</span><BsFillArrowRightCircleFill className='text-4xl mt-1'></BsFillArrowRightCircleFill></button>
                        <div className='flex lg:hidden gap-2 mt-3 lg:mt-0'>
                            <BsFillArrowLeftCircleFill onClick={() => handlePreviousAndNext('previous')} className='text-4xl text-gray-500'></BsFillArrowLeftCircleFill>
                            <BsFillArrowRightCircleFill onClick={() => handlePreviousAndNext('next')} className='text-4xl text-gray-500'></BsFillArrowRightCircleFill>
                        </div>
                    </div>
                    <div className='space-y-3'>
                    <h2 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>1, The character set in a C Programming language:</h2>
                        <div className='text-[#9EB2D2]'>
                            <p className="m-4 para"> Letters = a-z,A-Z,( _ underscope)<br />
                                Digits  = (0,1,2,----,8,9,10)<br />
                                Special symbols=( ; , ! @ # $ % ^ &#38; * ” ? /. &#62; &#60; , ) &#123; : &#125; ’[ ]<br />
                                Total character is 256
                                ASCII-American standard coded information interchange
                            </p>


                        </div>
                        <h2 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>2,Constant in a c programming language(literals):
                        </h2>
                        <p className='font-bold'>There are two types of constant computer programming in c:</p>
                        <h3 className='text-[#01B6FF] font-semibold'>1, Primary constant <br />
                            2, Secondary constant
                        </h3>

                        <p className='mx-4'>
                           <span className='font-medium -ml-1'> Primary Constant in c</span> : <br /> integer,real,character <br />
                            <span className='font-medium -ml-1'>Secondary Constant in c </span>: <br /> array,pointer,structure,union,enum,etc.
                        </p>

                        <h4 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Integer constant in a C programming language:
                        </h4>
                        <p className='mx-4'>
                            Means not less then -32768 or  not more then 32767. ex-0,1,40,500,1000 ,+456,-688,etc
                        </p>

                        <h4 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Floating point or real constant in a C programming language
                        </h4>
                        <p className='mx-4'>
                            Means It must have a decimal point ,decimal is compulsory and also no use commas or blanks.for ex-1.2,5.6,46.88,-288,642,+64.24,etc.
                        </p>
                        <h4 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Character in a C programming language
                        </h4>
                        <p className='mx-4'>
                            Use single alphabet, use only single-digit or single special symbol enclosed within single inverted commas.
                            Ex- ’a’,’b’,’y’,’z’.
                        </p>

                        <div className='flex justify-between mx-6 sm:mx-12 mt-3 mb-3'>

<button onClick={() => handlePreviousAndNext('previous')} className=' flex  text-lg gap-1 text-[#9EB2D2] no-underline '><BsFillArrowLeftCircleFill className='text-4xl mt-1'></BsFillArrowLeftCircleFill> <span className='mt-2'>Previous</span></button>
<button onClick={() => handlePreviousAndNext('next')} className=' flex text-lg gap-1 text-[#9EB2D2] no-underline '><span className='mt-2'>Next</span><BsFillArrowRightCircleFill className='text-4xl mt-1'></BsFillArrowRightCircleFill></button>

</div>

                    </div>

                </div>

            </main>
        </div>
    );
}
