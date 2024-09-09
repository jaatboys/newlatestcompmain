import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import  Helmet  from "react-helmet";
import CourseArticleHeader from "../../../../Header/CourseArticleHeader";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import PythonBar from "../../../sidebars/PythonBar";
import CodeEditorFiled from "../../../CodeEditorFiled/CodeEditorFiled";
import PythonNavBar from '../PythonNav';

const PythonTypesofVariables = () => {
  const code = `
def display():
  x=100 # local variable
  print(x)
x=20 # global variable
display()
print(x)
 `

  const codeout = `
100
20
 `

  const code1 = `
def display():
  global x
  c=100
  x=100
  print(x)
  x=x+100
x=20
display()
print(x)
  `
  const codeout1 = `
100
200 
  `


  const code2 = `
>>> 1 + 2.0 = 3.0
>>> int(2.0) = 2
>>> float(20) = 20.0
>>> print('2.5' + '4.5') = 2.5 4.5
>>> print(2.5 + float('4.0')) = 6.5
 `


  const code3 = `
print(1.1 + 2.2) = 3.300000000000003
  print('1.1' + '2.2') = 1.1 2.2
  `


  const code4 = `
import math
print(math.pi)
    OR
print(math.sqrt(16))
 `

const codeout4 = `
3.141592653589793
4.0
 `

  const [ListActioveMobile, setListActiveMobile] = useState(false);

  //previous and next button action functin start
  const list = JSON.parse(localStorage.getItem("list"));
  const pathname = window.location.pathname.replace("/", "");
  const handlePreviousAndNext = (condition) => {
    if (condition === "previous") {
      if (list.indexOf(pathname) !== 0) {
        window.location.pathname = `/${list[list.indexOf(pathname) - 1]}`;
      }
    } else {
      if (list.indexOf(pathname) !== list.length) {
        window.location.pathname = `/${list[list.indexOf(pathname) + 1]}`;
      }
    }
  };
  //previous and next button action functin end

  return (
    <div className=" bg-[#1E2736] text-[#9EB2D2] min-h-screen font-Poppins">
      
      <PythonNavBar/>
<Helmet>
 
  <title>Master the Art of Python Types of Variables: A Beginner's Tutorial Guide by CodeExampler</title>
<meta name="description" content="Python Type of variable tutorial for beginners.CodeExampler provides Multiple Programming Examples for Beginners,CodeExampler provides Free Online Tutorials for beginners and questions of all technology like Python tutorial, Python tutorial,Python tutorial for beginners in deeply knowledge With Deeply" />
<meta name="keywords" content="codeexampler,programming language,Math function in Python,local variable in python,Global variable in python,tutorial for begineers,Type of variable in python,How to get type of variable in python,How to Check type of variable in python,How to find type of variable in python" />
<link rel="canonical" href="https://www.codeexampler.com/python-types-of-variable/" />
</Helmet>
      
      <main className="max-w-[1440px] mx-auto flex gap-14 justify-between relative py-3 px-4">
        {/* Python bur component   */}
        <PythonBar
          ListActioveMobile={ListActioveMobile}
          setListActiveMobile={setListActiveMobile}
        ></PythonBar>

        <div className="w-full relative ">
          {/* only mobile mode show */}
          <button
            onClick={() => setListActiveMobile(!ListActioveMobile)}
            className="absolute -top-3 left-0 bg-[#01B6FF] rounded-br-2xl rounded-bl-2xl p-2.5 lg:hidden text-white"
          >
            All Topics
          </button>
          {/* ----------------- */}
          <div className="flex justify-between mt-3">
            <div className="block lg:hidden"></div>
            <button
              onClick={() => handlePreviousAndNext("previous")}
              className="hidden lg:flex  text-lg gap-1 text-[#9EB2D2] no-underline "
            >
              <BsFillArrowLeftCircleFill className="text-4xl mt-1"></BsFillArrowLeftCircleFill>{" "}
              <span className="mt-2">Previous</span>
            </button>
            <p className="mt-3 lg:mt-0 text-3xl  no-underline text-[#01B6FF] capitalize">
              {window.location.pathname.replace("/", "").replaceAll("-", " ")}
            </p>
            <button
              onClick={() => handlePreviousAndNext("next")}
              className="hidden lg:flex text-lg gap-1 text-[#9EB2D2] no-underline "
            >
              <span className="mt-2">Next</span>
              <BsFillArrowRightCircleFill className="text-4xl mt-1"></BsFillArrowRightCircleFill>
            </button>
            <div className="flex lg:hidden gap-2 mt-3 lg:mt-0">
              <BsFillArrowLeftCircleFill
                onClick={() => handlePreviousAndNext("previous")}
                className="text-4xl text-gray-500"
              ></BsFillArrowLeftCircleFill>
              <BsFillArrowRightCircleFill
                onClick={() => handlePreviousAndNext("next")}
                className="text-4xl text-gray-500"
              ></BsFillArrowRightCircleFill>
            </div>
          </div>
          <div className="space-y-3">
          <h2 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>
              How to get the type of variable in python
            </h2>

            <p className="font-bold">
              There are two types of Variables are 2 Types in Python:
            </p>
             <h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>
              1, Local Variable in Python <br />
              2, Global Variable in python
            </h3>
            <p className="font-bold">1,Local Variable in Python:</p>

            <div className="text-[#9EB2D2]">
              <p>
                Local Variable in Python are defined inside a function and can’t
                be used from outside that function.
              </p>
            </div>

         
            <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
                    <h2 className='text-lg font-semibold text-[#01B6FF]'>
                      Python Variable Declaration Syntax
                    </h2>
                  </div>
                </div>
              </div>
              <div className="bg-[#1f3040] rounded-b-xl">
                <CodeEditorFiled code={code} />
              </div>
               <h4 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h4>
               
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout}
              </p>
            </div>


        

            <h2 className="font-bold">2, Global Variable in Python:</h2>
            <div className="text-[#9EB2D2]">
              <p>
                Global Variable in Python are defined from outside the function
                and can be used anywhere in the program. The initial value will
                be zero and the global keyword is used to a defined variable as
                global
              </p>
            </div>

            <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
                  <p className='text-lg font-semibold text-[#01B6FF]'>
                    Global Variable in Python Example:
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#1f3040] rounded-b-xl">
              <CodeEditorFiled code={code1} />
            </div>
            
             <h4 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h4>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout1}
              </p>
            </div>


          </div>
          <br />


          <p className="font-bold">Type of Conversion in Python:</p>
          <br />

          <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
                <p className='text-lg font-semibold text-[#01B6FF]'>
                  Type of Conversion in Python:
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#1f3040] rounded-b-xl">
            <CodeEditorFiled code={code2} />
          </div>

       


          <h3 className="font-bold">Python Decimal</h3>

          <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
                <p className='text-lg font-semibold text-[#01B6FF]'>
                  Type of Conversion in Python:
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#1f3040] rounded-b-xl">
            <CodeEditorFiled code={code3} />
          </div>

    


          <h3 className="font-bold">Import Math function in Python:</h3>

          <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
                <p className='text-lg font-semibold text-[#01B6FF]'>
                  Type of Conversion in Python:
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#1f3040] rounded-b-xl">
            <CodeEditorFiled code={code4} />
          </div>

          
           <h4 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h4>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout4}
              </p>
            </div>

            <div className='flex justify-between mx-6 sm:mx-12 mt-3 mb-3'>

<button onClick={() => handlePreviousAndNext('previous')} className=' flex  text-lg gap-1 text-[#9EB2D2] no-underline '><BsFillArrowLeftCircleFill className='text-4xl mt-1'></BsFillArrowLeftCircleFill> <span className='mt-2'>Previous</span></button>
<button onClick={() => handlePreviousAndNext('next')} className=' flex text-lg gap-1 text-[#9EB2D2] no-underline '><span className='mt-2'>Next</span><BsFillArrowRightCircleFill className='text-4xl mt-1'></BsFillArrowRightCircleFill></button>

</div>

        </div>
      </main>
    </div>
  );
};

export default PythonTypesofVariables;
