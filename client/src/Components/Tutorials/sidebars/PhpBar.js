import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { PythonIcon } from '../../Svg';


const PhpBar = ({ ListActioveMobile, setListActiveMobile }) => {
    const [ListCssActive, setListCssActiove] = useState(null)

    const PhpBar = [
        'Php variables',
        'Php setup',
        'Php keyword',
        'Php Identifier',
        'Php Comments',
        'Php Operator',
        'Php First program',
        'Php Control Structure',
        'Php If',
        'Php if else',
        'Php if else if',
        'Php switch',
        'Php looping statement',
        'Php while',
        'Php do while',
        'Php for loop',
        'Php break',
        'Php continue',
        'Php goto',
        'Php function',
        'Php user define function',
        'Php History',
        'Php Introduction',
    ]

    localStorage.removeItem('list')
    if (window.location.pathname.includes('php-')) {
        localStorage.setItem('list', JSON.stringify(PhpBar.map(p => p.toLowerCase().replaceAll(' ', '-'))))
    }

    localStorage.setItem('listActive',JSON.stringify(window.location.pathname.replace('/','').replaceAll('-',' ')))
    return (
        

            <div className={`${ListActioveMobile ? 'flex' : 'hidden lg:flex'}  flex-col mt-20 z-10 lg:mt-4 mr-5 absolute top-0 left-4 lg:relative lg:left-0 lg:w-96 h-full overflow-y-auto  overflow-x-hidden scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-slate-600 scrollbar-track-rounded-xl`}>
                <Link className='relative flex no-underline  w-[111%] mb-4 border-4 border-[#01B6FF] bg-[#333F50]'>
                    <div className='bg-[#01B6FF] absolute -left-0.5 -top-0.5 h-[105%] w-fit p-2.5 '>
                        {/* <PythonIcon className={'w-12 -mt-2'}></PythonIcon> */}
                    </div>
                    <h3 className='mt-1 w-full h-full text-center  text-[#01B6FF] py-2.5 ml-14 font-bold'>PHP</h3>
                </Link>
                {
                    PhpBar.map((list, i) => <a href={list.toLowerCase().replaceAll(' ','-')} key={i} className={`shadow-[0px_10px_30px_rgba(1,182,255,0.25)]  no-underline relative text-white py-4 text-lg bg-[#333F50]  px-6  font-bold whitespace-nowrap 
                    ${list.toLowerCase() === JSON.parse(localStorage.getItem('listActive')) && 'border-2 border-[#01B6FF]'} `}>
                        <div className={`${list.toLowerCase() === JSON.parse(localStorage.getItem('listActive')) ? 'border-y-2 border-r-2 border-t-[#01B6FF] border-b-[#01B6FF] border-r-[#01B6FF] h-[105%] -top-0.5' : 'h-full -top-0'} absolute  -right-5 w-10  bg-[#333F50] transfrom -skew-x-[18deg]`}></div>
                        <div className={`${list.toLowerCase() === JSON.parse(localStorage.getItem('listActive')) ? 'block' : 'hidden'} w-2 absolute -left-0.5 top-0 h-full bg-[#01B6FF]`}></div>  {list}</a>,


                    )
                }
            </div>
      

    );
};

export default PhpBar;