import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet from "react-helmet";
import CsharpNavBar from '../CsharpNav';
import CodeEditorFiled from '../../../CodeEditorFiled/CodeEditorFiled';
import CsharpBar from '../../../sidebars/CsharpBar';

const CSharpPassingArgument = () => {
  const code1 = `
using System;
public class a
{
 public static void argument(int n) // int n is a formal argument
 {
     Console.WriteLine("My number is: " + n);
 }
 
 public static void Main(string[] args)
 {
     Console.WriteLine("Enter a number: ");
     int a = Convert.ToInt32(Console.ReadLine());
     argument(a); // a is an actual argument
 }
}
  `
  const codeout1 = `
Enter a number: 
20
  `

  const codeans1 = `
My number is:20
  `

  const code2 = `
using System;
public class a
{
 public static void check(int n) // int n is a formal argument
 {
     if (n % 2 == 0)
     {
         Console.WriteLine("even no");
     }
     else
     {
         Console.WriteLine("odd no");
     }
 }
 public static void Main(string[] args)
 {
     Console.WriteLine("enter a number");
     int a = Convert.ToInt32(Console.ReadLine());
     check(a); // a is an actual argument
 }
}
  `
  const codeout2 = `
40
  `

  const codeans2 = `
even no
  `


  const code3 = `
public class a
{
 public static void maximum(int a, int b)
 {
     if (a > b)
     {
         Console.WriteLine("maximum = " + a);
     }
     else
     {
         Console.WriteLine("maximum = " + b);
     }
 }
 public static void Main(string[] args)
 {
     Console.WriteLine("enter x and y numbers");
     int x = Convert.ToInt32(Console.ReadLine());
     int y = Convert.ToInt32(Console.ReadLine());
     maximum(x, y);
 }
}
  `
  const codeout3 = `
40
65
  `
  
  const codeans3 = `
  maximum = 65 
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
 
 <title>Master the Art of C# passing argument: A Beginner's Tutorial Guide by CodeExampler </title>
 <meta name="description" content="C# passing argument tutorial for beginners.An argument may be a variable as a constant value that is used in the () of function. CodeExampler provides Multiple Programming Examples for Beginners,CodeExampler provides Free Online Tutorials for beginners" />
 <meta name="keywords" content="codeexampler,programming language,tutorial for begineers,C# passing argument,C# passing argument C# tutorial for begineers" />
 <link rel="canonical" href="https://www.codeexampler.com/csharp-passing-argument" />
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
                      
                            An argument may be a variable as a Constant value that is used in the () of function.
                           </p>
                          
                      </div>
                      
                      <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                                      <div className=' flex gap-2 pl-7 items-center'>
                                        <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
                                        <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
                                        <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
                                        <div className='mx-1'>
                                          <p className='text-lg font-semibold text-[#01B6FF]'>Q-Example of the Passing Argument in C#?</p>
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
                        <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeans1}
              </p>
            </div>
                      
                      <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                                      <div className=' flex gap-2 pl-7 items-center'>
                                        <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
                                        <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
                                        <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
                                        <div className='mx-1'>
                                          <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program to check a no is even or odd by using passing argument?</p>
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
                        <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeans2}
              </p>
            </div>
                      
                      <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                                      <div className=' flex gap-2 pl-7 items-center'>
                                        <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
                                        <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
                                        <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
                                        <div className='mx-1'>
                                          <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program check greater no by using a function in C#?</p>
                                        </div>
                      
                                      </div>
                      </div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditorFiled code={code3} /> 
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Input:</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout3}
              </p>
            </div>
                        <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeans3}
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
                      
                      export default CSharpPassingArgument;