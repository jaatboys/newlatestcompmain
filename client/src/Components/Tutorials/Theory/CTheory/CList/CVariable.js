import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet  from "react-helmet";
import CNavBar from '../CNav';
import CBar from '../../../sidebars/CBar';
import CodeEditorFiled from '../../../CodeEditorFiled/CodeEditorFiled';


const code =`
type variable-name;
int is a type
a,b and ab  are a variable name
 `

const code2 =`
type variable-name;

int roll_no; //this declare a variable

float percentage; //this declare a variable

roll_no=40; //assigns a variable a value 
  
percentage=40.80; //assigns a variable a value 
  `


const code3 =`
int abc //this declare a variable;

int abc; //(abc and a_bc) are a variable

int a,b,x,z; //(a,b,x,z)are a variable

byte a1=40; //initialize a 
  
double a2=40.80; //like a float 
  
char a3="ram""; //a variable gain value (ram) 
  `


const code4 =`
#include <stdio.h> 

int main () 
{ 
 int a, b, c, d;
 a = 10;
 b = 20;
 c = 30;
 d = 40;
 int sum = a + b + c + d;
 printf("Sum is %d \\n", sum);
 return 0; 
}
 `

 const codeout4 =`
 Sum is 100
  `

 
const code5 =`
#include <stdio.h> 

int main () 
{ 
 int a = 10; // a is a variable and we assign it a value of 10
 a += 40; // increment a by 40
 a = a + 20; // increment a by 20 again
 printf("%d\\n", a); // print the value of a
 return 0; 
}
 `

 const codeout5 =`
 70
  `


const code6 =`
#include <stdio.h> 

int main () 
{ 
int a;
a=40;

OR

  int a = 40; // declare and initialize a with a value of 40
  printf("%d \\n", a); // print the value of a using printf()

  return 0; 
}
  `
const code7 =`
#include <stdio.h>

int main() {
 char a[] = "Ram";
 char b[] = "Lakshman";
 printf("a = %s \\n", a);
 printf("b = %s \\n", b);
 return 0;
}
  `
  const codeout7 =`
a = Ram
b = Lakshman
    `


const code8 =`
#include <stdio.h> 

int main()
{
    char a[] = "Ram";
    char b[] = "Lakshman";
    char c[] = "My Name is CodeExampler 160208";
  
    printf("%s %s %s \\n", a, b, c);
  
    return 0; 
}
  `


export default function CVariable() {
  const [ListActioveMobile, setListActiveMobile] = useState(false)

  const [codess, setcodess] = useState("")

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
    <div className='text-[#9EB2D2] bg-[#1E2736]  min-h-screen font-Poppins'>

<CNavBar/>
<Helmet>
 
 <title>Master the Art of C Variable: A Beginner's Tutorial Guide by CodeExampler</title>
 <meta name="description" content="C variable tutorial for beginners.Variable is the name of a memory location in which we can store the value and use string, CodeExampler provides Multiple Programming Examples for Beginners,CodeExampler provides Free Online Tutorials for beginners" />
 <meta name="keywords" content="codeexampler,static variable in c,tutorial for begineers,learn code in free,learn code in free online,c variable types,string in c,string c tutorial,string variables in c,c variables,c variable arguments,c variable size array,c global variable across files,c variable declaration rules,c variable cannot start with,c extern variable example" />
 <link rel="canonical" href="https://www.codeexampler.com/c-variable" />
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
            <button className='hidden lg:flex  text-lg gap-1 text-[#9EB2D2] no-underline '></button>
            <h1 className='mt-8 font-semibold lg:mt-0 text-3xl  no-underline text-[#01B6FF] capitalize'>{window.location.pathname.replace('/', '').replaceAll('-', ' ')}</h1>
            <a href='/c-scope-of-variable' className='hidden lg:flex text-lg gap-1 text-[#9EB2D2] no-underline '><span className='mt-2'>Next</span><BsFillArrowRightCircleFill className='text-4xl mt-1'></BsFillArrowRightCircleFill></a>
            <div className='flex lg:hidden gap-2 mt-3 lg:mt-0'>
              <BsFillArrowLeftCircleFill onClick={() => handlePreviousAndNext('previous')} className='text-4xl text-gray-500'></BsFillArrowLeftCircleFill>
              <a href="/c-scope-of-variable">
                <BsFillArrowRightCircleFill className='text-4xl text-gray-500'></BsFillArrowRightCircleFill>
              </a>
            </div>
          </div>
          <div className='space-y-3'>
           
            <div className='text-[#9EB2D2]'>
              <p>

                1, Variable is the name of a memory location in which we can store the value <br />
                2, C Variable can change the value<br />
                3,  A variable is defined by combining an identifier, data types, and an initializer.<br />
                4, The first character in the variable name must be an alphabet, underscore, a digit, or a dollar sign. <br />
                5, All variables have a scope<br />
                6, The identifier is the name of the Variable<br />
                7, Commas or blanks not used inside a Variable Name
              </p>


            </div>
            <h2 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Variable syntax in C:
            </h2>

            <div>

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
                <CodeEditorFiled code={code} />

              </div>
            </div>


            <div>
            <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>

</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code2} />
              </div>
            </div>
            <h2 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Declare a Variable in C Rules:</h2>

            <div>

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
            </div>

            <h2 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Addition of variables Examples:</h2>
            <div>
            <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program to add variables in C? </p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code4} />
              </div>
            </div>

            <h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h3>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout4}
              </p>
            </div>

            <h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Variable increment values in C:</h3>
            <div>
            <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program variable Increment in C? </p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code5} />
              </div>
            </div>


   

            <h4 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h4>
            <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
              70
            </div>

            <h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Q-Write a program to create a variable, store a no inside this Variable and print output in C?</h3>
            <div>
            <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program to create a variable, store a no inside this Variable and print output in C? </p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code6} />
              </div>
            </div>

            <h4 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h4>
            <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
              40
            </div>

            <h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>String in C</h3>
            <p className='text-[#9EB2D2]'>
              1, String is a sequence of characters and closed in " ". <br />
              2, String is the name of a memory location in which we can store the Text <br />
              3, Text of String change easily <br />
              4, Text or character enclosed by double quotes <br />
            </p>

            <h2 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Create Variable String Type:</h2>
            <div>

            <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program to create a string variable and store a no inside string type variable and print output in C? </p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code7} />
              </div>
            </div>

            <h4 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Input:</h4>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout7}
              </p>
            </div>



            <h2 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Another string type static variable in c example</h2>
            <div>

              
         <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program to create a string variable and store a no inside string type Static variable and print output in C? </p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code8} />
              </div>
            </div>

        

            <h4 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h4>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              Ram Lakshman My name is CodeExampler 160208
              </p>
            </div>


            <h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Constant:</h3>
            <p>Constant is use when you store a value inside a variable, but after you can't overwrite existing value, so on that place use constantly.</p>

          </div>



        </div>

      </main>
    </div>
  );
}
