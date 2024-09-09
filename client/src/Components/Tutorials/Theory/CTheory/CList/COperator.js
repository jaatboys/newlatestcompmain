import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet  from "react-helmet";
import CBar from '../../../sidebars/CBar';
import CodeEditorFiled from '../../../CodeEditorFiled/CodeEditorFiled';
import CNavBar from '../CNav';
const code1 =`
160 / 160 % 160 
 `
const code2 =`
(+ - / %)  

this is an operator
`
const code3 = `
int a = b + c 
 `
const code4 = `
( + , = )  there are 2 operators 

( b, c, d) there re 3 operands 
 `
const code5 = `
a = b + c + d;
`
const code6 = `
( + , = ) there are 2 operators

( b, c, d,) there are 3 operands
 `
const code7 = `
#include <stdio.h> 

int main() {

  int a, b, c; // declare integer variables a, b, and c

  a = 8; // initialize a to 8
  b = 4; // initialize b to 4
  c = a + b; // add a and b together and assign the result to c

  printf("%d", c); // print the value of c using %d format specifier

  return 0; // exit the program with a status of 0

}
 `
const code8 = `
12
 `
const code9 = `
C = a - b;

C = a * b;

C = a / b;

C = a % b;

C = a++ OR  a-- ;

C = b++ OR  b-- ;
 `
const code10 = `
#include <stdio.h> 

int main ()
 { 

 int a,b;
 a = 10;
 b = 20;
 if( a < b )
 printf(" b is greater ");
 return 0; 
}
 `
const code11 = `
b is greater
 `
const code12 = `
#include <stdio.h> 

int main ()
 { 

 int a,b;
 a = 20;
 b = 20;
 if( a <= b )
 printf(" both equal ");
 return 0; 

}
 `
const codeout12 = `
both equal
 `
const code14 = `
#include <stdio.h> 

int main() {

  int a, b; // declare integer variables a and b

  a = 20; // initialize a to 20
  b = 20; // initialize b to 20

  if (a == 20 && b == 20) { // check if both a and b are equal to 20 using the logical AND operator

    printf("both equal"); // print message if both a and b are equal to 20
  }
return 0; // exit the program with a status of 0
}
 `
const codeout14 = `
both equal
 `
const code16 = `
#include <stdio.h> 

int main() {

  int a, b; // declare integer variables a and b

  a = 5; // initialize a to 5
  a = a * 4; // multiply a by 4 and assign the result back to a

  OR

  a *= 4;
  printf("%d", a); // print the value of a using %d format specifier

  return 0; // exit the program with a status of 0

}
 `
const codeout16 = `
20
 `

const code18 = `
Variable a = (expression)? true : false 
 `

 const code19 = `
#include <stdio.h>
int main() {
  int a = 10, b = 20, max;
  
  // Use the conditional operator to determine the maximum of a and b
  max = (a > b) ? a : b;
  
  // Print the maximum value
  printf("The maximum value is %d \\n", max);
  return 0;
}
 `
 const codeout19 = `
The maximum value is 20
  `


export default function COperator() {
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
 
 <title>Master the Art of C Operator: A Beginner's Tutorial Guide by CodeExampler</title>
 <meta name="description" content="C Operator tutorial for beginners.Operators in C are used special symbols which perform any type of operations.CodeExampler provides Free Online Tutorials for beginners" />
 <meta name="keywords" content="codeexampler,programming language,tutorial for begineers,learn code in free,c programming tutorial for beginners,learn code in free online,c operator,c operators,c operator precedence,logical operators in c,c operator order,modulo operator in c,or operator in c,c operator or,and operator in c" />
 <link rel="canonical" href="https://www.codeexampler.com/c-operator" />
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
                    <h2 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Q-What is Operator in C?</h2>


                    <div className='text-[#9EB2D2]'>
                           
                           <p>
                      
                           Operators in C are using special symbols which perform any operations. <br />
or<br />
The C and operator is a special symbol that is using in the expression.<br />
                           </p>
                          
                      </div>



                      <h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Operator in C Syntax code</h3>
                      <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2 pl-7 items-center'>
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
<h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Answer :</h3>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {code2}
              </p>
            </div>


<h2 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Operator in C Syntax code</h2>

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
<h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h3>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {code4}
              </p>
            </div>



<h2 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Operator in C Syntax code</h2>

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
<h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h3>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {code6}
              </p>
            </div>


<h2 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>C Operator Example <br />
1, Arithmetic operator:</h2>

<div className='text-[#9EB2D2] font-bold'>
                           
     <p>
                      
+ add <br />
-Sub<br />
Multiply<br />
/ division<br />
% modules<br />
++ increment<br />
-- decrement<br />
                           </p>
                          
                      </div>



<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
<p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program add a and b ,and print C?</p>
</div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code7} />
</div>
<h2 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h2>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {code8}
              </p>
            </div>






<h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>C Operator Example code:</h3>

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



<h2 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>2,Relational operator:</h2>

<div className='text-[#9EB2D2] font-bold'>
                           
                           <p>
                      
                           Greater than <br />
{"<less"} than<br />
{">=greater"} than or equal to<br />
{"<= "}-less than or equal to<br />
!= - not equal to<br />
== -equal to<br />
                           </p>
                          
                      </div>



                      <h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>C Relational Operator Example</h3>

<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
<p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program if a is greater than b, so print C Operator Example Code?</p>
</div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code10} />
</div>
<h2 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h2>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {code11}
              </p>
            </div>



<h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>C Relational Operator Example</h3>

<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
<p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program a and b, if both are equal, print in C Operator Example code?</p>
</div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code12} />
</div>
<h4 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h4>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout12}
              </p>
            </div>




<h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>3,logic operator:</h3>

<div className='text-[#9EB2D2] font-bold'>
                           
                           <p>
                      
                           And && <br />
Or ||<br />
Not!<br />
                           </p>
                          
                      </div>







                     
<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
<p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program C Operator Example code?</p>
</div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code14} />
</div>
<h4 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h4>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout14}
              </p>
            </div>





<h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>4, Bitwise operator:</h3>

<div className='text-[#9EB2D2] font-bold'>
                           
                           <p>
                      
                           {">>"} - right shift <br />
{"<< - "}left shift <br />
^ xor <br />
~ B Not <br />
                           </p>
                          
                      </div>






                      <h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>5, Assignment operator:</h3>

<div className='text-[#9EB2D2] font-bold'>
                           
                           <p>
                      
     = <br />
+= <br />
-= <br />
*= <br />
/= <br />
%= <br />
//= <br />
**= <br />
&= <br />
{"<<= "}<br />
{">>="} <br />
^= <br />
                           </p>
                          
                      </div>





                      <h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>6, Identifier operator in C:</h3>

<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
<p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a Program multiply int a in C Operator Example code?</p>
</div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code16} />
</div>
<h4 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h4>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout16}
              </p>
            </div>







<h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>7, The conditional operator (?:) in C:</h3>

<div className='text-[#9EB2D2]'>
                           
                           <p>
                      
                           1, A conditional operator is known as a ternary operator.
2, The main point is that this Conditional operator consists of three operands.
                           </p>
                          
                      </div>






<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
<p className='text-lg font-semibold text-[#01B6FF]'>C conditional Operator Syntax code</p>
</div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code18} />
</div>




<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
<p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a Program check if (a {`>`} b) C conditional Operator ?</p>
</div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code19} />
</div>

<h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Input:</h3>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout19}
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
