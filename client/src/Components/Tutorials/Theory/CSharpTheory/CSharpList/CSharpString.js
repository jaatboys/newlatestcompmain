import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet from "react-helmet";
import CsharpNavBar from '../CsharpNav';
import CodeEditorFiled from '../../../CodeEditorFiled/CodeEditorFiled';
import CsharpBar from '../../../sidebars/CsharpBar';

const CSharpString = () => {

  const code1 = `
using System;
namespace Variable
{
 class Program
{
static void Main (string [] args)
{
String a = "ram"; 
String b = "Lakshman"; 
 
 Or
 
String a, b;
a = "ram"; 
b = "Lakshman"; 
  Console.WriteLine (a + " " + b); 
}
}
}
  `
  const codeout1 = `
ram Lakshman
  `
  const code2 = `
String a = "code exampler"; 
Console.WriteLine (a.ToUpper()); 
  `
  const codeout2 = `
CODE EXAMPLER
  `
  const code3 = `
String a = "CODE EXAMPLER"; 
Console.WriteLine (a.ToLower());
  `
  const codeout3 = `
  code exampler 
  `
  const code4 = `
String a = " CODE EXAMPLER"; 
Console.WriteLine (a.Contains ("EXAMPLER")); 
Console.WriteLine (a.Contains ("exampler ")); 
  `
  const codeout4 = `
True
False
  `
  const code5 = `
String a = " Code Exampler"; 
Console.WriteLine ("The String length is : "+ a.Length); 
  `
  const codeout5 = `
The String length is : 13 
  `
  const code6 = `
String a = " code exampler"; 
Console.WriteLine (a[2]); 
  `
  const codeout6 = `
o
  `
  const code7 = `
String a = " code exampler"; 
Console.WriteLine (a.IndexOf("exampler")); 
  `
  const codeout7 = `
6
  `
  const code8 = `
String a = " code exampler"; 
Console.WriteLine (a.Substring(5)); 
  `
  const codeout8 = `
exampler
  `
  const code9 = `
String a = " code exampler"; 
Console.WriteLine (a.Substring(2, 8)); 
  `
  const codeout9 = `
ode exam
  `
  const code10 = `
String a = " 20 "; 
String b = " CodeExampler "; 
String c = a + b; 
Console.WriteLine (c); 
  `
  const codeout10 = `
20 CodeExampler
  `
  const code11 = `
String a = " 10 "; 
Console.WriteLine (a); 
  `
  const codeout11 = `
10
  `
  const code12 = `
int a = Convert.ToInt32 ("20"); 
Console.WriteLine (a); 
  `
  const codeout12 = `
20
  `
  const code13 = `
Console.WriteLine ("input a no"); 
Int x = Console.ReadLine(); 
Console.WriteLine (x); 
  `
  const codeout13 = `
Error
  `
  const code14 = `
Console.WriteLine ("input a no"); 
int x = Convert.ToInt32(Console.ReadLine()); 
Console.WriteLine (x); 
  `
  const codeout14 = `
input a no
4
  `
  const codeans14 = `
4
 `

  const code15 = `
Console.WriteLine ("input a no"); 
double x = Convert.ToDouble(Console.ReadLine()); 
Console.WriteLine (x); 
  `
  const codeout15 = `
input a no
4.5
  `

  const codeans15 = `
 4.5
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
 
 <title>Master the Art of C# String: A Beginner's Tutorial Guide by CodeExampler</title>
 <meta name="description" content="C# String tutorial for beginners.String in C# is a collection of similar type of data and stored in manually consecutively under one name CodeExampler provides Multiple Programming Examples for Beginners,CodeExampler provides Free Online Tutorials for beginners" />
 <meta name="keywords" content="codeexampler,programming language,tutorial for begineers,C# String,c# String for,c sharp String" />
 <link rel="canonical" href="https://www.codeexampler.com/csharp-string" />
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
                      
                           1, String in C# is the name of a memory location in which we can store the text <br />
2, The text of string in Csharp can be changed <br />
3, Text or character enclosed by double quotes <br />
4, Create a variable of string type <br />
                           </p>
                          
                      </div>

                      <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                <div className=' flex gap-2 pl-7 items-center'>
                  <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
                  <div className='mx-1'>
                    <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a Program and print String Name in C# String example?</p>
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




<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>C# String Uppercase and Lowercase method</h1>



<p className='font-bold'>ToUpper()-</p>

<div className='text-[#9EB2D2]'>
                           
     <p>

     uppercase Method use to convert a string into an uppercase string
     </p>
    
</div>



<div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                <div className=' flex gap-2 pl-7 items-center'>
                  <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
                  <div className='mx-1'>
                    <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a Program and print Uppercase in C# Example?</p>
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





<p className='font-bold'>ToLower()-</p>

<div className='text-[#9EB2D2]'>
                           
     <p>

     Lowercase Method use to convert a string into a lowercase string
     </p>
    
</div>



<div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                <div className=' flex gap-2 pl-7 items-center'>
                  <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
                  <div className='mx-1'>
                    <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a Program and print Lowercase in C# Example?</p>
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




<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>C# String Contains() Method in a string:</h1>

<div className='text-[#9EB2D2]'>
                           
     <p>

     Contains () method is used to check text means substring inside a string type variable and this contains() method give output like: Boolean value
     </p>
    
</div>



<div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                <div className=' flex gap-2 pl-7 items-center'>
                  <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
                  <div className='mx-1'>
                    <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a Program and print String Contains in C# Example?</p>
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



<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Csharp(C#) string length:</h1>

<div className='text-[#9EB2D2]'>
                           
     <p>

     c# string length to check the length of the string means to return the character of a string in the form of numbers
     </p>
    
</div>



<div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                <div className=' flex gap-2 pl-7 items-center'>
                  <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
                  <div className='mx-1'>
                    <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a Program and print in C# String length Example?</p>
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



<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Find a C# String character:</h1>
<div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                <div className=' flex gap-2 pl-7 items-center'>
                  <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
                  <div className='mx-1'>
                    <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a Program and print in C# string character?</p>
                  </div>

                </div>
</div>
<div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code6} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
                        <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                                       <p className='font-bold whitespace-pre-wrap '>
              {codeout6} </p>
                        </div>




<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Check character by CSharp string index</h1>


<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>CSharp string indexOf():</h1>

<div className='text-[#9EB2D2]'>
                           
     <p>

     CSharp string indexOf() method use to check start index position
     </p>
    
</div>


<div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                <div className=' flex gap-2 pl-7 items-center'>
                  <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
                  <div className='mx-1'>
                    <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a Program and print in Csharp string indexof()?</p>
                  </div>

                </div>
</div>
<div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code7} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
                        <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                                       <p className='font-bold whitespace-pre-wrap '>
              {codeout7} </p>
                        </div>



<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>C# Substring</h1>
<div className='text-[#9EB2D2]'>
                           
     <p>

     Return a substring from this instance.
     </p>
    
</div>

<div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                <div className=' flex gap-2 pl-7 items-center'>
                  <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
                  <div className='mx-1'>
                    <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a Program and print in C# Substring Example?</p>
                  </div>

                </div>
</div>
<div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code8} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
                        <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                                       <p className='font-bold whitespace-pre-wrap '>
              {codeout8} </p>
                        </div>




<div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                <div className=' flex gap-2 pl-7 items-center'>
                  <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
                  <div className='mx-1'>
                    <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a Program and print in C# Substring Example?</p>
                  </div>

                </div>
</div>
<div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code9} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
                        <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                                       <p className='font-bold whitespace-pre-wrap '>
              {codeout9} </p>
                        </div>




<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Add a string with integer:</h1>
<div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                <div className=' flex gap-2 pl-7 items-center'>
                  <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
                  <div className='mx-1'>
                    <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a Program and print in String format in C#?</p>
                  </div>

                </div>
</div>
<div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code10} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
                        <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                                       <p className='font-bold whitespace-pre-wrap '>
              {codeout10} </p>
                        </div>






<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Convert C# string to int:</h1>


<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>CSharp string to int topic is very important</h1>
<div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                <div className=' flex gap-2 pl-7 items-center'>
                  <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
                  <div className='mx-1'>
                    <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a Program and print and Simple String format in C#?</p>
                  </div>

                </div>
</div>
<div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code11} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
                        <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                                       <p className='font-bold whitespace-pre-wrap '>
              {codeout11} </p>
                        </div>


<p className='font-bold'>But when you Convert c# string to int:</p>
<div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                <div className=' flex gap-2 pl-7 items-center'>
                  <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
                  <div className='mx-1'>
                    <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a Program and Convert C# string to int?</p>
                  </div>

                </div>
</div>
<div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code12} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
                        <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                                       <p className='font-bold whitespace-pre-wrap '>
              {codeout12}</p>
                        </div>


<div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                <div className=' flex gap-2 pl-7 items-center'>
                  <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
                  <div className='mx-1'>
                    <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a Program and print User Input an Int Value in Csharp Example?</p>
                  </div>

                </div>
</div>
<div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code13} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
                        <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                                       <p className='font-bold whitespace-pre-wrap '>
              {codeout13} </p>
                        </div>




<div className='text-[#9EB2D2]'>
                           
     <p>

     when you compile this program Show error because of Console.ReadLine(); cannot implicitly convert type ‘string to ‘int’ and also gives a string value not int so we convert this into an integer
     </p>
    
</div>




<div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                <div className=' flex gap-2 pl-7 items-center'>
                  <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
                  <div className='mx-1'>
                    <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a Program and print User input an integer number in Csharp Example?</p>
                  </div>

                </div>
</div>
<div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code14} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Input:</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout14}
              </p>
            </div>
                        <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeans14}
              </p>
            </div>


<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>when you convert string to double:</h1>
<div className='text-[#9EB2D2]'>
                           
     <p>

     If you print decimal no so you use
     </p>
    
</div>
<div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                <div className=' flex gap-2 pl-7 items-center'>
                  <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
                  <div className='mx-1'>
                    <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a Program and print User input an double number in C# Example?</p>
                  </div>

                </div>
</div>
<div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code15} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Input:</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout15}
              </p>
            </div>
                        <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeans15}
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

export default CSharpString;