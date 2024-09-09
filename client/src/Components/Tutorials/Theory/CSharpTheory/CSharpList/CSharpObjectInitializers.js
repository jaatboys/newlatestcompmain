import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet  from "react-helmet";
import CsharpNavBar from '../CsharpNav';
import CodeEditorFiled from '../../../CodeEditorFiled/CodeEditorFiled';
import CsharpBar from '../../../sidebars/CsharpBar';

const CSharpObjectInitializers = () => {
  const code1 = `
using System;
public class Human {
 int age;
 string name;

 public static void Main(string[] args) {
     Human h = new Human();
     h.age = 160208;
     h.name = "CodeExampler";
     Console.WriteLine(h.age + " " + h.name);
 }
}
  `
  const codeout1 = `
160208 codeExampler 
  `
  const code2 = `
using System;
class school 
{
int teachers ; // no of teachers 
int students ; // no of students 
int peon ; // no of peon 
  
 // This class declares an object of type school. 
 
static void Main(string[] args)
{
school sch = new school (); 
sch .teachers = 40; 
sch .students = 500; 
sch .peon = 20; 
 
// This dot operator (.) is used to access the member
 
Console.WriteLine ("there are "+ sch.teachers +" teachers in this school ");
Console.WriteLine ("there are "+ sch.students +" students in this school ");
Console.WriteLine ("there are "+ sch.peon +" peon in this school ");
}
}
`
  const codeout2 = `
there are 40 teachers in this school 
there are 500 students in this school 
there are 20 peon in this school 
  `
  const code3 = `
using System;
class school {
  int teachers; // number of teachers 
  int students; // number of students 
  int peon; // number of peons 
    
  // This class declares an object of type school. 
   
 static void Main(string[] args)
  {
    school sch1 = new school(); 
    school sch2 = new school(); 
  
    // sch1 and sch2 are different objects and have different values assigned to their fields
   
    // Assign values to sch1 fields
    sch1.teachers = 40; 
    sch1.students = 500; 
    sch1.peon = 20; 
   
    // Assign values to sch2 fields 
    sch2.teachers = 20; 
    sch2.students = 250; 
    sch2.peon = 10; 
  
    // This dot operator (.) is used to access the members
   
    // sch1.
    Console.WriteLine("There are "+ sch1.teachers +" teachers in this school 1 ");
    Console.WriteLine("There are "+ sch1.students +" students in this school 1 ");
    Console.WriteLine("There are "+ sch1.peon +" peons in this school 1 ");
   
    // sch2.
    Console.WriteLine("There are "+ sch2.teachers +" teachers in this school 2 ");
    Console.WriteLine("There are "+ sch2.students +" students in this school 2 ");
    Console.WriteLine("There are "+ sch2.peon +" peons in this school 2 ");
  }
}
  
  `
  const codeout3 = `
there are 40 teachers in this school 1
there are 500 students in this school 1
there are 20 peon in this school 1
   
there are 20 teachers in this school 2
there are 250 students in this school 2 
there are 10 peon in this school 2
  `
  const code4 = `
using System;
class school 
{
int teachers ;
int students ;
void numbers (int t,int s)
{
teachers = t; 
students = s; 
}
void show ()
{
Console.WriteLine(teachers +" "+ students); 
}
static void Main(string[] args)
{
school sch = new school();
sch.numbers (40,400);
sch.show ();
}
}
  `
  const codeout4 = `
40 400 
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
  

  <CsharpNavBar/>
  <Helmet>
 
 <title>Master the Art of C# object initializer: A Beginner's Tutorial Guide by CodeExampler</title>
 <meta name="description" content="C# object initializer tutorial for beginners.There are 3 Types of object initializer in C# ,CodeExampler provides Multiple Programming Examples for Beginners,CodeExampler provides Free Online Tutorials for beginners" />
 <meta name="keywords" content="codeexampler,programming language, by using constructor in C#,tutorial for begineers,by using a method in C#,Reference variable in c#,C# object initializer,c# object initializer for,c sharp object initializer,c# object initializer for loop,end for loop c#," />
 <link rel="canonical" href="https://www.codeexampler.com/csharp-object-initializers" />
 </Helmet>

           <main className='max-w-[1440px] mx-auto flex gap-14 justify-between relative py-3 px-4'>
                {/* Python bur component   */}
                <CsharpBar ListActioveMobile={ListActioveMobile} setListActiveMobile={setListActiveMobile}></CsharpBar>
  
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
                    <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>There are 3 Types of object initialization C#</h1>
                      
                      <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>1, by the reference variable in C#<br/>
                      2, by using a method in C#<br/>
                      3, by using constructor in C#
                    
                      </h1>



                      <p className='font-bold'>1, Reference Variable in C#:</p>

                      <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
              <div className=' flex gap-2 pl-7 items-center'>
                <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
                <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
                <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
                <div className='mx-1'>
                  <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a Program and Print int and name in Reference variable in C# Example?</p>
                </div>

              </div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditorFiled code={code1} /> 
</div>

<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout1}
              </p>
            </div>

<div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
              <div className=' flex gap-2 pl-7 items-center'>
                <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
                <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
                <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
                <div className='mx-1'>
                  <p className='text-lg font-semibold text-[#01B6FF]'>Q-Reference variable in C# Example?</p>
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

           
<div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
              <div className=' flex gap-2 pl-7 items-center'>
                <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
                <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
                <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
                <div className='mx-1'>
                  <p className='text-lg font-semibold text-[#01B6FF]'>Q-create 2 object class and Initilize in C#?</p>
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


<p className='font-bold'>2,Using Method:</p>


<div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
              <div className=' flex gap-2 pl-7 items-center'>
                <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
                <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
                <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
                <div className='mx-1'>
                  <p className='text-lg font-semibold text-[#01B6FF]'>Q-Reference variable by Using Method in c# example?</p>
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

            <div className='flex justify-between mx-6 sm:mx-12 mt-3 mb-3'>

<button onClick={() => handlePreviousAndNext('previous')} className=' flex  text-lg gap-1 text-[#9EB2D2] no-underline '><BsFillArrowLeftCircleFill className='text-4xl mt-1'></BsFillArrowLeftCircleFill> <span className='mt-2'>Previous</span></button>
<button onClick={() => handlePreviousAndNext('next')} className=' flex text-lg gap-1 text-[#9EB2D2] no-underline '><span className='mt-2'>Next</span><BsFillArrowRightCircleFill className='text-4xl mt-1'></BsFillArrowRightCircleFill></button>

</div>

                  </div>

              </div>

          </main>
      </div>
  );
};

export default CSharpObjectInitializers;