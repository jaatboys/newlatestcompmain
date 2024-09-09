import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet  from "react-helmet";
import PhpBar from '../../../sidebars/PhpBar'; 
import PhpNavBar from '../PhpNav';

export default function PhpKeyword() {
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
 
 <title>Master the Art of PHP Keywords: A Beginner's Tutorial Guide by CodeExampler</title>
 <meta name="description" content="Master the fundamentals of PHP keywords with CodeExampler's beginner-friendly tutorial. Learn why keywords cannot be used as identifiers and discover multiple programming examples to help you improve your PHP coding skills. Get started with our free online tutorials for beginners today!" />
 <meta name="keywords" content="codeexampler,php reserved keywords,final keyword in php,php keywords,php new keyword,this keyword in php,static keyword in php,super keyword in php,php keyword use" />
 <link rel="canonical" href="https://www.codeexampler.com/php-keyword" />
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

    1, Php keywords cannot be used as identifiers. <br />
    2, They cannot use as names for a variable, class, or method. <br />
    3, Php Programming keywords are Known as Reserved Words.



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
                abstract
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
                and
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
              array
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
          as
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
                break
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
                callable
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
                  	case
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
                  catch
                </th>
              </tr>
            </thead>
            <tbody class="bg-gray-700 font-medium">
              <tr class=" bg-opacity-20">
                <td class="pl-4">
          
                </td>
                <td class="flex px-6 py-4 whitespace-nowrap">
                  
                    <span class="ml-2 font-medium">class</span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                 clone
                </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                 const
                </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                  continue
                </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                  declare
                </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                  default
                </td>
                  <td class=" px-6 py-4 whitespace-nowrap">
                 die
                  </td>
                  <td class=" px-6 py-4 whitespace-nowrap">
                 do
                  </td>
                </tr>
                <tr className='bg-gray-800 text-xs uppercase font-medium'>
                  <td class="pl-4">
                 
                </td>
                  <td class="flex px-6 py-4 whitespace-nowrap">
                    
                      <span class="ml-2 font-medium">else</span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                  echo
                </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                  elseif
                </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                empty
                </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                   end declare
                </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                  endfor
                </td>
                    <td class=" px-6 py-4 whitespace-nowrap">
                                           endforeach
                    </td>
                    <td class=" px-6 py-4 whitespace-nowrap">
                                           endif
                    </td>
                  </tr>
                  <tr>
                    <td class="pl-4 font-medium">
                  
                </td>
                    <td class="flex px-6 py-4 whitespace-nowrap ">
                      
                        <span class="ml-2 ">endswitch</span>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                  endwhile
                </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                eval()
                </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                  exit ()
                </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                      extends
                </td>
                      <td class="px-6 py-4 whitespace-nowrap">
final
                </td>
                      <td class=" px-6 py-4 whitespace-nowrap">
                                              finally
                      </td>
                      <td class=" px-6 py-4 whitespace-nowrap">
                                              for
                      </td>
                    </tr>
                    <tr className='bg-gray-800 text-xs uppercase font-medium'>
                      <td class="pl-4">
                                  </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                        
                          <span class="ml-2 font-medium">foreach</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                  function
                </td>
                        <td class="px-6 py-4 whitespace-nowrap">
               global
                </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                 goto
                </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                  if
                </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                implements
                </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          
                        include
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          
                        include_once
                          </td>
                      </tr>

                      <tr className=' text-xs uppercase font-medium'>
                      <td class="pl-4">
                                  </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                        
                          <span class="ml-2 font-medium">instanceof</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                        insteadof
                </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                        interface
                </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                        isset()
                </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                        list()
                </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                        namespace()
                </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                      new
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          
                  or
                          </td>
                      </tr>

                      <tr className='bg-gray-800 text-xs uppercase font-medium'>
                      <td class="pl-4">
                                  </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                        
                          <span class="ml-2 font-medium">print</span>
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
                       require
                </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                        require_once
                </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                     return
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          
                        static
                          </td>
                      </tr>


                      <tr className=' text-xs uppercase font-medium'>
                      <td class="pl-4">
                                  </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                        
                          <span class="ml-2 font-medium">switch</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                        throw
                </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                    trait
                </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                       try
                </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                       unset()
                </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                       use
                </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                     var
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          
                       while
                          </td>
                      </tr>
                        <tr className='bg-gray-800 text-xs uppercase font-medium'>
                      <td class="px-6 py-4 whitespace-nowrap">
                     
                </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                    xor
                </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                     yield
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          
                      yield_from
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
