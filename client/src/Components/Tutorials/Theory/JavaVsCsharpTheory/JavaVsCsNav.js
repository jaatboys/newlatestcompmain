
import React from 'react';

const PythonNav = () => {
    return (
        <div className=' bg-[#333F50] font-bold  py-1 px-5 lg:px-0 shadow-lg'>
            <div className='max-w-[1040px] mx-auto py-3 flex justify-between '>
               <a target="_blank" href="/python-variables" className='no-underline relative text-white'>Python</a>
                <a target="_blank" href="/c-variable" className='no-underline relative text-white'>C</a>
                <a target="_blank" href="/csharp-first-program" className='no-underline relative text-white'>C#</a>
                <a target="_blank" href="/java-variables" className='no-underline relative text-white'>JAVA</a>
                <a target="_blank" href="/javascript-variables" className='no-underline relative text-white'>JavaScript</a>
                <a target="_blank" href="/php-variables" className='no-underline relative text-white'>PHP</a>
                <a target="_blank" href="/cpp-variable" className='no-underline relative text-white'>C++</a>


            </div>
        </div>
    );
};

export default PythonNav;