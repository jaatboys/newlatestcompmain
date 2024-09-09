import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { CIcon } from '../../Svg';


const CBar = ({ ListActioveMobile, setListActiveMobile }) => {
    const [ListCssActive, setListCssActiove] = useState(null)

    const CBar = [
        'C Variable',
        'C Scope Of Variable',
        'C Element',
        'C Keyword',
        'C Identifier',
        'C Short Cut Keys',
        'C First Program',
        'C Input',
        'C Literal',
        'C Operator',
        'C Control Structure',
        'C If',
        'C If Else',
        'C If Else If',
        'C Switch',
        'C Looping',
        'C While',
        'C Do While',
        'C For Loop',
        'C Break',
        'C Continue',
        'C Array',
        'C Function',
        'C User Defined Function',
        'C Passing Argument',
        'C History',

    ]

   
    // const list=['c-variables', 'c-scope-of-variable', 'c-element', 'c-keyword', 'c-identifier', 'c-short-cut-keys', 'c-first-program', 'c-input', 'c-literal', 'c-operator', 'c-control-structure', 'c-if', 'c-if-else', 'c-if-else-if', 'c-switch', 'c-looping', 'c-while', 'c-do-while', 'c-for-loop', 'c-break', 'c-continue', 'c-array', 'c-function', 'c-user-defined-function', 'c-passing-argument', 'c-history']

    // const list = CBar.map(l => l.toLowerCase().replaceAll(' ', '-'))
    // console.log(list.map(l => `<Route path='${l}' element=/>`))

   
    if (window.location.pathname.includes('c-')) {
        localStorage.setItem('list', JSON.stringify(CBar.map(p => p.toLowerCase().replaceAll(' ', '-'))))
    }

     localStorage.setItem('listActive',JSON.stringify(window.location.pathname.replace('/','').replaceAll('-',' ')))

    return (
        <>

            <div className={`${ListActioveMobile ? 'flex' : 'hidden lg:flex'}  flex-col mt-20 z-10 lg:mt-4 mr-5 absolute top-0 left-4 lg:relative lg:left-0 lg:w-96 h-full overflow-y-auto  overflow-x-hidden scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-slate-600 scrollbar-track-rounded-xl`}>
                <Link className='relative flex no-underline  w-[111%] mb-4 border-4 border-[#01B6FF] bg-[#333F50]'>
                    <div className='bg-[#01B6FF] absolute -left-0.5 -top-0.5 h-[105%] w-fit p-2.5 '>
                        {/* <CIcon className={'w-12 -mt-2'}></CIcon> */}
                    </div>
                    <h3 className='mt-1 w-full h-full text-center  text-[#01B6FF] py-2.5 ml-14 font-bold'>C</h3>
                </Link>
                {
                    CBar.map((list, i) => <a href={list.toLowerCase().replaceAll(' ', '-')} key={i} className={`shadow-[0px_10px_30px_rgba(1,182,255,0.25)]  no-underline relative text-white py-4 text-lg bg-[#333F50]  px-6  font-bold whitespace-nowrap 
                    ${list.toLowerCase() === JSON.parse(localStorage.getItem('listActive')) && 'border-2 border-[#01B6FF]'} `}>
                        <div className={`${list.toLowerCase() === JSON.parse(localStorage.getItem('listActive')) ? 'border-y-2 border-r-2 border-t-[#01B6FF] border-b-[#01B6FF] border-r-[#01B6FF] h-[105%] -top-0.5' : 'h-full -top-0'} absolute  -right-5 w-10  bg-[#333F50] transfrom -skew-x-[18deg]`}></div>
                        <div className={`${list.toLowerCase() === JSON.parse(localStorage.getItem('listActive')) ? 'block' : 'hidden'} w-2 absolute -left-0.5 top-0 h-full bg-[#01B6FF]`}></div>  {list}</a>,


                    )
                }
            </div>
        </>



    );
};

export default CBar;