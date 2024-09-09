import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet  from "react-helmet";
import JavaNavBar from '../JavaNav';
import JavaBar from '../../../sidebars/JavaBar';

export default function JavaFeatures() {
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

<JavaNavBar/>
<Helmet>
 
  <title>Master the Art of Java Features: A Beginner's Tutorial Guide by CodeExampler</title>
<meta name="description" content="Discover the essential Java features with CodeExampler's beginner's tutorial guide. Get multiple programming examples, including Java 8, 11, 13, and 14 features, and interview questions. Start your journey to mastering the art of Java features today!" />
<meta name="keywords" content="Java features, Java 8 features, Java 11 features, Java 13 features, Java 14 features,which of the following is not a java features, programming language, tutorial for beginners, CodeExampler, Java 8 features with examples, Java features by version, Java 8 features geeksforgeeks, features of JavaScript, Java 8 features interview questionsfeatures of java in hindi" />
<link rel="canonical" href="https://www.codeexampler.com/java-features" />
</Helmet>


         <main className='max-w-[1440px] mx-auto flex gap-14 justify-between relative py-3 px-4'>
              {/* Python bur component   */}
              <JavaBar ListActioveMobile={ListActioveMobile} setListActiveMobile={setListActiveMobile}></JavaBar>

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
                  <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Why We Use Java:</h1>

<div className='text-[#9EB2D2]'>

    <p>
        1, Java is a case sensitive language. <br />
        2, java is a popular language because it is reliable, easy to use and simple. <br />
        3, Java key permits to solve both the security and the portability problems. <br />
        4, Translating a Java program into bytecode it much easier to run a program because only the JVM needs to be executed for each platform. <br />
        5, this is a high performance and dynamic.
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
