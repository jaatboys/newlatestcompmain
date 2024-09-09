import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet  from "react-helmet";
import CsharpNavBar from '../CsharpNav';
import CodeEditorFiled from '../../../CodeEditorFiled/CodeEditorFiled';
import CsharpBar from '../../../sidebars/CsharpBar';

const CSharpDatatypes = () => {

    const code1 = `
int a = 10; 
float num = 1.2348f ;
double a = 20.8456456;
boolean b = true;/false
byte a = 10;
Short a = 10000;
Character h = 'j';
Long h = 10525252272544l;
    `
    const code2 = `
int a = 244565; 
Console.WriteLine(a);
    `    
     const codeout2 = `
244565 
    `
    const code3 = `
short a = 32765; 
Console.WriteLine(a);
    `
    const codeout3 = `
32765
    `
    const code4 = `
using System;
namespace MyProgram
{
 class Program
 {
 static void Main(string[] args)
 {
     char a = 'h';
     char b = '\\u0058'; // Unicode value for 'X'
     Console.WriteLine(a);
     Console.WriteLine(b);
 }
 }
}
    `
    const codeout4 = `
h
x
    `
    const code5 = `
using System;
namespace MyProgram
{
 class Program
 {
  static void Main(string[] args)
  {
      char a, b;
      a = 'x';
      b = (char)90;
      Console.WriteLine(a);
      Console.WriteLine(b);
  }
 }
}
    `
    const codeout5 = `
x
z
 `
const code6 = `
char a;
a = 'x';
Console.WriteLine(a); 
a ++ ;// increment a
Console .WriteLine(a);
 `
const codeout6 = `
x
y
 `
const code7 = `
float number = 40.56f;
Console.WriteLine(number); 
    `
    const codeout7 = `
40.56
    `
    const code8 = `
double a = 12.426d; 
Or 
double a; 
a = 12.426d; 
Console .WriteLine (a);
    `
    const codeout8 = `
12.426
    `
    const code9 = `
int a = 4; 
int b = 8; 
Boolean c = a < b; 
Console .WriteLine (b); 
    `
    const codeout9 = `
true
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
 
 <title>Master the Art of C# data type: A Beginner's Tutorial Guide by CodeExampler</title>
 <meta name="description" content="C# data type tutorial for beginners.data type in C# is a int,float,double,short,ushort,bool,long,char etc. Multiple Programming Examples for Beginners,CodeExampler provides Free Online Tutorials for beginners" />
 <meta name="keywords" content="codeexampler,programming language,tutorial for begineers,C# data type,c# data type for,c# continue,data type foreach c#,c# foreach data type" />
 <link rel="canonical" href="https://www.codeexampler.com/csharp-datatypes" />
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
                    <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>There are three types of c# datatypes:</h1>





<div className='text-[#9EB2D2] font-bold'>
       
       <p>
  
       1, Value Data Type <br />
2, Pointer Data Type<br />
3, Reference Data Type<br />
       </p>
      
  </div>




  <div className='text-[#9EB2D2] font-bold'>
       
       <p>
  
      <b> 1, Value Data Type: </b> int,float,double,short,ushort,bool,long,char etc. <br />
<b>2, pointer Data Type: </b>pointer<br />
<b>3, Reference Data type: </b> object,class,interface,etc.<br />
       </p>
      
  </div>



  <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>There are 8 types of primitive data types in c#</h1>



  <div className='text-[#9EB2D2] font-bold'>
       
       <p>
  
       1, Int <br />
2, float<br />
3, double<br />
4, Boolean<br />
5, byte<br />
6, Short<br />
7, Char<br />
8, Long<br />
       </p>
      
  </div>




  <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>c# Datatypes Example:</h1>


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



<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>1, Integers c# data type -</h1>



<div className='text-[#9EB2D2]'>

<p>

In Integers c# data type this group includes int, long, short and byte and this is a whole value number integers include positive, negative and all type of signs but without decimal
A, In Integers c# data type: <br />
we can store only numeric value and int data types store from -2147483648 to 2147483647.
</p>

</div>



<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Integers c# data types Example :</h1>


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
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
    <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                   <p className='font-bold whitespace-pre-wrap '>
              {codeout2} </p>
    </div>


<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>B, In long C# data type:</h1>



<div className='text-[#9EB2D2]'>

<p>

a long data type is used when int can’t handle large value so the long data type in c# store value start from -9223372036854775808 and on 9223372036854775807 and you don’t store the large value inside long data type if you type long data type so you also write capital l like”l” after number end.
</p>

</div>


<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>C, In Short, c# data type:</h1>



<div className='text-[#9EB2D2]'>

<p>

Short c# data type is used when creates a short integer and short data type store hole number from -32768 to 32767 And short is used when you don’t need the large range number like int.
</p>

</div>

<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Short c# basic data types Example :</h1>


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
<CodeEditorFiled code={code3} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
    <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                   <p className='font-bold whitespace-pre-wrap '>
              {codeout3} </p>
    </div>


<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>D, In Byte c# data type:</h1>



<div className='text-[#9EB2D2]'>

<p>

Byte c# data type is used when The smallest integer type is a byte in integer .byte can store numbers from -128 to 127     </p>

</div>




<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>2, Characters c# data type</h1>



<div className='text-[#9EB2D2]'>

<p>

a, Char c# data type is used to hold a single character, Unicode character <br />
b, Char data type enclosed by a single quotes and Learn c# for loop Statement with lot of Examples.     </p>

</div>



<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Char c# data types Example :</h1>

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
<CodeEditorFiled code={code4} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
    <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                   <p className='font-bold whitespace-pre-wrap '>
              {codeout4} 
              </p>
    </div>


<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Char c# data types Example :</h1>


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
<CodeEditorFiled code={code5} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
    <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                   <p className='font-bold whitespace-pre-wrap '>
              {codeout5} </p>
    </div>



<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>If you increment character in c# basic data types:</h1>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Char c# data types Example :</h1>

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
<CodeEditorFiled code={code6} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
    <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                   <p className='font-bold whitespace-pre-wrap '>
              {codeout6} </p>
    </div>


<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>3, Floating-point c# data type</h1>


<div className='text-[#9EB2D2]'>
       
<p>

1, In Floating point data types groups, includes float and double and this show number with a fraction. <br />
2, These floating-point numbers is a real number
</p>

</div>




<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Floating-point are 2 Data types:</h1>


<div className='text-[#9EB2D2]'>
       
<p>

1, float <br />
2, double<br />
*double bits is 64<br />
*float bits is 32<br />
</p>

</div>



<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>A, In float c# data type:</h1>


<div className='text-[#9EB2D2]'>
       
<p>

1, float specifies a single-precision value means uses 32bits of storage. <br />
2, this float is slower than double precision but it takes half as much space as double-precision <br />
3, the float stores a fractional number from 3.4e−038 to 3.4e+038. <br />
4, float use for representing dollar and cents <br />
5, you don’t store float value inside float data type if you type float data type so you also write small f like "f" after number end. <br />
</p>

</div>



<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Float c# data types Example:</h1>

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
<CodeEditorFiled code={code7} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
    <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                   <p className='font-bold whitespace-pre-wrap '>
              {codeout7} </p>
    </div>



<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>B, In Double c# data type:</h1>


<div className='text-[#9EB2D2]'>
       
<p>

1, double specifies a double-precision value means uses 64 bits of storage. <br />
2, double precision is faster than single precision<br />
3, the double stores' fractional number 1.7e−308 to 1.7e+308<br />
4, you don’t store the double value inside double data type if you type double data type so you also write small d like "d" after number end.<br />
</p>

</div>




<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Double c# data types Example :</h1>

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
<CodeEditorFiled code={code8} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
    <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                   <p className='font-bold whitespace-pre-wrap '>
              {codeout8} </p>
    </div>



<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>4, Bool c# data type:</h1>


<div className='text-[#9EB2D2]'>
       
<p>

In Bool c# data type: In the Boolean c# data type group include Boolean and this shows only true or false values and using the reserved word true and false.
</p>

</div>



<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Bool c# data types Example :</h1>

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
<CodeEditorFiled code={code9} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
    <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                   <p className='font-bold whitespace-pre-wrap '>
              {codeout9} </p>
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

export default CSharpDatatypes;