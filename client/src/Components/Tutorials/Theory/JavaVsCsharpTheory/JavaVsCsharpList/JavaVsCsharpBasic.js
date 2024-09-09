import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet  from "react-helmet";
import JvsCsNavBar from '../JavaVsCsNav';
import JavaVsCsharpBar from '../../../sidebars/JavaVsCsharpBar';
import { Link } from 'react-router-dom';
import CodeEditorFiled from '../../../CodeEditorFiled/CodeEditorFiled';

const JavaVsCsharpBasic = () => { 


    const code1 = `
Access modifier class className
  {
body1
  }
    `
      const code2 = `
namespace syntax
  {
Access modifier class className
  {
  body1
  }
  }
      `
      const code3 = `
public class Basic_example// class is a keyword
  {
  public static void main(String[] args)
  {
  System.out.println("This is the java simple program");
  }
  }
      `
      const codeout3 = `
This is the java simple program
      `
      const code4 = `
namespace first
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
      const codeout4 = `
Hello World!
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
<JvsCsNavBar/>
<Helmet>

<title>Difference Between Java and CSharp(C#) Basic tutorial For Beginners</title>
<meta name="description" content="Difference Between Java and Csharp(C#) Basic tutorial for beginners.CodeExampler provides Multiple Programming Examples for Beginners,CodeExampler provides Free Online Tutorials for beginners and  questions of all technology like java tutorial, java tutorial,c# tutorial for beginners in deeply knowledge With Deeply" />
<meta name="keywords" content="codeexampler,programming language,tutorial for begineers,Difference Between Java and Csharp(C#),Difference between program and code,java tutorial for begineers,C# tutorial for begineers,java tutorial for begineers,code,exampler,which online website to learn code,Difference Between Java and C# ,java vs c#,java vs Python,Basic Programming Tutorial For Begineers" />
<link rel="canonical" href="https://www.codeexampler.com/java-vs-csharp-basic" />
</Helmet>

            <main className='max-w-[1440px] mx-auto flex gap-14 justify-between relative py-3 px-4'>
                {/* Python bur component   */}
                <JavaVsCsharpBar ListActioveMobile={ListActioveMobile} setListActiveMobile={setListActiveMobile}></JavaVsCsharpBar>

                <div className='w-full relative '>
                    {/* only mobile mode show */}
                    <button onClick={() => setListActiveMobile(!ListActioveMobile)} className='absolute -top-3 left-0 bg-[#01B6FF] rounded-br-2xl rounded-bl-2xl p-2.5 lg:hidden text-white'>All Topics</button>
                    {/* ----------------- */}
                    <div className='flex justify-between mt-3'>
                        <div className='block lg:hidden'>

                        </div>
                        <button className='hidden lg:flex  text-lg gap-1 text-[#9EB2D2] no-underline '>

                        </button>
                        <h1 className='mt-8 font-semibold lg:mt-0 text-3xl  no-underline text-[#01B6FF] capitalize'>{window.location.pathname.replace('/', '').replaceAll('-', ' ')}</h1>
                        <a href='/java-vs-csharp-if' className='hidden lg:flex text-lg gap-1 text-[#9EB2D2] no-underline '><span className='mt-2'>Next</span><BsFillArrowRightCircleFill className='text-4xl mt-1'></BsFillArrowRightCircleFill></a>
                        <div className='flex lg:hidden gap-2 mt-3 lg:mt-0'>
                            <BsFillArrowLeftCircleFill onClick={() => handlePreviousAndNext('previous')} className='text-4xl text-gray-500'></BsFillArrowLeftCircleFill>
                            <Link to={`/java-vs-csharp-if`}>
                                <BsFillArrowRightCircleFill className='text-4xl text-gray-500'></BsFillArrowRightCircleFill>
                            </Link>
                        </div>
                    </div>
                    <div className='space-y-3'>
                    <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Java Basic Programme Steps</h1>

                 <div className='text-[#9EB2D2]'>
                     <p>

                     1, Firstly the name of the source file should be an: <b> basis_example.java</b> <br />
2, The Java compiler requires that the source file use.Java filename extension.<br />
3, After going inside the program<br />
4, Write a class keyword to declare a new class<br />
5, Basis_example is an identifier and also this is the name of class<br />
6, Inside this class, we create a body between the opening curly braces( {"{ ) and close by curly braces( } "}).<br />
7, This is a very important line in the java program<br />
<b>Public static void main(string args[]) </b><br />
8, The public is access –modifier keyword. The public allows the program to access the visibility{" of class members"}.<br />
9, Static is also a keyword .static keyword by the use of JVM call directly main () method without creating any object means no need to create an object<br />
{"10, Void this is also a keyword and role of the void is that compile the main() without return a value"}
<b>Main() </b><br />
*This is a pre-defined method.<br />
*String is also a class.<br />
*String is used with the main method because the string is immutable and other thing is that all programming process in the form of string<br />
11, Args is an argument<br />
12, In the next line:<br />
13, The system is a predefined class that provides access to the system<br />
14, Out this, is the output stream that is connected to the console<br />
15, We show output by the use of println() method. Println() display the string which is passed to it<br />
                     </p>

                     </div>




                     <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Java syntax</h1>


                     <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Java syntax Example</p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code1} />
</div>



<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Steps of program in Csharp:</h1>

<div className='text-[#9EB2D2]'>
                           
     <p>

     1, Inside text editor when we create a c# project so after the name of file name use extension and .cs is the extensive use for c# <br />
2, A namespace is a logical container of types and the main purpose is to group the items.<br />
3, After using open curly braces .this open curly braces means They signify that the program is starting and you put all code inside this curly braces<br />
4, The text editor automatically creates class .if your project name is the first program.cs with an extension so by default class name is the first program. And class is also a container means we can store a bunch of code<br />
5, Inside the class, again use curly braces<br />
6, Print this code (static void main(string [] args)) this is also a container.this container uses the main() functions so this means code executed by the main function.<br />
7, If you type any code Inside the open curly braces is executed by a computer but inside the main method<br /><br />

<b>Console.WriteLine(“hello world”); </b><br /><br />

8, Console represents the input, output or error <br />
9, WriteLine means give the output<br />
10, Console. WriteLine -means is that output the result in the console<br />
11, Console.ReadLine method and is waiting for you to type something<br />
12, And after close all curly braces and program run<br />
     </p>
    
</div>




<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>C# syntax</h1>


     <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>C# Syntax Example</p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code2} />
</div>




<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Java Example</h1>


<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Basic program in Java example</p>
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




<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>C# Example</h1>



<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Basic program in CSharp example</p>
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


                  </div>

              </div>

          </main>
      </div>

  )
}

export default JavaVsCsharpBasic





