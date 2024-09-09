import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import CNavBar from '../CNav';
import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet  from "react-helmet";

import CBar from '../../../sidebars/CBar';
import CodeEditorFiled from '../../../CodeEditorFiled/CodeEditorFiled';

const code =`
#include <stdio.h> 

int main() { 
 int a; // This declares an integer variable 
 float b; // This declares a float variable 
 
 printf("Enter the value of a: "); 
 scanf("%d", &a ); // Reads the integer value of a from the user 
 printf("Enter the value of b: "); 
 scanf("%f", &b ); // Reads the float value of b from the user 
 
 printf("The value of a is %d \\n", a); 
 printf("The value of b is %f \\n", b); 
 
 return 0; 
}
  `

const codeout =`
Enter the value of a: 4
Enter the value of b: 8
  `

const codeans =`
The value of a is 4
The value of b is 8.000000
  `


const code2 =`
#include <stdio.h> 

int main ()
 { 

 int a, b, c, sum;
 printf("enter first no");
 scanf("%d", &a);
 printf("enter second no");
 scanf("%d", &b );
 printf("enter third no");
 scanf("%d",&c );
 sum = a + b + c;
 printf(" %d ", sum );
 return 0; 

}
  `
const code3 =`
enter first no 24 

enter second no  14 

enter third no  25 

sum = 63
  `
const code4 =`
#include <stdio.h> 

int main ()

 { 

 float p, r, t, si; 
 printf("enter the value of p");
 scanf("%f", &p );
 printf("enter the value of r");
 scanf("%f", &r );
 printf("enter the value of t");
 scanf("%f", &t );
 si = p* r* t/100;
 printf("si = %f", si);
 return 0; 
}
  `

const code5 =`
enter the value of p 45 

enter the value of r 68 

enter the value of t 25 

si = 765.000000
 `
const code6 =`
#include <stdio.h> 

int main ()

 { 

 int l, b, area; 
 printf("enter a value of l ");
 scanf("%d", &l );
 printf("enter a value of b ");
 scanf("%d", &b );
 area = l * b;
 printf("area = %d", area);
 return 0; 
}
  `
const code7 =`
enter a value of l 4 

enter the value of b 5 

area = 20
 `
const code8 =`
#include <stdio.h> 

int main ()
 { 

 float r, area; 
 printf("enter a value of r ");
 scanf("%f", &r );
 area = 3.14 * r* r;
 printf("area = %f", area);
 return 0; 
}
 `
const code9 =`
enter a value of r 2 

area = 12.560000
 `
const code10 =`
#include <stdio.h> 

int main ()
 { 

 int a, b, c, add, mult; 
 printf("enter a value of a ");
 scanf("%d", &a );
 printf("enter a value of b ");
 scanf("%d", &b );
 printf("enter a value of c ");
 scanf("%d", &c );
 add = a + b+ c;
 mult = a * b* c;
 printf("total = %d \\n", add);
 printf("multiply = %d \\n", mult);
 return 0; 
}
  `

const code11 =`
enter a value of a 2 

enter a value of b 4 

enter a value of c 6 

total = 12

multiply = 48
 `
export default function CInput() {
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
 
 <title>Master the Art of Input in c: A Beginner's Tutorial Guide by CodeExampler</title>
 <meta name="description" content="input in c programming language tutorial for beginners.input in c programming language at run time scanf ( ) function is commonly used to input the value.string input in c CodeExampler provides Free Online Tutorials for beginners" />
 <meta name="keywords" content="codeexampler,programming language,String input in c,tutorial for begineers,string input in c,c input,input in c programming language at run time,input in c,learn c programming language,learn code online,c input integer,c input and output,c input from keyboard,c user input integer,c input output,c input string,c input in c programming code" />
 <link rel="canonical" href="https://www.codeexampler.com/c-input" />
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
                        <h2 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Input in c programming language at run time:</h2>
                        <p >The scanf ( ) function is commonly used to input the value. scanf ( ) receives from the keyboard.</p>

                      
                        <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program to user input in string input in C programming example?
 </p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditorFiled code={code} /> 
</div>

<h4 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Input:</h4>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout}
              </p>
            </div>
                        <h4 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h4>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeans}
              </p>
            </div>


<h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Input in C Examples :</h3>
            <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program to input 3 numbers and print the total marks in C programming example?
 </p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditorFiled code={code2} /> 
</div>

<h4 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h4>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {code3}
              </p>
            </div> 




            <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program to calculate and print simple interest in C programming example?
 </p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditorFiled code={code4} /> 
</div>

<h4 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h4>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {code5}
              </p>
            </div> 








            <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program to find and print the area of rectangle in C programming example?
 </p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditorFiled code={code6} /> 
</div>

<h4 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h4>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {code7}
              </p>
            </div> 








            <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program to find out the value of pi and print area of a circle in C programming example?
 </p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditorFiled code={code8} /> 
</div>

<h4 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h4>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {code9}
              </p>
            </div> 









            <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program to 3 subject marks, add all values,and multiply all the values in C programming example?
 </p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditorFiled code={code10} /> 
</div>

<h4 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h4>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {code11}
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
