import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet  from "react-helmet";
import CNavBar from '../CNav';
import CBar from '../../../sidebars/CBar';
import CodeEditorFiled from '../../../CodeEditorFiled/CodeEditorFiled';

export default function CFunction() {

  const code1 = `
#include <stdio.h> 
#include <math.h> 
int main ()
{ 
 double i,a;
 i = 24;
 a = sqrt(i);
 printf("Square Root is %If",a);
 return 0; 
}
    `
    const codeout1 = `
Square Root is 4.898979
    `
    const code2 = `
#include <stdio.h> 
#include <stdlib.h> 

int main()
{ 
 printf("Program Exit 1 \\n");
 // terminate the program with exit status 0
 exit(0);
 // This statement will not be executed
 printf("Program Exit 2 \\n");
 return 0; 
}
    `
    const codeout2 = `
Program Exit 1
    `
    const code3 = `
#include <stdio.h> 
#include <stdio.h> 
int main ()
{ 
 char ch;
 printf("Enter a Char ");
  ch = getchar();
   printf("* \\n");
 printf("You entered =  %c",ch);
 return 0; 
}
    `
    const codeout3 = `
Enter a Char v
*
You entered = v
    `
    const codeans3 = `
Enter a Char v
*
You entered = v
    `


    const code4 = `
#include <stdio.h> 
#include <stdio.h> 
int main ()
{ 
 char ch;
 printf("Enter a Char ");
  ch = getche();
   printf("*");
 printf("\n You entered =  %c",ch);
 return 0; 
}
  `
  const codeout4 = `
Enter a Char b *
You entered = b
  `
  const code5 = `
#include <stdio.h> 
#include <conio.h> 

int main()
{ 
 char ch;
 printf("Enter a Char ");
 ch = getch();
 printf("*");
 printf("\\nYou entered = %c", ch);
 return 0; 
}
  `
  const codeout5 = `
Enter a Char k *
You entered = k
  `
  const code6 = `
#include <stdio.h>
#include <time.h>

int main()
{
 int i;
 for (i = 1; i <= 10; i++)
 {
     printf("%d ", i);
     fflush(stdout); // flush the output buffer to display the number immediately
     time_t start_time = time(NULL);
     while ((time(NULL) - start_time) < 1); // wait for 1 second
 }
 return 0;
}
  `
  const codeout6 = `
1 2 3 4 5 6 7 8 9 10
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
 
 <title>Master the Art of Function in c: A Beginner's Tutorial Guide by CodeExampler</title>
 <meta name="description" content="Function in c tutorial for beginners.Function in c is a set of statements enclosed in {} written under name.,CodeExampler provides Multiple Programming Examples for Beginners,CodeExampler provides Free Online Tutorials for beginners" />
 <meta name="keywords" content="codeexampler,programming language,tutorial for begineers,What is Function in C,learn code in free,c programming tutorial for beginners,learn code in free online,c function,c in function,for function c,c function pointer,c function prototype,c function declaration,c function call,c function exit,c function in r,c function program" />
 <link rel="canonical" href="https://www.codeexampler.com/c-function" />
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
                  <div className='text-[#9EB2D2]'>
                           
                           <p>
                      
                           1, Function in c is a set of statements enclosed in written under a name. <br />
2, A function is defined only one time and can be used for only no time.<br />
3, With the help of a function, a big program can be more flexible.<br />
                           </p>
                          
                      </div>



                      <h2 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Types of Function in a c programming language:</h2>




                      <div className='text-[#9EB2D2] font-bold'>
                           
                           <p>
                      
                           1,Library function <br />
2,User defined function <br />
                           </p>
                          
                      </div>





<h2 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>1,Library function in c:</h2>




                      <div className='text-[#9EB2D2]'>
                           
                           <p>
                      
                           library function in c these function are pre-defined function in the library of c.if we want to use an library function then we have to include its header file at the top of the programme <br />
{"<stdio.h>"}<br />
printf()<br />
gets()<br />
Getchar()<br />
Scanf()<br />
Puts()<br />
Putchar()<br />
Etc.<br />
                           </p>
                          
                      </div>



                      <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Math sqrt() by using function in a C programming language?</p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code1} />
</div>
<h4 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h4>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout1}
              </p>
            </div>






<h2 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Exit(0):</h2>




<div className='text-[#9EB2D2]'>
     
     <p>

     {"<stdlib.h>"} <br />
{"<process.h>"}<br />
This position is used to terminate the program correctly.<br />
     </p>
    
</div>


<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Exit using a function in a C programming language?</p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code2} />
</div>
<h4 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h4>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout2}
              </p>
            </div>


<h2 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Character function:</h2>




<div className='text-[#9EB2D2]'>
     
     <p>

     Getchar()-to input a single character <br />
Getche()- input character and echo<br />
Getch()- input character without echo<br />
     </p>
    
</div>





<h2 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Getchar() function in c programming</h2>


<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program that uses getchar() in the C funtion?</p>
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


                        <h2 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Getche() function in C programming</h2>


                        <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program that uses getche() in the C funtion?</p>
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


<h2 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Getch() function in C programming</h2>


<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program that uses getch() in the C funtion?</p>
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



<h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>{"*<dos.h>"}</h3>



<div className='text-[#9EB2D2] font-bold'>
                           
     <p>
     1,Sleep() <br />
2,delay()<br />
     Both functions are used to pause the execution of the program for a fixed period.<br />
     </p>
    
</div>



<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a Program to print a number from 1 to 10 using 1 second (time.h) library using (fflush(stdout))?</p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code6} />
</div>
<h4 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h4>
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
