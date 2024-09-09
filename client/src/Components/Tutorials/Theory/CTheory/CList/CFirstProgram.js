import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet  from "react-helmet";
import CNavBar from '../CNav';
import CBar from '../../../sidebars/CBar';
import CodeEditorFiled from '../../../CodeEditorFiled/CodeEditorFiled';

const code =`
main () 
{ 
 Statement1; 
 Statement2; 
}
  `
const code2 =`
#include <stdio.h> 
int main ()

 { 

//printf() is used to outputs the values on the screen

   printf("hello world program in C");

   return 0; 
}
 `
const code3 =`
hello world program in C
 `
const code4 =`
#include <stdio.h> 

int main ()
 { 

   printf("sports \\n");

   printf("1,football \\n");

   printf("2.badminton \\n");

   printf("3,tennis \\t 4,cricket");

   return 0; 
}
 `
const code5 =`
sports
1,football
2,badminton
3,tennis    4,cricket
 `

export default function CFirstProgram() {
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

<title>Master the Art of First Program in C: A Beginner's Tutorial Guide by CodeExampler</title>
<meta name="description" content="First Program in C tutorial for beginners.Hello world program in c for beginners or first program in c,CodeExampler provides Free Online Tutorials for beginners" />
<meta name="keywords" content="codeexampler,programming language,tutorial for begineers,hello world program in c,first program in c,learn code in free,c programming tutorial for beginners,learn code in free online,c first program,first program in c,my first c program in english,c program to print first 10 natural numbers,c program to print first 10 even numbers
,hello world program in c,c program to print first n prime numbers,my first c program" />
<link rel="canonical" href="https://www.codeexampler.com/c-first-program" />
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
                        <h2 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>How to write C program for Beginners or hello world program in c:</h2>
                        <div className='text-[#9EB2D2]'>
                            <p>

                                1, First program in c programming no blanks space used within a variable, constant, or keyword. <br />
                                2, All statements are entered in small case letters.<br />
                                3, All C statements end with a ;<br />
                                4, (;) means the statement terminate<br />
                                5, Main() – this is a collective name given to a set of statements. main() is a function, and Every function has a pair of parentheses ( ) Every function has a pair of parentheses ( ) <br />
                                6, Clrscr() – is used to clear screen<br />
                                7, and code finish by use (return 0 ;).<br />
                                8, This is the basics of c programming language<br />
                            </p>


                        </div>

                        <div>
                        <h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Fundamental or First program for C Programming Syntax:</h3>
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
                        <div>

                        <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a hello world program in C example?
 </p>
    </div>

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




                        <h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Escape sequence character:</h3>
                        <p className='font-bold'>
                            \t – tab(gap b/w two characters) <br />
                            \n – newline <br />
                            \b – backspace <br />
                            \" – " <br />
                            \\ - \ <br />
                            \0 – null used In a string <br />
                        </p>
                        <p><span className='font-bold'>Important-</span>each escape sequence Character occupied only one bite.</p>

                        <div>

                        <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program to give sports name out for C programming example?</p>
    </div>

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
