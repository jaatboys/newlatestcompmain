import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import JsNavBar from '../JavaScriptNav';
import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet  from "react-helmet";
import CodeEditorFiled from '../../../CodeEditorFiled/CodeEditorFiled';
import JavaScriptBar from '../../../sidebars/JavaScriptBar';

export default function JavaScriptSwitch() {  

    const code1 = `
switch(Expression)
{ 
 case condition 1 : 
    Statement ;
    Break;
 case condition 2 : 
    Statement ;
    Break;
 case condition 3 : 
    Statement ;
    Break;
 default : 
    Statement ;
} 

OR 

switch(Expression)
 case condition 1 : 
    Statement ;
    Break;
 case condition 2 : 
    Statement ;
    Break;
 case condition 3 : 
    Statement ;
    Break;
 default : 
    Statement ;
 Endswitch;
    `
    const code2 = `
<script> 
  var month=3;

  switch(month)
  { 
   case 1 : 
      document.write("Jan" + "<br>");
break;
   case 2 : 
      document.write("Feb" + "<br>");
   case 3 : 
      document.write("Mar" + "<br>");
   case 4 : 
      document.write("Apr" + "<br>");
   default : 
      document.write("Enter correct value");
} 
</script> 
    `
    const codeout2 = `
Mar
Apr
enter correct value
    `
    const code3 = `
<script> 
  var month=3;

  switch(month)
  { 
   case 1 : 
      document.write("Jan");
      break;
   case 2 : 
      document.write("Feb");
      break;
   case 3 : 
      document.write("Mar")
      break;
   case 4 : 
      document.write("Apr");
      break;
   default: 
      document.write("Enter correct value");
      break;
} 
</script> 
    `
    const codeout3 = `
Mar
    `
    const code4 = `
<script> 
  var i=280;

  switch(i)
  { 
   case 180 : 
      document.write("i value is 180");
      break;
   case 280 : 
      document.write("i value is 280")
      break;
   case 480 : 
      document.write("i value is 480");
      break;
   default: 
      document.write("Enter correct value");
      break;
} 
</script>
    `
    const codeout4 = `
i value is 280
    `
    const code5 = `
<script> 
  var i='d';

  switch(i)
  { 
   case 'b' : 
      document.write("i value is b");
      break;
   case 'd' : 
      document.write("i value is d");
      break;
   case 'f' : 
      document.write("i value is f")
      break;
   case 'h' : 
      document.write("i value is h");
      break;
   default: 
      document.write("Enter correct value");
      break;
} 
</script> 
    `
    const codeout5 = `
i value is d
    `
    const code6 = `
<script> 
  var date=8;

  switch(true)
  { 
   case (date>=10 && date<=20) : 
      document.write("your date is correct");
      break;
   case (date>=21 && date<=32) : 
      document.write("your date is incorrect");
      break;
   default: 
      document.write("Please enter a valid date");
      break;
} 
</script> 
    `
    const codeout6 = `
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
<JsNavBar/>
<Helmet>
 
 <title>Master the Art of JavaScript Switch: A Beginner's Tutorial Guide by CodeExampler</title>
 <meta name="description" content="Javascript Switch tutorial for beginners.Switch in Javascript is a collection of similar type of data and stored in manually consecutively under one name CodeExampler provides Multiple Programming Examples for Beginners,CodeExampler provides Free Online Tutorials for beginners" />
 <meta name="keywords" content="codeexampler,tutorial for begineers,Javascript Switch for loop,Javascript foreach Switch,javascript switch case,javascript switch statement,javascript switch string,javascript switch example" />
 <link rel="canonical" href="https://www.codeexampler.com/javascript-switch" />
 </Helmet>

         <main className='max-w-[1440px] mx-auto flex gap-14 justify-between relative py-3 px-4'>
              {/* Python bur component   */}
              <JavaScriptBar ListActioveMobile={ListActioveMobile} setListActiveMobile={setListActiveMobile}></JavaScriptBar>

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
                  <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Switch Statement in Javascript:</h1>

<div className='text-[#9EB2D2]'>

    <p>
        That is also used in multiple conditions with different statements like if but it can only check the equality of the floating condition point, but the switch can’t match the value.

    </p>

</div>

<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>The Syntax for Switch Statement Javascript:</h1>


<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2 pl-7 items-center'>
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

<div className='text-[#9EB2D2]'>

    <p>

        In this keyword switch inside c programming that will yield an integer value, forex-case1,case2, etc. this is an integer constant
        if you do not find any match in any case statements, so on that time, default statement execute  <a class="text-blue-600" target="_blank" href="https://www.codeexampler.com/javascript-break">JavaScript Break tutorial for Beginners</a>.
        <br />
        <br />

        This program gives output but is not expecting because we did not provide case 3 and the default value Switch statement.
        so if you want to provide the only case 2 statement so using switch case Javascript statement.
    </p>

</div>


<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Javascript switch statement without Using break Statement:</h1>


<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program to input a no and print month name and if no is two by using switch without break Javascript?</p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code2} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Input:</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout2}
              </p>
            </div>


<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Javascript switch statement with break:</h1>

<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program to input a no and print month name and if no is two by using Switch Javascript?</p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code3} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Input:</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout3}
              </p>
            </div>

                        <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program without input use a switch case in Javascript?</p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code4} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Input:</h1>
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
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program character switch case in Javascript?</p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code5} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Input:</h1>
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
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program to check a no b/w two no switch case in Javascript?</p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code6} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Input:</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
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
