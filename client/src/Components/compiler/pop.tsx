import React, { useState } from 'react'
import {BsPencilFill} from 'react-icons/bs';
import {AiFillFile} from 'react-icons/ai'


function Pop() {

    const [pop, setPop] = useState(false);
const togglePop = ()=>{
    setPop(!pop)
}
  return (
   <>
   <button onClick={togglePop} className='w-18 h-20'>
    <BsPencilFill size={20} className='cursor-pointer mb-11 ml-2'/>
   </button>

   {pop && (
    <div className='fixed top-0 right-0 left-0 z-30 bottom-0 w-full h-full '>
    <div  className='fixed top-0 right-0 left-0 bottom-0 w-full h-full backdrop-blur-sm flex justify-center items-center'>
        <div className='md:w-1/2 md:h-1/2 w-72 p-4 h-2/3 md:p-8 drop-shadow-2xl bg-[#7065F0] text-white opacity-100 rounded-xl'>
        
            <h6 className='md:p-4 text-white flex justify-center font-semibold text-3xl'>    <AiFillFile/>Add File</h6>
            <hr />
            <h6 className='md:pl-4 md:pt-4 p-2 md:text-2xl text-white'>Please enter the name of file</h6>
            <p className='text-white text-sm md:pl-4 p-2'>File name must start with a capital letter and end with .py extension </p>
            <input type="text" placeholder='Ex.py' 
            className='border-[#7065f0] w-56 border-4 mt-2 rounded md:w-full p-2  ml-3 mr-3 text-blue-600' />
           <div className='absolute md:bottom-20 bottom-24 md:left-96 flex space-x-5 '> 
            <button className='w-32 h-12 bg-white  text-xl absolute md:left-16 text-black rounded '>OK</button>
            <button className='w-32 h-12 border-2 absolute md:left-48 left-36 text-white text-xl rounded' onClick={togglePop}>CANCEL</button>
           </div>

        </div>
    </div>

   </div>
   )}
   
   
   
   </>
  )
}

export default Pop;