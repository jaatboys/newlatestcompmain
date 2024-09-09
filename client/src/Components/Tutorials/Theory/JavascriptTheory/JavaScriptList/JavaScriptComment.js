import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet  from "react-helmet";
import JavaScriptBar from '../../../sidebars/JavaScriptBar';
import CodeEditorFiled from '../../../CodeEditorFiled/CodeEditorFiled';
import JsNavBar from '../JavaScriptNav';
export default function JavaScriptComment() { 

    const code1 = `
/* hello ram 
Hello, Bharat */
        `
        const code2 = `
// My name is CodeExampler.com 
// This is a Js programming
        `
        const code3 = `
/* My name is CodeExampler.com 
That is a Javascript programming */
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
 
 <title>CodeExampler's Free JavaScript Comments Tutorial: Learn How to Enhance Your Code!</title>
 <meta name="description" content="Master the art of commenting in JavaScript with CodeExampler's free tutorial for beginners. Learn how to write comments that enhance your code and organize your thoughts. Access multiple programming examples and take your skills to the next level today!" />
 <meta name="keywords" content="JavaScript comments, commenting in JavaScript, JavaScript comment block, JavaScript comment line, JavaScript comment multiple lines beginner JavaScript tutorial,how to comment in javascript CodeExampler tutorials." />
 <link rel="canonical" href="https://www.codeexampler.com/javascript-comment" />
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
                  <div>
                            <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Types Of Comment in Javascript</h1>
                            <div className='text-[#9EB2D2]'>

                                <p>

                                    1, Comments in Javascript are used only for you to read. <br />
                                    2, If you type any content inside Javascript, comments are ignored by the compiler. <br />

                                </p>

                            </div>
                        </div>




                        <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Javascript Comments Example:</h1>

                        <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2 pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'></p>
    </div>

</div>
</div>
<div className='bg-[#1f3040] rounded-b-xl'>
                            <CodeEditorFiled code={code1} />
                        </div>


                        <div className='font-semibold'>
                        <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>There are two types of comments in a Javascript programming language.</h1>

                            <p className='font-bold'>1, Single-line comment <br />
                                2, Multi-line comment</p>

                        </div>
                        <div>
                            <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>
                                1, Single-line Comment:
                            </h1>
                            <div className='text-[#9EB2D2]'>

                                <p>

                                    This single-line comment starts with a // tag and ends at the end of the line.
                                    <br />

                                </p>

                            </div>

                            
                        <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Single-Line Comments in Javascript Example:</h1>
                        <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2 pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'></p>
    </div>

</div>
</div>
<div className='bg-[#1f3040] rounded-b-xl'>
                                <CodeEditorFiled code={code2} />
                            </div>


                            <div>
                                <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>
                                    2, Multi-line Comment:
                                </h1>
                                <div className='text-[#9EB2D2]'>

                                    <p>

                                        That is a multi-line comment in Javascript and This type of comment must begin with /* and end with */. if you write anything inside this comment, symbols ignore by the compiler
                                        <br />

                                    </p>

                                </div>


                                
                        <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Multi-line Comments in Javascript Example:</h1>
                        <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2 pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'></p>
    </div>

</div>
</div>
<div className='bg-[#1f3040] rounded-b-xl'>
                                    <CodeEditorFiled code={code3} />
                                </div>

                            </div>

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
