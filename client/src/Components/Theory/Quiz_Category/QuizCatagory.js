import React from 'react';
import CourseArticleHeader from '../../Header/CourseArticleHeader';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import MainFooter from '../../Footer/MainFooter';

const QuizCatagory = () => {
  const percentage1 = 80;
  const percentage2 = 20;
  const mapfordiv = [1, 2, 3, 4, 5]
  return (
    <>
      <CourseArticleHeader />
      <div className='max-w-[1440px] mx-auto min-h-screen'>

        <div className='max-w-[65rem] mx-auto  px-5 lg:px-0'>
          <h1 className='text-white text-xl lg:text-3xl py-4 lg:py-11 mx-6'>Java</h1>
          {
            mapfordiv.map((_, i) => <div className='shadow-[0px_10px_30px_rgba(1,182,255,0.25)] w-[90%] mx-auto'>
              {/* <h1>Java</h1> */}
              <div className='bg-[#333F50] relative h-[4rem] lg:h-[6.75rem] '>
                <div className='h-full absolute top-0 -left-4 w-[9.5%] transform skew-x-[18deg] bg-[#333F50]'>

                </div>
                <div className='flex justify-between  absolute z-10 items-center w-[70%] ml-[6%]  h-full '>
                  <p className='text-[#01B6FF] font-semibold text-xs md:text-xl lg:text-2xl'>Java Variable</p>
                  <div className='w-12 relative font-bold shadow-2xl text-[#01B6FF]'>

                    <CircularProgressbar value={percentage1} text={`${percentage1}%`} />
                    <p className='text-[8px] lg:text-xs absolute -top-3  smm:top-0     smm:right-[97%] text-[#00FF2A]'>Attempted</p>
                  </div>
                  <div className='w-12 relative font-bold shadow-2xl text-[#01B6FF]'>

                    <CircularProgressbar value={percentage2} text={`${percentage2}%`} />
                    <p className='text-[8px] lg:text-xs absolute -top-3  smm:top-0 smm:right-[97%] text-[#01B6FF]'>Questions</p>
                  </div>
                  <p className='taxt-2xl lg:text-4xl  flex items-start text-[#01B6FF]'>309 <span className='text-xs mt-1 text-[#FFC836] '>Coins</span></p>
                </div>
                <div className='h-full absolute -right-[1.5%] top-0 w-[18%] transform -skew-x-[18deg] bg-sky-400 text-center flex justify-center items-center'>
                  <h1 className='text-lg lg:text-xl absolute text-white font-bold transform skew-x-[18deg]  '>Solve</h1>
                </div>
              </div>
            </div>)
          }
        </div>
      </div>
      <MainFooter />
    </>
  );
};

export default QuizCatagory;