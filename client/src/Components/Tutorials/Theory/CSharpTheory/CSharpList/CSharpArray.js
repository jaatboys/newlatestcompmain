import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet  from "react-helmet";
import CsharpNavBar from '../CsharpNav';
import CodeEditorFiled from '../../../CodeEditorFiled/CodeEditorFiled';
import CsharpBar from '../../../sidebars/CsharpBar';

const CSharpArray = () => {
  const code1 = `
1, One-dimensional Array
2, Multi-dimensional Array
  `
  const code2 = `
Ex-{10, 20, 30, 40 , 50}
  `
  const code3 = `
Ex-int a[4]
int b[5]
  `
  const code4 = `
Int a[6] = {20, 40, 30, 60, 50}; 
Int a[] = {1, 2, 3, 5, 8, 10}; 
Float a [] = {2.8, 20.46, 8.6, 4.5, 46.50}
  `
  const code5 = `
using System;
namespace ArrayExample
{
 class Program 
 {
 static void Main(string[] args)
 { 
 int i;
 int[] a = {10, 25, 30, 45, 50, 655, 700, 855, 900, 1055};
 
 for (i = 0; i < 10; i++)
 { 
     if (a[i] % 2 == 0)
     { 
         Console.WriteLine(a[i]);
     } 
 } 
 } 
 } 
}
  `
  const codeout5 = `
10
30 
50 
700
900 
  `
  const code6 = `
using System;
namespace ArrayExample
{
 class Program 
 { 
 public static void Main(string[] args)
 { 
 int i;
 int[] a = {10, 20, 30, 40, 50, 60, 70, 80, 90, 100}; 
 
 for (i = 0; i < 8; i++)
 { 
     Console.WriteLine(a[i]);
 } 
 
 Console.WriteLine("Reverse Start ");
 
 for (i = 7; i >= 0; i--)
 {
     Console.WriteLine(a[i]);
 }
 } 
 } 
}
  `
  const codeout6 = `
10
20 
30 
40
50 
60 
70 
80 
Reverse Start 
90
80 
70 
60 
50 
40 
30 
20 
10 
  `
  const code7 = `
using System;
namespace ArrayExample
{
class Program
{
 static void Main(string[] args)
 {
  int i, maximum;
  int[] a = { 10, 40, 20, 80, 90, 45, 68, 60, 88, 24 };
  for (i = 0; i < 10; i++)
  {
      Console.WriteLine(a[i]);
  }
  Console.WriteLine("Maximum no:");
  maximum = a[0];
  for (i = 1; i < 10; i++)
  {
      if (a[i] > maximum)
          maximum = a[i];
  }
  Console.WriteLine(maximum);
 }
}
}
  `
  const codeout7 = `
10
40 
20 
80
90 
45 
68 
60 
88
24 
Maximum no 
90 
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
   
   <title>Master the Art of C# Array: A Beginner's Tutorial Guide by CodeExampler</title>
   <meta name="description" content="C# array tutorial for beginners.Array in C# is a collection of similar type of data and stored in manually consecutively under one name CodeExampler provides Multiple Programming Examples for Beginners,CodeExampler provides Free Online Tutorials for beginners" />
   <meta name="keywords" content="codeexampler,programming language,tutorial for begineers,C# array,One-dimensional Array in C#,Multi-dimensional Array in C#" />
   <link rel="canonical" href="https://www.codeexampler.com/csharp-array" />
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
                      
                      1, Array in C# is a collection of similar type of data and stored in manually consecutively under one name <br/>
                      2, The index number will be different<br/>
                      3, Main purpose of array is used to handle a large volume of data of some type more easily
                           </p>
                          
                      </div>
                      
                      
                      <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>There are 2 types of c# array:</h1>
                      
                      
                      <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>

</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditorFiled code={code1} />
</div>

                      
                      
                      
                      
                      <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>How Declare array in CSharp(C#):</h1>
                      
                      
                      
                      
                      <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>

</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditorFiled code={code2} />
</div>
 
                      
                      
                      
<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>C# Array Syntax:</p>
</div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditorFiled code={code3} />
</div>

                      
<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Initialization array in C# Example:
</p>
</div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditorFiled code={code4} />
</div>

                      
<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
  <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program to input an array of 10 elements and print only even elements in C# array?</p>
</div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditorFiled code={code5} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
      <div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout5}
              </p>
 
      </div>
                      
                      
                      
                      
                      
      <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
  <p className='text-lg font-semibold text-[#01B6FF]'>Q- Write a Programme to input an array of 8 elements and print in reverse in array c#?</p>
</div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditorFiled code={code6} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
      <div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout6}
              </p>
 
      </div>
                      
      <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
  <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program to input an array of 10 elements and print in maximum in C#?</p>
</div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditorFiled code={code7} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
      <div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout7}
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
                      
                      export default CSharpArray;