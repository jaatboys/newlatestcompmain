import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet  from "react-helmet";
import CNavBar from '../CNav';
import CBar from '../../../sidebars/CBar';
import CodeEditorFiled from '../../../CodeEditorFiled/CodeEditorFiled';

export default function CArray() {

  const code1 = `
1. one-dimensional array in C

2. multi-dimensional array in C
  `
  const code2 = `
Ex- {10,20,30,40,50}
  `
  const code3 = `
type array_name[size];
Ex- int a[4];
    int b[5];
  `
  const code4 = `
int a[5] =  {20,40,30,60,50};
int a[] =  {1,2,3,5,8,10};
float a[] =  {2.8,20.46,8.6,4.5,46.50,50};
  `
  const code5 = `
#include <stdio.h> 
#include <stdio.h> 

int main() {
  int a[10], i, flag = 0;
  printf("Enter 10 elements: ");
  for (i = 0; i < 10; i++) {
      scanf("%d", &a[i]);
  }
  printf("Even numbers in the given array are: ");
  for (i = 0; i < 10; i++) {
      if (a[i] % 2 == 0) {
          printf("%d ", a[i]);
          flag = 1;
      }
  }
  if (flag == 0) {
      printf("None");
  }
  return 0;
}
  `
  const codeout5 = `
Enter 10 elements: 
1
2
3
4
5
6
7
8
9
12
 `

  const codeans5 = `
Even numbers in the given array are: 2 4 6 8 12 
    `
  const code6 = `
#include <stdio.h>
int main()
{
int a[10],i, maximum;
printf("enter 10 elements\\n");
for(i=0;i<10;i++)
scanf("%d",&a[i]);
maximum=a[0];
for(i=0;i<10;i++)
{
if (a[i]>maximum)
maximum=a[i];
}
printf("maximum=%d",maximum);
return 0;
}
  `
  const codeout6 = `
enter 10 elements
33
45
16
24
54
23
51
95
6
45
  `

  const codeans6 = `
maximum=95
  `

  const code7 = `
#include <stdio.h> 
int main() { 
 int i;
 int a[8]; 
 printf("Enter 8 elements:");
 for (i = 1; i <= 8; i++) {
     scanf("%d", &a[i]);
 }
 printf("Reverse: ");
 for (i = 8; i >= 1; i--) {
     printf("%d ", a[i]);
 }
 printf("\\n");
 return 0; 
}
  `
  const codeout7 = `
Enter 8 elements: 1 2 3 4 5 6 7 8
  `
  const codeans7 = `
  Reverse: 8 7 6 5 4 3 2 1
  `


  const code8 = `
#include <stdio.h> 
int main() 
{ 
 int i, max;
 int a[10]; 
 
 printf("Enter 10 elements:");
 for (i = 1; i <= 10; i++)
     scanf("%d", &a[i]);
 
 max = a[1];
 for (i = 2; i <= 10; i++)
 {
     if (a[i] > max) 
         max = a[i];
 }
 
 printf("Maximum : %d", max);
 
 return 0; 
} 
  `
  const codeout8 = `
Enter 10 elements:
5 7 2 8 1 9 3 6 12 10
  `

  const codeans8 = `
 Maximum : 12
  `

  const code9 = `
#include <stdio.h> 
int main()
{ 
 int i, a[5], b[5], c[5]; 
 printf("Enter 5 elements of A:");
 for (i = 0; i < 5; i++)
 {
     scanf("%d", &a[i]);
 }
 printf("Enter 5 elements of B:");
 for (i = 0; i < 5; i++)
 {
     scanf("%d", &b[i]);
 }
 printf("Sum of corresponding elements of A and B:\\n");
 for (i = 0; i < 5; i++)
 {
     c[i] = a[i] + b[i];
     printf("%d ", c[i]);
 }
 return 0; 
}
  `
  const codeout9 =`
Enter 5 elements of A:
2
4
6
8
12
Enter 5 elements of B:
1
3
5
7
10

  `
  const codeans9 =`
Sum of corresponding elements of A and B: 3 7 11 15 22
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
     
     <title>Master the Art of What is an Array in C: A Beginner's Tutorial Guide by CodeExampler</title>
     <meta name="description" content="array in c tutorial for beginners.Array in C is a collection of similar type of data and stored in manually consecutively under one name CodeExampler provides Multiple Programming Examples for Beginners,CodeExampler provides Free Online Tutorials for beginners" />
     <meta name="keywords" content="codeexampler,programming language,tutorial for begineers,C array,One-dimensional Array in C,Multi-dimensional Array in C,c array,c array string,c array of strings,c array length,c array initialization,c array to pointer,c array pointer,c array size,c array of pointers,c array declaration,c array of structs,c array size,c array creation,c array define,c array copy,arraylist in c,c arraylist.learn code in free,c programming tutorial for beginners,learn code in free online" />
     <link rel="canonical" href="https://www.codeexampler.com/c-array" />
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
                      
                           1, This is a collection of similar types of data and stored manually consecutively under one name <br />
2, The index number will be different<br />
3, Main purpose of the array is used to handle a large volume of data of some type more easily<br />
                           </p>
                          
                      </div>


                      <h2 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Types of the array in C:</h2>

                        
                      <h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>There are 2 types of Array in C:</h3>


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



                  


<h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Basic array C Style Examples:
</h3>
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
                <CodeEditorFiled code={code2} />
</div>


<h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Array in C Syntax:</h3>


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
                <CodeEditorFiled code={code3} />
</div>



<h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Initialize Array Example in C:</h3>


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
                <CodeEditorFiled code={code4} />
</div>


<h2 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>How to print an array in c</h2>


<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'> Q-Write a program to input an array of 10 elements and print only even elements?</p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code5} />
</div>
<h4 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Input:</h4>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout5}
              </p>
            </div>
                        <h4 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h4>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeans5}
              </p>
            </div>



<div className='text-[#9EB2D2]'>
                           
                           <p>
                           If you don't know about for loop in C so check on C for loop tutorial.
                           </p>
                          
                      </div>




                      <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q- Write a program to input an array of 10 elements and print only even elements? </p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code6} />
</div>
<h4 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Input:</h4>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout6}
              </p>
            </div>
                        <h4 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h4>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeans6}
              </p>
            </div>



                        <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'> Q-Write a program to input an array of 8 elements and print its reverse?</p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code7} />
</div>
<h4 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Input:</h4>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout7}
              </p>
            </div>
                        <h4 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h4>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeans7}
              </p>
            </div>

<div className='text-[#9EB2D2]'>
                           
                           <p>
                           If you don't know about input in C so check on the C input tutorial.
                           </p>
                          
                      </div>




                      <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program to input an array of 10 elements and print maximum in C? </p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code8} />
</div>
<h4 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Input:</h4>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout8}
              </p>
            </div>
                        <h4 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h4>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeans8}
              </p>
            </div>

                        <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program to add two arrays and results should be stored into a third array in C? </p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code9} />
</div>
<h4 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Input:</h4>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout9}
              </p>
            </div>
                        <h4 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h4>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeans9}
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
