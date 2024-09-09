import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet  from "react-helmet";
import CsharpNavBar from '../CsharpNav';
import CodeEditorFiled from '../../../CodeEditorFiled/CodeEditorFiled';
import CsharpBar from '../../../sidebars/CsharpBar';

const CSharpDoWile = () => {
const code1 = `
Do { 
  Statements; 
  } 
while (condition); 
 `
const code2 = `
using System;
namespace do_while
{ 
 class Program 
 { 
 static void Main (string[] args)
 { 
 int count = 1;
 do
 { 
     Console.WriteLine("Hello codeExampler" + count);
     count++;
 } 
 while (count <= 10);
 } 
 } 
}
  `
const codeout2 = `
Hello codeExampler1
Hello codeExampler2
Hello codeExampler3
Hello codeExampler4
Hello codeExampler5
Hello codeExampler6
Hello codeExampler7
Hello codeExampler8
Hello codeExampler9
Hello codeExampler10
  `
const code3 = `
using System;
namespace do_while
{ 
 class Program 
 { 
  static void Main (string[]args)
  { 
  int a = 1;
  do 
  { 
      Console.WriteLine("hello everyone "+ a);
      a = a + 2;
  } 
  while (a <= 5);
  } 
 } 
}

  `
const codeout3 = `
hello everyone 1 
hello everyone 3 
hello everyone 5 
  `
const code4 = `
using System;
namespace dowhile
{ 
 class Program 
 { 
 static void Main (string[]args)
 { 
  int a = 1;
  do 
  { 
      Console.WriteLine("Increment No "+ a);
      a ++;
  } 
  while (a <= 10);
 } 
 } 
}  

  `
const codeout4 = `
Increment No 1 
Increment No 2 
Increment No 3 
Increment No 4 
Increment No 5 
Increment No 6 
Increment No 7 
Increment No 8 
Increment No 9 
Increment No 10
  `
const code5 = `
using System;
namespace While
{ 
 class Program 
 { 
 static void Main(string[] args)
 { 
 int a = 10;
 do 
 { 
     Console.WriteLine("Decrement No " + a);
     a--;
 } 
 while (a >= 1);
 } 
 } 
} 

  `
const codeout5 = `
Decrement No 10 
Decrement No 9 
Decrement No 8 
Decrement No 7 
Decrement No 6 
Decrement No 5 
Decrement No 4 
Decrement No 3 
Decrement No 2 
Decrement No 1 
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
  
  <CsharpNavBar/>
  <Helmet>
 
 <title>Master the Art of C# Do While: A Beginner's Tutorial Guide by CodeExampler</title>
 <meta name="description" content="C# do While tutorial for beginners. CodeExampler provides Multiple Programming Examples for Beginners,CodeExampler provides Free Online Tutorials for beginners" />
 <meta name="keywords" content="codeexampler,programming language,tutorial for begineers,C# do While,c# do While for,c sharp do While,c# do While for loop,end for loop c#,c# exit for loop,exit while loop c#,c# continue,do While foreach c#,c# foreach do While,c# foreach continue" />
 <link rel="canonical" href="https://www.codeexampler.com/csharp-do-while" />
 </Helmet>



           <main className='max-w-[1440px] mx-auto flex gap-14 justify-between relative py-3 px-4'>
                {/* Python bur component   */}
                <CsharpBar ListActioveMobile={ListActioveMobile} setListActiveMobile={setListActiveMobile}></CsharpBar>
  
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
                      
                           In do-while, CSharp(C#) loop will always execute at least once
                           </p>
                          
                      </div>


                      <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Syntax do-while c# loop:</h1>


                      <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
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


<div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                <div className=' flex gap-2 pl-7 items-center'>
                  <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
                  <div className='mx-1'>
                    <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program for loop in Do while loop and print names Example in C#?</p>
                  </div>

                </div>
</div>
<div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditorFiled code={code2} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
    <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                   <p className='font-bold whitespace-pre-wrap '>
              {codeout2} 
              </p>
    </div>

<div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                <div className=' flex gap-2 pl-7 items-center'>
                  <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
                  <div className='mx-1'>
                    <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program Addition or increment of 2 numbers every Times in do-while loop Example in C#?</p>
                  </div>

                </div>
</div>
<div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditorFiled code={code3} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
    <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                   <p className='font-bold whitespace-pre-wrap '>
              {codeout3} 
              </p>
    </div>



<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Increment in Do while C# loop Example</h1>


<div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                <div className=' flex gap-2 pl-7 items-center'>
                  <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
                  <div className='mx-1'>
                    <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program Addition or increment of 1+ every Times in do-while loop Example in C#?</p>
                  </div>

                </div>
</div>
<div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditorFiled code={code4} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
    <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                   <p className='font-bold whitespace-pre-wrap '>
              {codeout4} 
              </p>
    </div>




<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Decrement in Do while c# Example</h1>


<div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                <div className=' flex gap-2 pl-7 items-center'>
                  <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
                  <div className='mx-1'>
                    <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program Subtract or decrement of -1 numbers every Times in do-while loop Example in C#?</p>
                  </div>

                </div>
</div>
<div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditorFiled code={code5} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
    <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                   <p className='font-bold whitespace-pre-wrap '>
              {codeout5} 
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
};

export default CSharpDoWile;