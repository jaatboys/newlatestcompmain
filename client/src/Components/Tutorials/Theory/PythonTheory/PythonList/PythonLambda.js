import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet  from "react-helmet";
import PythonBar from '../../../sidebars/PythonBar';
import CodeEditorFiled from '../../../CodeEditorFiled/CodeEditorFiled';
import PythonNavBar from '../PythonNav';
const code =`
def mother ():
  return("maa")
print(mother())`

  const codeout =`
maa 
 `


  const code1 =`
def even_no (n):
  if (n%2==0):
    return True
  else :
    return False
print(even_no(6))
  `

  const codeout1 =`
True
  `

  const code2 =`
def even_no (n):
  return n%2==0
if even_no (9):
  print("Even")
else :
  print("Odd")
  `

  const codeout2 =`
Odd
  `

  const code3 =`
def lord (name):
  print(name)
God = lambda x = "ram": lord(x)
God()
  `

  const codeout3 =`
Ram
  `

  const code4 =`
value = lambda n : n%2==0
print(value(8))
  `

  const codeout4 =`
True
  `

  const code5 =`
Names = ['Ram','Lakshman','Bharat']
  `

  const code6 =`
Number = lambda n : n*n
print(Number(8))
  `

  const codeout6 =`
64
  `

  const code7 =`
map(func, *iterables)
  `

  const code8 =`
city = ['varanasi','ayodhya','Mathura']
capital_city = [ ]
for c in city :
  large_city = c.upper()
  capital_city.append(large_city)
  print(capital_city)
    `

  const codeout8 =`
['VARANASI']
['VARANASI','AYODHYA']
['VARANASI','AYODHYA','MATHURA']
  `

  const code9 =`
from functools import reduce
add = reduce(lambda a , x : a+x, [10,20,50,20])
print(add)
  `

  const codeout9 =`
100
  `

  const code10 =`
no = [1,2,3,4,5,6,7,8,9,10]
even = tuple(filter(lambda a : a%2==0,no))
odd = tuple(filter(lambda a : a%2!=0,no))
print(even)
print(odd)
  `

  const codeout10 =`
(2,4,6,8,10)
(1,3,5,7,9) 
  `


const PythonLambda = () => {
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
 
  <title>Master the Art of Python Lambda: A Beginner's Tutorial Guide by CodeExampler</title>
<meta name="description" content="Python lambda tutorial for beginners Python Lambda function examples use return in simple forma and Python lambda function(inline/anonymous)" />
<meta name="keywords" content="codeexampler,programming language,tutorial for begineers,Python lambda,Python Lambda map,Python Lambda function example,
,Python lambda keyword" />
<link rel="canonical" href="https://www.codeexampler.com/python-lambda" />
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
                    <div className='text-[#9EB2D2]'>
                           
                           <p>
                      
                           Python lambda keyword creates the inline function.
                           </p>
                          
                      </div>



                      <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                <div className=' flex gap-2 pl-7 items-center'>
                  <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
                  <div className='mx-1'>
                    <p className='text-lg font-semibold text-[#01B6FF]'>Q-Python Lambda Mother Function() function examples?</p>
                  </div>

                </div>
</div>
<div className='bg-[#1f3040] rounded-b-xl'>
             <CodeEditorFiled code={code} /> 
</div>


<h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h3>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout}
              </p>
            </div>



<div className='text-[#9EB2D2]'>
                           
                           <p>
                      
                           That creates an inline function with the name mother that returns ‘maa’. <br />
Lambda can take arguments:
                           </p>
                          
                      </div>



                      <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                <div className=' flex gap-2 pl-7 items-center'>
                  <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
                  <div className='mx-1'>
                    <p className='text-lg font-semibold text-[#01B6FF]'>Q-Python Lambda function with If Else Examples?</p>
                  </div>

                </div>
</div>
<div className='bg-[#1f3040] rounded-b-xl'>
              <CodeEditorFiled code={code1} /> 
</div>


<h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h3>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout1}
              </p>
            </div>



<h2 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>But in Python Form:</h2>


<p className='font-bold'>Python Lambda function examples use Return.</p>


<div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
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


<h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h3>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout2}
              </p>
            </div>




<h2 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Call function with an argument from inside a Python lambda function:</h2>


<div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
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


<h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h3>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout3}
              </p>
            </div>


<div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                <div className=' flex gap-2 pl-7 items-center'>
                  <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
                  <div className='mx-1'>
                    <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a Program if n value 0 after divide by 2 so Show True Check Python Lambda function examples use Return in the simple form.</p>
                  </div>

                </div>
</div>
<div className='bg-[#1f3040] rounded-b-xl'>
               <CodeEditorFiled code={code4} /> 
</div>


<h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h3>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout4}
              </p>
            </div>


<div className='text-[#9EB2D2]'>
                           
     <p>

     Lambda inline function is helpful because it contains only one expression.
     </p>
    
</div>





<h2 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Python lambda Enumerate() function:</h2>


<div className='text-[#9EB2D2]'>
                           
     <p>

     Python lambda Enumerate() function are generally used with for loop to track the position of our item.
     </p>
    
</div>



<h2 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Python Lambda Enumerate() function examples use return.</h2>


<div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
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
               <CodeEditorFiled code={code5} /> 
</div>





<h2 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Python Lambda Function:</h2>


<div className='text-[#9EB2D2]'>
                           
     <p>

     The parameters of the lambda are known as the left of the colon. The function body is defined as the right of the colon.
     </p>
    
</div>




<div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                <div className=' flex gap-2 pl-7 items-center'>
                  <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
                  <div className='mx-1'>
                    <p className='text-lg font-semibold text-[#01B6FF]'>Q-Python Lambda Map() function examples?</p>
                  </div>

                </div>
</div>
<div className='bg-[#1f3040] rounded-b-xl'>
                 <CodeEditorFiled code={code6} /> 
</div>


<h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h3>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout6}
              </p>
            </div>


<h2 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Python Lambda Map ()Function:</h2>


<div className='text-[#9EB2D2]'>
                           
     <p>

     Map() function this function is iterable, and also map takes a function and a collection of items, and it returns the new collections. <br />
In the map, functions take two arguments:<br />
1, iterable<br />
2, function<br />
     </p>
    
</div>





<h2 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Python Lambda built-in list() function</h2>


<div className='text-[#9EB2D2]'>
                           
     <p>

     the built-in list() function can be called on the map object .so I make a list(iterable)
     </p>
    
</div>




<h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Python Lambda Map() function examples use return.</h3>


<div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
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
               <CodeEditorFiled code={code7} />
</div>






<div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                <div className=' flex gap-2 pl-7 items-center'>
                  <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
                  <div className='mx-1'>
                    <p className='text-lg font-semibold text-[#01B6FF]'>Q-Python Lambda Map() function firstly Capital Size and after append examples?</p>
                  </div>

                </div>
</div>
<div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code8} /> 
</div>


<h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h3>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout8}
              </p>
            </div>





<h2 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Python lambda reduce () function:</h2>


<div className='text-[#9EB2D2]'>
                           
     <p>

     Python lambda reduce is a collection of items, and also it returns the sum of all items inside the group.
     </p>
    
</div>




<div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                <div className=' flex gap-2 pl-7 items-center'>
                  <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
                  <div className='mx-1'>
                    <p className='text-lg font-semibold text-[#01B6FF]'>Q-Python Lambda() reduce() function examples?</p>
                  </div>

                </div>
</div>
<div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code9} /> 
</div>


<h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h3>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout9}
              </p>
            </div>




<h2 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Python lambda Filter() Function :</h2>


<div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
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
              <CodeEditorFiled code={code10} /> 
</div>


<h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h3>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout10}
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

export default PythonLambda;