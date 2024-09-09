import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet  from "react-helmet";
import CppBar from '../../../sidebars/CppBar';
import CodeEditorFiled from '../../../CodeEditorFiled/CodeEditorFiled';
import CppNavBar from '../CppNav';

export default function CppLiteral() {

    const code1 = `
int a = "code exampler";
int is a data_types
A is a variable
= is an operator
Code Exampler is a C++ string literal
    `

  
    const code2 = `
#include <iostream> 
using namespace std; 
 int main( )
 { 
string a,b;
a = "hello";
b = "ram";
  OR  
string a = "hello";
string b = "ram";
 cout <<a+" "+b;
 return 0;
 } 
    `
    const codeout2 = `
hello ram
    `
    const code3 = `
#include <iostream> 
using namespace std; 
 int main( )
 { 
int a,b;
a = 10;
b = 200;
cout << a + b;
 return 0;
 } 
`
    const codeout3 = `
210
    `
    const code4 = `
#include <iostream> 
using namespace std; 
 int main( )
 { 
float a,b;
a = 400.8206;
b = 40.25684;
cout << a << "\\n";
cout << b;
 return 0;
 }
`
const codeout4 = `
400.821
40.2568
`
const code5 = `
#include <iostream> 
using namespace std; 
 int main( )
 { 
double a,b;
a = 400.8206;
b = 40.25684;
cout << a << "\\n";
cout << b;
 return 0;
 } 
`
const codeout5 = `
400.821
40.2568
`
const code6 = `
#include <iostream> 
using namespace std; 
 int main( )
 { 
char  a,b;
a = 'h';
b = '6';
cout << a << "n";
cout << b;
 return 0;
 } 
    `
    const codeout6 = `
h
6
    `
const code7 = `
bool a; 
a = true; 
bool b;
a = false;
Or 
bool a,b;
a = true;
b = false;

That is a\ Boolean literal in c++ programming language example.
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
<CppNavBar/>
<Helmet>

 
 <title>Master the Art of Literal in C++: A Beginner's Tutorial Guide by CodeExampler</title>
 <meta name="description" content="Literal in C++ tutorial for beginners.Those value fixed to a variable and refer to fixed values. This is known as literal,CodeExampler provides Multiple Programming Examples for Beginners,CodeExampler provides Free Online Tutorials for beginners" />
 <meta name="keywords" content="codeexampler,Literal in C++ tutorial for beginners,programming language,tutorial for begineers,learn code in free,c++ programming tutorial for beginners,learn code in free online,cpp literal,c++ string literal,c++ literal suffix,character literal c++,cpp struct literal initialization,cpp raw string literal multi-line,c++ language binary literal,literal constant in c++" />
 <link rel="canonical" href="https://www.codeexampler.com/cpp-literal" />
 </Helmet>


         <main className='max-w-[1440px] mx-auto flex gap-14 justify-between relative py-3 px-4'>
              {/* Python bur component   */}
              <CppBar ListActioveMobile={ListActioveMobile} setListActiveMobile={setListActiveMobile}></CppBar>

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

                  <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Q-what is literals in c++ programming language?</h1>
                      <div className='text-[#9EB2D2]'>
                          <p>

                         <b> Answer </b> -Those values are fixed to a variable and refer to fixed values. That is known as literal. <br />
                         <br />
1, literal is also known as constants<br />
2, literal depends upon its type<br />
3, C++ literals have any primitive data types<br />
                          </p>
                          

                      </div>



                      <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>literal in C++ programming language example
                      </h1>

                      <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>

</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code1} />
</div>





                  <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>There are many types of literals:</h1>
                      <div className='text-[#9EB2D2] font-bold'>
                          <p>

                            1, String literals <br />
                            2, Integer literals<br />
                            3, Float literals<br />
                            4, Character literals<br />
                            5, Boolean literals<br />
                            6, Null literals<br />
                          </p>
                          

                      </div>


                      <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>1,String literal in c++ programming language example:
                      </h1>

                      <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program print String literal in c++ programming language Example? </p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code1} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout2}
              </p>
            </div>



                      <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>2,Integer literal in c++ programming language example:
                      </h1>


                      <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program print integer literal in c++ programming language Example?</p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code3} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout3}
              </p>
            </div>

                      <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>3,Float literal in c++ programming language example:  
                      </h1>


              <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>
        Q-Write a program print float literal in c++ programming language example? </p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code4} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout4}
              </p>
            </div>

                      <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>4,Double literal in c++ programming language example:  
                      </h1>


                  <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Double literal a and b in c++ programming language example? </p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code5} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout5}
              </p>
            </div>

                      <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>5,Character literals-  
                      </h1>


                   <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Character literals in c++ programming language example?</p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code6} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout6}
              </p>
            </div>
                      
                   <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Boolean literals in c++ programming language example? </p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code7} />
</div>

                      <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Null literals:  
                      </h1>

                      <div className='text-[#9EB2D2]'>
                           
     <p>

     Null literals used to indicate that this object is not available more
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
