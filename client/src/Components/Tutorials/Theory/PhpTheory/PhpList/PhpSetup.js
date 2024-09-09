import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet  from "react-helmet";
import PhpBar from '../../../sidebars/PhpBar'; 
import PhpNavBar from '../PhpNav';

export default function PhpSetup() {
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
 
 <title>Master the Art of PHP Installation: A Beginner's Tutorial Guide by CodeExampler</title>
 <meta name="description" content="Learn how to install PHP with our beginner-friendly tutorial at CodeExampler. Install the latest version of XAMPP, the open-source software, and start coding toda" />
 <meta name="keywords" content="codeexampler, php installation tutorial,how to setup xampp for php, how to install php, setup php, beginner's guide to php installation, xampp setup, php development environment" />
 <link rel="canonical" href="https://www.codeexampler.com/php-setup" />
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
                  <h1 className='text-[#01B6FF] mt-3 lg:text-xl'>If you run PHP in chrome so Follow these Steps:</h1>

<div className='text-[#9EB2D2]'>

    <p>
        1, Install xampp new version because XAMPP is an open-source software developed by <strong>apachefriends,</strong> so you open the <strong> apachefriends.org </strong> and click the download option and download the latest version. <br />
        2, After download setup, double click on xampp setup and install full setup.<br />
        3, Open the xampp control panel and start apache, and if you use SQL, start Mysql.<br />
        4, Open localDisc(C:) and check xampp folder and go inside <strong> htdocs folder</strong> and you create folder and give any name of this folder like(myphp) and after create a file inside myphp folder.<br />
        5, Open visual studio code after open myphp folder but <strong> php.validate.executablePath not set. </strong><br />
        6, Open visual studio code setting and search php.validate.executablePath and check php extensions and click on edit in setting.json and paste this code <strong> "php.validate.executablePath": "C:\\xampp\\php\\php.exe".
        </strong> <br />
        7, Type of code in visual studio inside (.php) file and after open google and type local (localhost/dashboard/ ) .when Welcome to XAMPP for Windows page is open so after type ( localhost/myphpfile/ ). and after open your file and php code run inside visual code.
    </p>

</div>


<div className='text-[#9EB2D2]'>

    <p>
        <strong> Important : myphpfile.php </strong> is a file name create inside a myphp folder.
    </p>

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