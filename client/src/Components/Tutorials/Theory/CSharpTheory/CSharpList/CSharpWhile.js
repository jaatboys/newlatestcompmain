import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet from "react-helmet";
import CsharpNavBar from '../CsharpNav';
import CodeEditorFiled from '../../../CodeEditorFiled/CodeEditorFiled';
import CsharpBar from '../../../sidebars/CsharpBar';

const CSharpWhile = () => {

   
        const code1 = `
While (condition)
Statement ;
{ 
body
} 
    `
    const code2 = `
using System;
namespace While
{ 
class Program 
{ 
static void Main (string[]args)
{ 
    int a = 1 ;
    while (a <= 10)
    { 
        Console.WriteLine(a);
        a++;
        // Or you can use a = a + 1;
    } 
} 
} 
}
    `
    const codeout2 = `
1 
2 
2 
4 
5 
6 
7 
8 
9 
10 
    `
    const code3 = `
using System;
namespace While
{ 
class Program 
{ 
static void Main (string[]args)
{ 
    int a = 10 ;
    while (a >= 1)
    { 
        Console.WriteLine(a);
        a--;
        // Or you can use a = a - 1;
    } 
} 
} 
}
        `
        const codeout3 = `
10 
9 
8 
7 
6 
5 
4 
3 
2 
1 
        `
        const code4 = `
while ( a < = 10 && a > = 1)
while ( a < = 10 || a > = 1)
        `
        const code5 = `
using System;
namespace While
{ 
class Program 
{ 
static void Main (string [] args)
{ 
int a = 2560;
while (a > 0)
{ 
Console.WriteLine (a);
a = a % a /10;
} 
} 
} 
} 
    `
    const codeout5 = `
2560
    `
    const code6 = `
using System;
namespace asd
{ 
class Program 
{ 
static void Main (string [] args)
{ 
 int a = 2560, sum = 0 ;
 while (a > 0 )
 { 
     sum = sum + a % 10;
     a = a / 10 ;
 } 
 Console.WriteLine("Sum of digits = " + sum);
} 
} 
} 
    `
    const codeout6 = `
Sum of digits = 13
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
 
 <title>Master the Art of C# While: A Beginner's Tutorial Guide by CodeExampler</title>
 <meta name="description" content="C# While tutorial for beginners.While in C# is a collection of similar type of data and stored in manually consecutively under one name CodeExampler provides Multiple Programming Examples for Beginners,CodeExampler provides Free Online Tutorials for beginners" />
 <meta name="keywords" content="codeexampler,programming language,tutorial for begineers,C# While,c# While for,c sharp While,c# While for loop,end for loop c#,c# exit for loop,exit while loop c#,c# continue,While foreach c#,c# foreach While" />
 <link rel="canonical" href="https://www.codeexampler.com/csharp-while" />
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
                    <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>While loop for C#:</h1>



<div className='text-[#9EB2D2]'>
       
       <p>
  
       This condition will be given and the body of the loop will be executed until the given condition is false
       </p>
      
  </div>

  <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>While loop C# Syntax:</h1>


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




<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Csharp While loop Example</h1>


<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
<p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program Addition or increment while loop Example in C#?</p>
</div>

</div>
</div>
<div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditorFiled code={code2} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
    <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                   <p className='font-bold whitespace-pre-wrap '>
              {codeout2} </p>
    </div>

    <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>


<div className=' flex gap-2 pl-7 items-center'>
<div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
<div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
<div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
<div className='mx-1'>
<p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program Subtract or decrement in while loop Example in C#?</p>
</div>

</div>
</div>
<div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditorFiled code={code3} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
    <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                   <p className='font-bold whitespace-pre-wrap '>
              {codeout3} </p>
    </div>



<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
<p className='text-lg font-semibold text-[#01B6FF]'>While loop uses logic operator Example in C#:</p>
</div>

</div>
</div>
<div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditorFiled code={code4} />
</div>




<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>While Loop Reverse C#:</h1>


<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
<p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program to input an integer number and print in reverse in C# Example?</p>
</div>

</div>
</div>
  <div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditorFiled code={code5} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
    <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                   <p className='font-bold whitespace-pre-wrap '>
              {codeout5} </p>
    </div>



<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
<p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program to input found out the sum of digits of integer no in C# Example?</p>
</div>

</div>
</div>
<div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditorFiled code={code6} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
    <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                   <p className='font-bold whitespace-pre-wrap '>
              {codeout6}</p>
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

export default CSharpWhile;