import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet  from "react-helmet";
import CppBar from '../../../sidebars/CppBar';
import CodeEditorFiled from '../../../CodeEditorFiled/CodeEditorFiled';
import CppNavBar from '../CppNav';

export default function CppKeyword() {
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
<CppNavBar/>
<Helmet>

 
 <title>Master the Art of C++ keyword : A Beginner's Tutorial Guide by CodeExampler</title>
 <meta name="description" content="C++ keyword tutorial for beginners.There are 95 Types of Keyword in C++ Programming Language. CodeExampler provides Multiple Programming Examples for Beginners,CodeExampler provides Free Online Tutorials for beginners" />
 <meta name="keywords" content="codeexampler,C++ keyword tutorial for beginners,programming language tutorial for begineers,learn code in free,c++ programming tutorial for beginners,learn code in free online,cpp keyword,cpp keyword extern,c++ keyword static,c++ keywords,cpp keyword volatile,volatile keyword c++,c++ define keyword,c++ final keyword,c++ language keywords list,how many keyword in cpp language,c++ keywords and identifiers" />
 <link rel="canonical" href="https://www.codeexampler.com/cpp-keyword" />
 </Helmet>

         <main className='max-w-[1440px] mx-auto flex gap-14 justify-between relative py-3 px-4'>
              {/* Python bur component   */}
              <CppBar ListActioveMobile={ListActioveMobile} setListActiveMobile={setListActiveMobile}></CppBar>

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
                  <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>C++ Keyword in Programming Language</h1>
                      <div className='text-[#9EB2D2]'>
                          <p>

                          1, There are 95 Reserved Keyword in C++ Programming Language. <br />
2, C++ keywords are Known as Reserved Words.<br />
3, These Keywords are Not used in Variable Name means These keywords cannot use as identifiers.<br />
4, They cannot use as names for a variable, class, or method.<br />
                          </p>
                          

                      </div>

                      <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>C++ Programming Keyword Table</h1>

             



                     

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
               else
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
              enum
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
                explicit
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
                export
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
                extern
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
               false
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
               for
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
                friend
                </th>
              </tr>
            </thead>
            <tbody class="bg-gray-700 font-medium">
              <tr class=" bg-opacity-20">
                <td class="pl-4">
          
                </td>
                <td class="flex px-6 py-4 whitespace-nowrap">
                  
                    <span class="ml-2 font-medium">default</span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                 goto
                </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                  if
                </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                  inline
                </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                  int
                </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                  long
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                mutable
                </td>
                  <td class="flex px-6 py-4 whitespace-nowrap">
                namespace
                  </td>
                
                </tr>
                <tr className='bg-gray-800 text-xs uppercase font-medium'>
                  <td class="pl-4">
                 
                </td>
                  <td class="flex px-6 py-4 whitespace-nowrap">
                    
                      <span class="ml-2 font-medium">asm</span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                   auto
                </td>
                    <td class="px-6 py-4 whitespace-nowrap">
              bool
                </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                break
                </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                    case
                </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                catch
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
              char
                </td>
                    <td class="flex px-6 py-4 whitespace-nowrap">
                                           class
                    </td>
                  </tr>
                  <tr>
                    <td class="pl-4 font-medium">
                  
                </td>
                    <td class="flex px-6 py-4 whitespace-nowrap ">
                      
                        <span class="ml-2 ">const</span>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                 const cast
                </td>
                      <td class="px-6 py-4 whitespace-nowrap">
               continue
                </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                default
                </td>
                      <td class="px-6 py-4 whitespace-nowrap">
               delete
                </td>
                      <td class="px-6 py-4 whitespace-nowrap">
       do
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
        double
                </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                                               dynamic cast
                      </td>
                    </tr>
                    <tr className='bg-gray-800 text-xs uppercase font-medium'>
                      <td class="pl-4">
                                  </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                        
                          <span class="ml-2 font-medium">new</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                 operator
                </td>
                        <td class="px-6 py-4 whitespace-nowrap">
              private
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
              protected
                </td>
                        <td class="px-6 py-4 whitespace-nowrap">
               public
                </td>
                        <td class="px-6 py-4 whitespace-nowrap">
               register
                </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                        reinterpret cast
                </td>
                
                        <td class="flex px-6 py-4 whitespace-nowrap">
                          
                      return
                        </td>
                      </tr>
                      <tr className=' text-xs uppercase font-medium'>
                      <td class="pl-4">
                                  </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                        
                          <span class="ml-2 font-medium">short</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                 signed
                </td>
                        <td class="px-6 py-4 whitespace-nowrap">
             size of
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
            static
                </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                        static_cast
                </td>
                 
                <td class="px-6 py-4 whitespace-nowrap">
                        volatile
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                wchar_t
                </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                        while
                </td>

                </tr>
















                <tr className='bg-gray-800 text-xs uppercase font-medium'>
                  <td class="pl-4">
                 
                </td>
                  <td class="flex px-6 py-4 whitespace-nowrap">
                    
                      <span class="ml-2 font-medium">strict</span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                   switch
                </td>
                    <td class="px-6 py-4 whitespace-nowrap">
              template
                </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                this
                </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                    throw
                </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                switch
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
         template
                </td>
                    <td class="flex px-6 py-4 whitespace-nowrap">
                                          this
                    </td>
                  </tr>
                  <tr>
                    <td class="pl-4 font-medium">
                  
                </td>
                    <td class="flex px-6 py-4 whitespace-nowrap ">
                      
                        <span class="ml-2 ">throw</span>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                true
                </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                      typeedef
                </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                      typeid
                </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                      typename
                </td>
                      <td class="px-6 py-4 whitespace-nowrap">
      union
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                unsigned
                </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                      using
                      </td>
                    </tr>
                    <tr className='bg-gray-800 text-xs uppercase font-medium'>
                      <td class="pl-4">
                                  </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                        
                          <span class="ml-2 font-medium">virtual</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                void
                </td>
            
                    
                 
                </tr>

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        
        </div>







        <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>In addition, few Keywords also.</h1>


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
                bitor
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
                compl
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
              not
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
                not_eg
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
                or
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
            	or_eq
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
              xor
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
                xor_eq
                </th>
              </tr>
            </thead>
            <tbody class="bg-gray-700 font-medium">
              <tr class=" bg-opacity-20">
                <td class="pl-4">
          
                </td>
                <td class="flex px-6 py-4 whitespace-nowrap">
                  
                    <span class="ml-2 font-medium">and</span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                  and_eq
                </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                  bitand
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
}
