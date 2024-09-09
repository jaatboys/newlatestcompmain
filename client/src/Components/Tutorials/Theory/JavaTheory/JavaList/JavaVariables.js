import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet  from "react-helmet";
import JavaNavBar from '../JavaNav';
import JavaBar from '../../../sidebars/JavaBar';
import CodeEditorFiled from '../../../CodeEditorFiled/CodeEditorFiled';
export default function JavaVariables() {
    const code1 = `
Type Variable name;
int is a type
a ,b and a*b is a variable-name
    `
    const code2 = `
Type Variable name:
int Roll_No;//Roll_No declare a Variable
float Percentage;//Percentage declare a Variable
Roll_No=40 ;//assigns value in variable 
Precentege=40.80;//assigns value in variable
    `
    const code3 = `
int abc;// this declare a variable
int abc;//  (abc and a_bc are a variable)
int a,b,x,z;// (a,b,x,z) are a variable
byte a1=40;//initialize a.
double a2=40.80 ;//like a float
Char a3=“ram”;//a variable gain value ( ram )
    `
    const code4 = `
int a,b,c,d;
a=10; b=20; c=30; d=40;
System.out.println(a+b+c+d);
    `
    const codeout4 = `
100
    `
    const code5 = `
int a=10;// a is a Variable 
a+=40; 
a=a+20; 
System.out.println(a);
    `
    const codeout5 = `
70
    `
    const code6 = `
int a;
a=40;

 OR

int a=40; 
System.out.println(a);
    `
    const codeout6 = `
40
    `
    const code7 = ` 
 String a="Ram ";
 String b="Lakshman ";

 OR

 String a,b;
 a="Ram "; 
 b="Lakshman "; 
 System.out.println(a+b);
    `
    const codeout7 = `
 RamLakshman
    `
    const code8 = `
class Ram
{ 
   public static void main(String[] args) 
   { 
    String a ,b ,c;
    a = "Ram ";
    b = "Lakshman ";
    c = "My Name is CodeExampler 160208";
    System.out.println(a+""+b+""+c);
   } 
} 
    `
    const codeout8 = `
Ram Lakshman My name is CodeExampler 160208
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

<JavaNavBar/>
<Helmet>
 
 <title>Master the Art of Java Variables: A Beginner's Tutorial Guide by CodeExampler</title>
<meta name="description" content="Java Variable tutorial for beginners Variables value can be changed,A variables is defined by the combination of an identifier,data types and an initializer." />
<meta name="keywords" content="codeexampler,programming language,tutorial for begineers,java variables,java variable types,java variable declaration,java variable scope,java variable arguments,java variable name,java variable definition
,java variable assignment" />
<link rel="canonical" href="https://www.codeexampler.com/java-variables" />
</Helmet>

            <main className='max-w-[1440px] mx-auto flex gap-14 justify-between relative py-3 px-4'>
                {/* Python bur component   */}
                <JavaBar ListActioveMobile={ListActioveMobile} setListActiveMobile={setListActiveMobile}></JavaBar>

                <div className='w-full relative '>
                    {/* only mobile mode show */}
                    <button onClick={() => setListActiveMobile(!ListActioveMobile)} className='absolute -top-3 left-0 bg-[#01B6FF] rounded-br-2xl rounded-bl-2xl p-2.5 lg:hidden text-white'>All Topics</button>
                    {/* ----------------- */}
                    <div className='flex justify-between mt-3'>
                        <div className='block lg:hidden'>

                        </div>
                        <button className='hidden lg:flex  text-lg gap-1 text-[#9EB2D2] no-underline '>
                            {/* <BsFillArrowLeftCircleFill className='text-4xl mt-1'></BsFillArrowLeftCircleFill> <span className='mt-2'>Previous</span> */}
                        </button>
                        <h1 className='mt-8 font-semibold lg:mt-0 text-3xl  no-underline text-[#01B6FF] capitalize'>{window.location.pathname.replace('/', '').replaceAll('-', ' ')}</h1>
                        <a href='/java-types-of-variables' className='hidden lg:flex text-lg gap-1 text-[#9EB2D2] no-underline '><span className='mt-2'>Next</span><BsFillArrowRightCircleFill className='text-4xl mt-1'></BsFillArrowRightCircleFill></a>
                        <div className='flex lg:hidden gap-2 mt-3 lg:mt-0'>
                            {/* <BsFillArrowLeftCircleFill onClick={() => handlePreviousAndNext('previous')} className='text-4xl text-gray-500'></BsFillArrowLeftCircleFill> */}
                            <a href="/java-types-of-variables">

                                <BsFillArrowRightCircleFill className='text-4xl text-gray-500'></BsFillArrowRightCircleFill>
                            </a>
                        </div>
                    </div>
                    <div className='space-y-3'>
                    <div className='text-[#9EB2D2]'>

<p>

    1, Variable is the name of a memory location in which we can store the value. <br />
    2, The variable value can be change. <br />
    3, A variable is defined by combining an identifier, data types, and an initializer. <br />
    4, The first character in the variable name must be an alphabet, underscore, a digit, or a dollar sign.
    5, All variables have a scope <br />
    6, The identifier is the name of the Variable. <br />
    7, Commas or blanks are not used inside a variable name.
</p>

</div>



<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Java Variable Declaration Syntax :</h1>


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



<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Java variable declaration syntax Rules:</h1>

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




<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>How to Declare a variables in Java?</h1>

<div className='text-[#9EB2D2]'>

<p>

    The Variables are declared in various types:
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
<CodeEditorFiled code={code3} />
</div>


<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Addition of Variables Java Example?</p>
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




            <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Variable increment values in Java?</p>
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
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Create a variable and store a no inside this variable and print output?</p>
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
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Create a string variable and store a no inside string type variable and print output?</p>
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



            <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>
            Q-Create a string variable and store a no inside string data type variable and print output?</p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code8} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout8}
              </p>
            </div>





<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Constant:</h1>

<div className='text-[#9EB2D2]'>

<p>

    Constant is used when you store a value inside a variable, but use Constant after you can’t overwrite the existing deal.
</p>

</div>




</div>

</div>

</main>
</div>
);
}
