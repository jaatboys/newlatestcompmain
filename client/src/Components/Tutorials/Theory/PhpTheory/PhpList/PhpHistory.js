import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet  from "react-helmet";
import PhpBar from '../../../sidebars/PhpBar'; 
import PhpNavBar from '../PhpNav';

export default function PhpHistory() {
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

      
<PhpNavBar/>
<Helmet>
 
<title>Master the Art of PHP History: A Beginner's Tutorial Guide by CodeExampler</title>
<meta name="description" content="Explore the evolution of PHP through CodeExampler's free online tutorials for beginners. Get a deep understanding of PHP's release and version history, and enhance your programming skills with our multiple programming examples. Access all the knowledge you need to master PHP history today!" />
<meta name="keywords" content="codeexampler,tutorial for begineers,php version history,history of php programming language,php history in hindi,brief history of php pdf" />
<link rel="canonical" href="https://www.codeexampler.com/php-history" />
</Helmet>

         <main className='max-w-[1440px] mx-auto flex gap-14 justify-between relative py-3 px-4'>
              {/* Python bur component   */}
              <PhpBar ListActioveMobile={ListActioveMobile} setListActiveMobile={setListActiveMobile}></PhpBar>

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
    1, Php programming languages were designed by Rasmus Lerdorf in 1994. <br />
    2, Php 8.0 Version Present Release on 26/11/2020. <br />
    3, Php implementation "Personal Home Page/Forms Interpreter" or PHP/FI.
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
                PHP Versions
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
                PHP Versions release date
                </th>
               
              </tr>
            </thead>
            <tbody class="bg-gray-700">
              <tr class=" bg-opacity-20  font-medium">
                <td class="pl-4">
                  1.0
                </td>
                <td class="flex px-6 py-4 whitespace-nowrap">
                  
                    <span class="ml-2 font-medium">	Php Version 1.0</span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                  08/06/1995
                </td>
               
                </tr>
                <tr className='bg-gray-800 font-medium'>
                  <td class="pl-4 ">
                  2.0
                </td>
                  <td class="flex px-6 py-4 whitespace-nowrap">
                    
                      <span class="ml-2 ">	Php Version 2.0</span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                    01/11/1997
                </td>
                    
                  </tr>
                  <tr className='font-medium'>
                    <td class="pl-4">
                  3.0
                </td>
                    <td class="flex px-6 py-4 whitespace-nowrap">
                      
                        <span class="ml-2 font-medium">Php Version 3.0</span>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                      6/06/1998
                </td>
                      
                    </tr>
                    <tr className='bg-gray-800 font-medium'>
                      <td class="pl-4">
                  4.0
                </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                        
                          <span class="ml-2 ">Php Version 4.0</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                        22/05/2000
                </td>
                      
                      </tr>

                      <tr className=' font-medium'>
                      <td class="pl-4">
                  4.1
                </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                        
                          <span class="ml-2 ">	Php Version 4.1</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                    	10/12/2001
                </td>
                      
                      </tr>

                      <tr className='bg-gray-800 font-medium'>
                      <td class="pl-4">
                  4.2
                </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                        
                          <span class="ml-2 ">Php Version 4.2</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                        22/04/2020
                </td>
                      
                      </tr>
                      <tr className=' font-medium'>
                      <td class="pl-4">
                  4.3
                </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                        
                          <span class="ml-2 ">Php Version 4.3</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                        27/12/2002
                </td>
                      
                      </tr>

                      <tr className='bg-gray-800 font-medium'>
                      <td class="pl-4">
                  4.4
                </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                        
                          <span class="ml-2 ">Php Version 4.4</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                        11/07/2005
                </td>
                      
                      </tr>


                      <tr className=' font-medium'>
                      <td class="pl-4">
                  5.0
                </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                        
                          <span class="ml-2 ">Php Version 5.0</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                        13/07/2004
                </td>
                      
                      </tr>

                      <tr className='bg-gray-800 font-medium'>
                      <td class="pl-4">
                  5.1
                </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                        
                          <span class="ml-2 ">Php Version 5.1</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                        24/11/2005
                </td>
                      
                      </tr>

                      <tr className=' font-medium'>
                      <td class="pl-4">
                  5.2
                </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                        
                          <span class="ml-2 ">Php Version 5.2</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                    	02/11/2006
                </td>
                      
                      </tr>

                      <tr className='bg-gray-800 font-medium'>
                      <td class="pl-4">
                  5.3
                </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                        
                          <span class="ml-2 ">Php Version 5.3</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                        30/06/2009
                </td>
                      
                      </tr>

                      <tr className=' font-medium'>
                      <td class="pl-4">
                  5.4
                </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                        
                          <span class="ml-2 ">Php Version 5.4</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                        01/03/2012
                </td>
                      
                      </tr>

                      <tr className='bg-gray-800 font-medium'>
                      <td class="pl-4">
                  5.5
                </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                        
                          <span class="ml-2 ">Php Version 5.5</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                        20/07/2013
                </td>
                      
                      </tr>

                      
            

                      
                      <tr className=' font-medium'>
                      <td class="pl-4">
                  5.6
                </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                        
                          <span class="ml-2 ">Php Version 5.6</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                        28/08/2014

                </td>
                      
                      </tr>

                      
                      <tr className='bg-gray-800 font-medium'>
                      <td class="pl-4">
                  6.x
                </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                        
                          <span class="ml-2 ">Php Version 6.x</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                        N/A
                </td>
                      
                      </tr>

                      
                      <tr className=' font-medium'>
                      <td class="pl-4">
                  7.0
                </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                        
                          <span class="ml-2 ">Php Version 7.0</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                        03/12/2015
                </td>
                      
                      </tr>

                      
                      <tr className='bg-gray-800 font-medium'>
                      <td class="pl-4">
                 7.1
                </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                        
                          <span class="ml-2 ">Php Version 7.1</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                        01/12/2016
                </td>
                      
                      </tr>
                      
                      <tr className=' font-medium'>
                      <td class="pl-4">
                  7.2
                </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                        
                          <span class="ml-2 ">Php Version 7.2</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                        30/11/2017
                </td>
                      
                      </tr>


                      
                      <tr className='bg-gray-800 font-medium'>
                      <td class="pl-4">
                 7.3
                </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                        
                          <span class="ml-2 ">	Php Version 7.3</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                        06/12/2018
                </td>
                      
                      </tr>

                      
                      <tr className=' font-medium'>
                      <td class="pl-4">
                7.4
                </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                        
                          <span class="ml-2 ">Php Version 7.4</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                        28/11/2019
                </td>
                      
                      </tr>

                      <tr className='bg-gray-800 font-medium'>
                      <td class="pl-4">
                8.0
                </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                        
                          <span class="ml-2 ">Php Version 8.0</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                        26/11/2020
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
<button onClick={() => handlePreviousAndNext('next')} className=' flex text-lg gap-1 text-[#9EB2D2] no-underline '><span className='mt-2'>Next</span><BsFillArrowRightCircleFill className='text-4xl mt-1'></BsFillArrowRightCircleFill></button>

</div>


</div>

</div>

</main>
</div>
);
}
