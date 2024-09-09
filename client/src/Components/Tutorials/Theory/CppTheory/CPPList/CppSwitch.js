import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet  from "react-helmet";
import CppBar from '../../../sidebars/CppBar';
import CodeEditorFiled from '../../../CodeEditorFiled/CodeEditorFiled';
import CppNavBar from '../CppNav';

export default function CppSwitch() {

    const code1 = `
switch (variable)

 { 
 case 1:
  Statement ;

 case 2:
  Statement ;

 Default:
  Statement ;

 } 
    `
    const code2 = `
#include <iostream> 
using namespace std; 

int main ()
  { 

 int i;
 cout << "Enter a number";
 cin >> i;

 switch (i)

  { 

 case 1:
 cout << "Jan \\n";

 case 2:
 cout << "Feb \\n";

 case 3:
 cout << "Mar \\n";

 case 4:
 cout << "Apr \\n";

 case 5:
 cout << "May \\n";

 default:
 cout <<" Check No ";

 } 
 return 0 ;
 } 
    `
    const codeout2 = `
enter a number 2
Feb 
Mar 
Apr 
May 

Check No
    `
    const code3 = `
#include <iostream> 
using namespace std; 

int main ()
  { 
 int i;
 cout << "Enter a number";
 cin >> i;
 switch (i)
  { 
case 1:
 cout << "Jan ";
 break; 
case 2:
 cout << "Feb ";
 break; 
case 3:
 cout << "Mar ";
 break;
case 4:
 cout << "Apr ";
 break;
case 5:
 cout << "May ";
 break;
 default:
 cout <<" Check No ";
 } 
return 0 ;
}
   `
   const codeout3 = `
enter a number 2

Feb 
    `
    const code4 = `
#include <iostream> 
using namespace std; 

int main ()
  { 

int i = 20 ;
switch (i)

  { 

case 10:
 cout << "My case is 10 ";
 break;

case 20:
 cout << "My case is 20 ";
 break;

case 30:
 cout << "My case is 30 ";
 break; 

case 40:
 cout << "My case is 40 ";
 break;

case 50:
 cout << "My case is 50 ";
 break;

 default:
 cout <<" Check No ";
 } 

 return 0 ;
 }
    `
    const codeout4 = `
My case is 20
    `
    const code5 = `
#include <iostream>
using namespace std;

int main() {
char choice = 'b'; // Initialize choice to 'b'

switch (choice) {
 case 'a':
  cout << "You selected option A." << endl;
  break;
 case 'b':
  cout << "You selected option B." << endl;
  break;
 case 'c':
  cout << "You selected option C." << endl;
  break;
 case 'd':
     cout << "You selected option d." << endl;
     break;
 default:
   cout << "Invalid choice." << endl;
   break;
 }
    return 0;
}

`
const codeout5 = `
You selected option B.
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

 
 <title>Master the Art of Switch in C++: A Beginner's Tutorial Guide by CodeExampler</title>
 <meta name="description" content="Switch in C++ tutorial for beginners.switch case in c++ used in multiple conditions having different statements like-if else if,CodeExampler provides Free Online Tutorials for beginners" />
 <meta name="keywords" content="codeexampler,Switch in C++ tutorial for beginners,programming language,tutorial for begineers,learn code in free,c++ programming tutorial for beginners,learn code in free online,switch case in cpp,c++ case statement,cpp switch statement,c++ switch case,c++ switch case example,cpp switch on string,cpp switch string,c++ programming switch statement,c++ programming switch case,cpp switch example,c++ switch default,switch c++ language,c++ switch case string,cpp switch statement string,cpp language switch case" />
 <link rel="canonical" href="https://www.codeexampler.com/cpp-switch" />
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
                  <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>What is Switch Statement in C++:</h1>
                      <div className='text-[#9EB2D2]'>
                          <p>

                          A switch case in C++ is used in multiple conditions with different statements like-if if, but it can check only equality of the condition floating point, but the switch can’t check value.
                          </p>
                         
                      </div>



                      <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>The syntax for Switch statement C++:
                      </h1>

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
                          
                           In this keyword switch inside c++ programming that will yield an integer value, For Example-case1,case2, etc this is an integer constant <br/>
if you do not find any match in this case statements so on that time default statement is executed and Check c++ break Statement
                           </p>
                          
                      </div>


                      <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program to input a no and print month name and if no is two but without a Break? </p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code2} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout2}
              </p>
            </div>


                      <div className='text-[#9EB2D2]'>
                           
                           <p>
                          
                           This program gives output but is not expecting because we did not provide case 3 and the default value.
                           </p>
                          
                      </div>



                      <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Break switch statement:</h1>
                      <div className='text-[#9EB2D2]'>
                           
                           <p>
                          
                           If you want to give the only <span className='font-bold'>case 2</span> statement so using break statement
                           </p>
                          
                      </div>


                      <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program to input a no and print month name, and if no is two, use a break? </p>
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

                        <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-write a program without user input switch case char? </p>
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

                      <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Char values in switch case:</h1>


                      <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-write a program without input use switch case char? </p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code5} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Output :</h1>
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
