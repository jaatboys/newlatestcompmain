import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet  from "react-helmet";
import CppBar from '../../../sidebars/CppBar';
import CodeEditorFiled from '../../../CodeEditorFiled/CodeEditorFiled';
import CppNavBar from '../CppNav';

export default function CppControlStructure() {
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
<CppNavBar/>
<Helmet>

 
 <title>Master the Art of C++ Control structure statement: A Beginner's Tutorial Guide by CodeExampler</title>
 <meta name="description" content="C++ Control structure statement tutorial for beginners.program is executed as per requirement according to requirement the sequence can be changed by using the control structure statement, CodeExampler provides Multiple Programming Examples for Beginners,CodeExampler provides Free Online Tutorials for beginners" />
 <meta name="keywords" content="codeexampler,C++ tutprial for beginners,programming language,learn code in free,c++ programming tutorial for beginners,learn code in free online,continue statement in c++ programming,control structure statement in c++,control structure in cpp" />
 <link rel="canonical" href="https://www.codeexampler.com/cpp-control-structure" />
 </Helmet>


         <main className='max-w-[1440px] mx-auto flex gap-14 justify-between relative py-3 px-4'>
              {/* Python bur component   */}
              <CppBar ListActioveMobile={ListActioveMobile} setListActiveMobile={setListActiveMobile}></CppBar>

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

                              <br />
                              The program executes according to requirements. The sequence can be changed using the control structure statement. The categories and keywords show below:
                          </p>
                       

                      </div>
                      <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Conditional statement:
                      </h1>

                      
                      <div className='text-[#9EB2D2]'>
                      <p className='font-bold'>The conditional statement is many types in C++: <br/>
  
     If-Condition <br />
If-else<br />
If-else-if<br />
Nested if<br />
Switch-case<br />
     </p>
    
</div>



<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>C looping (iteration)
                      </h1>

                      <div className='text-[#9EB2D2]'>
                      <p className='font-bold'>There are three types of looping in C++:<br/>

     While loop<br />
     Do-while loop<br />
     For loop<br />

     </p>
    
</div>

<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Jumping statements in C++:
                      </h1>

                      <div className='text-[#9EB2D2]'>
                      <p className='font-bold'>C Supports only three types of jumping statements in C++: <br/>
     Break<br />
Continue<br />
Goto<br />

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
