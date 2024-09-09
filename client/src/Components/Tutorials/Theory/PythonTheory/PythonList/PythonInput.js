import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet  from "react-helmet";
import PythonBar from '../../../sidebars/PythonBar';
import PythonNavBar from '../PythonNav';
import CodeEditorFiled from '../../../CodeEditorFiled/CodeEditorFiled';


const code =`
x =(input())
 `

const code1 =`
a = input("Enter a number: ")
print("You Entered: " + a)
   `

  const codeout1 =`
Enter a number: 48
You Entered: 48
   `

const code2 =`
print("Enter First no:")
a = int(input("Enter a number: "))

print("Enter Second no:")
b = int(input("Enter a number: "))

print("Enter Third no:")
c = int(input("Enter a number: "))

sum = a + b + c
print("Sum: ", sum)
  `

  const codeout2 =`
Enter First no:
Enter a number: 1
Enter Second no:
Enter a number: 2
Enter Third no:
Enter a number: 3
Sum:  6
   `

const code3 =`
print("Enter value of P")
a = int(input())

print("Enter value of R")
b = int(input())

print("Enter value of T")
c = int(input())

si = (a * b * c) / 100
print("Simple Interest:", si)
  `

  const codeout3 =`
Enter value of P
1000
Enter value of R
5
Enter value of T
2
Simple Interest: 100.0
  `

const code4 =`
print("Enter value of L")
l = int(input())

print("Enter value of B")
b = int(input())

area = l * b
print("Area: ", area)
  `
  const codeout4 =`
Enter value of L
4
Enter value of B
5
Area: 20
  `

const code5 =`
print("Enter value of R")
r =int(input())
area=3.14*r*r;
print("Area:",area)
  `

  const codeout5 =`
Enter value of R 
  4
Area:50.24
  `

const code6 =`
print("Enter value of A")
a =int(input())
print("Enter value of B")
b =int(input())
print("Enter value of C")
c =int(input())
add=a+b+c;
multiply=a*b*c;
print("Add:",add)
print("Multiple:",multiply)
   `

  const codeout6 =`
Enter value of A 
  2
Enter value of B 
  4
Enter value of C 
  6
Add:12
Multiple:48
  `


const code7 =`
sum=0
for i in range(1,5):
 n=int(input("Enter %i no: "%i))
 sum=sum+n
 print("Sum=%d" %sum)
    `

      const codeout7 =`
Enter 1 no :
  5
Sum:5
Enter 2 no:
  10
Sum:15
Enter 3 no:
  15
Sum:30
Enter 4 no:
  20
Sum:50
  `

const PythonInput = () => {
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

<PythonNavBar/>
<Helmet>

<title>Master the Art of Python Input: A Beginner's Tutorial Guide by CodeExampler</title>
<meta name="description" content="Python Input tutorial for beginners.CodeExampler provides Multiple Programming Examples for Beginners,CodeExampler provides Free Online Tutorials for beginners and questions of all technology like Python tutorial, Python tutorial,Python tutorial for beginners in deeply knowledge With Deeply" />
<meta name="keywords" content="codeexampler,programming language,tutorial for begineers,Input in python,User input in python,python input,python input from user,python input user,python input function,python input integer,python input string,python input keyboard,python input command line,python input from command line,python input list,python input arguments,python input float,python input output,python input command,python input split,python input number,python raw_input vs input,python input text,python input and output,python input example
" />
<link rel="canonical" href="https://www.codeexampler.com/python-input" />
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
                        <button onClick={() => handlePreviousAndNext('previous')} className='hidden lg:flex  text-lg gap-1 text-[#9EB2D2] no-underline '><BsFillArrowLeftCircleFill className='text-4xl mt-1'></BsFillArrowLeftCircleFill> <span className='mt-2'>Previous</span></button>
                        <h1 className='mt-8 font-semibold lg:mt-0 text-3xl  no-underline text-[#01B6FF] capitalize'>{window.location.pathname.replace('/', '').replaceAll('-', ' ')}</h1>
                        <button onClick={() => handlePreviousAndNext('next')} className='hidden lg:flex text-lg gap-1 text-[#9EB2D2] no-underline '><span className='mt-2'>Next</span><BsFillArrowRightCircleFill className='text-4xl mt-1'></BsFillArrowRightCircleFill></button>
                        <div className='flex lg:hidden gap-2 mt-3 lg:mt-0'>
                            <BsFillArrowLeftCircleFill onClick={() => handlePreviousAndNext('previous')} className='text-4xl text-gray-500'></BsFillArrowLeftCircleFill>
                            <BsFillArrowRightCircleFill onClick={() => handlePreviousAndNext('next')} className='text-4xl text-gray-500'></BsFillArrowRightCircleFill>
                        </div>
                    </div>
                    <div className='space-y-3'>
                    <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>   Python input uses to input a value By the user. </h1>


<h2 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Syntax of User input in Python:</h2>




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








<h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Example of User input in python:</h3>

<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
 <p className='text-lg font-semibold text-[#01B6FF]'>Q-User input a no in Python and after Print this no?</p>
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


<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
 <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program to input Three numbers in python and Addition and print the total marks?</p>
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






<h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Example of Simple Intreast in python:</h3>

<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
 <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program to calculate and print simple interest and user input in python?</p>
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


<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
 <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program to find and print area of rectangle in python?</p>
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



<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
 <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program to find out the value of the pi and print area of circle and user input in python?</p>
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


<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
 <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program to 3 subect marks, add all values and also multiply all the values input in python?</p>
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




<h2 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Using for loop in Python input:</h2>

<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
 <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program to input a no and sum by using for loop in python?</p>
</div>

</div>
</div>
<div className='bg-[#1f3040] rounded-b-xl'>
 <CodeEditorFiled code={code7} /> 
</div>

<h4 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h4>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout7}
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
};

export default PythonInput;