import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet  from "react-helmet";
import JavaNavBar from '../JavaNav';
import JavaBar from '../../../sidebars/JavaBar';
import CodeEditorFiled from '../../../CodeEditorFiled/CodeEditorFiled';
export default function JavaSwitch() {

    const code1 = `
switch(variable)
{ 
 case 1 : 
    Statement ;
 case 2 : 
    Statement ;
 default : 
    Statement ;
} 
    `
    const code2 = `
public class Switch_example // class is a keyword
{
    public static void main (String[] args) {
       int i = 3;
       
       switch(i) {
          case 1: 
             System.out.println("January");
             break;
          case 2: 
             System.out.println("February");
             break;
          case 3: 
             System.out.println("March");
             break;
          default: 
             System.out.println("default value");
       } 
    } 
 } 
    `

    const codeout2 = `
March 
    `

    const code3 = `
public class Switch_example 
{ 
   public static void main (String[] args) 
   { 
 int i=24;
 switch(i)
  { 
    case 22 : 
            System.out.println("22");
    case 23 : 
            System.out.println("23");
    case 24 : 
            System.out.println("24");
    case 25 : 
            System.out.println("25");
    default : 
            System.out.println("default value");
   } 
} 
}
    `

    const codeout3 = `
24 
25 
default value  
    `

    const code4 = `
public class Switch_example 
{ 
   public static void main (String[] args) 
   { 
 int i=3;
 switch(i)
  { 
   //Case statements  
    case 1 : 
            System.out.println("jan");
            break; 
    case 2 : 
            System.out.println("feb");
            break; 
    case 3 : 
            System.out.println("mar");
            break; 
    default  : 
            System.out.println("default value");
   } 
   } 
}
    `

    const codeout4 = `
mar 
    `

    const code5 = `
public class Switch_example 
{ 
   public static void main (String[] args) 
   { 
 char x='c';
 switch(x)
  { 
    case 'a' : 
            System.out.println("w");
            break; 
    case 'b' : 
            System.out.println("x");
            break; 
    case 'c' : 
            System.out.println("y");
            break; 
    case 'd' : 
            System.out.println("z");
            break; 
    default  : //This is a Default statement in java switch   
            System.out.println("default value");
   } 
   } 
}
    `

    const codeout5 = `
    y 
    `

    const code6 = `
public class Switch_example 
{ 
 public static void main (String[] args) 
 { 
  int i=4;
  for(i=1;i<=4;i++)
   { 
    switch(i)
    { 
    //Case statements  
     case 1 : 
        System.out.println("1");
        break; 
     case 2 : 
        System.out.println("2");
        break; 
     case 3 : 
        System.out.println("3");
        break; 
     case 4 : 
        System.out.println("4");
        break; 
     case 5 : 
        System.out.println("5");
        break; 
     default  : 
        System.out.println("default value");
        break; 
     } 
   } 
 } 
} 
    `

    const codeout6 = `
2 
3 
4 
    `

    const code7 = `
public class Switch_example 
{ 
   public static void main (String[] args) 
   { 
 int i=4;
 for(i=1;i<=6;i++)
  { 
   switch(i)
   { 
   //Case statements  
    case 1 : 
         System.out.println("1");
         break; 
    case 2 : 
         System.out.println("2");
         break; 
    case 3 : 
         System.out.println("3");
         break; 
    case 4 : 
         System.out.println("4");
         break; 
    case 5 : 
         System.out.println("5");
         break; 
    default  : 
         System.out.println("default value");
         break; 
    } 
  } 
   } 
} 
    `

    const codeout7 = `
1
2 
3 
4 
5 
default value 
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

<JavaNavBar/>
<Helmet>
 
 <title>Master the Art of Java Switch: A Beginner's Tutorial Guide by CodeExampler</title>
<meta name="description" content="Java Switch tutorial for beginners.This Switch case in java is also used in multiple conditions having different statements like- if else if but it can check only equality of the condition floating point but value can’t be check by the switch." />
<meta name="keywords" content="codeexampler,programming language,tutorial for begineers,java switch,java switch statement,java switch case,switch case in java,java switch string,java switch on string,java switch enum,java switch example,java switch case string,java switch default,java switch multiple case,can java minecraft play with switch,java switch case multiple values,java switch expression
,java switch instanceof,java 8 switch case,java switch method,java switch case enum
" />
<link rel="canonical" href="https://www.codeexampler.com/java-switch" />
</Helmet>


         <main className='max-w-[1440px] mx-auto flex gap-14 justify-between relative py-3 px-4'>
              {/* Python bur component   */}
              <JavaBar ListActioveMobile={ListActioveMobile} setListActiveMobile={setListActiveMobile}></JavaBar>

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
                  <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Switch statement in Java:</h1>

<div className='text-[#9EB2D2]'>

    <p>

        This Switch case in java is also used in multiple conditions having different statements like- if-else-if but it can check only equality of the condition floating point but value can’t be check by the switch.
    </p>

</div>

<div className='text-[#9EB2D2] font-bold'>

    <p>

        Syntax for the switch in java:
    </p>

</div>


<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'></h1>

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


<div className='text-[#9EB2D2]'>

    <p>
        In this Switch case keyword in java programming that will yield an integer value forex-case1,case2, etc this is an integer constant. <br />
        if you do not find any match with any of these case statements so on that time default statement is executed
    </p>

</div>


<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Switch case in java Example Programs</h1>

<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program to input a no and print month name and if no is 2?</p>
        </div>

    </div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code2} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout2}
              </p>
            </div>



<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a Program without input use switch case?</p>
        </div>

    </div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code3} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout3}
              </p>
            </div>

<div className='text-[#9EB2D2]'>

    <p>

        This program gives output but not what we expected because we did not give the output of case 3 and the default value Break switch statement.
        So if you want to give the only case 2 statement so using switch break java means switch case break java statement.
    </p>

</div>



<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>
    Java switch statement Break
</h1>

<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a Program to give a no and print month name and if no is 2 by using switch break java?</p>
        </div>

    </div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code4} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout4}
              </p>
            </div>

<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'></h1>

<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>
                Q-Write a Program Character switch case in Java?
            </p>
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


<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Use for loop in Switch Case Java</h1>


<div className='text-[#9EB2D2]'>

    <p className="semibold">Following for loop step In switch case with break :</p>
    <p>
        1, Give java I am an int. <br />
        2, After start for loop from 1 to 5 and also use I inside switch. <br />
        3, After case 1 and check no. if no is the same so print 1 and after the break. <br />
        4, After the break. Increasing the value of loop counter each time when the program segment within the loop has been executed because (i++) is used.<br />
        5, In this time loop, started from 2 by the use of increment.check 2 in case if 2 is found so print 2 and break and again start loop.<br />
        6, When i=6 this is not greater than 5 so loop stop on 5.
    </p>

</div>

<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a Program Example for loop in switch case java?</p>
        </div>

    </div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code6} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout6}
              </p>
            </div>


<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>For Loop Switch case Exceed range no:</h1>

<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a Program for loop Switch case Exceed range no in switch case java?</p>
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
