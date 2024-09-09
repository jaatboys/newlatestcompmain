import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import CourseArticleHeader from '../../../../Header/CourseArticleHeader'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import  Helmet  from "react-helmet";
import PythonBar from '../../../sidebars/PythonBar';
import CodeEditorFiled from '../../../CodeEditorFiled/CodeEditorFiled';
import PythonNavBar from '../PythonNav';

const code =`
Dict.name = {'key1':'value','key2':'value'}
  `

const code1 =`
student = {'Name':'Ram','class':'8','subject':['English','Physics','History']}
print(student)
  `


const codeout1 =`
{'Name':'Ram','class':'8','subject':['English','Physics','History']}
  `



// const codeout1= <p></p>

const code2 =`
Color_no = {'color':'red','points':'6'}
print(Color_no['color'])
print(Color_no['points'])
  `


const codeout2 =`
red
6
  `



const code3 =`
student = {'Name':'Ram','class':'8','subject':['English','Physics','History']}
print(student['subject'])`


const codeout3 =`
['English','Physics','History']
  `


const code4 =`
detail = {}
detail['Name'] = 'Ram'
detail['percentage'] = 98
print(detail)
  `


const codeout4 =`
{'name':'Ram','percentage':98}
  `


const code5 =`
students = {
  'students1':{'Name':'Ram','percentage':'98'},
  'students2':{'Name':'Lakshman','percentage':'96'}
  }
print(students)
print(students['students1'])
   `


const codeout5 =`
{'students1':{'Name':'Ram','percentage':'98'},'students2':{'Name':'Lakshman','percentage':'96'} }
{'Name':'Ram','percentage':'98'}
   `


const code6 =`
students = {'Name':'Anmol Chaudhary','age':28}
if 'Name' in students:
  print('present')
else :
  print('not present')
   `


const codeout6 =`
present
  `


const code7 =`
students = {'Name':'Lakshmana','age':28}
if 'Lakshmana' in students.values():
  print('present')
else :
  print('not present')
  `


const codeout7 =`
present
  `


const code8 =`
students = {'Name':'Ram','age':28,'subject':['English','Physics','History']}
if ['English','Physics','History'] in students.values():
  print('present')
else :
  print('not present')
  `


const codeout8 =`
present
  `


const code9 =`
Student = {'Name':'Ram','age':22,'percentage':98}
for i in Student:
    print(i)
    `

const codeout9 =`
name
age
percentage
  `



const code10 =`
Student = {'Name':'Ram','age':22,'percentage':98}
for i in Student.values():
    print(i)
    `

const codeout10 =`
Ram
22
98
  `


const code11 =`
Student = {'Name':'Ram','age':22,'percentage':98}
for i in Student:
    print(Student[i])
    `


const codeout11 =`
Ram
22
98
  `


const code12 =`
Student = {'Name':'Ram','age':22}
values = Student.values()
print(values)
  `


const codeout12 =`
{'Name':'Ram','class':'8','subject':['English','Physics','History']}
  `


const code13 =`
Student = {'Name':'Ram','age':22}
x  = Student.keys()
print(x)
  `

const codeout13 =`
dict_keys(['Name', 'age'])
 `


const code14 =`
Student = {}
x  = Student.items()
print(x)
  `


const codeout14 =`
{'Name':'Ram','class':'8','subject':['English','Physics','History']}
  `
  const code15 =`
my_dict = {'name': 'Alice', 'age': 30, 'city': 'New York'}
print(my_dict.items())  
    `
  
  
  const codeout15 =`
dict_items([('name', 'Alice'), ('age', 30), ('city', 'New York')])
    `


const code16 =`
Student = {'Name':'Ram','age':22}
for k,v in Student.items():
    print(k,v)
    `


const codeout16 =`
Name Ram
Age 22
  `

const PythonDictionaries = () => {
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


<PythonNavBar/>
<Helmet>
 
  <title>Master the Art of Python Dictionaries: A Beginner's Tutorial Guide by CodeExampler</title>
<meta name="description" content="Python dictionary tutorial for beginners and dictionary is also a data structure Will be used defining a dictionary.Dictionaries are used due to limitation of the list
The list is not enough to represent the data" />
<meta name="keywords" content="codeexampler,programming language,python dictionary add,python dictionary methods,python dictionary iterate,python dictionary append
,python dictionary get,python dictionary sort,python dictionary list,python dictionary of lists,python dictionary keys,python dictionary loop,python dictionary for loop,
,python dictionary example"/>
<link rel="canonical" href="https://www.codeexampler.com/python-dictionary" />
</Helmet>

      <main className='max-w-[1440px] mx-auto flex gap-14 justify-between relative py-3 px-4'>
        {/* Python bur component   */}
        <PythonBar ListActioveMobile={ListActioveMobile} setListActiveMobile={setListActiveMobile}></PythonBar>

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
          <div className='space-y-3 p-4 lg:p-2'>
            <div className='text-[#9EB2D2] '>

              <p>
                That is also a data structure that Will be used to defining a dictionary.
              </p>

            </div>




            <h2 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Python Dictionaries Keys:</h2>


            <div className='text-[#9EB2D2]'>

              <p>

                A dictionary as a mapping between a set of indices is known as<span className='font-bold'> Python Dictionaries keys</span>.
              </p>

            </div>




            <h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Python Dictionaries Explained</h3>


            <div className='text-[#9EB2D2]'>

              <p>

                Python Dictionaries Explained create a new dictionary with no items. Dictionaries use due to the limitation of the list is not enough to represent the data.
              </p>

            </div>




            <h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Creating a Python dictionary Syntax:</h3>

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
              <CodeEditorFiled code={code} />
            </div>





            <h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Python Dictionaries Examples:</h3>
            <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'> </p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
              <CodeEditorFiled code={code1} />
            </div>


            <h4 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h4>
            <div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap'>
              {codeout1}
              </p>
            </div>





            <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Python Dictionaries Students Basic Example? </p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
              <CodeEditorFiled code={code2} />
            </div>

            <h4 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h4>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout2}
              </p>
            </div>






            <h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Accessing Python dictionary</h3>


            <div className='text-[#9EB2D2]'>

              <p>

                <b> Print(0) </b> -error! Because never index in dictionaries with integer indices
              </p>

            </div>



            <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'> Q-Python Dictionaries Colors example?</p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
              <CodeEditorFiled code={code3} />
            </div>

            <h4 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h4>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout3}
              </p>
            </div>




            <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Python Dictionaries Students Subject Example? </p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
              <CodeEditorFiled code={code4} />
            </div>

            <h4 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h4>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout4}
              </p>
            </div>



            <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Python nested Students dictionary Comprehension? </p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
              <CodeEditorFiled code={code5} />
            </div>

            <h4 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h4>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout5}
              </p>
            </div>



            <div className='text-[#9EB2D2]'>

              <p>

                You already knew about key and value in previous Python dictionaries points, so focus On these topics.
              </p>

            </div>







            <h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Check if the key exists in the dictionary:</h3>
            <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'> Q-Python nested Students dictionary Comprehension?</p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
              <CodeEditorFiled code={code6} />
            </div>

            <h4 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h4>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout6}
              </p>
            </div>





            <h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Check if the value in python dictionary:</h3>
            <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'> </p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
               <CodeEditorFiled code={code7} /> 
            </div>

            <h4 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h4>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout7}
              </p>
            </div>





            <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Check Full List in Dictionary:</h1>
            <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a Program to Check Values Python Dictionaries Example? </p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
              <CodeEditorFiled code={code8} />
            </div>


            <h4 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h4>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout8}
              </p>
            </div>





            <h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Python Loop in a dictionary</h3>



            <div className='text-[#9EB2D2]'>

              <p>

                In a Python dictionary, loop print uses both keys and values.
              </p>

            </div>






            <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Python For Loop Basics Dictionaries Example? </p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
              <CodeEditorFiled code={code9} />
            </div>


            <h4 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h4>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout9}
              </p>
            </div>






            <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Python Loop For Values:</h1>

            <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Python Dictionaries For Loop by Using Values() Function Example? </p>
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



            <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Same As</h1>
            <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'> Q-Python Dictionaries For Loop by Using [i] Example?</p>
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






            <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Python Dictionaries Value():</h1>
            <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>This Method uses to access the values.</h1>


            <div className='text-[#9EB2D2]'>

              <p>

                This Method uses to access the values.
              </p>

            </div>


            <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'> </p>
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




            <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Python Dictionaries Keys():</h1>



            <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Python Dictionaries Keys() Method:</h1>


            <div className='text-[#9EB2D2]'>

              <p>
                This method uses to access the values.
              </p>

            </div>




            <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'> </p>
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





            <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Python Dictionaries Items() Method:</h1>
            <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
            <div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'> </p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
              <CodeEditorFiled code={code14} />
            </div>

            <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout14}
              </p>
            </div>


            <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Python Dictionaries Items() Method Example:</h1>
            <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
            <div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'> </p>
    </div>

</div>

</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
              <CodeEditorFiled code={code15} />
            </div>

            <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout15}
              </p>
            </div>




            <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Python Dictionaries combine Values and Keys:</h1>
            <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
            <div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'> </p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
              <CodeEditorFiled code={code16} />
            </div>

            <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout16}
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

export default PythonDictionaries;