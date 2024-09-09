import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet  from "react-helmet";
import CsharpNavBar from '../CsharpNav';
import CodeEditorFiled from '../../../CodeEditorFiled/CodeEditorFiled';
import CsharpBar from '../../../sidebars/CsharpBar';

const CSharpFirstProgram = () => {

 const code =`
using System;
namespace First
{
 class Program
 {
    static void Main(string[] args)
    {
      Console.WriteLine("Hello World!");
    }
 }
}
  `

  const codeout =`
Hello World !
  ` 

   const code1 =`
using System;
namespace MyProgram
{
 class Program
 {
     static void Main(string[] args)
     {
      Console.WriteLine("Sports:");
      Console.WriteLine("1. Football");
      Console.WriteLine("2. Badminton");
      Console.WriteLine("3. Tennis");
      Console.WriteLine("4. Cricket");
      Console.WriteLine("Hello, World! program in JavaScript:");
     }
 }
}
   `
const codeout1 =`
sports 
  1, football
  2, badminton
  3, tennis 
  4, cricket
hello world program in Javascript 
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
 
 <title>Master the Art of C# First Programming: A Beginner's Tutorial Guide by CodeExampler</title>
 <meta name="description" content="C# First Programming tutorial for beginners.First Programming in C# Inside text editor when we create a c# project so after the name of file name use extension and .cs is the extensive use for c#. CodeExampler provides Multiple Programming Examples for Beginners,CodeExampler provides Free Online Tutorials for beginners" />
 <meta name="keywords" content="codeexampler,programming language,tutorial for begineers,C# First Programming,c# First Programming for,c sharp First Programming,c# First Programming for loop,end for loop c#,c# exit for loop,First Programming in c#" />
 <link rel="canonical" href="https://www.codeexampler.com/csharp-first-program" />
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
                        <button onClick={() => handlePreviousAndNext('previous')} className='hidden lg:flex  text-lg gap-1 text-[#9EB2D2] no-underline '>
                            {/* <BsFillArrowLeftCircleFill className='text-4xl mt-1'></BsFillArrowLeftCircleFill> <span className='mt-2'>Previous</span> */}

                        </button>
                        <h1 className='mt-8 font-semibold lg:mt-0 text-3xl  no-underline text-[#01B6FF] capitalize'>{window.location.pathname.replace('/', '').replaceAll('-', ' ')}</h1>
                        <a href='/csharp-comments' className='hidden lg:flex text-lg gap-1 text-[#9EB2D2] no-underline '><span className='mt-2'>Next</span><BsFillArrowRightCircleFill className='text-4xl mt-1'></BsFillArrowRightCircleFill></a>

                        <div className='flex lg:hidden gap-2 mt-3 lg:mt-0'>
                            {/* <BsFillArrowLeftCircleFill onClick={() => handlePreviousAndNext('previous')} className='text-4xl text-gray-500'></BsFillArrowLeftCircleFill> */}
                            <a href="/csharp-comments">

                                <BsFillArrowRightCircleFill className='text-4xl text-gray-500'></BsFillArrowRightCircleFill>
                            </a>
                        </div>
                    </div>
                    <div className='space-y-3'>
                    <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Steps of program in C#:</h1>

<div className='text-[#9EB2D2]'>
       
       <p>
  
       1. Inside text editor when we create a c# project so after the name of file name use extension and .cs is the extensive use for c# <br />
2. A namespace is a logical container of types and the main purpose is to group the items.<br />
3. After using open curly braces .this open curly braces means They signify that the program is starting and you put all code inside this curly braces<br />
4. The text editor automatically creates a class. if your project name is the first program.cs with an extension so by default class name is the first program. And class is also a container means we can store a bunch of code<br />
5. Inside class again use curly braces<br />
6. Print this code (static void main(string [] args)) this is also a container .this container uses the main() functions so this means code executed by the main function.<br />
7. If you type any code Inside the open curly braces is executed by a computer but inside the main method<br />
       </p>
      
  </div>




  <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Console.WriteLine("Hello World");</h1>

<div className='text-[#9EB2D2]'>

<p>

8. Console represents the input, output or error <br />
9. WriteLine means give the output<br />
10. Console. WriteLine -means is that output the result in the console<br />
11. Console.ReadLine method and is waiting for you to type something<br />
12. And after close all curly braces and program run but Mainly Learn c# for loop Statement learn c# for loop Statement with interview Question<br />
</p>

</div>



<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
<p className='text-lg font-semibold text-[#01B6FF]'>Q-Write the Hello world program in C# Example ?</p>
</div>

</div>
</div>
  <div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditorFiled code={code} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
    <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                   <p className='font-bold whitespace-pre-wrap '>
              {codeout} </p>
    </div>




<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
<p className='text-lg font-semibold text-[#01B6FF]'>Q-Write the Basic Example of Csharp Program ?</p>
</div>

</div>
</div>
  <div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditorFiled code={code1} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
    <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                   <p className='font-bold whitespace-pre-wrap '>
              {codeout1} </p>
    </div>




</div>

</div>

</main>
</div>
);
};

export default CSharpFirstProgram;