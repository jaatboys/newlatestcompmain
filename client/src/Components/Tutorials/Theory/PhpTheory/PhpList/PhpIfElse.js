import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet  from "react-helmet";
import PhpBar from '../../../sidebars/PhpBar'; 
import PhpNavBar from '../PhpNav';
import CodeEditorFiled from '../../../CodeEditorFiled/CodeEditorFiled';
export default function PhpIfElse() {
    const code1 = `
If (condition)
 {
Statement;; 
 }
Else
 {
Statement;; 
 {
    `
    const code2 = `
<?php
$a = 500; 
if ($a > 1000) 
 {
echo  " This  ". $a ." no is Greater than 1000 ";
 }
else
 {
echo  " This  ". $a ." no is Smaller than 1000 ";
 }
?>
    `
    const codeout2 = `
This 500 no is Smaller than 1000 
    `
    const code3 = `
<?php
$a = 160208; 
if ($a % 2 == 0) 
 {
echo " This ". $a ." no is Even no ";
 }
else
 {
echo  " This  ". $a ." no is Odd no ";
 }
?>
    `
    const codeout3 = `
This 160208 no is Even no 
    `
    const code4 = `
<?php
$a = 40; 
$b = 50; 
if ($a > $b) 
{
 echo " a is greater = ".$a;
}
 else
{
 echo " b is greater = ". $b;
}
?>
    `
    const codeout4 = `
b is greater = 50 
    `
    const code5 = `
<?php
$i = 840; 
if ($i < 100) 
{
 echo "i is Less than = ".$a;
}
 else
{
 if ($i >= 1000)
{
 echo " Greater than 1000";
}
 else
{
 echo " Between 100 and 1000";
}
}
?>
    `
    const codeout5 = `
Between 100 and 1000 
    `
    const code6 = `
<?php
$sex = 'm';
if ($sex == 'm')
{
 echo "This is Male ";
}
 else
{
 if ($sex == 'f')
{
 echo "This is Female";
}
 else
{
 echo "Not Male and Not Female";
}
}
 echo "I have checked Gender";
?>
    `
    const codeout6 = `
This is male
I have checked Gender
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
 
 <title>Master the Art of PHP If Else: A Beginner's Tutorial Guide by CodeExampler</title>
 <meta name="description" content="Enhance your PHP programming skills with CodeExampler's free tutorial on if-else statements for beginners. Make informed decisions in your code and improve your programming abilities with our multiple programming examples. Access free online tutorials and take your skills to the next level!" />
 <meta name="keywords" content="codeexampler,php if else if endif,php if else statement,if else condition in php,php if elseif else,elseif vs else if php,php code if else,short if else in php" />
 <link rel="canonical" href="https://www.codeexampler.com/php-if-else" />
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
                  <h1 className='text-[#01B6FF] mt-3 lg:text-xl'>If-else Syntax in Php:
                        </h1>

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


                        <h1 className='text-[#01B6FF] mt-3 lg:text-xl'>
                            Examples:
                        </h1>
                       <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program to input a number and check this number is Greater or Less than 1000?</p>
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



                        <h1 className='text-[#01B6FF] mt-3 lg:text-xl'></h1>

                       <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program to check a no is even or odd in the Php tutorial?</p>
                                </div>

                            </div>
                        </div>
                        <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code3} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
            <div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap'>
              {codeout3}
              </p>
            </div>

                       <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program to find out which no is greater between two numbers in Php?</p>
                                </div>

                            </div>
                        </div>
                        <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code4} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
            <div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap'>
              {codeout4}
              </p>
            </div>



                        <h1 className='text-[#01B6FF] mt-3 lg:text-xl'>Nested list in Php tutorial:</h1>

                       <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program to input a no and after Check no is Greater, Less or Between in Php Example?</p>
                                </div>

                            </div>
                        </div>
                        <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code5} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
            <div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap'>
              {codeout5}
              </p>
            </div>

                       <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a Nested List Program to Check Gender in Php?
                                    </p>
                                </div>

                            </div>
                        </div>
                        <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code6} />
</div>
 <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
            <div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap'>
              {codeout6}
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
