import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet  from "react-helmet";
import PythonBar from '../../../sidebars/PythonBar';
import PythonNavBar from '../PythonNav';
const PythonKeywords = () => {
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
 
  <title>Master the Art of Python Keywords: A Beginner's Tutorial Guide by CodeExampler</title>
<meta name="description" content="Python python keyword tutorial for beginners.These keywords cannot be used as identifiers,they cannot be used as names for a variable, class, or method" />
<meta name="keywords" content="codeexampler,programming language,tutorial for begineers,python keyword,python keywords,python in keyword,python keyword arguments
,python keywords list,python keyword list,python this keyword" />
<link rel="canonical" href="https://www.codeexampler.com/python-keywords" />
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
  
       1,These keywords cannot be used as identifiers. Keywords do not use as a name for a variable, class, or method <br />
        2, python Programming keywords are Known as Reserved Words.
       </p>
      
  </div>


  <h2 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Keywords Table in Python programming language</h2>


  
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
                None
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
                and
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
                assert
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
                False
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
                True
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
                as
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
                  	async
                </th>
              </tr>
            </thead>
            <tbody class="bg-gray-700 font-medium">
              <tr class=" bg-opacity-20">
                <td class="pl-4">
          
                </td>
                <td class="flex px-6 py-4 whitespace-nowrap">
                  
                    <span class="ml-2 font-medium">	break</span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                  continue
                </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                  del
                </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                  await
                </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                  class
                </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                  def
                </td>
                  <td class="flex px-6 py-4 whitespace-nowrap">
                  elif
                  </td>
                </tr>
                <tr className='bg-gray-800 text-xs uppercase font-medium'>
                  <td class="pl-4">
                 
                </td>
                  <td class="flex px-6 py-4 whitespace-nowrap">
                    
                      <span class="ml-2 font-medium">else</span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                    finally
                </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                    from
                </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                  if
                </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                    except
                </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                  for
                </td>
                    <td class="flex px-6 py-4 whitespace-nowrap">
                                            global
                    </td>
                  </tr>
                  <tr>
                    <td class="pl-4 font-medium">
                  
                </td>
                    <td class="flex px-6 py-4 whitespace-nowrap ">
                      
                        <span class="ml-2 ">in</span>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                  lambda
                </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                 not
                </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                  import
                </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                  is
                </td>
                      <td class="px-6 py-4 whitespace-nowrap">


                      nonlocal
                </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                                                or
                      </td>
                    </tr>
                    <tr className='bg-gray-800 text-xs uppercase font-medium'>
                      <td class="pl-4">
                                  </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                        
                          <span class="ml-2 font-medium">raise</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                  try
                </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                 with
                </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                 pass
                </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                  return
                </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                 while
                </td>
                        <td class="flex px-6 py-4 whitespace-nowrap">
                          
                        yield
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
};

export default PythonKeywords;