import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet  from "react-helmet";
import PythonBar from '../../../sidebars/PythonBar';
import PythonNavBar from '../PythonNav';

import CodeEditorFiled from '../../../CodeEditorFiled/CodeEditorFiled';


const code =`
variable-name = assigned value
  x = 5
  x is a Variable Name
  = is a Assignment Operator
  5 is a Assigned Value to the Variable Name `

  const code1 =`
a = 10
b = 20
c = 30
d = 40
print(a + b + c + d)
  ` 

  const codeout1 =`
100
 ` 

  const code2 =`
a=10
a+=40
a=a+20
print(a)
  `

  const codeout2 =`
70` 

  const code3 =`
a=40
print(a)
 `

  const codeout3 =`
40
 ` 

  const code4 =`
a="Ram"
b="Lakshman"
print(a+" "+b)
 `

  const codeout4 =`
Ram Lakshman
 ` 


  const code5 =`
a="Ram"
b="Lakshman"
c="my name is a codeexampler 160208"
print(a+" "+b+" "+c)
 ` 

  const codeout5 =`
Ram Lakshman my name is a codeexampler 160208
 ` 


const PythonVariables = () => {
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




    return (
        <div className=' bg-[#1E2736] text-[#9EB2D2] min-h-screen font-Poppins'>
     <PythonNavBar/>
<Helmet>
 
  <title>Master the Art of Python Variables: A Beginner's Tutorial Guide by CodeExampler</title>
<meta name="description" content="Learn Free Python Variables Beginners Tutorials CodeExampler.Variable is the name of a memory location in which we can store the value" />
<meta name="keywords" content="codeexampler,programming language,tutorial for begineers,Python variables,add python values,python class variables,python increment variables,python global variables, Python variable class ,Python variable declaration ,Python variable exercises ,Python variable global,Python variable" />
<link rel="canonical" href="https://www.codeexampler.com/python-variables/"/>
</Helmet>



           <main className='max-w-[1440px] mx-auto flex gap-14 justify-between relative py-3 px-4'>
                {/* Python bur component   */}
                <PythonBar ListActioveMobile={ListActioveMobile} setListActiveMobile={setListActiveMobile}></PythonBar>

                <div className='w-full relative '>
                    {/* only mobile mode show */}
                    <button onClick={() => setListActiveMobile(!ListActioveMobile)} className='absolute -top-3 left-0 bg-[#01B6FF] rounded-br-2xl rounded-bl-2xl p-2.5 lg:hidden text-white'>All Topics</button>
                    {/* ----------------- */}
                    <div className='flex justify-between mt-3'>
                        <div className='block lg:hidden'>

                        </div>
                        <button className='hidden lg:flex  text-lg gap-1 text-[#9EB2D2] no-underline '></button>
                        <h1 className='mt-8 font-semibold lg:mt-0 text-3xl  no-underline text-[#01B6FF] capitalize'>{window.location.pathname.replace('/', '').replaceAll('-', ' ')}</h1>
                        <a href='/python-types-of-variables'  className='hidden lg:flex text-lg gap-1 text-[#9EB2D2] no-underline '><span className='mt-2'>Next</span><BsFillArrowRightCircleFill className='text-4xl mt-1'></BsFillArrowRightCircleFill></a>
                        <div className='flex lg:hidden gap-2 mt-3 lg:mt-0'>
                            {/*<BsFillArrowLeftCircleFill onClick={() => handlePreviousAndNext('previous')} className='text-4xl text-gray-500'></BsFillArrowLeftCircleFill>*/}
                            <button> </button>
                            <a href="/python-types-of-variables">

                            <BsFillArrowRightCircleFill onClick={() => handlePreviousAndNext('next')} className='text-4xl text-gray-500'></BsFillArrowRightCircleFill>
                            </a>
                        </div>
                    </div>
                    <div className='space-y-3'>
                        <h2 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>What is Python Variable and how is Python variable declaration ?</h2>
                        <div className='text-[#9EB2D2]'>
                            <p>

                                1. Variable is the name of a memory location in which we can store the value
                            </p>
                            <p>

                                2. python variable can change the variable value
                            </p>
                            <p>

                                3. A variable is defined by combining an identifier, data types, and an initializer.
                            </p>
                            <p>

                                4. The first character in the variable name must be an alphabet, underscore, a
                            </p>
                            digit, or a dollar sign.
                            <p>

                                5. All variables have a scope
                            </p>
                            <p>

                                6. The identifier is the name of the variable
                            </p>
                            <p>

                                7.  Commas or blanks not used inside a variable name
                            </p>

                        </div>
                        <h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Python Variable Declaration Syntax:
                        </h3>

                        <div>
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
              <CodeEditorFiled code={code} /> 
              </div>
            </div>

          



                        <h2 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Addition of Variables Examples:</h2>
                        <div>
                        <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
                        <div className=' flex gap-2  sm:pl-7 items-center'>
                   <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
                   <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
                   <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
                    <div className='mx-1'>
                    <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a Program Add 4 variables in Python?</p>
                  </div>

                </div>

              </div>
              <div className='bg-[#1f3040] rounded-b-xl'>
          <CodeEditorFiled code={code1} />
              </div>
            </div>
            <h4 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h4>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout1}
              </p>
            </div>
      

            <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Variable increment values in Python?</p>
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
                     

            <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Create a variable and store and inside this variable and print output?</p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditorFiled code={code3} />
</div>
<h4 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h4>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout3}
              </p>
            </div>


            <h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Create Variable String Type:</h3>

            <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Create a string variable and store a no inside string type variable and print output?</p>
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

            <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Another String type Example:</h1>

            <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Create a string variable and store a no inside string type variable and print output?</p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditorFiled code={code5} />
</div>
<h4 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output:</h4>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout5}
              </p>
            </div>


                    
                    </div>

                </div>

            </main>
        </div>
    );
};

export default PythonVariables;