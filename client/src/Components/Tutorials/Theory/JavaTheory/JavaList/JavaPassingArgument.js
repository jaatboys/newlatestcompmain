import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet  from "react-helmet";
import JavaNavBar from '../JavaNav';
import JavaBar from '../../../sidebars/JavaBar';
import CodeEditorFiled from '../../../CodeEditorFiled/CodeEditorFiled';
export default function JavaPassingArgument() {
    const code1 = `
class A { 
public static void argument(int a) { // int a is a formal argument
    System.out.println("my no is " + a);
} 
    
public static void main(String[] args) { 
    int n = 20; 
    argument(n); // n is an actual argument
    } 
 }
    `
    const codeout1 = `
20
    `

    const code2 = `
public class A
 { 
   public static void check (int i) //(int i) is a formal argument
    { 
      if(i%2==0)
       { 
        System.out.println("even no");
       } 
      else
       { 
        System.out.println("odd no");
       } 
     } 
   public static void main (String[] args) 
    { 
     int a = 40; 
     check (a); // a is a actual argument
    } 
} 
    `
    const codeout2 = `
40
    `
    const codeans2 = `
even no
    `
    const code3 = `
public class A
 { 
   public static void maximum (int a , int b) 
    { 
      if(a>b)
       { 
        System.out.println("maximum="+a);
       } 
      else
       { 
        System.out.println("maximum="+b);
       } 
     } 
   public static void main (String[] args) 
    { 
     int x = 40  , y = 65; 
     maximum (x , y); 
    } 
} 
    `
    const codeout3 = `
maximum = 65
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
 
 <title>Master the Art of Java passing arguments: A Beginner's Tutorial Guide by CodeExampler</title>
<meta name="description" content="Java passing arguments tutorial for beginners.An argument may be a variable as a constant value that is used in the () of function." />
<meta name="keywords" content="codeexampler,programming language,tutorial for beginners,java passing argument,passing argument in java,java argument passing example,argument passing in java with example,passing argument with java,java variable arguments pass list,java jar pass arguments command line,java passing arguments,java passing hashmap as argument
java passing parameters cmd,java pass arguments to jar file,java pass arguments as array,java pass arguments to run method,java passing optional arguments" />
<link rel="canonical" href="https://www.codeexampler.com/java-passing-argument" />
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
                      <button onClick={() => handlePreviousAndNext('previous')} className='hidden lg:flex  text-lg gap-1 text-[#9EB2D2] no-underline '><BsFillArrowLeftCircleFill className='text-4xl mt-1'></BsFillArrowLeftCircleFill> <span className='mt-2'>Previous</span></button>
                      <h1 className='mt-8 font-semibold lg:mt-0 text-3xl  no-underline text-[#01B6FF] capitalize'>{window.location.pathname.replace('/', '').replaceAll('-', ' ')}</h1>
                      <button onClick={() => handlePreviousAndNext('next')} className='hidden lg:flex text-lg gap-1 text-[#9EB2D2] no-underline '><span className='mt-2'>Next</span><BsFillArrowRightCircleFill className='text-4xl mt-1'></BsFillArrowRightCircleFill></button>
                      <div className='flex lg:hidden gap-2 mt-3 lg:mt-0'>
                          <BsFillArrowLeftCircleFill onClick={() => handlePreviousAndNext('previous')} className='text-4xl text-gray-500'></BsFillArrowLeftCircleFill>
                          <BsFillArrowRightCircleFill onClick={() => handlePreviousAndNext('next')} className='text-4xl text-gray-500'></BsFillArrowRightCircleFill>
                      </div>
                  </div>
                  <div className='space-y-3'>
                  <div className='text-[#9EB2D2] font-bold'>

<p>
    An argument may be a variable as a constant value that is used in the () of function.
</p>

</div>



<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a Program Example of the namespace in Java?
        </p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code1} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout1}
              </p>
            </div>

  


            <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a Program to check a no is even or odd by using passing argument?
        </p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code2} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout2}
              </p>
            </div>
                        <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeans2}
              </p>
            </div>


            <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a Program check greater no by using function?
        </p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code3} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout3}
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
}
