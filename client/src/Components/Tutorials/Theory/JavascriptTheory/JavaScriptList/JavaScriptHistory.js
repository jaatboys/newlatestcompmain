import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import JsNavBar from '../JavaScriptNav';
import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet  from "react-helmet";

import JavaScriptBar from '../../../sidebars/JavaScriptBar';

export default function JavaScriptHistory() {
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
<JsNavBar/>
<Helmet>
 
<title>Master the Art of JavaScript History: A Beginner's Tutorial Guide by CodeExampler</title>
<meta name="description" content="Javascript History tutorial for beginners.CodeExampler provides javascript tutorial Multiple Programming Examples for Beginners,CodeExampler provides Free Online Tutorials for beginners and questions of all technology like Javascript tutorial, Javascript tutorial,Javascript tutorial for beginners in deeply knowledge With Deeply" />
<meta name="keywords" content="codeexampler,tutorial for begineers,Javascript history,javascript history,history of javascript,javascript Introduction" />
<link rel="canonical" href="https://www.codeexampler.com/javascript-history" />
</Helmet>

         <main className='max-w-[1440px] mx-auto flex gap-14 justify-between relative py-3 px-4'>
              {/* Python bur component   */}
              <JavaScriptBar ListActioveMobile={ListActioveMobile} setListActiveMobile={setListActiveMobile}></JavaScriptBar>

              <div className='w-full relative '>
                  {/* only mobile mode show */}
                  <button onClick={() => setListActiveMobile(!ListActioveMobile)} className='absolute -top-3 left-0 bg-[#01B6FF] rounded-br-2xl rounded-bl-2xl p-2.5 lg:hidden text-white'>All Topics</button>
                  {/* ----------------- */}
                  <div className='flex justify-between mt-3'>
                      <div className='block lg:hidden'>

                      </div>
                      <button onClick={() => handlePreviousAndNext('previous')} className='hidden lg:flex  text-lg gap-1 text-[#9EB2D2] no-underline '><BsFillArrowLeftCircleFill className='text-4xl mt-1'></BsFillArrowLeftCircleFill> <span className='mt-2'>Previous</span></button>
                        <h1 className='mt-8 font-semibold lg:mt-0 text-3xl  no-underline text-[#01B6FF] capitalize'>{window.location.pathname.replace('/', '').replaceAll('-', ' ')}</h1>
                        <button onClick={() => handlePreviousAndNext('next')} className='hidden lg:flex text-lg gap-1 text-[#9EB2D2] no-underline '></button>
                        <div className='flex lg:hidden gap-2 mt-3 lg:mt-0'>
                            <BsFillArrowLeftCircleFill onClick={() => handlePreviousAndNext('previous')} className='text-4xl text-gray-500'></BsFillArrowLeftCircleFill>
                            {/* <BsFillArrowRightCircleFill onClick={() => handlePreviousAndNext('next')} className='text-4xl text-gray-500'></BsFillArrowRightCircleFill> */}
                            <button> </button>
                        </div>
                    </div>
                  <div className='space-y-3'>
                  <div className='text-[#9EB2D2]'>

<p>

    1, Javascript programming languages were designed by Brendan Eich <br />
    2, Javascript ECMAScript 1 (1997) or ES1 Version Release on 1997 is the first version or Edition of javascript <br />
    3, At Present use ES9 Version in javascript <br />
    4, JavaScript is primarily a client-side language, meaning it runs on your computer within your browser. <br />
</p>

</div>

<div class="flex flex-col lg:mr-20 md:mr-12 sm-mr-10 mr-0 justify-center  ">
  <div class="flex flex-col mt-6">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden sm:rounded-lg">
          <table class="min-w-full text-sm text-gray-400">
            <thead class="bg-gray-800 text-xs uppercase font-medium">
              <tr>
                <th></th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
                JavaScript Versions
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
                JavaScript Versions release date
                </th>
               
              </tr>
            </thead>
            <tbody class="bg-gray-700">
              <tr class=" bg-opacity-20  font-medium">
                <td class="pl-4">
                  1
                </td>
                <td class="flex px-6 py-4 whitespace-nowrap">
                  
                    <span class="ml-2 font-medium">Javascript Version ES1</span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                  1997
                </td>
               
                </tr>
                <tr className='bg-gray-800 font-medium'>
                  <td class="pl-4 ">
                  2
                </td>
                  <td class="flex px-6 py-4 whitespace-nowrap">
                    
                      <span class="ml-2 ">	Javascript Version ES2</span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                    1998
                </td>
                    
                  </tr>
                  <tr className='font-medium'>
                    <td class="pl-4">
                  3
                </td>
                    <td class="flex px-6 py-4 whitespace-nowrap">
                      
                        <span class="ml-2 font-medium">Javascript Version ES3</span>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                  1999
                </td>
                      
                    </tr>
                    <tr className='bg-gray-800 font-medium'>
                      <td class="pl-4">
                  4
                </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                        
                          <span class="ml-2 ">Javascript Version ES4</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                        Rejected
                </td>
                      
                      </tr>

                      <tr className=' font-medium'>
                      <td class="pl-4">
                  5
                </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                        
                          <span class="ml-2 ">Javascript Version ES5</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                        2009
                </td>
                      
                      </tr>

                      <tr className='bg-gray-800 font-medium'>
                      <td class="pl-4">
                  6
                </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                        
                          <span class="ml-2 ">Javascript Version ES6</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                        2015
                </td>
                      
                      </tr>
                      <tr className=' font-medium'>
                      <td class="pl-4">
                  7
                </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                        
                          <span class="ml-2 ">Javascript Version ES7</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                        2016
                </td>
                      
                      </tr>

                      <tr className='bg-gray-800 font-medium'>
                      <td class="pl-4">
                  8
                </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                        
                          <span class="ml-2 ">Javascript Version ES8</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                        2017
                </td>
                      
                      </tr>


                      <tr className=' font-medium'>
                      <td class="pl-4">
                  9
                </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                        
                          <span class="ml-2 ">Javascript Version ES9</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                        2018
                </td>
                      
                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        
        </div>



        <div className='flex justify-between mx-6 sm:mx-12 mt-3 mb-3'>

                        <button onClick={() => handlePreviousAndNext('previous')} className=' flex  text-lg gap-1 text-[#9EB2D2] no-underline '><BsFillArrowLeftCircleFill className='text-4xl mt-1'></BsFillArrowLeftCircleFill> <span className='mt-2'>Previous</span></button>
                        <div></div>

                    </div>

</div>




</div>




</main>
</div>
);
}
