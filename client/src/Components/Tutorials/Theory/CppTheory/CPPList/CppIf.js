import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet  from "react-helmet";
import CppBar from '../../../sidebars/CppBar';
import CodeEditorFiled from '../../../CodeEditorFiled/CodeEditorFiled';
import CppNavBar from '../CppNav';

export default function CppIf() {

    const code1 = `
if(condition)
{
 body
} 
    `
    const code2 = `
#include <iostream> 

using namespace std; 
int main ()
 { 
int a;
cout << "enter a number:";
cin >> a; 
if (a>=100) 
 { 
cout << "This no is greater than 100"; 
}
 return 0; 
} 
    `
    const codeout2 = `
enter a number: 450

This no is greater than 100
    `
    const code3 = `
#include <iostream> 
using namespace std; 

int main ()
  { 
int a;

 cout <<"enter a value of a";
 cin >> a; 

 if (a>=500) 
    { 
   cout   << a << " is greater than 500"; 
    } 

 if (a<500) 
    { 
    cout  << a << " is less than 500"; 
    } 

   return 0; 
  }
    `
    const codeout3 = `
enter a value of a 36

a 36 is less than 500
    `
    const code4 = `
#include <iostream> 
using namespace std; 

int main ()
  { 

 int a,b,c;
 a = 100, b = 200, c = 400;
  if (a > b)
  { 
  cout <<" a is greater than b \\n";
  } 

  if (a < b)
   { 
  cout <<" b is greater than a \\n";
  } 

  if (a < c)
   { 
  cout << " c is greater than a \\n";

return 0; 
  } 
} 
    `
    const codeout4 = `
b is greater than a

c is greater than a
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

 
 <title>Master the Art of if statement in c++: A Beginner's Tutorial Guide by CodeExampler</title>
 <meta name="description" content="if statement in c++ tutorial for beginners.If is used for making a decision.If and else can be a block statementCodeExampler provides Multiple Programming Examples for Beginners,CodeExampler provides Free Online Tutorials for beginners" />
 <meta name="keywords" content="codeexampler,cpp if,if else statement c++,c++ remove_if,c++ if loop,find_if c++,cpp if else,programming language tutorial for begineers,cpp ifdef,learn code in free,c++ programming tutorial for beginners,learn code in free online,if in cpp programming,if,in in c++,if statement in cpp,c++ programming if statement" />
 <link rel="canonical" href="https://www.codeexampler.com/cpp-if" />
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
                          If Statement use for making a decision. If and else can be a block statement and else if c++ Statement
                          </p>
                         

                      </div>


                      <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>If statement in c++ syntax:</h1>

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
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program to input a number and check this number is more than or equal to 100? </p>
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

                      <div className='bg-[#2c3e4c] p-3 rounded-t-xl' >
                          <div className='flex gap-2 pl-7 items-center'>
                              <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
                              <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
                              <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
                              <div className='mx-1'>
                                  <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program to input a number and check greater and lesser no?</p>
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

                        <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program to input a number and check no is greater or lesser? </p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code4} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout4}
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
