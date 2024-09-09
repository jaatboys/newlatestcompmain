import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet  from "react-helmet";
import PhpBar from '../../../sidebars/PhpBar'; 
import PhpNavBar from '../PhpNav';
import CodeEditorFiled from '../../../CodeEditorFiled/CodeEditorFiled';
export default function PhpFirstProgram() {
    const code1 = `
<?php
 echo "Hello World!";
?>
    `
    const codeout1 = `
Hello World!
    `
    const code2 = `
<?php
echo "sports "; 
echo "1, football "; 
echo "2, badminton "; 
echo "3, tennis "; 
echo "4, cricket "; 

echo "hello world program in php"; 
?>
    `
    const codeout2 = `
sports 
1, football 
2, badminton 
3, tennis 
4, cricket 
hello world program in php
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

<PhpNavBar/>
<Helmet>
 
 <title>Master the Art of PHP hello world program: A Beginner's Tutorial Guide by CodeExampler</title>
 <meta name="description" content="Learn how to create your very first PHP program with CodeExampler's free online tutorials! Our beginner-friendly guide will teach you how to write a simple hello world program in PHP, as well as provide you with multiple examples to kickstart your PHP programming journey." />
 <meta name="keywords" content="codeexampler,php hello world,php hello world program,php hello world,php code for hello world,how to run php first program,php first program how to run,first php program using xampp,php first program,php basic programs ,end for loop Php,First Programming in Php" />
 <link rel="canonical" href="https://www.codeexampler.com/php-first-program" />
 </Helmet>


         <main className='max-w-[1440px] mx-auto flex gap-14 justify-between relative py-3 px-4'>
              {/* Python bur component   */}
              <PhpBar ListActioveMobile={ListActioveMobile} setListActiveMobile={setListActiveMobile}></PhpBar>

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
                  <h1 className='text-[#01B6FF] mt-3 lg:text-xl'>Steps of program in Php:</h1>

<div className='text-[#9EB2D2]'>

    <p>
        1. Inside text editor when we create a Php project so after the name of file name use extension and .php is the extensive use for Php. <br />
        2. This ( &lt;?php ) is use to start PHP code. They signify that the program is starting, and you put all code inside this &lt;? php. <br />
        3. Print this code by use  <strong> echo</strong> . <br />

        <strong> echo("Hello World");</strong>
        <br />

        4. Console represents the input, output, or error
        5. And after close program by this ( &gt;?php ) code.
    </p>

</div>


<h1 className='text-[#01B6FF] mt-3 lg:text-xl'>Php hello world Program how to Run:</h1>

<h1 className='text-[#01B6FF] mt-3 lg:text-xl'>Php hello world Example:</h1>

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
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
            <div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap'>
              {codeout1}
              </p>
            </div>

<h1 className='text-[#01B6FF] mt-3 lg:text-xl'>Fundamental for Php programming example : </h1>

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
            <div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap'>
              {codeout2}
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
