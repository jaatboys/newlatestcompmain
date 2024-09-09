import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet  from "react-helmet";
import CppBar from '../../../sidebars/CppBar';
import CodeEditorFiled from '../../../CodeEditorFiled/CodeEditorFiled';
import CppNavBar from '../CppNav';

export default function CppArray() {

  const code1 = `
1, One-dimensional array in c++
2, Multi-dimensional array in c++
  `
  const code2 = `
Ex- {10,20,30,40,50}
  `
  const code3 = `
Type array_name [size];
Ex-int a [4]
int b [5]
  `
  const code4 = `
int a [6]= {20,40,30,60,50}
int a []= {1,2,3,5,8,10}
float a []= {2.8,20.46,8.6,4.5,46.50}
  `
  const code5 = `
#include <iostream> 
using namespace std; 
int main ()
 { 
 
 int  i ;
 int a  [] = { 1,2,3,4,5,6} ; 
 for (i = 0; i < 5; i ++)
  { 
  cout << a [ i ] << "\\n" ;
  } 
  return 0 ;
 } 
  `
  const codeout5 = `
1  
2 
3 
4 
5 
  `




  
  const code6 = `
#include <iostream> 
using namespace std; 
int main ()
 { 
 
 for ( i = 0; i <10; i++)
 { 
 if ( a [i] < maximum )
 maximum = a [i] ; 
 } 
  cout << "maximum = "<< maximum ;
  return 0 ;
 } 
  `
  const codeout6 = `
enter 10 elements
2 
4 
56 
8 
7 
9 
3 
2 
1 
5 
maximum = 56 
  `
  const code7 = `
#include <iostream> 
using namespace std; 
int main ()
 { 
 
 int a [8],i; 
 cout << "enter 8 elements\n";
 for (i = 0; i < 8; i ++) 
  cin >> a [i];
  for (i = 7; i > = 0; i --)
  cout << a [i];
  return 0 ;
 } 
  `
  const codeout7 = `
enter 8 elements
4 
5 
2 
3 
9 
4 
6 
7 
76493254 
  `
  const code8 = `
#include <iostream> 
using namespace std; 

int main() {
 int a[10], i, maximum; 
 cout << "Enter 10 elements: ";
 for (i = 0; i < 10; i++) {
     cin >> a[i]; 
 }
 maximum = a[0]; 
 for (i = 0; i < 10; i++) {
     if (a[i] > maximum) {
         maximum = a[i]; 
     }
 }
 cout << "Maximum element is: " << maximum << endl;
 return 0;
}
  `
  const codeout8 = `
enter 10 elements
2 
4 
5 
3 
1 
6 
7 
9 
5 
6 

  `
  const codeans8 = `
Maximum element is: 9
  `


  const code9 = `
#include <iostream> 
using namespace std; 
int main ()
 { 
int a[5], b[5], c[5], i; 
cout << " enter 5 elements \\n";
 for ( i = 0; i <5; i++)
 cin >> a [i]; 
cout << " enter 5 elements \\n";
 for ( i = 0; i <5; i++)
 cin >> b [i]; 
cout << "addition both arrays \\n";
 for (i = 0; i < 5; i++)
 { 
 c [i] = a [i] + b [i];
cout << c [i] ;
 } 
  return 0 ;
} 
  `
  const codeout9 =`
enter 5 elements
4
63
2
7
89
enter 5 elements
5
3
2
4
3
  `

  const codeans9 =`
addition both arrays
96641192
    `


  const code10 = `
#include <iostream>
using namespace std;

int main()
{
  int arr[10];

  cout << "Enter 10 integers: " << endl;
  for (int i = 0; i < 10; i++)
  {
    cin >> arr[i];
  }

  cout << "Even elements of the array: " << endl;
  for (int i = 0; i < 10; i++)
  {
    if (arr[i] % 2 == 0)
      {
        cout << arr[i] << " ";
      }
  }
  cout << endl;
return 0;
}  
  `

  const codeout10 =`
Enter 10 integers: 
4
5
6
7
34
56
654
75
1
2
  `

  const codeans10 =`
Even elements of the array: 
4 6 34 56 654 2 
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
<CppNavBar/>
<Helmet>

     <title>Master C++ Arrays with CodeExampler's Tutorial for Beginners</title>
     <meta name="description" content="Get ahead with CodeExampler's easy-to-follow C++ array tutorial for beginners. Learn about one-dimensional and multi-dimensional arrays, dynamic arrays, and more. Free online tutorials available."/>
<meta name="keywords" content="C++ arrays, dynamic arrays, multi-dimensional arrays, programming language tutorial,cpp array, arraylist, C++ beginners,,sort array in cpp, learn programming, free tutorials"/>
<link rel="canonical" href="https://www.codeexampler.com/cpp-array" />

 </Helmet>


           <main className='max-w-[1440px] mx-auto flex gap-14 justify-between relative py-3 px-4'>
                {/* Python bur component   */}
                <CppBar ListActioveMobile={ListActioveMobile} setListActiveMobile={setListActiveMobile}></CppBar>

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
                          
                           1, This is a collection of similar types of data and stored manually consecutively under one name <br />
2, The index number will be different<br />
3, The Main purpose of the array used to handle a large volume of data of some type more easily<br />
                           </p>
                          
                      </div>


                      <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>There are two types of array in C++:</h1>

                      <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>

</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code1} />
</div>


<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>This is Basic array c++ style:</h1>

<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>

</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code2} />
</div>



<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>array in c++ syntax:</h1>

<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>

</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code3} />
</div>




<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>C++ Initialize Array:</h1>

<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>

</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code4} />
</div>



<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a Program to print an Array in C++? </p>
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



                        <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q- Write a program to input an array of 10 elements and print only even elements? </p>
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


                        <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program to input an array of 8 elements and print in reverse? </p>
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


                        <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program to input an array of 10 elements and print in maximum in c++? </p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code8} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Input:</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout8}
              </p>
            </div>
                        <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeans8}
              </p>
            </div>



                        <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program to add two arrays, and results should be stored into a third(3) arrays in c++? </p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code9} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Input :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout9}
              </p>
            </div>
           <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeans9}
              </p>
            </div>



                        <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q- Write a program to input an array of 10 elements and print only even elements? </p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code10} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Input :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout10}
              </p>
            </div>
                        <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeans10}
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
