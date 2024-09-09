import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import JsNavBar from '../JavaScriptNav';
import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet  from "react-helmet";
import CodeEditorFiled from '../../../CodeEditorFiled/CodeEditorFiled';
import JavaScriptBar from '../../../sidebars/JavaScriptBar';

export default function JavaScriptControlStructure() {
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
<JsNavBar/>
<Helmet>
 <title>Master the Art of Java Control Structure: A Beginner's Tutorial Guide by CodeExampler</title>
 <meta name="description" content="Take control of your JavaScript code with CodeExampler's free tutorial on control structures for beginners. Learn how to manipulate program execution to meet your requirements with multiple programming examples. Start optimizing your code today!" />
 <meta name="keywords" content="JavaScript control structure, control flow in JavaScript, JavaScript for loop, JavaScript while loop, JavaScript foreach, beginner JavaScript tutorial, CodeExampler tutorials." />
 <link rel="canonical" href="https://www.codeexampler.com/javascript-control-structure" />
 </Helmet>


         <main className='max-w-[1440px] mx-auto flex gap-14 justify-between relative py-3 px-4'>
              {/* Python bur component   */}
              <JavaScriptBar ListActioveMobile={ListActioveMobile} setListActiveMobile={setListActiveMobile}></JavaScriptBar>

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
                    
                  <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Types of control structure statement in Javascript</h1>

<div className='text-[#9EB2D2]'>

    <p>
        The program Executes according to requirements. The sequence can be changed using the control structure statement. The categories and keywords Show below:
    </p>

</div>

<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>The Conditional statement is many types in Javascript:</h1>

<div className='text-[#9EB2D2]'>

    <p className='font-bold'>
        If-condition <br />
        If-else <br />
        If-else-if <br />
        Nested if <br />
        Switch-case
    </p>

</div>


<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Javascript looping (iteration)</h1>
<h1 className='font-semibold'>There are three types of looping in Javascript:</h1>

<div className='text-[#9EB2D2]'>

    <p className='font-bold'>
        While loop <br />
        Do-while loop <br />
        For loop
    </p>

</div>

<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Jumping statements in Javascript:</h1>

<div className='text-[#9EB2D2]'>

    <p className='font-semibold'>
        Continue <br />
        Break
    </p>

</div>

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
