import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet  from "react-helmet";
import PhpBar from '../../../sidebars/PhpBar';
import PhpNavBar from '../PhpNav';
import CodeEditorFiled from '../../../CodeEditorFiled/CodeEditorFiled';
export default function PhpVariables() {
    
    const code1 = `
Type Variable Name;
$ is a Type
a, b and ab are a Variable Name
    `
    const code2 = `            
Type Variable Name;
$ roll_no;  //this declare a variable
$ percentage;  //this declare a variable
$ roll_no = 40;  //Assigns a variable a value
$ precentage = 40.80;  //Assigns a variable a value
    `

    const code3 = `
$ abc;//this declare a variable
$ abc; //(abc and a_bc are a variable)
$a; $b; $x $z; //(a,b,x,z) are a variable
$ a3 = "ram";//a variable gain value ( ram )
    `
    const code4 = `
<?php
$ab= 12; $cd= 24; $ef= 36; 
echo ($ab + $cd + $ef); 
?>
    `
    const codeout4 = `
72
    `
    const code5 = `
<?php
$a= 10;// a is a variable and a is a variable
$a+= 40;
$a= $a + 20;
echo $a;
?>
    `
    const codeout5 = `
70
    `
    const code6 = `
<?php
$a= 40;
echo $a;
?>
    `
    const codeout6 = `
40
    `
    const code7 = `
<?php
$a ="Ram";
$b ="Lakshman";
echo ($a. " " .$b);
?>
    `
    const codeout7 = `
Ram Lakshman
    `
    const code8 = `
<?php
$a ="Ram";
$b ="Lakshman";
$c ="My Name is CodeExampler 160208";
echo ($a. " " .$b. " " .$c);
?>
    `
    const codeout8 = `
 Ram Lakshman My Name is CodeExampler 160208
    `
    

    
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

<div>

       
<PhpNavBar/>
<Helmet>
 
 <title>Master the Art of PHP Variables: A Beginner's Tutorial Guide by CodeExampler</title>
 <meta name="description" content="CodeExampler's free PHP variable tutorial for beginners will teach you everything you need to know about variable declarations and types. Start collecting and manipulating data like a pro today!" />
 <meta name="keywords" content="PHP variable, variable declaration in PHP, PHP variable types, beginner PHP tutorial,predefined variables in php, super global variable in php" />
 <link rel="canonical" href="https://www.codeexampler.com/php-variables" />
 </Helmet>

 <div className=' bg-[#1E2736] text-[#9EB2D2] min-h-screen font-Poppins'>

            <div className='max-w-[1440px] mx-auto flex gap-14 justify-between relative py-3 px-4'>
                {/* Python bur component   */}


                <PhpBar ListActioveMobile={ListActioveMobile} setListActiveMobile={setListActiveMobile}></PhpBar>

                

                <div className='w-full relative '>
                    {/* only mobile mode show */}
                    <button onClick={() => setListActiveMobile(!ListActioveMobile)} className='absolute -top-3 left-0 bg-[#01B6FF] rounded-br-2xl rounded-bl-2xl p-2.5 lg:hidden text-white'>All Topics</button>
                    {/* ----------------- */}
                    <div className='flex justify-between mt-3'>
                        <div className='block lg:hidden'>

                        </div>
                        <button className='hidden lg:flex  text-lg gap-1 text-[#9EB2D2] no-underline '>
                            {/* <BsFillArrowLeftCircleFill className='text-4xl mt-1'></BsFillArrowLeftCircleFill> <span className='mt-2'>Previous</span> */}
                        </button>
                        <h1 className='mt-8 font-semibold lg:mt-0 text-3xl  no-underline text-[#01B6FF] capitalize'>{window.location.pathname.replace('/', '').replaceAll('-', ' ')}</h1>
                        <a href='/php-setup' className='hidden lg:flex text-lg gap-1 text-[#9EB2D2] no-underline '><span className='mt-2'>Next</span><BsFillArrowRightCircleFill className='text-4xl mt-1'></BsFillArrowRightCircleFill></a>
                        <div className='flex lg:hidden gap-2 mt-3 lg:mt-0'>
                            {/* <BsFillArrowLeftCircleFill onClick={() => handlePreviousAndNext('previous')} className='text-4xl text-gray-500'></BsFillArrowLeftCircleFill> */}
                            <a href="/php-setup">

                                <BsFillArrowRightCircleFill className='text-4xl text-gray-500'></BsFillArrowRightCircleFill>
                            </a>
                        </div>
                    </div>
                    <div className='space-y-3'>
                    <div className='text-[#9EB2D2]'>

<p>
    1, Variable is the name of a memory location in which we can store the value. <br />
    2, The variable value can be change. <br />
    3, A variable is defined by combining an identifier, data types, and an initializer. <br />
    4, The first character in the variable name must be an alphabet, underscore, a digit or, a dollar sign. <br />
    5, All variables have a scope. <br />
    6, The identifier is the name of the Variable. <br />
    7, Commas or blanks do not use inside a variable name<br />
    8,Use dollar symbol($) before variable-name.
</p>

</div>


<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Php variable declaration syntax: </h1>

<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'></p>
    </div>

</div>
</div>
<div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditorFiled code={code1} />
</div>



<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Php variable declaration syntax Examples:</h1>

<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'></p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code2} />
</div>



<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Declare variable in Php Rules:
</h1>

<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'></p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code3} />
</div>


<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Addition of variables examples</h1>

<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Add 3 variables in Php?</p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code4} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Output :</h1>
                        <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
                        <CodeEditorFiled code={codeout4} />
                        </div>


<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Variable increment values in Php:</h1>

<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Add 3 variables in Php?</p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code5} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Output :</h1>
                        <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
                        <CodeEditorFiled code={codeout5} />
                        </div>

<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Examples: </h1>

<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Create a variable and store a no inside this variable and print output?</p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code6} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Output :</h1>
                        <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
                        <CodeEditorFiled code={codeout6} />
                        </div>


<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Create Variable String Type:</h1>

<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Create a string variable and store a and b value inside string type variable and print output?</p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code7} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Output :</h1>
                        <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
                        <CodeEditorFiled code={codeout7} />
                        </div>

<p className='font-bold'>Another string type example and check switch case PHP</p>

<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-create a string variable and store a no inside string data type variable and print output?</p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code8} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Output :</h1>
                        <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
                        <CodeEditorFiled code={codeout8} />
                        </div>

<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Constant:</h1>

<div className='text-[#9EB2D2]'>

<p>
Constant use when you store a value inside a variable, but after, you can’t overwrite the current value, so use constant on that place.
</p>

</div>




</div>

</div>




</div>

</div>

</div>
);
}
