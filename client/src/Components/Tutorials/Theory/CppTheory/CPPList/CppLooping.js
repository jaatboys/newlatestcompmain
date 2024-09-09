import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet  from "react-helmet";
import CppBar from '../../../sidebars/CppBar';
import CodeEditorFiled from '../../../CodeEditorFiled/CodeEditorFiled';
import CppNavBar from '../CppNav';

export default function CppLooping() {

    const code1 = `
while (condition)
{
  -  
  statement
  -  
}
    `
    const code2 = `
do {
    statement
    statement
    -  
while (condition);
    }
    `
    const code3 = `
for ( statement; condition;statement)
   statement
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
<CppNavBar/>
<Helmet>

 
 <title>Master the Art of C++ looping: A Beginner's Tutorial Guide by CodeExampler</title>
 <meta name="description" content="C++ looping tutorial for beginners.looping statement in C++ is used to repeat a particular piece of cards until the given condition is false.CodeExampler provides Free Online Tutorials for beginners" />
 <meta name="keywords" content="codeexampler,C++ looping tutorial for beginners,programming language tutorial for begineers,c++ looping,looping in c++,c++ looping programs,looping in c++ programming,cpp language looping,looping in cpp language,c++ programming looping examples,looping in c++ programming pdf,looping in c++ pdf,cpp programming looping exercises,cpp programming looping statements,cpp language looping statement,looping in c++ in hindi,looping in cpp in english,cpp looping structures in embedded systems,c++ program for looping,learn code in free,c++ programming tutorial for beginners,learn code in free online" />
 <link rel="canonical" href="https://www.codeexampler.com/cpp-looping" />
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

                          A looping statement in C++ is using to repeat a particular piece of cards until the given condition is false.
                          </p>
                        
                      </div>

                      <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>There are three types of looping statements in C++ programming:</h1>
                      <div className='text-[#9EB2D2] font-bold'>
                           
                           <p>
                          
                           1, Using a while looping in C++ statement <br />
2, Using a do-while looping in C++ statement<br />
3, Using a for looping in C++<br />
                           </p>
                          
                      </div>

                      <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>1, While loop in C++:</h1>
                      <div className='text-[#9EB2D2]'>
                           
                           <p>
                          
                           In the while loop for C++, The loop's body executes until that the condition is false.
                           </p>
                          
                      </div>


                      <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>while loop C++ Syntax:
                      </h1>

                      <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>

</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                      <CodeEditorFiled code={code1} />
</div>

                      <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>2,Do-while loop:</h1>

                      <div className='text-[#9EB2D2]'>
                           
                           <p>
                          
                           In the do-while Loop, Loop Check after the execution of the Loop's body, and the main thing is that the Loop's body executes at least once.
                           </p>
                          
                      </div>




                      <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Do-while loop C++ Syntax</h1>


                      <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>

</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code2} />
</div>


                      <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>3, For loop C++:</h1>



                      
                      <div className='text-[#9EB2D2]'>
                          <p>

                          1, In the for loop C++, the body of the Loop will be executed until the given condition is false <br />
2, This for Loop is using to repeat a particular piece of code for a fixed no of times<br />
3, In the for loop C++ In for Loop must use two semicolons<br />
                          </p>
                         

                      </div>

                      <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>for loop C++ syntax</h1>

                      
                  <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>

</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code3} />
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
