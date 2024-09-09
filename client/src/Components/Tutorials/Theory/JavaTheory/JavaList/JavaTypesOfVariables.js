import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet  from "react-helmet";
import JavaNavBar from '../JavaNav';
import JavaBar from '../../../sidebars/JavaBar';
import CodeEditorFiled from '../../../CodeEditorFiled/CodeEditorFiled';
export default function JavaTypesOfVariables() {
    const code1 = `
public class Local_example // class is a keyword 
{ 
   public static void main(String[] args) 
   { 
    String Name; // This is a Local Variable 
    Name="Code Exampler";
    System.out.println(Name);
   } 
}
    `
    const codeout1 = `
Code Exampler 
    `
    const code2 = `
class code
{ 
   int a=20;
   static int b=40;
   public static void main(String[] args) 
   { 
    code sv1 = new code();
    System.out.println(sv1.a);
    System.out.println(sv1.b);
 
     // But when we create a new object like this 
 
    code sv2 = new code();
    System.out.println(sv2.a); // Because of instance variable create new memory allocate whenever we created another new object. 
    System.out.println(sv2.b); // This value is the same because the static Variable can’t initialize when creating another object. 
   } 
}
    `
    const codeout2 = `
20  
40 
20 
40 
    `
    const code3 = `
class code
{ 
 int a=20;
 static int b=40;
 public static void main(String[] args) 
 { 
  code sv1 = new code();
  System.out.println(sv1.a);
  System.out.println(sv1.b);

   // if you change a value so 

  sv1.a = 100;
  sv1.b = 100;
  System.out.println(sv1.a);
  System.out.println(sv1.b);
   // But when we create a new object like this

  code sv2 = new code();
  System.out.println(sv2.a); // because of instance variable create a new memory allocate whenever we create another object. 
  System.out.println(sv2.b); // his value is the same because the static Variable can’t initialize when creating another object.
  } 
}
    `
    const codeout3 = `
20 
40 
100 
100 
20 
100 
    `
    const code4 = `
Insance_var iv = new Insance_var();
Abc.iv();
    `
    const code5 = `
class code
{ 
 int a=20;// instance variable
 static int b=40;// static variable
 void abc() 
 { 
  int y=50,z;
  z=a*y;
  System.out.println(z);
 } 
 void xyz() 
 { 
  int f=80,g;
  g=a+b+f;
  System.out.println(g);
 } 
 public static void main(String[] args) 
 { 
  code co = new code();
  co.abc();
  co.xyz();
 } 
}
    `
    const codeout5 = `
1000 
140 
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
 
 <title>Master the Art of Java types of variable: A Beginner's Tutorial Guide by CodeExampler</title>
<meta name="description" content="Java types of variable tutorial for beginners.CodeExampler provides Multiple Programming Examples for Beginners,CodeExampler provides Free Online Tutorials for beginners and questions of all technology like java tutorial, Java tutorial,Java tutorial for beginners in deeply knowledge With Deeply" />
<meta name="keywords" content="codeexampler,programming language,tutorial for begineers,java type of variable,java check type of variable,java class variable example
,java class member variable,types of variables in java,java types of variables,javascript variable types,how many types of variable in java" />
<link rel="canonical" href="https://www.codeexampler.com/java-types-of-variables" />
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
                  <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Java Variables are Three Types:</h1>

<div className='text-[#9EB2D2]'>

    <p>
<strong>
        1, Local Variable <br />
        2, Static Variable <br />
        3, Instance Variable <br />
        </strong>
    </p>

</div>


<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>1, Local Variable:</h1>

<div className='text-[#9EB2D2]'>

    <p>

        1, These types of Variable are defined inside a method, blocks, or Constructors.  <br />
        2, Local Variable scope only inside the method, blocks, or constructors. <br />
        3, It Can’t use from outside that function. <br />
        4, The initial value will be garbage. <br />
        5, Doesn’t have any default value.
    </p>

</div>



<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a Program local Variable print name in Java?</p>
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


<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>2, Static Variables:</h1>

<div className='text-[#9EB2D2]'>

    <p>

        These Static variables in Java are declared inside a class using the static keyword this is also known as an instance variable. <br />
        1, Static keyword creates within a class but outside the constructor, method, or blocks.<br />
        2, Static variables allocate memory when we run the program.<br />
        3, Static variables stored inside static memory.<br />
        4, We also use access specifiers like-public, private, protected
    </p>

</div>


<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a Program Static variable in Java and print a and b by using new object example?</p>
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
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a Program when we create a new object in Java with an instance variable example?</p>
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

<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>3, Instance Variable:</h1>

<div className='text-[#9EB2D2]'>

    <p>

        These <strong> Instance Variables in Java</strong> are declared inside a class. That is known as an instance variable. <br />
        a, These Instance variables are used inside the class but used outside in constructor, method, or blocks. <br />
        b, Instance variable allocated when the object is created.
    </p>

</div>

<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Following Steps of a static Variable in Java:</h1>

<div className='text-[#9EB2D2]'>

    <p>

        1, The Instance variable can be called directly in a standard or simple method. <br />
        2, But when we use the static method, so we call an instance variable by using or creating object for example:
    </p>

</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Instance variable call by using a method in Java:</h1>


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

<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Instance variable example: </h1>

<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Instance variable Full example in Java?</p>
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
