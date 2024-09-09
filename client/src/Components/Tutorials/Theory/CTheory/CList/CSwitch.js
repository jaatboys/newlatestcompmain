import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet  from "react-helmet";
import CNavBar from '../CNav';
import CBar from '../../../sidebars/CBar';
import CodeEditorFiled from '../../../CodeEditorFiled/CodeEditorFiled';

export default function CSwitch() {

  const code1 = `
switch (variable)
 { 
   case 1:
   statement;
   case 2:
   statement;
   default:
   statement;
 }
  `
  const code2 = `
#include <stdio.h> 
int main ()
 { 
   int i;
   printf("Enter a number: ");
   scanf("%d", &i );
   switch (i) 
   { 
    case 1:
    printf("Jan \\n");
    case 2:
    printf("Feb \\n");
    case 3:
    printf("March \\n");
    default:
    printf("Default");
   }
   return 0; 
 }
  `
  const codeout2 = `
Enter a number:2
  `
  const codeans2 = `
Feb
March
Default
  `


  const code3 = `
#include <stdio.h> 
int main ()
{ 
 int i;
 printf(" Enter a number:");
 scanf("%d", &i );
 switch (i) 
 { 
  case 1:
  printf("Jan \\n");
  break;
  case 2:
  printf("Feb \\n");
  break;
  case 3:
  printf("March \\n");
  break;
  default:
  printf("Default");
}
return 0; 
}
  `
  const codeout3 = `
Enter a number: 2
  `
  const codeans3 = `
Feb
    `

  const code4 = `
#include <stdio.h> 
int main ()
 { 
   int i=20;

   switch (i) 
   { 
    case 10:
    printf("My case is 10\\n");
    break;
    case 20:
    printf("My case is 20 \\n");
    break;
    case 40:
    printf("My case is 40 \\n");
    break;
    default:
    printf("This is a default no \\n");
   }
   return 0; 
 }
  `
  const codeout4 = `
My case is 20
  `
  const code5 = `
#include <stdio.h> 
int main() { 
 char x = 'd';
 
 switch (x) { 
    case 'b':
      printf("Case b\\n");
      break;
    case 'd':
      printf("Case d\\n");
      break;
    case 'f':
      printf("Case f\\n");
      break;
    default:
      printf("I am in default\\n");
 }
 return 0; 
}
  `
  const codeout5 = `
case d
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

<CNavBar/>
<Helmet>
 
 <title>Master the Art of C Switch Statement: A Beginner's Tutorial Guide by CodeExampler</title>
 <meta name="description" content="Switch in C tutorial for beginners.switch case in c used in multiple conditions having different statements like-if else if,CodeExampler provides Free Online Tutorials for beginners" />
 <meta name="keywords" content="codeexampler,programming language,tutorial for begineers,learn code in free,c programming tutorial for beginners,learn code in free online,switch case in c,c case statement,c switch statement,c switch case,c switch case example,c switch on string,c switch string,c programming switch statement,c programming switch case,c switch example,c switch default,switch c language,c switch case string,c switch statement string,c language switch case" />
 <link rel="canonical" href="https://www.codeexampler.com/c-switch" />
 </Helmet>

         <main className='max-w-[1440px] mx-auto flex gap-14 justify-between relative py-3 px-4'>
              {/* Python bur component   */}
              <CBar ListActioveMobile={ListActioveMobile} setListActiveMobile={setListActiveMobile}></CBar>

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
                  <h2 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>The Switch statement in c:</h2>



<div className='text-[#9EB2D2]'>
                           
     <p>

     Switch case in c used in multiple conditions having different statements like-if if but it can check only equality of the floating condition point but value can’t check by the switch.
     </p>
    
</div>




<h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>The Syntax for Switch Statement in C:</h3>
<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'> </p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code1} />
</div>



<div className='text-[#9EB2D2]'>
                           
     <p>

     In this keyword switch inside c programming that will yield an integer value, forex-case1,case2, etc. this is an integer constant <br />
if you do not find any match in this condition case statements so on that time default statement is executed
     </p>
    
</div>



<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program to input a no and print month name, and if no is 2 but without a break?</p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code2} />
</div>
<h4 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Input:</h4>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout2}
              </p>
            </div>
                        <h4 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h4>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeans2}
              </p>
            </div>





<div className='text-[#9EB2D2]'>
                           
     <p>

        This program gives output but is not what we expected because we did not provide case 3 and default values.
     </p>
    
</div>


<h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Break switch statement:</h3>


<div className='text-[#9EB2D2]'>
                           
     <p>

     If you want to give the only <span className='font-bold'>case 2 </span>statement so using break statement
     </p>
    
</div>


<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program to input a no and print month name, and if no is 2,use a break?</p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code3} />
</div>
<h4 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Input:</h4>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout3}
              </p>
            </div>
                        <h4 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h4>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeans3}
              </p>
            </div>


                        <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program input without user type I in switch in switch case char Values?</p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code4} />
</div>
<h4 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h4>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout4}
              </p>
            </div>

                        <h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Char values in switch case:</h3>
                        
                        <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program input without user type x in switch case char Values?</p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code5} />
</div>
<h4 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h4>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
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
