import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet  from "react-helmet";
import CsharpNavBar from '../CsharpNav';
import CodeEditorFiled from '../../../CodeEditorFiled/CodeEditorFiled';
import CsharpBar from '../../../sidebars/CsharpBar';

const CSharpHistory = () => {
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
  
  <Helmet>
 
 <title>Master the Art of C# History: A Beginner's Tutorial Guide by CodeExampler</title>
 <meta name="description" content="C# History tutorial for beginners.CodeExampler provides Multiple Programming Examples for Beginners,CodeExampler provides Free Online Tutorials for beginners and  questions of all technology like c# tutorial, c# tutorial,c# tutorial for beginners in deeply knowledge With Deeply" />
 <meta name="keywords" content="codeexampler,programming language,tutorial for begineers,C# history,learn code,Learn Programming Tutuorial For Begineers,Learn Programming Online " />
 <link rel="canonical" href="https://www.codeexampler.com/csharp-history" />
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
                    <div className='text-[#9EB2D2]'>
                           
                           <p>
                      
                           1, C# is the first of the programming languages Planned for the Common Language Infrastructure (CLI).
                           </p>
                           <p>
                      
                           2, C# programming languages were designed by Anders Hejlsberg
                      </p>

                      <p>
                      
                      3, C# 8.0 Version Stable Release on 23/09/2019 is the first major specifically targets on .NET Core
                 </p>
                 <p>
                      
                 4, Csharp 9.0 Version Preview Release on 20/05/2020
                 </p>

                      </div>
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
                C# Versions
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
                C# Versions release date
                </th>
               
              </tr>
            </thead>
            <tbody class="bg-gray-700">
              <tr class=" bg-opacity-20  font-medium">
                <td class="pl-4">
                  1
                </td>
                <td class="flex px-6 py-4 whitespace-nowrap">
                  
                    <span class="ml-2 font-medium">	C# Version 1.0</span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                2002
                </td>
               
                </tr>
                <tr className='bg-gray-800 font-medium'>
                  <td class="pl-4 ">
                  2
                </td>
                  <td class="flex px-6 py-4 whitespace-nowrap">
                    
                      <span class="ml-2 ">	C# Version 2.0</span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                   2005
                </td>
                    
                  </tr>
                  <tr className='font-medium'>
                    <td class="pl-4">
                  3
                </td>
                    <td class="flex px-6 py-4 whitespace-nowrap">
                      
                        <span class="ml-2 font-medium">	C# Version 3.0</span>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                2008
                </td>
                      
                    </tr>
                    <tr className='bg-gray-800 font-medium'>
                      <td class="pl-4">
                  4
                </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                        
                          <span class="ml-2 ">	C# Version 4.0</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                      2010
                </td>
                      
                      </tr>

                      <tr className='bg-gray-800 font-medium'>
                      <td class="pl-4">
                  4
                </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                        
                          <span class="ml-2 ">	C# Version 5.0</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                     2012
                </td>
                      
                      </tr>

                      <tr className='bg-gray-800 font-medium'>
                      <td class="pl-4">
                  4
                </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                        
                          <span class="ml-2 ">	C# Version 6.0</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                      2015
                </td>
                      
                      </tr>

                      <tr className='bg-gray-800 font-medium'>
                      <td class="pl-4">
                  4
                </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                        
                          <span class="ml-2 ">C# Version 7.0</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                      2017
                </td>
                      
                      </tr>

                      <tr className='bg-gray-800 font-medium'>
                      <td class="pl-4">
                  4
                </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                        
                          <span class="ml-2 ">C# Version 8.0</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                        23/09/2019
                </td>
                      
                      </tr>

                      <tr className='bg-gray-800 font-medium'>
                      <td class="pl-4">
                  4
                </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                        
                          <span class="ml-2 ">	C# Version 9.0</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                        20/05/2020
                </td>
                      
                      </tr>
                    </tbody>
                  </table>
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
};

export default CSharpHistory;