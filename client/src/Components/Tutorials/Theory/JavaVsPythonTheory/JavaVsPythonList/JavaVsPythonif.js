import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet  from "react-helmet";
import JvsPNavBar from '../JavaVsPyNav';
import JavaVsPythonBar from '../../../sidebars/JavaVsPythonBar';
import CodeEditorFiled from '../../../CodeEditorFiled/CodeEditorFiled';
const JavaVsPythonIf = () => {
  const code1 = `
if(condition)
{
body
}
  `
  const code2 = `
If (condition)
Statement;
  `
  const code3 = `
public class if_example // class is a keyword
{
public static void main(String[] args)
{
int a=500;
if(a>100)
System.out.println("a is greater");
}
}
  `
  const codeout3 = `
a is greater
  `
  const code4 = `
a=500;
if(a>100):
print("a is greater")
  `
  const codeout4 = `
a is greater
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
 
 <title>Difference Between Java and Python if tutorial For Beginners</title>
<meta name="description" content="Difference Between Java and Python if tutorial for beginners.CodeExampler provides Multiple Programming Examples for Beginners,CodeExampler provides Free Online Tutorials for beginners and  questions of all technology like java tutorial, python tutorial,python tutorial for beginners in deeply knowledge With Deeply" />
<meta name="keywords" content="codeexampler,programming language,if,tutorial for begineers,Difference Between Java and Python,Difference between program and code,java tutorial for begineers,python tutorial for begineers,C# tutorial for begineers,code,exampler,which online website to learn code,Difference Between Java and python tutorial,code,exampler,java vs python if,java vs Csharp(C#),if"/>
<link rel="canonical" href="https://www.codeexampler.com/java-vs-python-if" />
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
                
                <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Syntax of Java if statement:</h1>
                <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                <div className=' flex gap-2 pl-7 items-center'>
                  <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
                  <div className='mx-1'>
                    <p className='text-xs smm:text-lg text-[#01B6FF]'>Java if statement syntax</p>
                  </div>

                </div>
</div>
<div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code1} />
</div>



<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Python if statement</h1>
                <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                <div className=' flex gap-2 pl-7 items-center'>
                  <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
                  <div className='mx-1'>
                    <p className='text-xs smm:text-lg text-[#01B6FF]'>Python if statement syntax</p>
                  </div>

                </div>
</div>
<div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code2} />
</div>



<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Difference Between Java and Python Example</h1>


 <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Java If Example</h1>



<div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                <div className=' flex gap-2 pl-7 items-center'>
                  <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
                  <div className='mx-1'>
                    <p className='text-xs smm:text-lg text-[#01B6FF]'>Q- Write a program to input a number and check this number is more than or equal to 100 in Java if statement?</p>
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

 <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Python If Example</h1>
<div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                <div className=' flex gap-2 pl-7 items-center'>
                  <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
                  <div className='mx-1'>
                    <p className='text-xs smm:text-lg text-[#01B6FF]'>Q-Write a program to input a number and check this number is more than or equal to 100 in Python if statement?</p>
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

            <div className='flex justify-between mx-6 sm:mx-12 mt-3 mb-3'>

<button onClick={() => handlePreviousAndNext('previous')} className=' flex  text-lg gap-1 text-[#9EB2D2] no-underline '><BsFillArrowLeftCircleFill className='text-4xl mt-1'></BsFillArrowLeftCircleFill> <span className='mt-2'>Previous</span></button>
<button onClick={() => handlePreviousAndNext('next')} className=' flex text-lg gap-1 text-[#9EB2D2] no-underline '><span className='mt-2'>Next</span><BsFillArrowRightCircleFill className='text-4xl mt-1'></BsFillArrowRightCircleFill></button>

</div>


             </div>

         </div>

     </main>
 </div>
  )
}

export default JavaVsPythonIf
