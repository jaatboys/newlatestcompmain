import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet  from "react-helmet";
import CsharpNavBar from '../CsharpNav';
import CodeEditorFiled from '../../../CodeEditorFiled/CodeEditorFiled';
import CsharpBar from '../../../sidebars/CsharpBar';

const CSharpInheritance = () => {
    const code1  = `
Teacher IS-A students

this is the Syntax of IS-A relationship in inheritance
    `
    const code2  = `
class students // superclass or parent class 
{
void learn ()
{
Console.WriteLine ("this is a students");
}
}
class teachers extends students // teachers is a child class
{
public static void main (String[]args)
{
teachers t = new teachers();
t.learn();
}
}
    `
    const codeout2  = `
this is a students 
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
  
  <CsharpNavBar/>
  <Helmet>
 
 <title>Master the Art of C# inheritance: A Beginner's Tutorial Guide by CodeExampler</title>
 <meta name="description" content="C# inheritance tutorial for beginners.inheritance in C# is the main concept of oops by which we can create parent and child class.CodeExampler provides Free Online Tutorials for beginners" />
 <meta name="keywords" content="codeexampler,programming language,tutorial for beginners,C# inheritance,c# inheritance for,c sharp inheritance,Inheritance C# tutorial For Begineers" />
 <link rel="canonical" href="https://www.codeexampler.com/csharp-inheritance" />
 </Helmet>


           <main className='max-w-[1440px] mx-auto flex gap-14 justify-between relative py-3 px-4'>
                {/* Python bur component   */}
                <CsharpBar ListActioveMobile={ListActioveMobile} setListActiveMobile={setListActiveMobile}></CsharpBar>
  
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
                    <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>What is inheritance in c#</h1>
                        <div className='text-[#9EB2D2]'>
                            <p>
  
                            1, Inheritance in c# is important because it supports the concept of hierarchical classification
                            </p>
                            <p>
  
                            2, Inheritance is the main concept of oops by which we can create parent and child class.
                            </p>
                            <p>
  
                            3, Inheritance in c# it inherits the property of parent class into child class. This is also known as inheritance
                            </p>
                            <p>
  
                            4, A parent class is a superclass
                            </p>
                       
                       
  
                        </div>
                        <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Advantages and disadvantages of inheritance in c#:</h1>
  
                        <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Advantage of inheritance in C#:</h1>


                        <div className='text-[#9EB2D2]'>
                           
                           <p>
                      
                          1, A child class is a subclass
                           </p>
                           <p>
                      
                          2, The main advantage of inheritance is that we can access the member of the superclass directly (without creating an object).
                      </p>
                      <p>
                      
                      3, Inheritance is code reusability
                      </p>
                      <p>
                      
                     4, Construct can’t inherit in another class because is not the part of the class
                      </p>
                      <p>
                      
                    5, The private method can’t call when child class call superclass inside methods
                      </p>
                      </div>





  
                        <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Disadvantage of inheritance in C#:</h1>


                        <div className='text-[#9EB2D2]'>
                           
                           <p>
                      
                           1, Inheritance give tightly coupled means after use extends between two class are tightly coupled occupy more space or memory
                           </p>
                           <p>
                      
                           2, For the reason of tightly coupled, when you change inside any class so show changes in another class
                      </p>
                   
                      </div>



                      <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Inheritance basics in c#:</h1>



                      <div className='text-[#9EB2D2]'>
                           
                           <p>
                      
                           You can access the member of the superclass directly by the use of extends keyword means subclass adds to the superclass by using extend keyword. and this inheritance in c# interview questions put up in many MNC companies.
                           </p>
                          
                      </div>

                      <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>This is inheritance IS-A relationship in C#:</h1>

                      <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                <div className=' flex gap-2 pl-7 items-center'>
                  <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
                  <div className='mx-1'>
                    <p className='text-lg font-semibold text-[#01B6FF]'>Syntax of inheritance in C#:</p>
                  </div>

                </div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditorFiled code={code1} /> 
</div>





<div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                <div className=' flex gap-2 pl-7 items-center'>
                  <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
                  <div className='mx-1'>
                    <p className='text-lg font-semibold text-[#01B6FF]'>Q-Example of inheritance in C#?</p>
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

<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Types of inheritance in c#:</h1>
<p className='font-bold'>1, Single inheritance in c#</p>
<p className='font-bold'>2, Multilevel inheritance in c#</p>



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

export default CSharpInheritance;