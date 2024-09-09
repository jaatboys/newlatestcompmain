import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import CNavBar from '../CNav';
import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet  from "react-helmet";

import CBar from '../../../sidebars/CBar';
import CodeEditorFiled from '../../../CodeEditorFiled/CodeEditorFiled';

const code =`
int a = "Code Exampler"; 

int is a data_types

a is a variable

= is an operator

Code Exampler is a C string literal
`
const code2 =`
#include <stdio.h>

int main() {
    char a[] = "hello";
    char b[] = " ram";
    char c[100];
    
    // Concatenate the two strings using sprintf
    sprintf(c, "%s%s", a, b);
    
    // Print the concatenated string
    printf("%s", c);
    
    return 0;
}
 `
const code3 =`
hello ram
  `
const code4 =`
#include <stdio.h>

int main() {
  int a = 10;
  int b = 200;
  int result = a + b;
  printf("%d", result);
  return 0;
}
 `
const code5 =`
210
 `
const code6 =`
#include <stdio.h>

int main() {
 float a, b;
 a = 400.8206;
 b = 40.25;
 printf("a float value: %f \\n", a);
 printf("b float value: %f \\n", b);
 return 0;
}
 `
const code7 =`
a float value: 400.820618
b float value: 40.250000
 `

const code8 =`
#include <stdio.h>

int main() {
 double a, b;
 a = 400.8206;
 b = 40.25684;
 printf("a double value: %lf\\n", a);
 printf("b double value: %lf\\n", b);
 return 0;
}
 `

const code9 =`
a double value: 400.820600
b double value: 40.256840
   `
const code10 =`
#include <stdio.h>

int main() {
 char *a = "hello";
 char *b = "ram 5";
 printf("a string value: %s \\n", a);
 printf("b string value: %s \\n", b);
 return 0;
}
  `

  const codeout10 =`
a string value: hello
b string value: ram 5
    `

const code11 =`
Boolean a = "true";
Boolean b = "false";

    OR

Boolean a, b;

a = "true";
b = "false";
  `

export default function CLiteral() {
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
 
 <title>Master the Art of Literal in C: A Beginner's Tutorial Guide by CodeExampler</title>
 <meta name="description" content="Literal in C tutorial for beginners.Those value fixed to a variable and refer to fixed values. This is known as literal,CodeExampler provides Multiple Programming Examples for Beginners,CodeExampler provides Free Online Tutorials for beginners" />
 <meta name="keywords" content="codeexampler,programming language,tutorial for begineers,learn code in free,c programming tutorial for beginners,learn code in free online,c literal,c string literal,c literal suffix,character literal c,c struct literal initialization,c raw string literal multi-line,c language binary literal,literal constant in c" />
 <link rel="canonical" href="https://www.codeexampler.com/c-literal" />
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
                        <h2 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Q-what is literals in a C programming language?</h2>
                        <p ><span className='font-bold'>Answer</span>
                            -Those values are fixed to a variable and refer to fixed values. That is known as literal.</p>

                        <p className='font-bold'>
                            1, Literal is also known as constants <br />
                            2, Literal depends upon its type <br />
                            3, C literals have any primitive data types <br />
                        </p>
                        <div>

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
                                <CodeEditorFiled code={code} />
                            </div>
                        </div>
                        <h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>There are many types of literals:</h3>
                        <p className='font-bold'>
                            1, String Literals <br />
                            2, Integer Literals <br />
                            3, Float Literals <br />
                            4, Double Literals <br />
                            5, Character Literals <br />
                            6, Boolean Literals <br />
                            7, Null Literals <br />
                        </p>
                        <h4 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>1, String literal in C Programming language example:</h4>

                        <p ><span className='font-bold'>sprintf function </span>
which works like printf but prints to a string instead of the console.</p>



                        <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program print String literal in C programming example?
 </p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditorFiled code={code2} /> 
</div>


<h5 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h5>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {code3}
              </p>
            </div> 

          
                        <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>2, Integer Literal in C :</h1>

                        <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program print Integer literal in C programming example ?
 </p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditorFiled code={code4} /> 
</div>

<h5 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h5>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {code5}
              </p>
            </div> 





                        <h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>3, Float Literal in C Example:</h3>

                        <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Write a program print float Literal in C programming example ?
 </p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditorFiled code={code6} /> 
</div>

<h5 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h5>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {code7}
              </p>
            </div> 

                        <h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>4, Double Literal in c programming language example:</h3>

                        <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Write a program print Double literal in C programming example ?
 </p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditorFiled code={code8} /> 
</div>

<h5 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h5>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {code9}
              </p>
            </div> 



                        <h5 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>5, Character Literals</h5>
                        <p className='font-bold'>The * indicates that (a) is a pointer to a char variable.</p>
                        <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q- Write a program a and b in Character literals in C programming example?
 </p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditorFiled code={code10} /> 
</div>

<h5 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Input:</h5>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout10}
              </p>
            </div>




            <h4 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>6, Boolean Literals:</h4>

<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
<div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
<div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
<div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
<div className='mx-1'>
<p className='text-lg font-semibold text-[#01B6FF]'>Q- Write a program and b in Boolean literals in C programming example ?
</p>
</div>

</div>
</div>
<div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditorFiled code={code11} /> 
</div>



                        <h5 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Null Literals:</h5>
                        <p>Null Literal is using to indicate that this object is not available more.</p>


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
