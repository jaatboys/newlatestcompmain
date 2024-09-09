import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet  from "react-helmet";
import PhpBar from '../../../sidebars/PhpBar';
import PhpNavBar from '../PhpNav';
import CodeEditorFiled from '../../../CodeEditorFiled/CodeEditorFiled';
export default function PhpSwitch() {
    const code1 = `
Switch (expression)
{
Case condition 1:
 statement (s)
  Break;
Case condition 2:
 statement (s)
  Break;
Case condition 3:
 statement (s)
  Break;
 Default :
 statement (s)
}
  
 OR
  
Switch (expression)
Case condition 1:
 statement (s)
  Break;
Case condition 2:
 statement (s)
  Break;
Case condition 3:
 statement (s)
  Break;
 Default :
 statement (s)
Endswitch;
    `
    const code2 = `
<?php
$month = 4;
 Switch ($month)
{
Case 1:
 echo "Jan";
  Break;
Case 2:
 echo "Feb";
  Break;
Case 3:
 echo "Mar";
  Break;
Case 4:
 echo "Apr";
  Break;
 Default :
 echo "Enter Correct Value"; // (If you type incorrect Month no so Default data show)
  Break;
}
 ?>
    `
    const codeout2 = `
Apr
    `
    const code3 = `
<?php
$i = 280;
 Switch ($i)
{
Case 180:
 echo  "My value is 180";
  Break;
Case 280:
 echo "My value is 280";
  Break;
Case 380:
 echo "My value is 380";
  Break;
Case 480:
 echo "My value is 480";
  Break;
 Default :
 echo "Enter Correct Value";
  Break;
}
 ?>
    `
    const codeout3 = `
My value is 280
    `
    const code4 = `
<?php
$i = 'd';
 Switch ($i)
{
Case 'b':
 echo  "value is b";
  Break;
Case 'd':
 echo "value is d";
  Break;
Case 'f':
 echo " value is f";
  Break;
Case 'h':
 echo " value is h";
  Break;
 Default :
 echo "Enter Correct Value";
  Break;
}
 ?>
    `
    const codeout4 = `
value is d
    `
    const code5 = `
<?php
$date = 8;
 Switch (true)
{
Case ($date >=  10 && $date <= 20):
 Echo "your date is correct";
  Break;
Case ($date >=  21 && $date <= 30):
 Echo "your date is incorrect";
  Break;
 Default :
 Echo "Please enter a valid date";
  Break;
}
 ?>
    `
    const codeout5 = `
Please enter a valid date
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
 
 <title>Master the Art of PHP Switch: A Beginner's Tutorial Guide by CodeExampler</title>
 <meta name="description" content="Learn the basics of PHP Switch statements for beginners with CodeExampler's free online tutorial. Understand how to use Switch in PHP to organize similar data and make your code more efficient." />
 <meta name="keywords" content="Php Switch tutorial, Php switch case example, Php switch default,php switch case multiple values, programming language tutorial for beginners, codeexampler,php switch case,switch php version ubuntu" />
 <link rel="canonical" href="https://www.codeexampler.com/php-switch" />
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
                 

                  <h1 className='text-[#01B6FF]'>Switch statement in Php</h1>


                  <div className='text-[#9EB2D2]'>
                           
                           <p>
                      
                           That is used in multiple conditions with different statements like-if if, but it can check only equality of the floating condition point, but the switch can’t check value.
                           </p>
                          
                      </div>



                      <h1 className='text-[#01B6FF]'>Syntax for Switch Statement in Php:</h1>



                 <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program variable Increment in C?</p>
                  </div>

                </div>
</div>
<div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code1} />
</div>





<div className='text-[#9EB2D2]'>
                           
                           <p>
                      
                           In this keyword switch inside c programming that will yield an integer value, forex-case1,case2, etc. this is an integer constant
if you do not find any match with any of these cases statements so on that time default statement Execute

This program gives output but not what we expected because we did not provide the production of case 3 and the default value Switch switch statement:
so if you want to provide the only case 2 statement so using switch Switch Php means switch case Switch Php statement and Learn PHP Function
                           </p>
                          
                      </div>







                      <h1 className='text-[#01B6FF]'>Php switch statement Examples:</h1>



                 <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program to input a no and print month name and if no is Two in Switch Php?</p>
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




            <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program variable Increment in C?</p>
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



<h1 className='text-[#01B6FF]'>Character switch case in Php:</h1>



<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program character switch case in Switch Php?</p>
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





            <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program variable Increment in C?</p>
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
