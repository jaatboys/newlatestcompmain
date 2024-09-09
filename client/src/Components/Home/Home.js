import {React, useState} from 'react';
import pythonLogo from '../../assets/pythonBigLogo.png';
import phpLogo from '../../assets/phpLogo.png';
import jsLogo from '../../assets/jsLogo.png';
import reactLogo from '../../assets/reactLogo.png';
import cplusLogo from '../../assets/cplusLogo.png';
import htmlLogo from '../../assets/htmlLogo.png';
import java from '../../assets/java.png';
import Csharp_Logo from '../../assets/Csharp_Logo.png';
import Clanguage from '../../assets/Clanguage.png';
import go from '../../assets/go.svg'
import ts from '../../assets/ts5.jpg'
import './Home.css'
import HomePageHeader from '../Header/HomePageHeader';
import  Helmet  from "react-helmet";
import rlogo from "../../assets/RProgramminglanguage.png";

const Home = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [selectedAction, setSelectedAction] = useState(null);
    const [path,setPath] = useState('python-variables')
    const [language,setLanguage] = useState('python')
    const [img,setImg] = useState(pythonLogo)

    const link=(x)=>{
        setIsDialogOpen(true);
        setSelectedAction(x);
        if(x=== 1){
            // window.location.href = '/python-variables'; 
            // setPath("python-variables")
            // setLanguage('python')
            // setImg(pythonLogo)
        }
        else if(x === 2){
            // window.location.href = '/php-variables';
            setPath("php-variables")
            setLanguage('php')
            setImg(phpLogo)
        }
        else if(x === 3){
            // window.location.href = '/javascript-variables';
            setPath("javascript-variables")
            setLanguage('javascript')
            setImg(jsLogo)
        }
        else if(x === 4){
            // window.location.href = '/java-variables';
            setPath("java-variables")
            setLanguage('java')
            setImg(java)
        }
        else if(x === 5){
            // window.location.href = '/cpp-variable';
            setPath("cpp-first-program")
            setLanguage('cpp')
            setImg(cplusLogo)
        }
        else if(x === 6){
            // window.location.href = '/csharp-first-program';
            setPath("csharp-first-program")
            setLanguage('csharp')
            setImg(Csharp_Logo)
        }
        else if(x === 7){
            // window.location.href = '/c-variable';
            setPath("c-variable")
            setLanguage('c')
            setImg(Clanguage)
        }
        else if(x === 8){
            // window.location.href = '/java-vs-python-basic';
            setPath("java-vs-python-basic")
            setLanguage('java')
            setImg(java)
        }
        else if(x === 9){
            // window.location.href = '/java-vs-csharp-basic';
            setPath("java-vs-csharp-basic")
            setLanguage('java')
            setImg(java)
        }else if(x === 10){
            setPath("go-variables")
            setLanguage('go')
            setImg(go)
        }else if(x === 11){
            setPath("typescript-variables")
            setLanguage('typescript')
            setImg(ts)
        }
        
    }
    const openDialog = (action) => {
        setSelectedAction(action);
        setIsDialogOpen(true);
      };
    
      const closeDialog = () => {
        setIsDialogOpen(false);
        setSelectedAction(null);
      };
    
    const handleLearn = () => {
        // Perform the "Learn" action based on the selectedAction value
        // For example, navigate to the appropriate tutorial page.
        // You can use React Router or any other routing library.
        switch (selectedAction) {
          case 1:
            window.location.href = '/python-variables';
            break;
          // Handle other cases
          default:
            break;
        }
    
        setIsDialogOpen(false);
      };
    
      const handleCompile = () => {
        // Perform the "Compile" action based on the selectedAction value
        // You can implement your logic here.
        setIsDialogOpen(false);
      };
    
      const handleCloseDialog = () => {
        setIsDialogOpen(false);
      };

      const handleBackdropClick = (event) => {
        if (event.target === event.currentTarget) {
          // Check if the click occurred on the backdrop itself, not on the dialog content
          closeDialog();
        }
      };
    
    return (
     <div className="dialog-backdrop" onClick={handleBackdropClick}>
            {/* <HomePageHeader></HomePageHeader> */}
            <div className='max-w-[1440px] mx-auto my-10 '>


            <Helmet>

<title>Programmings Language Tutorials and Difference Between Programming Language</title>
<meta name="description" content="Programming language tutorial for begineers tutorial for begineers.CodeExampler provides Multiple Programming Examples for Beginners,CodeExampler provides Free Online Tutorials for beginners and  questions of all technology like java tutorial, python tutorial,python tutorial for beginners in deeply knowledge With Deeply" />
<meta name="keywords" content="codeexampler,programming language,tutorial for begineers,Difference Between Java and Python,Difference between program and code,java tutorial for begineers,python tutorial for begineers,Python tutorial for begineers,code,exampler,which online website to learn code,Difference Between Java and python tutorial,code,exampler,java vs python,java vs Python" />
<link rel="canonical" href="https://www.codeexampler.com/programming-language-to-learn" />
</Helmet>


<div className='mx-4 md:mx-[5%] space-y-4'>
                    <h1 className='text-3xl mdd:text-5xl text-[#01B6FF]  text-center'>Choose what to Learn Free Coding</h1>
                    <h1 className='text-center text-[#01B6FF]'>Start Learn <span className='text-white'>Free</span> Popular Programming Languages</h1>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-12'>

                        {/* python */}
                        <div onClick={()=>link(1)} className='rounded-xl cursor-pointer lg:w-md  lg:h-auto bg-[#1E405D] text-white flex justify-between gap-4 py-2'>
                            <div className='w-fit  textMode  py-3'>
                                <h1 className='transform rotate-[180deg] text-6xl lg:text-7xl font-semibold uppercase '>Python</h1>
                                <p className='text-base  transform rotate-[180deg]'>High-Level Programming Language</p>
                            </div>
                            <div className='w-[70%] flex flex-col justify-around mr-5 '>
                                <img src={pythonLogo} alt="pythonLogo" className='w-52 mx-auto mt-1' />
                                <button
        className="rounded-lg border-[0.0625rem] text-center font-bold bg-[#01B6FF] border-[#01B6FF] text-white text-sm px-2 py-2 hover:border-[#028bc2] hover:text-[#ebf4f8]"
        onClick={()=>link(1)}>
   Free Tutorial / Compiler
      </button>

       {/* Modal Overlay */}
       {isDialogOpen  &&  (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40">
    {/* Modal Dialog */}
    <div className=" bg-[#333f50] p-12  rounded-xl md:w-[600px] w-[90%] m-auto  flex flex-col  gap-6   ">
            <div className="flex justify-center text-[20px] ">

           <div className='md:tracking-[3px] '>Amplify Your <span className='text-[#03c3f1] '>Coding </span>Skills through</div>
            </div>
           <div className=" flex gap-4  justify-center mx-10" >
           <a href={path}>
           <div className=" bg-[#1e2736] flex justify-center h-64 w-28 md:h-60 md:w-60  rounded-xl pt-16 px-2 sm:p-12 sm:pt-14  sm:w-48">
               
                <div className='text-center'>

                <img width='120px' src={img} alt="dfgfd" />
                <div className='text-[25px] text-[#03c3f1] relative font-semibold'>Learn</div>
                </div>
                
            </div>
            </a>
            <a href={`/compiler/${language}`} target="_blank" rel="noopener noreferrer">
            <div className=" bg-[#1e2736] flex justify-center h-64 w-28 md:h-60 md:w-60  rounded-xl pt-16 px-2 sm:p-12 sm:pt-14  sm:w-48">
            
                <div className='text-center'>

                <img width='120px' src={img} alt="dfgfd" />
                <div className='text-[25px] text-[#fdfdfd] relative font-semibold'>
                    Compiler</div>
                </div>
                
            </div>
            </a>
           </div>
        </div>
  </div>
)}



                            </div>
                        </div>

         
                        {/* javascript */}
                        <div onClick={()=>link(3)} className='rounded-xl cursor-pointer lg:w-md  lg:h-auto bg-[#000000] flex justify-between gap-4 text-[#F7DF1E]'>
                            <div className='w-fit  textMode  py-3'>
                                <h1 className='transform rotate-[180deg] text-6xl lg:text-6xl font-semibold uppercase '>JAVASCRIPT</h1>
                                <p className='text-base  transform rotate-[180deg]'>Programming Language</p>
                            </div>
                            <div className='w-[70%] flex flex-col justify-around mr-5 '>
                                <img src={jsLogo} alt="jsLogo" className='w-48 mx-auto' />
                                <button onClick={()=>link(3)} className='rounded-lg border-[0.0625rem] text-center font-bold bg-[#01B6FF] border-[#01B6FF] text-white text-sm px-2 py-2 hover:border-[#028bc2] hover:text-[#ebf4f8]'>Free Tutorial / Compiler</button>

                            </div>
                        </div>
                        <a href='/compiler/typescript'>
                        <div  className='rounded-xl cursor-pointer lg:w-md  lg:h-auto bg-[#007bd0] flex justify-between gap-4 text-white'>
                      
                            <div className='w-fit  textMode  py-3'>
                                <h1 className='transform rotate-[180deg] text-6xl lg:text-6xl font-semibold uppercase '>TYPESCRIPT</h1>
                                <p className='text-base  transform rotate-[180deg]'>A Standard Programming Language</p>
                            </div>
                            <div className='w-[70%] flex flex-col justify-around mr-5 '>
                                <img src="https://cdn-icons-png.flaticon.com/128/5968/5968381.png" alt="jsLogo" className='w-48 mx-auto' />
                                <button className='rounded-lg border-[0.0625rem] text-center font-bold bg-[#01B6FF] border-[#01B6FF] text-white text-sm px-2 py-2 hover:border-[#028bc2] hover:text-[#ebf4f8]'>Start Compiler</button>
                                
                            </div>
                          
                        </div>
</a>
                        {/* reactjs */}
                        {/* <div className='rounded-xl  lg:w-md  lg:h-auto bg-[#20232A] text-[#01B6FF] flex justify-between gap-4 '>
                            <div className='w-fit  textMode  py-3'>
                                <h1 className='transform rotate-[180deg] text-6xl lg:text-7xl font-semibold uppercase '>reactjs</h1>
                                <p className='text-base  transform rotate-[180deg]'>A JavaScript library for building user interfaces</p>
                            </div>
                            <div className='w-[70%] flex flex-col justify-around mr-5 '>
                                <img src={reactLogo} alt="reactLogo" className='w-48 mx-auto' />
                                <button className='rounded-lg border-[0.0625rem] font-bold bg-[#01B6FF] border-[#01B6FF] text-white text-sm px-2 py-1 hover:border-[#028bc2] hover:text-[#ebf4f8]'>Learn Free Tutorial</button>

                            </div>
                        </div> */}
                        {/* java */}
                        <div onClick={()=>link(4)} className='rounded-xl cursor-pointer lg:w-md  lg:h-auto bg-[#20232A] text-[#01B6FF] flex justify-between gap-4 '>
                            <div className='w-fit  textMode  py-3'>
                                <h1 className='transform rotate-[180deg] text-6xl lg:text-7xl font-semibold uppercase '>Java</h1>
                                <p className='text-base  transform rotate-[180deg] '>Java is a powerful general-purpose language.</p>
                            </div>
                            <div className='w-[70%] flex flex-col justify-around mr-5 '>
                                <img src={java} alt="java" className='w-48 mx-auto' />
                                <button onClick={()=>link(4)}  className='rounded-lg border-[0.0625rem] text-center font-bold bg-[#01B6FF] border-[#01B6FF] text-white text-sm px-2 py-2 hover:border-[#028bc2] hover:text-[#ebf4f8]'>Free Tutorial / Compiler</button>

                            </div>
                        </div>
                        {/* php */}
                        <div onClick={()=>link(2)} className='rounded-xl cursor-pointer lg:w-md  lg:h-auto bg-[#4F5B93] text-white  p-4 flex flex-col justify-between '>
                            <div className='grid grid-cols-3  '>
                                <div className='col-span-1'>
                                    <h1 className='text-5xl lg:text-6xl font-semibold uppercase'>PHP</h1>
                                </div>
                                <div className='col-span-2'>
                                    <p className='text-sm lg:text-base text-right mt-2'>A General -purpose <br /> Programming <br /> Language</p>
                                </div>
                            </div>
                            <img src={phpLogo} alt="phpLogo" className='w-48 mx-auto' />
                            <div className='flex flex-col items-end '>
                                <button onClick={()=>link(2)} className='rounded-lg border-[0.0625rem] text-center font-bold bg-[#01B6FF] border-[#01B6FF] text-white text-sm px-2 py-2 hover:border-[#028bc2] hover:text-[#ebf4f8]'>Free Tutorial / Compiler</button>
                            </div>
                        </div>
                        {/* c#  */}
                        <div onClick={()=>link(6)} className='rounded-xl cursor-pointer lg:w-md  lg:h-auto  text-white  p-4 flex flex-col justify-between bg-[#1b1447]'>
                            <div className='grid grid-cols-3  '>
                                <div className='col-span-1'>
                                    <h1 className='text-5xl mdd:text-4xl lgg:text-6xl font-semibold uppercase'>C#</h1>
                                </div>
                                <div className='col-span-2'>
                                    <p className='text-sm lg:text-base text-right mt-2'>C# high-level multi-paradigm programming language</p>
                                </div>
                            </div>
                            <img src={Csharp_Logo} alt="phpLogo" className='w-44  ' />
                            <div className='flex flex-col items-end '>
                                <button onClick={()=>link(6)} className='rounded-lg border-[0.0625rem] text-center font-bold bg-[#01B6FF] border-[#01B6FF] text-white text-sm px-2 py-2 hover:border-[#028bc2] hover:text-[#ebf4f8]'>Free Tutorial / Compiler</button>

                            </div>
                        </div>
                        {/* c++ */}
                        <div onClick={()=>link(5)} className='rounded-xl cursor-pointer lg:w-md  lg:h-auto  text-white  p-4 flex flex-col justify-between bg-[#004D9D]'>
                            <div className='grid grid-cols-3  '>
                                <div className='col-span-1'>
                                    <h1 className='text-5xl lg:text-6xl font-semibold uppercase'>C++</h1>
                                </div>
                                <div className='col-span-2'>
                                    <p className='text-sm lg:text-base text-right mt-2'>A High Level <br /> Programming <br /> Language</p>
                                </div>
                            </div>
                            <img src={cplusLogo} alt="cplusLogo" className='w-44 ' />
                            <div className='flex flex-col items-end '>
                                <button onClick={()=>link(5)} className='rounded-lg border-[0.0625rem] text-center font-bold bg-[#01B6FF] border-[#01B6FF] text-white text-sm px-2 py-2 hover:border-[#028bc2] hover:text-[#ebf4f8]'>Free Tutorial / Compiler</button>

                            </div>
                        </div>
                        <div onClick={()=>link(7)} className='rounded-xl cursor-pointer lg:w-md  lg:h-auto  text-white  p-4 flex flex-col justify-between bg-[#004D9D]'>
                            <div className='grid grid-cols-3  '>
                                <div className='col-span-1'>
                                    <h1 className='text-5xl lg:text-6xl font-semibold uppercase'>C</h1>
                                </div>
                                <div className='col-span-2'>
                                    <p className='text-sm lg:text-base text-right mt-2'>C is a general-purpose computer programming language</p>
                                </div>
                            </div>
                            <img src={Clanguage} alt="cplusLogo" className='w-44 ' />
                            <div className='flex flex-col items-end '>
                                <button onClick={()=>link(7)} className='rounded-lg border-[0.0625rem] font-bold bg-[#01B6FF] text-center border-[#01B6FF] text-white text-sm px-2 py-2 hover:border-[#028bc2] hover:text-[#ebf4f8]'>Free Tutorial / Compiler</button>

                            </div>
                        </div>
                        <div  className='rounded-xl cursor-pointer lg:w-md  lg:h-auto  text-white  p-4 flex flex-col justify-between bg-[#087687]'>
                        <a href='/compiler/r'>
                            <div className='grid grid-cols-3  '>
                                <div className='col-span-1'>
                                    <h1 className='text-5xl lg:text-6xl font-semibold uppercase'>R</h1>
                                </div>
                                <div className='col-span-2'>
                                    <p className='text-sm lg:text-base text-right mt-2'>An open-source programming language</p>
                                </div>
                            </div>
                            <img src={rlogo} alt="cplusLogo" className='w-44 ' />
                            <div className='flex flex-col items-end '>
                                <button className='rounded-lg border-[0.0625rem] font-bold bg-[#01B6FF] text-center border-[#01B6FF] text-white text-sm px-2 py-2 hover:border-[#028bc2] hover:text-[#ebf4f8]'>Start Compiler</button>

                            </div>
                            </a>
                        </div>
                    </div>
                    

                    <div>
                        <h1 className='my-10 text-center text-4xl mdd:text-5xl text-[#01B6FF]'>Difference Between Programming Languages Tutorial</h1>
                        <div className='md:flex justify-between space-y-10 md:space-y-0 mt-6'>
                          
                            <div  className='cursor-pointer rounded-xl w-full md:w-[40%] lg:h-auto bg-[#4F5B93] text-white  p-4 flex flex-col justify-between '>
                            <a href='/java-vs-python-basic' >   
                                <div className='flex justify-between'>
                                    <h1 className='text-5xl'>JAVA</h1>
                                    <h1 className='text-5xl'>PYTHON</h1>
                                </div>
                                <div className='flex items-center justify-between mt-4 gap-2'>

                                    <img src={java} alt="java" className='w-[32%] md:w-[30%] lg:w-[40%] mx-auto' />
                                    <h1 className='text-6xl'>VS</h1>
                                    <img src={pythonLogo} alt="phpLogo" className='w-[32%] md:w-[30%] lg:w-[40%] mx-auto' />
                                </div>
                                <div className='flex flex-col items-end my-3'>
                                   <button className='border-[0.0625rem] font-bold w-full rounded-lg bg-[#01B6FF] border-[#01B6FF] text-center text-white text-sm px-2 py-2 hover:border-[#028bc2] hover:text-[#ebf4f8]'>Learn Free Tutorial</button>

                                </div> 
                                </a>
                            </div>
                              <div  className='cursor-pointer rounded-xl w-full md:w-[40%] lg:h-auto bg-[#1E405D] text-white  p-4 flex flex-col justify-between '>
                              <a href='/java-vs-csharp-basic' > 
                                <div className='flex justify-between'>
                                    <h1 className='text-5xl'>JAVA</h1>
                                    <h1 className='text-5xl'>C#</h1>
                                </div>
                                <div className='flex items-center justify-between mt-4 gap-2'>

                                    <img src={java} alt="phpLogo" className='w-[32%] md:w-[30%] lg:w-[40%] mx-auto' />
                                    <h1 className='text-6xl'>VS</h1>
                                    <img src={Csharp_Logo} alt="phpLogo" className='w-[32%] md:w-[30%] lg:w-[40%] mx-auto' />
                                </div>
                                <div className='flex flex-col items-end my-3'>
                                    <button className='border-[0.0625rem] font-bold w-full rounded-lg bg-[#01B6FF] border-[#01B6FF] text-center text-white text-sm px-2 py-2 hover:border-[#028bc2] hover:text-[#ebf4f8]'>Learn Free Tutorial</button>

                                </div> </a>
                            </div>
                          
                        </div>
                    </div>
                </div>
            </div>
            </div>
    );
};

export default Home;