import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet  from "react-helmet";
import CsharpNavBar from '../CsharpNav';
import CodeEditorFiled from '../../../CodeEditorFiled/CodeEditorFiled';
import CsharpBar from '../../../sidebars/CsharpBar';

const CSharpkeyword = () => {
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
 
 <title>Master the Art of C# Keywords: A Beginner's Tutorial Guide by CodeExampler</title>
 <meta name="description" content="C# Keywords tutorial for beginners.In C# there are 77 keywords CodeExampler provides Multiple Programming Examples for Beginners,CodeExampler provides Free Online Tutorials for beginners" />
 <meta name="keywords" content="codeexampler,programming language,tutorial for begineers,C# Keywords,c# Keywords for,c sharp Keywords" />
 <link rel="canonical" href="https://www.codeexampler.com/charp-keyword" />
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
                      
                           1, In C# there are 77 keywords <br />
2, C# keywords cannot be used as identifiers<br />
3, They cannot be used as names for a variable, class, or method.<br />
4, Csharp Programming keywords are Known as Reserved Words.<br />
                           </p>
                          
                      </div>





                      <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>C# keyword programming table</h1>



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
             abstract
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
              as
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
              base
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
             bool
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
               char
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
             class
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
               checked
                </th>
              </tr>
            </thead>
            <tbody class="bg-gray-700 font-medium">
              <tr class=" bg-opacity-20">
                <td class="pl-4">
          
                </td>
                <td class="flex px-6 py-4 whitespace-nowrap">
                  
                    <span class="ml-2 font-medium">const</span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                  Keywords
                </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                case
                </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                byte
                </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                  catch
                </td>
                  <td class="px-6 py-4 whitespace-nowrap">
               continue
                </td>
                  <td class="flex px-6 py-4 whitespace-nowrap">
               default
                  </td>
                </tr>
                <tr className='bg-gray-800 text-xs uppercase font-medium'>
                  <td class="pl-4">
                 
                </td>
                  <td class="flex px-6 py-4 whitespace-nowrap">
                    
                      <span class="ml-2 font-medium">decimal</span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                   delegate
                </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                  do
                </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                   else
                </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                  double
                </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                   event
                </td>
                    <td class="flex px-6 py-4 whitespace-nowrap">
                                           enum
                    </td>
                  </tr>
                  <tr>
                    <td class="pl-4 font-medium">
                  
                </td>
                    <td class="flex px-6 py-4 whitespace-nowrap ">
                      
                        <span class="ml-2 ">explicit</span>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                     extern
                </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                 false
                </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                      boolean
                </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                      foreach
                </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                     if
                </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                    goto
                      </td>
                    </tr>
                    <tr className='bg-gray-800 text-xs uppercase font-medium'>
                      <td class="pl-4">
                                  </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                        
                          <span class="ml-2 font-medium">implict</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                      in
                </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                       int
                </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                        interface
                </td>
                        <td class="px-6 py-4 whitespace-nowrap">
              internal
                </td>
                        <td class="px-6 py-4 whitespace-nowrap">
              is
                </td>
                        <td class="flex px-6 py-4 whitespace-nowrap">
                     lock
                        </td>
                      </tr>




                      <tr className=' text-xs uppercase font-medium'>
                  <td class="pl-4">
                 
                </td>
                  <td class="flex px-6 py-4 whitespace-nowrap">
                    
                      <span class="ml-2 font-medium">long</span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                  namespace
                </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                new
                </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                    null
                </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                    object
                </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                    operator
                </td>
                    <td class="flex px-6 py-4 whitespace-nowrap">
                  out
                    </td>
                  </tr>
                  <tr className='bg-gray-800 font-medium'>
                    <td class="pl-4 font-medium">
                  
                </td>
                    <td class="flex px-6 py-4 whitespace-nowrap ">
                      
                        <span class="ml-2 ">params</span>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                     override
                </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                     private
                </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                      Protected
                </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                public
                </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                     readonly
                </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                     ref
                      </td>
                    </tr>
                    <tr className=' text-xs uppercase font-medium'>
                      <td class="pl-4">
                                  </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                        
                          <span class="ml-2 font-medium">return</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                     sealed
                </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                       sbyte
                </td>
                        <td class="px-6 py-4 whitespace-nowrap">
              short
                </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                       sizeof
                </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                      static
                </td>
                        <td class="flex px-6 py-4 whitespace-nowrap">
                        stackalloc
                        </td>
                      </tr>
                      <tr className='bg-gray-800 text-xs uppercase font-medium'>
                      <td class="pl-4">
                                  </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                        
                          <span class="ml-2 font-medium">string</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                     struct
                </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                     this
                </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                       switch
                </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                       throw
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                      volatile
                </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                    while
                </td>
                       
                      </tr>






                      <tr className=' font-medium'>
                    <td class="pl-4 font-medium">
                  
                </td>
                    <td class="  flex px-6 py-4 whitespace-nowrap ">
                      
                        <span class="ml-2 ">true</span>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                    try
                </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                   typeof
                </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                   uint
                </td>
                      <td class="px-6 py-4 whitespace-nowrap">
               ulong
                </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                    unsafe
                </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                    unchecked
                      </td>
                    </tr>
                    <tr className='bg-gray-800 text-xs uppercase font-medium'>
                      <td class="pl-4">
                                  </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                        
                          <span class="ml-2 font-medium">ushort</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                    using
                </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                  void
                </td>
                        <td class="px-6 py-4 whitespace-nowrap">
             virtual
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

export default CSharpkeyword;