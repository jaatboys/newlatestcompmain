import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet  from "react-helmet";
import JvsPNavBar from '../JavaVsPyNav';
import JavaVsPythonBar from '../../../sidebars/JavaVsPythonBar';
import CodeEditorFiled from '../../../CodeEditorFiled/CodeEditorFiled';
const JavaVsPythonBasic = () => {
 const code1 =`
Access modifier class className
{
body
}
 `
 const code2 =`
body
 `
 const code3 =`
public class Basic_example// class is a keyword
{
public static void main(String[] args)
{
System.out.println("This is the java simple program");
}
}
 `
 const codeout3 =`
This is the java simple program
 `
 const code4 =`
print("hello codeExampler");
 `
 const codeout4 =`
hello codeExampler
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
  //previous and next 



  return (
    <div className=' bg-[#1E2736] text-[#9EB2D2] min-h-screen font-Poppins'>
<JvsPNavBar/>
<Helmet>
        <title>
          Difference Between Java and Python Basic tutorial For Beginners
        </title>
        <meta
          name='description'
          content='Difference Between Java and Python Basic tutorial for beginners.CodeExampler provides Multiple Programming Examples for Beginners,CodeExampler provides Free Online Tutorials for beginners and  questions of all technology like java tutorial, python tutorial,python tutorial for beginners in deeply knowledge With Deeply'
        />
        <meta
          name='keywords'
          content='codeexampler,programming language,Basic,tutorial for begineers,Difference Between Java and Python,Difference between program and code,java tutorial for begineers,python tutorial for begineers,C# tutorial for begineers,code,exampler,which online website to learn code,Difference Between Java and python tutorial,code,exampler,java vs python basic,java vs Csharp(C#),basic'
        />
        <link
          rel='canonical'
          href='https://www.codeexampler.com/java-vs-python-basic'
        />
      </Helmet>

    <main className='max-w-[1440px] mx-auto flex gap-14 justify-between relative py-3 px-4'>
         {/* Python bur component   */}
         <JavaVsPythonBar ListActioveMobile={ListActioveMobile} setListActiveMobile={setListActiveMobile}></JavaVsPythonBar>

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
                 
             <h1 className='text-[#01B6FF] mt-3 lg:text-xl'>Java Basic Programme Steps</h1>



            <div className='text-[#9EB2D2]'>
                           
                           <p>
                      
                           1, Firstly the name of the source file should be an: basis_example.java <br />
2, The Java compiler requires that the source file use. Java filename extension.<br />
3, After going inside the program<br />
4, Write a class keyword to declare a new class<br />
5, Basis_example is an identifier and also this is the name of the class<br />
6, Inside this class we create a body between the opening curly braces( {"{ ) and close by curly braces( }"} ).<br />
7, This is a very important line in the java program<br />
                           </p>
                          
            </div>


            <p className='font-bold'>Public static void main(string args[])</p>



            <div className='text-[#9EB2D2]'>
                           
                           <p>
                      
                           8, The public is access –modifier keyword. The public allows the program to access the visibility of class members. <br />
9, Static is also a keyword .static keyword by the use of JVM call directly main () method without creating any object means no need to create an object<br />
10, Void this is also a keyword and role of the void is that compile the main() without return a value<br />
                           </p>
                          
            </div>




            <p className='font-bold'>Main()</p>



            <div className='text-[#9EB2D2]'>
                           
                           <p>
                      
                           *This is a pre-defined method. <br />
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

            <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                <div className=' flex gap-2 pl-7 items-center'>
                  <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
                  <div className='mx-1'>
                    <p className='text-xs smm:text-lg text-[#01B6FF]'>Java syntax Example</p>
                  </div>

                </div>
            </div>
            <div className='bg-[#1f3040] rounded-b-xl'>
                            <CodeEditorFiled code={code1} />
            </div>



             <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Python syntax</h1>

            <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                <div className=' flex gap-2 pl-7 items-center'>
                  <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
                  <div className='mx-1'>
                    <p className='text-xs smm:text-lg text-[#01B6FF]'>Python syntax Example</p>
                  </div>

                </div>
            </div>
            <div className='bg-[#1f3040] rounded-b-xl'>
                            <CodeEditorFiled code={code2} />
            </div>



             <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Java Basic Example</h1>

            <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                <div className=' flex gap-2 pl-7 items-center'>
                  <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
                  <div className='mx-1'>
                    <p className='text-xs smm:text-lg text-[#01B6FF]'>Java Basic Example</p>
                  </div>

                </div>
            </div>
            <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code3} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout3}
              </p>
            </div>



             <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Python Basic Example</h1>

            <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                <div className=' flex gap-2 pl-7 items-center'>
                  <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
                  <div className='mx-1'>
                    <p className='text-xs smm:text-lg text-[#01B6FF]'>Python Simple String example</p>
                  </div>

                </div>
            </div>
            <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code4} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout4}
              </p>
            </div>



             </div>

         </div>

     </main>
 </div>
  )
}

export default JavaVsPythonBasic
