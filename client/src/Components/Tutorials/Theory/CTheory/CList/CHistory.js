import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet  from "react-helmet";
import CNavBar from '../CNav';
import CBar from '../../../sidebars/CBar';
import CodeEditorFiled from '../../../CodeEditorFiled/CodeEditorFiled';

export default function CHistory() {
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
 
 <title>Master the Art of History and introduction to C: A Beginner's Tutorial Guide by CodeExampler</title>
 <meta name="description" content="History and introduction to C programming tutorial for beginners.A c programming language developed in 1972 and this c computer language written by a man named Dennis Ritchie.CodeExampler provides Free Online Tutorials for beginners" />
 <meta name="keywords" content="codeexampler,programming language,tutorial for begineers,learn code in free,c programming tutorial for beginners,history of c language,history of c programming,history of c language in hindi,history of c language pdf,history of c language wikipedia,c language history in hindi,c language history in english,introduction of c programming tutorial" />
 <link rel="canonical" href="https://www.codeexampler.com/c-history" />
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
                        <button onClick={() => handlePreviousAndNext('next')} className='hidden lg:flex text-lg gap-1 text-[#9EB2D2] no-underline '></button>
                        <div className='flex lg:hidden gap-2 mt-3 lg:mt-0'>
                            <BsFillArrowLeftCircleFill onClick={() => handlePreviousAndNext('previous')} className='text-4xl text-gray-500'></BsFillArrowLeftCircleFill>
                            {/* <BsFillArrowRightCircleFill onClick={() => handlePreviousAndNext('next')} className='text-4xl text-gray-500'></BsFillArrowRightCircleFill> */}
                            <button> </button>
                        </div>
                    </div>
                  <div className='space-y-3'>
                  <div className='text-[#9EB2D2]'>
                           
                           <p>
                      <br />
                           C programming language Developed in 1972, and Dennis Ritchie wrote this c computer language.
                           </p>
                          
                      </div>



                      <h2 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>The main point about the introduction of the C programming language:</h2>


                      <div className='text-[#9EB2D2]'>
                           
                           <p>
                      
                           The c programming language is a popular language because it is reliable, easy to use, and simple why anybody learns c firstly then comparison to C, C++ means nobody can learn C++ or C directly. Because when you know are advanced compared to c .all points like class, object, polymorphism, etc. At that time, nobody could learn these languages fast, and C, C, or c++ used the Object-Oriented Programming (OOP) principle.
                           </p>
                          
                      </div>


                      <h2 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Main Points of the introduction of c programming language:</h2>


<div className='text-[#9EB2D2]'>
     
     <p>

     C language is a 2 generation programming language. <br />
A C programming language is a case sensitive language<br />
C computer language is a middle-level language and top-down approach<br />
     </p>
    
</div>


<div className='flex justify-between mx-6 sm:mx-12 mt-3 mb-3'>

                        <button onClick={() => handlePreviousAndNext('previous')} className=' flex  text-lg gap-1 text-[#9EB2D2] no-underline '><BsFillArrowLeftCircleFill className='text-4xl mt-1'></BsFillArrowLeftCircleFill> <span className='mt-2'>Previous</span></button>
                        <div></div>

                    </div>


                  </div>

              </div>

          </main>
      </div>
  );
}
