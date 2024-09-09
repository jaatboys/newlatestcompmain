import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet  from "react-helmet";
import PythonBar from '../../../sidebars/PythonBar';
import PythonNavBar from '../PythonNav';

const PythonHistory = () => {
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
 
<title>Master the Art of Python History: A Beginner's Tutorial Guide by CodeExampler</title>
<meta name="description" content="Python history tutorial for beginners CodeExampler and Python is a powerful high-level object-oriented language programming language created by Guido Van Rossum" />
<meta name="keywords" content="codeexampler,programming language,tutorial for begineers,Python history,python introduction tutorial" />
<link rel="canonical" href="https://www.codeexampler.com/python-history" />
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
                      
                           Python is a powerful high-level object-oriented language programming language created by Guido Van Rossum. <br />
Python was conceived in the late 1980s in the Netherlands and released in February 1991.<br />
Python language executes on multiple platforms like Mac, Windows, Linux, Unix, Etc.<br />
Python first version launched in Jan 1994.<br />
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
                Python Versions
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
                Python Versions release date
                </th>
               
              </tr>
            </thead>
            <tbody class="bg-gray-700">
              <tr class=" bg-opacity-20  font-medium">
                <td class="pl-4">
                  1
                </td>
                <td class="flex px-6 py-4 whitespace-nowrap">
                  
                    <span class="ml-2 font-medium">Python 1.0</span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                  January 1994
                </td>
               
                </tr>
                <tr className='bg-gray-800 font-medium'>
                  <td class="pl-4 ">
                  2
                </td>
                  <td class="flex px-6 py-4 whitespace-nowrap">
                    
                      <span class="ml-2 ">Python 1.5</span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                    December 31, 1997
                </td>
                    
                  </tr>
                  <tr className='font-medium'>
                    <td class="pl-4">
                  3
                </td>
                    <td class="flex px-6 py-4 whitespace-nowrap">
                      
                        <span class="ml-2 font-medium">Python1.6</span>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                      September 5, 2000
                </td>
                      
                    </tr>
                    <tr className='bg-gray-800 font-medium'>
                      <td class="pl-4">
                  4
                </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                        
                          <span class="ml-2 ">Python2.0</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                        October 16, 2000
                </td>
                      
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        
        </div>

        <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>And at this time, The latest Version is That.</h1>



        <div class="flex flex-col lg:mr-20 md:mr-12 sm-mr-10 mr-0 justify-center  ">
  <div class="flex flex-col mt-6">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden sm:rounded-lg">
          <table class="min-w-full text-sm text-gray-400">
            <thead class="bg-gray-800 text-xs uppercase font-medium">
              <tr>
                <th> </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
                 3.2
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
                3.2.6
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
                2016-02-20
                </th>
              </tr>
            </thead>
            <tbody class="bg-gray-700">
              <tr class=" bg-opacity-20  font-medium">
                <td class="pl-4">
               
                </td>
                <td class="flex px-6 py-4 whitespace-nowrap">
                  
                    <span class="ml-2 font-medium">3.3</span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                 3.3.7
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  2017-09-29
                </td>
                </tr>
                <tr className='bg-gray-800 font-medium'>
                  <td class="pl-4 ">
                  
                </td>
                  <td class="flex px-6 py-4 whitespace-nowrap">
                    
                      <span class="ml-2 ">3.4</span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                3.4.10
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                2019-03-18
                </td>
                  </tr>
                  <tr className='font-medium'>
                    <td class="pl-4">
                  
                </td>
                    <td class="flex px-6 py-4 whitespace-nowrap">
                      
                        <span class="ml-2 font-medium">3.5</span>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
               3.5.9
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                2020-09-13
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
};

export default PythonHistory;