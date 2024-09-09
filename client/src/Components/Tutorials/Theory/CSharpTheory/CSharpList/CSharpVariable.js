import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet from "react-helmet";
import CsharpNavBar from '../CsharpNav';
import CodeEditorFiled from '../../../CodeEditorFiled/CodeEditorFiled';
import CsharpBar from '../../../sidebars/CsharpBar';

const CSharpVariable = () => {

    const code =`
Type Variable Name;
int is a Type
a,b and ab are a Variable Name
  `
  const code1 =`
Type Variable Name;
int roll_no; //this declare a variable
float percentage; //this declare a variable
roll_no = 40; //assigns a variable a value
precentege = 40.80;  //assigns a variable a value
  `
  const code2 =`
int abc; //this declare a variable
int abc; //(abc and a_bc are a variable)
int a, b, x, z; //(a,b,x,z) are a variable
byte a1 = 40; // initialize a.
double a2 = 40.80; // like a float
char a3 = "ram"; // a variable gain value (ram)
  `
  const code3 =`
using System;
namespace Variable
 {
class Variables
{
  static void Main (string [] args)
{
  int ab,cd,ef;
  ab = 12; cd = 24; ef = 36; 
  Console.WriteLine (ab + cd + ef); 
      }
   }
}
 `
const codeout3 =`
72
  `

const code4 =`
int a = 10; // declare and initialize variable 'a' to 10
a += 40; // add 40 to the value of 'a', equivalent to 'a = a + 40'
a = a + 20; // add 20 to the new value of 'a'

Console.WriteLine(a); // output the final value of 'a'
  `
const codeout4 =`
70
  `

const code5 =`
int a;
a = 40;
Or
int a = 40;
Console.WriteLine(a);
  `
const codeout5 =`
40
  `

const code6 =`
String a ="Ram";
String b ="Lakshman";
Or
String a ,b;
a ="Ram";
b ="Lakshman";
Console.WriteLine(a+" "+b);
  `
const codeout6 =`
Ram Lakshman
  `
const code7 =`
using System;

namespace HelloName
{
  class Program
  {
    static void Main(string[] args)
    {
      String a,b,c;
     a ="Ram";
     b ="Lakshman";
     c ="My Name is CodeExampler 160208";
     Console.WriteLine (a +" " +b +" " +c); 
    }
  }
}
  `
const codeout7 =`
Ram Lakshman My Name is CodeExampler 160208
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
 
 <title>Master the Art of C# variable: A Beginner's Tutorial Guide by CodeExampler</title>
 <meta name="description" content="C# variable tutorial for beginners.variable in C# is a collection of similar type of data and stored in manually consecutively under one name CodeExampler provides Multiple Programming Examples for Beginners,CodeExampler provides Free Online Tutorials for beginners" />
 <meta name="keywords" content="codeexampler,programming language,tutorial for begineers,C# variable,c# variable for,c sharp variable" />
 <link rel="canonical" href="https://www.codeexampler.com/csharp-variable" />
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
                      
                           1, Variable is the name of a memory location in which we can store the value <br />
2, The variable value can be changed<br />
3, A variable is defined by the combination of an identifier, data types, and an initializer.<br />
4, The first character in the variable name must be an alphabet, underscore, a digit or, a dollar sign.<br />
5, All variables have a scope<br />
6, The identifier is the name of the variable<br />
7, Commas or blanks are not used inside a variable name<br />
                           </p>
                          
                      </div>


                      <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>C# Variable Declaration Syntax:</h1>


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
  <CodeEditorFiled code={code} />
</div>






<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>C# variable declaration syntax examples:</h1>


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




<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Declare a variable in Csharp(C#) Rules:</h1>

     
<div className='text-[#9EB2D2]'>
                           
                           <p>
                      
                           The variable is declared in various types:
                           </p>
                          
                      </div>


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
  <CodeEditorFiled code={code2} />
</div>




<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Addition of variables examples:</h1>


<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
<p className='text-lg font-semibold text-[#01B6FF]'>Q-Declare 3 Variables and Add 3 variables in C#?</p>
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
<p className='text-lg font-semibold text-[#01B6FF]'>Q-Variable increment values in two times?</p>
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





<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
<p className='text-lg font-semibold text-[#01B6FF]'>Q-create a variable and store a no inside this variable and print output?</p>
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
<p className='text-lg font-semibold text-[#01B6FF]'>Q-create a string variable and store a no inside string type variable and print output?</p>
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


<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Another string type example</h1>

<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
<p className='text-lg font-semibold text-[#01B6FF]'>Q-create a string variable and store a no inside string data type variable and print output?</p>
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



<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Constant:</h1>

<div className='text-[#9EB2D2]'>
                           
     <p>

     Constant is use when if you store a value inside a variable but after you can’t overwrite existing value so on that place use constant.
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

export default CSharpVariable;