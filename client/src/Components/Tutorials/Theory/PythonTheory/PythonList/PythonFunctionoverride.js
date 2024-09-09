import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet  from "react-helmet";
import PythonBar from '../../../sidebars/PythonBar';
import CodeEditorFiled from '../../../CodeEditorFiled/CodeEditorFiled';
import PythonNavBar from '../PythonNav';

const PythonFunctionoverride = () => { 

    const code1 = `
class a:
  def over(self):
    print("This is a")
        
class b(a):
  def over(self):
    print("This is b")
        
Obj = b()
Obj.over()
    `
    const codeout1 = `
This is b
    `

    const code2 = `
class Animal:
    def make_sound(self):
        print("Dog and Cat animal makes a sound")

class Dog(Animal):
    def make_sound(self):
        print("The dog Make barks Sound")

class Cat(Animal):
    def make_sound(self):
        print("The cat Make meows Sound")

a = Animal()
d = Dog()
c = Cat()

a.make_sound()  # Output: The animal makes a sound
d.make_sound()  # Output: The dog barks
c.make_sound()  # Output: The cat meows
    `
    const codeout2 = `
Dog and Cat animal makes a sound
The dog Make barks Sound
The cat Make meows Sound
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

<PythonNavBar/>
<Helmet>
 
  <title>Master the Art of Python overriding: A Beginner's Tutorial Guide by CodeExampler</title>
<meta name="description" content="Python Function overriding tutorial for beginners.Python override method used to override 2-3 or more child classes with the same name but different Work and child Class Access properties with parent function properties." />
<meta name="keywords" content="codeexampler,programming language,tutorial for begineers,Function overriding in Python,Function overloading in Python example,python override method" />
<link rel="canonical" href="https://www.codeexampler.com/python-function-overriding" />
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

                            Python override method used to override 2-3 or more child classes with the same name but different Work and child Class Access properties with parent function properties.
                            </p>

                        </div>
                       

                        <div>
                        <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Python override method Example? </p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code1} />
</div>
<h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Output :</h3>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout1}
              </p>
            </div>

            </div>




            <div>
                        <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Python override Animal make_sound method Example? </p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code2} />
</div>
<h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Output :</h3>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout2}
              </p>
            </div>

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

export default PythonFunctionoverride;