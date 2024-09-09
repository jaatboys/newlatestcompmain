import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet  from "react-helmet";
import CppBar from '../../../sidebars/CppBar';
import CodeEditorFiled from '../../../CodeEditorFiled/CodeEditorFiled';
import CppNavBar from '../CppNav';

export default function CppFirstProgram() {

    const code1 = `
main( )
 { 
 Statement1;
 Statement1;
 } 
    `
    const code2 = `
#include <iostream> 
using namespace std; 
 int main( )
 { 
 // cout is used to outputs the values on the screen
 cout << "hello world program in c++";
 return 0;
 } 
    `
    const codeout2 = `
hello world program in C++
    `
    const code3 = `
#include <iostream> 
using namespace std; 
 int main( )
 { 
cout << "sports" << "\\n";
cout << "1,football" << "\\n";
cout << "2,badminton" << "\\n";
cout << "3,tennis \\t 4,cricket" << "\\n";
cout << "\\n";
cout << "hello world program in c++";
 return 0;
 } 
    `
    const codeout3 = `
sports 
1, football
2, badminton
3, tennis 4, cricket
hello world program in c++
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

 
 <title>Get Started with C++ Programming: First Program Tutorial for Beginners | CodeExampler</title>
<meta name="description" content="Learn how to write your first program in C++ with CodeExampler's free tutorial for beginners. Our step-by-step guide covers the basics of computer programming, including the 'Hello, World! or hello world program in cpp' program."/>
<meta name="keywords" content="C++ programming, first program, hello world program,hello world program in cpp,basic c++ programs, computer programming basics, C++ tutorial for beginners, learn free programming tutorials, CodeExampler"/>
<link rel="canonical" href="https://www.codeexampler.com/cpp-first-program" />
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
                  <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>The basic program of C++ for beginners or Hello world program in C++:</h1>
                      <div className='text-[#9EB2D2]'>
                          <p>

                          In essential for c++ programming, no blanks space use within a variable, constant, or keyword. <br />
All statements enter in small case letters.<br />
All Code must end all C++ statements with a ( ; )<br />
(;) means that statement is terminating<br />
Main() – this is a collective name given to a set of statements. main() is a function, and Every function has a pair of parentheses ( ) Every function has a couple of parentheses ( )<br />
Clrscr() – is used to clear screen<br />
and code finish by use (return 0 ;).<br />
There are essential points in the c++ programming language.
                          </p>
                          

                      </div>
                    
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Basic for c++ programming syntax:</h1>

<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'> </p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code1} />
</div>

                      
<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a hello world program in C++ example? </p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code2} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout2}
              </p>
            </div>



                      <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Escape sequence character:</h1>
                      <div className='text-[#9EB2D2] font-bold'>
                          <p>

                          \t – tab(gap b/w two characters) <br />
\n – newline<br />
\b – backspace<br />
\" – "<br />
\\ - \<br />
\0 – null used In a string<br />
                          </p>
                          
                      </div>


<div className='text-[#9EB2D2]'>
                           
     <p>

     Important-each escape sequence character occupied only one bite.
     </p>
    
</div>

<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program to give sports name output for c++ programming example? </p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code3} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout3}
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
