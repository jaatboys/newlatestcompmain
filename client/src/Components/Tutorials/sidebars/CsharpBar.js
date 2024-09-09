import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const CsharpBar = ({ ListActioveMobile, setListActiveMobile }) => {
    const [ListCssActive, setListCssActiove] = useState(null)

    const CsharpBar = [
        'C# First Program',
        'C# Comments',
        'C# keyword',
        'C# Operator',
        'C# Datatypes',
        'C# Variable',
        'C# Identifier',
        'C# Input',
        'C# Literal',
        'C# Namespace',
        'C# String',
        'C# Control Structure',
        'C# If',
        'C# If Else',
        'C# If Else If',
        'C# Conditional Operator',
        'C# Switch',
        'C# Looping Statement',
        'C# While',
        'C# Do Wile',
        'C# For Loop',
        'C# Break',
        'C# Continue',
        'C# Goto',
        'C# Array',
        'C# Oops',
        'C# Class And Object',
        'C# Method',
        'C# User Define Function',
        'C# Passing Argument',
        'C# Object Initializers',
        'C# Constructor',
        'C# Inheritance',
        'C# Single Inheritance',
        'C# Multilevel Inheritance',
        'C# Association',
        'C# Overloading',
        'C# Overriding',
        'C# History',
        'C# Introduction',
        

    ]

    localStorage.removeItem('list')
    if (window.location.pathname.includes('csharp-')) {
        localStorage.setItem('list', JSON.stringify(CsharpBar.map(p => p.toLowerCase().replaceAll('#','sharp').replaceAll(' ', '-'))))
    }

    localStorage.setItem('listActive',JSON.stringify(window.location.pathname.replace('/','').replaceAll('-',' ')))
    return (
        

            <div className={`${ListActioveMobile ? 'flex' : 'hidden lg:flex'}  flex-col mt-20 z-10 lg:mt-4 mr-5 absolute top-0 left-4 lg:relative lg:left-0 lg:w-96 h-full overflow-y-auto  overflow-x-hidden scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-slate-600 scrollbar-track-rounded-xl`}>
                <Link className='relative flex no-underline  w-[111%] mb-4 border-4 border-[#01B6FF] bg-[#333F50]'>
                    <div className='bg-[#01B6FF] absolute -left-0.5 -top-0.5 h-[105%] w-fit p-2.5 '>
                        {/* <C#Icon className={'w-12 -mt-2'}></C#Icon> */}
                    </div>
                    <h3 className='mt-1 w-full h-full text-center  text-[#01B6FF] py-2.5 ml-14 font-bold'>C#</h3>
                </Link>
                {
                    CsharpBar.map((list, i) => <a href={list.toLowerCase().replaceAll('#','sharp').replaceAll(" ","-")} key={i} className={`shadow-[0px_10px_30px_rgba(1,182,255,0.25)]  no-underline relative text-white py-4 text-lg bg-[#333F50]  px-6  font-bold whitespace-nowrap 
                    ${list.replace('#','sharp').toLowerCase() === JSON.parse(localStorage.getItem('listActive')) && 'border-2 border-[#01B6FF]'} `}>
                        <div className={`${list.replace('#','sharp').toLowerCase() === JSON.parse(localStorage.getItem('listActive')) ? 'border-y-2 border-r-2 border-t-[#01B6FF] border-b-[#01B6FF] border-r-[#01B6FF] h-[105%] -top-0.5' : 'h-full -top-0'} absolute  -right-5 w-10  bg-[#333F50] transfrom -skew-x-[18deg]`}></div>
                        <div className={`${list.replace('#','sharp').toLowerCase() === JSON.parse(localStorage.getItem('listActive')) ? 'block' : 'hidden'} w-2 absolute -left-0.5 top-0 h-full bg-[#01B6FF]`}></div>  {list}</a>,


                    )
                }
            </div>
      

    );
};

export default CsharpBar;