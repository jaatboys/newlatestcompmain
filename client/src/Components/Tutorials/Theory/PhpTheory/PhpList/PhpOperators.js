import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet  from "react-helmet";
import PhpBar from '../../../sidebars/PhpBar'; 
import PhpNavBar from '../PhpNav';
import CodeEditorFiled from '../../../CodeEditorFiled/CodeEditorFiled';
export default function PhpOperators() {

    const code1 = `
106 / 8 % 40
    `
    const code2 = `
( + - / %) this is an  operator
    `
    const code3 = `
$a =  $b +  $c -  $d;
Above in this line of code 
    `
    const code4 = `
+, = are operators means there are Two operators 
a, b, c, d are operands means there are Four operands
    `
    const code5 = `
<? php
$a = 8; 
$b = 4; 
$c = $a + $b;
echo $c;
?>
    `
    const codeout5 = `
12
    `
    const code6 = `
$C =  $a -  $b ;
$C =  $a +  $b ;
$C =  $a *  $b ;
$C =  $a /  $b ;
$C =  $a %  $b ;
$C =  $a ++ ; or  $a -- ;
$C =  $b ++ ; or  $b -- ;
 `
const code7 = `
<?php
$a = 10; 
$b = 20;
if ($a < $b)
echo ("b is greater");
?>
    `
    const codeout7 = `
b is greater
    `
    const code8 = ` 
<?php
$a = 10; 
$b = 20; 
if ($a  = $b)
echo "both are equal";
?>
    `
    const codeout8 = `
both are equal
    `
    const code9 = `
<?php
 $a = 5; // $a is assigned a value of 5
  echo ($a); // The value of $a (5) is printed to the console
  echo " "; // A space is printed to separate the two values in the output

 $a = $a * 4; // $a is multiplied by 4 (resulting in 20)
  echo ($a); // The updated value of $a (20) is printed to the console
?>
    `
    const codeout9 = `
5 20
    `
    const code10 = `
Variable a = (expression) ? true : false
    `
    const code11 = `
<?php
$a = 10;
echo $a ;
$a++;
echo $a;
?>
    `
    const codeout11 = `
10 11
    `
    const code12 = `
<? php
$a = 10; 
$a = $a +2; 
echo ($a);

OR
 
Error: 
$a++++;
echo ($a);
?>
    `
    const codeout12 = `
12
error
    `
    const code13 = `
If we use (++a)
 
$a = 20; 
$b; 
echo ($a); 


$b = ++$a;
echo($b); 
 
   
If we use  (a++)

$a = 20; 
$b; 
echo ($a); 


$b = $a++;
echo($b); 
    `
    const codeout13 = `
20
21

20
20
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
      <div className=' bg-[#1E2736] text-[#9EB2D2] min-h-screen font-Poppins'>

<PhpNavBar/>
<Helmet>
 
 <title>Master the Art of PHP Operator: A Beginner's Tutorial Guide by CodeExampler</title>
 <meta name="description" content="Learn the fundamentals of PHP operators with CodeExampler's beginner-friendly tutorial. From the spread operator to operator precedence, our comprehensive guide includes multiple programming examples to help you master the art of PHP operators. Get started with our free online tutorials today!" />
 <meta name="keywords" content="Unlock the power of PHP operators with CodeExampler's comprehensive tutorial for beginners,crud operations in php,php ternary operator, operator precedence, and more with our programming language tutorial,php operator in hindi " />
 <link rel="canonical" href="https://www.codeexampler.com/php-operator" />
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
                  <h1 className='text-[#01B6FF] mt-3 lg:text-xl'>An Operator in Php
                        </h1>

                        <div className='text-[#9EB2D2]'>

                            <p>
                                Operators in Php use special symbols that perform any operation.
                                <br />
                                or <br />
                                The Php operator is a special symbol that is using in the expression.
                            </p>

                        </div>


                        <h1 className='text-[#01B6FF] mt-3 lg:text-xl'>An operator in Php Syntax code</h1>

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



                        <h1 className='text-[#01B6FF] mt-3 lg:text-xl'>An Operator in Php Syntax code Example</h1>

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
                            <CodeEditorFiled code={code4} />
                        </div>



                        <h1 className='text-[#01B6FF] mt-3 lg:text-xl'>1, Arithmetic operator:</h1>


                        <div className='text-[#9EB2D2]'>

                            <p>
                                + add <br />
                                - Sub <br />
                                * Multiply <br />
                                / division <br />
                                % modules <br />
                                ++ increment <br />
                                -- decrement
                            </p>

                        </div>

                        <h1 className='text-[#01B6FF] mt-3 lg:text-xl'>Php Operator Example: </h1>



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
                <CodeEditorFiled code={code5} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout5}
              </p>
            </div>

                        <h1 className='text-[#01B6FF] mt-3 lg:text-xl'>Php Operator Syntax code:</h1>

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
                            <CodeEditorFiled code={code6} />
                        </div>


                        <h1 className='text-[#01B6FF] mt-3 lg:text-xl'>2, Relational operator:</h1>

                        <div className='text-[#9EB2D2]'>

                            <p>
                                &gt; greater than <br />
                                &lt; less than  <br />
                                &gt;= greater than or equal to  <br />
                                &lt;= less than or equal to <br />
                                !=  not equal to <br />
                                == equal to
                            </p>

                        </div>

                        <h1 className='text-[#01B6FF] mt-3 lg:text-xl'>Php Relational Operator Example:</h1>

                       <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-If b is Greater than so print B is Print B is Greater?</p>
                                </div>

                            </div>
                        </div>
                        <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code7} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout7}
              </p>
            </div>


                        <h1 className='text-[#01B6FF] mt-3 lg:text-xl'></h1>

                       <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-If a is Equal to B so print a is Equal to B?</p>
                                </div>

                            </div>
                        </div>
                        <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code8} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout8}
              </p>
            </div>


                        <h1 className='text-[#01B6FF] mt-3 lg:text-xl'>3, Logic operator:</h1>

                        <div className='text-[#9EB2D2]'>

                            <p>
                                And && <br />
                                Or ||<br />
                                Not!
                            </p>

                        </div>


                        <h1 className='text-[#01B6FF] mt-3 lg:text-xl'>4, Bitwise operator:</h1>

                        <div>

                            <p>
                                &lt;&lt; right shift <br />
                                &gt;&gt; left shift <br />
                                ^ xor <br />
                                ~ B Not
                            </p>

                        </div>


                        <h1 className='text-[#01B6FF] mt-3 lg:text-xl'>5, Assignment operator:</h1>

                        <div className='text-[#9EB2D2]'>

                            <p>
                                =
                                +=
                                -=
                                *=
                                /=
                                %=
                                //=
                                **=
                                &=
                                &lt;&lt;=
                                &gt;&gt;=
                                ^=
                            </p>

                        </div>


                        <h1 className='text-[#01B6FF] mt-3 lg:text-xl'>6, Identifier operator in Php:</h1>

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
                <CodeEditorFiled code={code9} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout9}
              </p>
            </div>



                        <h1 className='text-[#01B6FF] mt-3 lg:text-xl'>7, The conditional operator (? :) in Php:-</h1>

                        <div className='text-[#9EB2D2]'>

                            <p>
                                A conditional operator is known as a <strong> ternary operator.</strong>
                                The main point is that this Conditional operator consists of three operands.
                            </p>

                        </div>


                        <h1 className='text-[#01B6FF] mt-3 lg:text-xl'>Php conditional Operator Syntax code:</h1>

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
                <CodeEditorFiled code={code10} />
</div>


                        <h1 className='text-[#01B6FF] mt-3 lg:text-xl'>8, Unary operator:</h1>

                        <div className='text-[#9EB2D2]'>

                            <p>
                                ++ <br />
                                --
                            </p>

                        </div>


                        <h1 className='text-[#01B6FF] mt-3 lg:text-xl'>Php Urinary Operator Syntax code:</h1>

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
                <CodeEditorFiled code={code11} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout11}
              </p>
            </div>

                        <h1 className='text-[#01B6FF] mt-3 lg:text-xl'>Examples: </h1>

                       <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-If you add more no inside unary Php operator?
                                    </p>
                                </div>

                            </div>
                        </div>
                        <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code12} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout12}
              </p>
            </div>


                       <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Change position of the unary operator?
                                    </p>
                                </div>

                            </div>
                        </div>
                        <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code13} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout13}
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
