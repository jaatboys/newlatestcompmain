import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import JsNavBar from '../JavaScriptNav';
import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet  from "react-helmet";
import CodeEditorFiled from '../../../CodeEditorFiled/CodeEditorFiled';
import JavaScriptBar from '../../../sidebars/JavaScriptBar';

export default function JavaScriptUserDefineFunction() {   


    const code1 = `
<script> 
  function hello()
   { 
    document.write("hello function"+ "<br>");
   } 

  document.write("This is a function program" + "<br>");
  hello() // calling function
  document.write("hello is a function");
</script>
    `
    const codeout1 = `
This is a function program 
hello function
hello is a function 
    `
    const code2 = `
<script> 
  function USA()
   { 
    document.write("USA Journey"+ "<br>");
   } 

  function Uk()
   { 
    USA()
    document.write("UK Journey"+ "<br>");
   } 
  document.write("Travel Start"+ "<br>");
  Uk()
  document.write("India Journey");
</script> 
    `
    const codeout2 = `
travel start 
USA journey
UK journey 
India journey
    `

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
 
 <title>Master the Art of User Defined Function: A Beginner's Tutorial Guide by CodeExampler</title>
 <meta name="description" content="Javascript userDefine function tutorial for beginners.userDefine function in Javascript is a collection of similar type of data and stored in manually consecutively under one name" />
 <meta name="keywords" content="codeexampler,programming language tutorial for begineers,Javascript userDefine function,Javascript user Defined function for loop,javascript define function in class
,user defined function in javascript,javascript define function with callback,javascript define function multiple times" />
 <link rel="canonical" href="https://www.codeexampler.com/javascript-user-define-function" />
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
                  <div className='text-[#9EB2D2]'>

<p>

    The Program can define its function, and a function consist of the following.
</p>

</div>

<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>There are five types of users define a function in Javascript:</h1>

<div className='text-[#9EB2D2]'>

<p className='text-[#01B6FF] font-bold'>

    1, Function prototype(declaration) <br />
    2, Function definition <br />
    3, Calling function (accessing)<br />
    4, Function argument(parameter)<br />
    5, Return value by the function
</p>

</div>

<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a Program user defines a Function in Javascript Example?</p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code1} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Input:</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout1}
              </p>
            </div>

                        <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q- What will be the output of the following function program when a person goes from the USA to stay in the UK and create a plane to travel to India in Javascript?
</p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code2} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Input:</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout2}
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
