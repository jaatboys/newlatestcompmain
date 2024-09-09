import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet from "react-helmet";
import CsharpNavBar from '../CsharpNav';
import CodeEditorFiled from '../../../CodeEditorFiled/CodeEditorFiled';
import CsharpBar from '../../../sidebars/CsharpBar';

const CSharpSwitch = () => {

    const code1 = `
Switch (variable)
 { 
case 1:
Statement;
case 2:
Statement;
Default :
Statement;
} 
    `
    const code2 = `
using System;
namespace switch_example
{
 class Program
 {
 static void Main(string[] args)
 {
 int month = 3;
 switch (month)
 {
  case 1:
      Console.WriteLine("Jan");
      break;
  case 2:
      Console.WriteLine("Feb");
      break;
  case 3:
      Console.WriteLine("Mar");
      break;
  default:
      Console.WriteLine("Invalid month number");
      break;
 }
 }
 }
}
    `
    const codeout2 = `
march
    `
    const code3 = `
using System;
namespace switchExample
{ 
 class Program
 { 
 static void Main (string[] args)
 { 
 int i = 280;
 switch (i)
 { 
 case 180:
     Console.WriteLine("i value is 180");
     break;
 case 280:
     Console.WriteLine("i value is 280");
     break;
 case 380:
     Console.WriteLine("i value is 380");
     break;
 case 480:
     Console.WriteLine("i value is 480");
     break;
 default:
     Console.WriteLine("default");
     break;
 } 
 } 
 } 
}
    `
    const codeout3 = `
i value is 280
    `
    const code4 = `
using System;
namespace switchs 
{ 
 class Program
 { 
 static void Main(string[] args)
 { 
 char x = 'd';
 switch (x)
 { 
 case 'b':
     Console.WriteLine("switch case b");
     break; 
 case 'd':
     Console.WriteLine("switch case d");
     break;
 case 'f':
     Console.WriteLine("switch case f");
     break;
 case 'h':
     Console.WriteLine("switch case h");
     break;
 default:
     Console.WriteLine("default");
     break;
 } 
 } 
 } 
}
    `
    const codeout4 = `
Switch case d
    `
    const code5 = `
using System;
namespace switchs 
{ 
class Program
{ 
static void Main (string[]args)
{ 
 int i;
 for (i = 1; i <= 5; i++) 
 {
 switch (i)
 { 
     case 1:
         Console.WriteLine("switch case 1");
         break;
     case 2:
         Console.WriteLine("switch case 2");
         break;
     case 3:
         Console.WriteLine("switch case 3");
         break;
     case 4:
         Console.WriteLine("switch case 4");
         break; 
     case 5:
         Console.WriteLine("switch case 5");
         break; 
     case 6:
         Console.WriteLine("switch case 6");
         break;
     default:
         Console.WriteLine("default");
         break;
 } 
 }
} 
} 
} 
    `
    const codeout5 = `
Switch case 1
Switch case 2
Switch case 3
Switch case 4
Switch case 5
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
 
 <title>Master the Art of C# Switch: A Beginner's Tutorial Guide by CodeExampler</title>
 <meta name="description" content="C# Switch tutorial for beginners.Switch in C# is a collection of similar type of data and stored in manually consecutively under one name CodeExampler provides Multiple Programming Examples for Beginners,CodeExampler provides Free Online Tutorials for beginners" />
 <meta name="keywords" content="codeexampler,programming language,tutorial for begineers,C# Switch,c# Switch for,c sharp Switch,c# Switch for loop,end for loop c#,c# exit for loop,exit while loop c#,c# continue,Switch foreach c#,c# foreach Switch" />
 <link rel="canonical" href="https://www.codeexampler.com/csharp-switch" />
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
                    <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Switch statement in c#:</h1>


                    <div className='text-[#9EB2D2]'>
                           
                           <p>
                      
                           This is also used in multiple conditions having different statements like-if else if but it can check only equality of the condition floating point but value can’t be check by the switch.
                           </p>
                          
                      </div>


                      <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>The Syntax for switch statement C#:</h1>

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


<div className='text-[#9EB2D2]'>
                           
                           <p>
                      
                           In this keyword switch inside c programming that will yield an integer value, forex-case1,case2, etc this is an integer constant <br />
if you do not find any match with any of these case statements so on that time default statement is executed<br />
<br />
This program gives output but not what we expected because we did not give the output of case 3 and the default value Switch switch statement:<br />
so if you want to give the only case 2 statement so using switch Switch c# means switch case Switch c# statement<br />
                           </p>
                          
                      </div>




                      <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                <div className=' flex gap-2 pl-7 items-center'>
                  <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
                  <div className='mx-1'>
                    <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program to input a no and print month name and if no is 3 by using switch Switch c#?</p>
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
                    <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program without input use switch case in C#?</p>
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



<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Character Switch case in C#:</h1>

<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
<p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program Character switch case in C#?</p>
</div>

</div>
</div>
<div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code4} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
                        <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                                       <p className='font-bold whitespace-pre-wrap '>
              {codeout4} </p>
                        </div>


<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>use for loop in switch case c#</h1>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Following for loop step In switch case with Switch :</h1>
<div className='text-[#9EB2D2]'>
                           
                           <p>
                      
                           1,i is an int value <br />
2,After start for loop from 1 to 5 and also use I inside switch<br />
3,Start case 1 and check no. if no is the same so print 1 and after the Switch.<br />
4,After the Switch. Increasing the value of loop counter each time when the program segment within the loop has been executed because (i++) is used<br />
5,In this time loop started from 2 by the use of increment.check 2 in case if 2 is found so print 2 and Switch and again start loop<br />
6,When i=6 this is not greater than 5 so loop stop on 5<br />
                           </p>
                          
                      </div>


                      <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
<p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program for loop in switch case in C#?</p>
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

<div className='text-[#9EB2D2]'>
                           
                           <p>
                      
                           If you don't know about forloop in Csharp so check on C# For Loop tutorial For Beginners.
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

export default CSharpSwitch;