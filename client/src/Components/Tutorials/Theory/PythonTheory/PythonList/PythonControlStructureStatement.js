import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet  from "react-helmet";
import PythonBar from '../../../sidebars/PythonBar';
import CodeEditorFiled from '../../../CodeEditorFiled/CodeEditorFiled';
import PythonNavBar from '../PythonNav';



const PythonControlStructureStatement = () => {


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
 
  <title>Master the Art of Python Control structure: A Beginner's Tutorial Guide by CodeExampler</title>
<meta name="description" content="Python Control structure tutorial for beginners.CodeExampler provides Multiple Programming Examples for Beginners,CodeExampler provides Free Online Tutorials for beginners and questions of all technology like Python tutorial,Python tutorial,Python tutorial for beginners in deeply knowledge With Deeply" />
<meta name="keywords" content="codeexampler,programming language,tutorial for begineers,Python control structure,control structure of Python,Python control structures
,control structure in Python,control structure in Pythonscript,types of looping in Python,control structure in Python with example,Python control structures examples" />
<link rel="canonical" href="https://www.codeexampler.com/python-control-structure" />
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
        <div className='space-y-3 p-4 lg:p-2'>


          <div className='text-[#9EB2D2] '>

            <p>
            This program executes according to requirements. The sequence can be changed using the control structure statement. The categories and keywords are given below:
            </p>

          </div>

          <h2 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Conditional statement:</h2>


          <div className='text-[#9EB2D2] '>

            <p>
            <b>The conditional statement is many types in python: </b> <br />
           
            1, If-condition<br />
2, If-else<br />
3, If-else-if<br />
4, Nested if<br />
5, Switch-case<br />
            </p>

          </div>


          <h2 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>python looping (iteration)</h2>
          <div className='text-[#9EB2D2] '>

            <p>
           <b> There are Three types of looping in python: </b> <br />
            
            1, While loop<br />
2, Do-while loop<br />
3, For loop<br />
            </p>

          </div>
         

          <h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Jumping statements in python:</h3>
          <div className='text-[#9EB2D2] '>

            <p>
              <b>python supports only three types of jumping statements in python:</b> <br />

              1, Break<br />
2, Continue<br />
3, Goto<br />

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
  )
}

export default PythonControlStructureStatement
