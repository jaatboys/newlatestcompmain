import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet  from "react-helmet";
import JavaNavBar from '../JavaNav';
import JavaBar from '../../../sidebars/JavaBar';

export default function JavaKeywords() {
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

<JavaNavBar/>
<Helmet>
 
 <title>Master the Art of Java keyword: A Beginner's Tutorial Guide by CodeExampler</title>
<meta name="description" content="Java Keywords tutorial for beginners.hese keywords cannot be used as identifiers, they cannot be used as names for a variable, class, or method" />
<meta name="keywords" content="codeexampler,programming language,tutorial for begineers,java keyword,java keyword final,java keyword this,java keywords
,java keyword transient,java keyword new,java keyword list,what is java keyword,java keywords pdf,how many keyword in java" />
<link rel="canonical" href="https://www.codeexampler.com/java-keywords"/>
</Helmet>

         <main className='max-w-[1440px] mx-auto flex gap-14 justify-between relative py-3 px-4'>
              {/* Python bur component   */}
              <JavaBar ListActioveMobile={ListActioveMobile} setListActiveMobile={setListActiveMobile}></JavaBar>

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
                  <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Java keyword programming table</h1>

<div className='text-[#9EB2D2]'>

    <p>
        1, These keywords cannot be used as identifiers. They cannot be used as names for a variable, class, or method. <br />
        2, Java Programming keywords are Known as Reserved Words.
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
                catch
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
                final
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
              short
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
              try
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
                Abstract
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
                do
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
                implements
                </th>
              </tr>
            </thead>
            <tbody class="bg-gray-700 font-medium">
              <tr class=" bg-opacity-20">
                <td class="pl-4">
          
                </td>
                <td class="flex px-6 py-4 whitespace-nowrap">
                  
                    <span class="ml-2 font-medium">Private</span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                  this
                </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                  Char
                </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                  finally
                </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                  native
                </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                  static
                </td>
                  <td class="flex px-6 py-4 whitespace-nowrap">
                uses
                  </td>
                </tr>
                <tr className='bg-gray-800 text-xs uppercase font-medium'>
                  <td class="pl-4">
                 
                </td>
                  <td class="flex px-6 py-4 whitespace-nowrap">
                    
                      <span class="ml-2 font-medium">assert</span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                   double
                </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                  import
                </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                    protected
                </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                    throw
                </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                    class
                </td>
                    <td class="flex px-6 py-4 whitespace-nowrap">
                                           float
                    </td>
                  </tr>
                  <tr>
                    <td class="pl-4 font-medium">
                  
                </td>
                    <td class="flex px-6 py-4 whitespace-nowrap ">
                      
                        <span class="ml-2 ">new</span>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                      strictfp
                </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                 void
                </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                      boolean
                </td>
                      <td class="px-6 py-4 whitespace-nowrap">
               else
                </td>
                      <td class="px-6 py-4 whitespace-nowrap">


                      instanceof
                </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                      provides
                      </td>
                    </tr>
                    <tr className='bg-gray-800 text-xs uppercase font-medium'>
                      <td class="pl-4">
                                  </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                        
                          <span class="ml-2 font-medium">raise</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                        throws
                </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                        const
                </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                 enum
                </td>
                        <td class="px-6 py-4 whitespace-nowrap">
              int
                </td>
                        <td class="px-6 py-4 whitespace-nowrap">
              public
                </td>
                        <td class="flex px-6 py-4 whitespace-nowrap">
                          
                       to
                        </td>
                      </tr>




                      <tr className='bg-gray-800 text-xs uppercase font-medium'>
                  <td class="pl-4">
                 
                </td>
                  <td class="flex px-6 py-4 whitespace-nowrap">
                    
                      <span class="ml-2 font-medium">break</span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                   enum
                </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                  int
                </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                    public
                </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                    to
                </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                    continue
                </td>
                    <td class="flex px-6 py-4 whitespace-nowrap">
                    exports
                    </td>
                  </tr>
                  <tr>
                    <td class="pl-4 font-medium">
                  
                </td>
                    <td class="flex px-6 py-4 whitespace-nowrap ">
                      
                        <span class="ml-2 ">interface</span>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                      requires
                </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                      transiet
                </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                      boolean
                </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                      byte
                </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                      exports
                </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                      interface
                      </td>
                    </tr>
                    <tr className='bg-gray-800 text-xs uppercase font-medium'>
                      <td class="pl-4">
                                  </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                        
                          <span class="ml-2 font-medium">requires</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                        transient
                </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                        default
                </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                 if
                </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                        package
                </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                        synchronized
                </td>
                        <td class="flex px-6 py-4 whitespace-nowrap">
                          
                    with
                        </td>
                      </tr>
                      <tr className='bg-gray-800 text-xs uppercase font-medium'>
                      <td class="pl-4">
                                  </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                        
                          <span class="ml-2 font-medium">case</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                     extends
                </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                        long
                </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                        return
                </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                        transitive
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
