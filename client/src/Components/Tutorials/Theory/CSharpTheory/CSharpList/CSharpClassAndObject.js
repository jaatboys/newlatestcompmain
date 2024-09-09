import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet  from "react-helmet";
import CsharpNavBar from '../CsharpNav';
import CodeEditorFiled from '../../../CodeEditorFiled/CodeEditorFiled';
import CsharpBar from '../../../sidebars/CsharpBar';

const CSharpClassAndObject = () => {
  const code1 = `
class classname 
{
constructors 
blocks 
methods
nested class
fields 
}
  `
  const code2 = `
access-modifier Class classname  {
  Type variable1 ;
  Or 
  Type instance variable2
   ..
  Type instance variable2 N 
  //methods 
  Type method1 (parameters)
  {
  /body 
  }
  Type method N ( parameters)
  {
  /body 
  }
  }
  `
  const code3 = `
class school 
{
int teachers ; // no of teachers 
int students ; // no of students 
int peon ; // no of peon 
}
  `
  const code4 = `
ClassName new  object _name = new className();
Or 
School sch = new school () ; //  create a school object known as sch.
  `
  const code5 = `
ClassName ObjectName; // declare reference to an object

ObjectName = new ClassName (); // allocate a class object.
  `
  const code6 = `
class school 
{
int teachers ; // no of teachers 
int students ; // no of students 
int peon ; // no of peon 
school sch = new school(); // create a school object known as sch
 
Or

school sch;
sch = new school(); 
}
  `
  const code7 = `
Object.Member 
Or
School.Teachers = 18;
  `
  const code8 = `
using System;
namespace Class_object
{
 class School 
 {
 int teachers ; // no of teachers 
 int students ; // no of students 
 int peon ; // no of peon 
 // This class declares an object of type School. 
 public static void Main (string[]args)
 {
     School sch = new School(); 
     sch.teachers = 40; 
     sch.students = 500; 
     sch.peon = 20; 
     // This dot operator (.) is used to access the member
     Console.WriteLine ("There are " + sch.teachers + " teachers in this school");
     Console.WriteLine ("There are " + sch.students + " students in this school");
     Console.WriteLine ("There are " + sch.peon + " peons in this school");
 }
 }
}
  `
  const codeout8 = `
there are 40 teachers in this school 
there are 500 students in this school 
there are 20 peon in this school 
  `
  const code9 = `
using System;
namespace ClassExample
{
class school 
{
 int teachers; // no of teachers 
 int students; // no of students 
 int peon; // no of peon 
 
 // This class declares an object of type school. 

 public static void Main(string[] args)
 {
 school sch1 = new school(); 
 school sch2 = new school(); 


 // Sch1 and sch2 Both are different objects
 // assigns value inside the sch1 fields
 sch1.teachers = 40; 
 sch1.students = 500; 
 sch1.peon = 20; 
 // assigns value inside the sch2 fields 
 sch2.teachers = 20; 
 sch2.students = 250; 
 sch2.peon = 10; 

 // This dot operator (.) is used to access the member
 // sch1.
 Console.WriteLine("There are " + sch1.teachers + " teachers in this school 1");
 Console.WriteLine("There are " + sch1.students + " students in this school 1");
 Console.WriteLine("There are " + sch1.peon + " peon in this school 1");

 // sch2.
 Console.WriteLine("There are " + sch2.teachers + " teachers in this school 2");
 Console.WriteLine("There are " + sch2.students + " students in this school 2");
 Console.WriteLine("There are " + sch2.peon + " peon in this school 2");
 }
}
}
  `
  const codeout9 = ` 
there are 40 teachers in this school 1
there are 500 students in this school 1
there are 20 peon in this school 1
   
there are 20 teachers in this school 2
there are 250 students in this school 2 
there are 10 peon in this school 2
  `

  const code10 = `
  using System;

namespace ClassExample
{
class Person
{
 string name;
 int age;
 string gender;
 public static void Main(string[] args)
 {
  Person person1 = new Person();
  person1.name = "Alice";
  person1.age = 25;
  person1.gender = "Female";

  Person person2 = new Person();
  person2.name = "Bob";
  person2.age = 30;
  person2.gender = "Male";
  
  Console.WriteLine("Name: {0}, Age: {1}, Gender: {2}", person1.name, person1.age, person1.gender);
  Console.WriteLine("Name: {0}, Age: {1}, Gender: {2}", person2.name, person2.age, person2.gender);
 }
}
}
    `
    const codeout10 = ` 
Name: Alice, Age: 25, Gender: Female
Name: Bob, Age: 30, Gender: Male
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
 
 <title>Master the Art of C# Class and Object: A Beginner's Tutorial Guide by CodeExampler</title>
 <meta name="description" content="C# class and object tutorial for beginners.class and object in C# is a C# class is a prototype or blueprint that define the form of an object,C# class is constructed by the use of class  keyword" />
 <meta name="keywords" content="codeexampler,programming language,tutorial for begineers,C# class and object,c# class and object for,c sharp class and object,c# class and object for loop,c# continue,class and object foreach c#,c# foreach class and object" />
 <link rel="canonical" href="https://www.codeexampler.com/csharp-class-object" />
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
                    <div className='text-[#9EB2D2]'>
                           
                           <p>
                           1, C# class is a prototype or blueprint that define the form of an object<br/>
                           2, C# class is constructed by the use of class keyword<br/>
                           3, C# class is a collection of an object <br/>
                           4, Class doesn't gain space or memory <br/>
                           5, One main thing is that data, variables, define within a class are known as an instance variable
                           </p>
                          
                      </div>

                      <p className='font-bold'>Important</p>

<div className='text-[#9EB2D2]'>
                           
     <p>

     If you don’t write access-modifier before the class so c# gives by default access-modifier is default
     </p>
    
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
<CodeEditorFiled code={code1} /> 
</div>


<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Class and Object Syntax:</h1>
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




<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Following steps to define a class:</h1>


<div className='text-[#9EB2D2]'>
                           
     <p>

     1, we created a class name called school.<br/>
2, you create a few instance variables like- teachers, students, peon.<br/>
3, you also know that class defines a new data type or a new type of data is known as school.<br/>
4, the main thing is that you will use the school name to declare as an object type<br/>
5, class don’t create an actual object because this is only a prototype or blueprint
     </p>
    
</div>

<p className='font-bold'>Create an object in C#:</p>
<div className='text-[#9EB2D2]'>
                           
     <p>

     1, Object allocates memory<br/>
2, C# object is an instance of the class<br/>
3, New keyword is a keyword that creates a new C# Object
     </p>
    
</div>

<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
  <p className='text-lg font-semibold text-[#01B6FF]'> Syntax for creating an object in C#:</p>
</div>

</div>
</div>
<div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditorFiled code={code4} /> 
</div>



<p className='font-bold'>And we also combine this statement by the two steps:</p>


<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
  <p className='text-lg font-semibold text-[#01B6FF]'>We combine both statements in C#: </p>
</div>

</div>
</div>
<div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditorFiled code={code5} /> 
</div>




<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Create object class in c#</h1>

<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>

</div>
<div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditorFiled code={code6} /> 
</div>





<div className='text-[#9EB2D2]'>
                           
     <p>

     1, Sch will be referred to as an instance of a class known as school <br/>
2, Every school object contains its own copies in the form of instance variable such as teachers, students, poem<br/>
3, dot operator(.) use to link the name of an object with the member name forex. 
     </p>
    
</div>

<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
  <p className='text-lg font-semibold text-[#01B6FF]'>Object syntax in c#: </p>
</div>

</div>
</div>
<div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditorFiled code={code7} /> 
</div>




<div className='text-[#9EB2D2]'>
                           
     <p>

     1, This also known as a <span className='font-bold'>reference variable.</span>  <br/>
2, Object put on the left and member put on the right and after assigning the value is 18 or as your choice
     </p>
    
</div>

<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
  <p className='text-lg font-semibold text-[#01B6FF]'>Q-Reference variable in C# Example? </p>
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



<div className='text-[#9EB2D2]'>
                           
     <p>

     1, This file call by school.c# because this program use school class but not call because main() method inside this class known as insideSchool so this file call by insideSchool.c# only<br/>
2, This is not compulsory both class school and insideSchool put in same source file .you could put each class in a different file known as school.c# and insideSchool.c#
3, To run this program by executing inside the school.class
     </p>
    
</div>


<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
  <p className='text-lg font-semibold text-[#01B6FF]'> Q-Create 2 object in class in C#?
</p>
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



            <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
  <p className='text-lg font-semibold text-[#01B6FF]'> Q-Create 2 object in class in C#?
</p>
</div>

</div>
</div>
<div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditorFiled code={code10} /> 
</div>

<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout10}
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

export default CSharpClassAndObject;