import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet  from "react-helmet";
import PhpBar from '../../../sidebars/PhpBar'; 
import PhpNavBar from '../PhpNav';

export default function PhpControlStructure() {
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


<PhpNavBar/>
<Helmet>
 
 <title>Master the Art of PHP Control Structure: A Beginner's Tutorial Guide by CodeExampler</title>
 <meta name="description" content="Php control Structure tutorial for beginners.control Structure in Php is a program is executed as per requirement according to requirement the sequence can be changed by using the control structure statementr provides Multiple Programming Examples for Beginners" />
 <meta name="keywords" content="codeexampler,tutorial for begineers,Php control Structure,Php control Structure for loop,control Structure foreach Php,php control structures tutorial,types of control structures in php " />
 <link rel="canonical" href="https://www.codeexampler.com/php-control-structure" />
 </Helmet>


         <main className='max-w-[1440px] mx-auto flex gap-14 justify-between relative py-3 px-4'>
              {/* Python bur component   */}
              <PhpBar ListActioveMobile={ListActioveMobile} setListActiveMobile={setListActiveMobile}></PhpBar>

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
                  <h1 className='text-[#01B6FF] mt-3 lg:text-xl'>Types of control structure statement in Php</h1>

<div className='text-[#9EB2D2]'>

    <p>
        The program executes according to requirements. The sequence can be changed using the control structure statement. The categories and keywords show below:
    </p>

</div>

<h1 className='text-[#01B6FF] mt-3 lg:text-xl'>Conditional statements are many types in Php:</h1>

<div className='text-[#9EB2D2]'>

    <p className='font-semibold'>
        1, If-condition <br />
        2, If-else <br />
        3, If-else-if <br />
        4, Switch-case
    </p>

</div>

<h1 className='text-[#01B6FF] mt-3 lg:text-xl'>Php looping (iteration)</h1>

<div className='text-[#9EB2D2]'>
    <p>There are three types of looping in Php:</p>
    <p className='font-semibold'>
        1, While loop <br />
        2, Do-while loop <br />
        3, For loop
    </p>

</div>

<h1 className='text-[#01B6FF] mt-3 lg:text-xl'>Jumping statements in Php:
</h1>

<div className='text-[#9EB2D2]'>
    <p>Php supports only three types of jumping statements:</p>
    <p className='font-semibold'>
        1, Control Structure <br />
        2, Continue <br />
        3, Goto
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
