import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import CNavBar from '../CNav';
import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet  from "react-helmet";

import CBar from '../../../sidebars/CBar';
import CodeEditorFiled from '../../../CodeEditorFiled/CodeEditorFiled';

export default function CKeyword() {
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

<CNavBar/>
<Helmet>
 
 <title>Master the Art of C keyword: A Beginner's Tutorial Guide by CodeExampler</title>
 <meta name="description" content="C keyword tutorial for beginners.There are 32 Types of Keyword in C Programming Language. CodeExampler provides Multiple Programming Examples for Beginners,CodeExampler provides Free Online Tutorials for beginners" />
 <meta name="keywords" content="codeexampler,programming language,tutorial for begineers,learn code in free,c programming tutorial for beginners,learn code in free online,c keyword,c keyword extern,c keyword static,c keywords,c keyword volatile,volatile keyword c,c define keyword,c final keyword,c language keywords list,how many keyword in c language,c keywords and identifiers" />
 <link rel="canonical" href="https://www.codeexampler.com/c-keyword" />
 </Helmet>


           <main className='max-w-[1440px] mx-auto flex gap-14 justify-between relative py-3 px-4'>
                {/* Python bur component   */}
                <CBar ListActioveMobile={ListActioveMobile} setListActiveMobile={setListActiveMobile}></CBar>

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
                    <h2 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>C Keyword in Programming Language</h2>
                        <div className='text-[#9EB2D2]'>
                            <p>
                                1,There are 32 types of keywords in C Programming Language. <br />
                                2, C keywords are Known as Reserved Words. <br />
                                3, These Keywords are Not used in Variable Name Means These keywords cannot use as identifiers. They cannot use as names for a variable, class, or method.
                            </p>

                        </div>

                        <h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>C Programming Keyword Table</h3>

      

                        <div class="flex flex-col">
                            <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                    <div class="overflow-hidden">
                                        <table class="min-w-full">
                                            <thead class="bg-gray-200 border-b">
                                                <tr class="bg-slate-300 border-b transition duration-300 ease-in-out hover:bg-gray-100">

                                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                        auto
                                                    </th>
                                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                        double
                                                    </th>
                                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                        int
                                                    </th>
                                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                        struct
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr class="bg-slate-300 border-b transition duration-300 ease-in-out hover:bg-gray-100">

                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        break
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        char
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        continue
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        case
                                                    </td>
                                                </tr>
                                              
                                                <tr class="bg-slate-300 border-b transition duration-300 ease-in-out hover:bg-gray-100">

                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        const
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        else
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        float
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        goto
                                                    </td>
                                                </tr>
                                                <tr class="bg-slate-300 border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                                    
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">default</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">do</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">enum</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">if</td>

                                                </tr>

                                                <tr class="bg-slate-300 border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                                    
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">for</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">extern</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">long</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">return</td>

                                                </tr>

                                                <tr class="bg-slate-300 border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                                    
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">sizeof</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">static</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">signed</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">register</td>

                                                </tr>

                                                <tr class="bg-slate-300 border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                                    
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">short</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">switch</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">union</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">void</td>


                                                </tr>

                                                <tr class="bg-slate-300 border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                                    
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">unsigned</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">volatile</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">while</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">typedef</td>

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
