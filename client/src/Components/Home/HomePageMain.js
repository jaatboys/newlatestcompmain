import {React,useState} from 'react';
import pythonLogo from '../../assets/pythonBigLogo.png';
import phpLogo from '../../assets/phpLogo.png';
import jsLogo from '../../assets/jsLogo.png';
import reactLogo from '../../assets/reactLogo.png';
import cplusLogo from '../../assets/cplusLogo.png';
import htmlLogo from '../../assets/htmlLogo.png';
import java from '../../assets/java.png';
import Clanguage from '../../assets/Clanguage.png';
import Csharp_Logo from '../../assets/Csharp_Logo.png';
import '../Home/Home.css'
import go from "../../assets/go.svg";
import ts5 from '../../assets/ts5.jpg'
import  Helmet  from "react-helmet";
import rlogo from "../../assets/RProgramminglanguage.png";

const HomePageMain = () => {
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
            setPath("compiler/go")
            setLanguage('typescript')
            setImg(ts5)
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
// const link=(x)=>{
//     if(x== 1){
//         window.location.href = '/python-variables'; 
//     }
//     else if(x == 2){
//         window.location.href = '/php-variables';
//     }
//     else if(x == 3){
//         window.location.href = '/javascript-variables';
//     }
//     else if(x == 4){
//         window.location.href = '/java-variables';
//     }
//     else if(x == 5){
//         window.location.href = '/cpp-variable';
//     }
//     else if(x == 6){
//         window.location.href = '/csharp-first-program';
//     }
//     else if(x == 7){
//         window.location.href = '/c-variable';
//     }
//     else if(x == 8){
//         window.location.href = '/java-vs-python-basic';
//     }
//     else if(x == 9){
//         window.location.href = '/java-vs-csharp-basic';
//     }
    
// }

    return (
        <div className='max-w-[1440px] mx-auto my-10'>
  <Helmet>
                <title>CodeExampler Learn Programming Tutorial for Beginners For Free</title>
                <meta name="description" content="CodeExampler Learn Programming tutorial for beginners for Free Learn interview Questions and learn lot of Examples for free,Free Online Tutorials for beginners like Java, Python, C, C++ ,C#, PHP, JavaScript tutorial for beginners learn interview Questions and learn lot of Examples " />
                <meta name="keywords" content="codeexampler,programming language,tutorial for beginners,Difference Between Java and Python,Difference between program and code,java tutorial for beginners,C# tutorial for beginners,Python tutorial for beginners,C tutorial for beginners, JavaScript tutorial for beginners,C++ tutorial for beginners,code,exampler,which online website to learn code,Difference Between Java and C# ,java vs c#,java vs python,free programming online website to learn Python, Java, C#, Csharp, JavaScript, PHP, C, C++" />
                <link rel="canonical" href="https://www.codeexampler.com/" />
            </Helmet>

            <div className='mx-5'>
                <h1 className='text-2xl text-[#01B6FF] mb-3 md:block hidden'>Choose from our courses</h1>
                <div className='grid grid-cols-12 gap-3'>
                  
                    <div className='col-span-12 md:col-span-4  '>
                        {/* python */}
                        <div onClick={()=>link(1)} className='rounded-xl cursor-pointer h-[18rem] md:h-[24rem] lg:w-[90%] bg-[#1E405D] text-white flex justify-between gap-4 py-2'>
                            <div className='w-fit  textMode  py-3 '>
                                <h1 className='transform rotate-[180deg] text-5xl md:text-7xl font-semibold uppercase '>Python</h1>
                                <p className='text-base  transform rotate-[180deg]'>High-Level Programming Language</p>
                            </div>
                            <div className='w-[70%] flex flex-col justify-around mr-5 '>
                                <img src={pythonLogo} alt="pythonLogo" className='w-40 lgg:w-56 mx-auto mt-1' />
                                <a href='/python-variables' className='border-[0.0625rem] bg-[#01B6FF] border-[#01B6FF] text-center rounded-md text-sm font-bold px-2 py-2 hover:border-[#028bc2] text-[#ebf4f8]'onClick={()=>link(1)}>Free Tutorial / Compiler</a>

                                {isDialogOpen && (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40">
    {/* Modal Dialog */}
    <div className=" bg-[#333f50] p-12  rounded-xl md:w-[600px] w-[90%] m-auto  flex flex-col  gap-6   ">
            <div className="flex justify-center text-[20px] ">

           <div className='sm:tracking-[3px] '>Amplify Your <span className='text-[#03c3f1] '>Coding </span>Skills through</div>
            </div>
           <div className=" flex gap-4  justify-center mx-10" >
           <a href={path}>
           <div className=" bg-[#1e2736] flex justify-center h-64 w-28 md:h-60 md:w-60  rounded-xl pt-16 px-2 sm:p-12 sm:pt-14  sm:w-48">
              
              <div className='text-center'>

              <img width='' src={img} alt="dfgfd" className='w-[120px]' />
              <div className='text-[25px] text-[#03c3f1] relative font-semibold'>
                  Learn</div>
              </div>
              
          </div>
            </a>
            <a href={`/compiler/${language}`} target="_blank" rel="noopener noreferrer">
            <div className=" bg-[#1e2736] flex justify-center h-64 w-28 md:h-60 md:w-60 sm:w-48  rounded-xl pt-16 px-2 sm:p-16 ">
              
                <div className='text-center'>

                <img width='120px' src={img} alt="dfgfd" />
                <div className='text-[25px] text-[#ffffff] relative font-semibold'>
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
                        {/* php */}
                        <div onClick={()=>link(2)} className='bg-[#4F5B93] cursor-pointer h-[19rem] md:h-[25rem] lg:w-[90%] text-white mt-5 p-4 rounded-lg'>
                            <div className='grid grid-cols-3 gap-x-8 '>
                                <div className='col-span-1'>
                                    <h1 className='text-6xl md:text-6xl font-semibold uppercase'>PHP</h1>
                                </div>
                                <div className='col-span-2'>
                                    <p className='text-base text-right mt-2'>A General <br className='hidden md:block' />-purpose <br className='hidden md:block' /> Programming <br className='hidden md:block' /> Language</p>
                                </div>
                            </div>
                            <img src={phpLogo} alt="phpLogo" className=' h-[8rem] md:h-[12rem] sm:mt-5 mt-8  mx-auto md:mx-0' />
                            <div className='flex justify-end -mt-2'>

                                <a href='/php-variables' className='w-[100%] text-center md:w-fit bg-white  text-[#4F5B93] text-sm font-bold mt-4  px-5 rounded-md py-2 hover:bg-[#c5c8d8] hover:text-[#1c2e80]'>Free Tutorial / Compiler</a>
                            </div>
                        </div>
                    </div>

                    <div  className='col-span-12 md:col-span-8 '>
                        {/* js */}
                        <div onClick={()=>link(3)} className='w-full cursor-pointer h-[18rem] bg-[#000000] text-white p-2 sm:p-5 md:mt-0 mt-5 rounded-md'>
                            <div className='sm:flex justify-between h-full '>
                                <img src={jsLogo} alt="jsLogo" className='w-[35%] max-sm:hidden mdd:w-[30%]' />
                                <div className='w-full sm:text-right text-[#F7DF1E] sm:flex flex-col justify-between  h-full'>
                                    <div className='max-sm:text-center'>

                                        <h1 className='md:text-6xl lgg:text-8xl  text-5xl ml-2 font-semibold uppercase'>JavaScript</h1>
                                        <p className='text-base mt-2 ml-2'>A Programming Language</p>
                                    </div>
                                    
                                         <img src={jsLogo} alt="jsLogo" className='w-[8rem] mt-4 mx-auto sm:hidden  mdd:w-[30%]' />
                                    <div className='space-x-2 space-y-3 sm:text-right text-center  ml-2 sm:mb-4 mt-3  '>
                                        <a href='/javascript-variables' className='bg-[#F7DF1E] text-black px-12 rounded-md text-sm font-bold w-full mdd:w-[40%]   p-2 hover:bg-[#b6a311] hover:text-[#323336]'>Free Tutorial / Compiler</a>
                                    </div>
                                    
                                   

                                </div>
                            </div>


                        </div>
                        <div className='grid grid-cols-12  gap-5 mt-5'>
                            <div className='col-span-12 lgg:col-span-7'>
                                {/* java */}
                                <div onClick={()=>link(4)} className='w-full cursor-pointer h-[15rem] bg-[#20232A] text-white p-5 rounded-md'>
                                    <div className='flex justify-between'>
                                        <div className='flex gap-2 -mt-4'>

                                            <div className='w-fit  textMode  py-3 '>
                                                <h1 className='transform rotate-[180deg] text-5xl font-semibold uppercase text-[#01B6FF]'>JAVA</h1>
                                            </div>
                                            <div className='relative  w-[45%]'>
                                                <p className='text-lg text-[#01B6FF]'>A JavaScript library for building <br /> user <br /> interfaces</p>

                                            </div>
                                        </div>
                                        <div className='flex flex-col items-end justify-center w-full gap-2'>
                                            <img src={java} alt="java" className=' md:w-40 w-36 h-30 md:h-40' />
                                            <div className='smm:flex gap-2 mt-2'>


                                                <a onClick={()=>link(3)} href='/java-variables' className='bg-[#01B6FF] rounded-md text-white text-sm font-bold whitespace-nowrap w-full  p-2 hover:bg-[#068ec4]'>Free Tutorial / Compiler</a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                {/* c++ */}
                                <div onClick={()=>link(5)} className='w-full cursor-pointer h-[15rem] bg-[#004D9D] text-white p-5 mt-5 rounded-md'>
                                    <div className='flex justify-between '>
                                        <div className='w-1/3'>
                                            <h1 className='text-6xl font-bold uppercase'>c++</h1>
                                            <div className='md:w-[10%]'>
                                                <p className='text-base'>A High Level Programming Language</p>
                                            </div>
                                        </div>
                                        <div className=' w-full flex flex-col items-end'>
                                            <img src={cplusLogo} alt="cplusLogo" className=' h-[10rem]' />
                                            <div className='smm:flex gap-2 mt-2'>


                                                <a href='/cpp-variable' className='bg-[#01B6FF] text-white rounded-md text-sm font-bold whitespace-nowrap w-full  p-2 hover:bg-[#068ec4]'>Free Tutorial / Compiler</a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='col-span-12 lgg:col-span-5 space-y-3'>
                                {/* c#  */}

                                <div onClick={()=>link(6)} className='rounded-xl cursor-pointer text-white  p-4 flex flex-col justify-between bg-[#1b1447]  h-[49%]'>
                                    <div className='grid grid-cols-3  '>
                                        <div className='col-span-1'>
                                            <h1 className='text-5xl mdd:text-4xl lgg:text-6xl font-semibold uppercase'>C#</h1>
                                        </div>
                                        <div className='col-span-2'>
                                            <p className='text-sm lg:text-base text-right mt-2'>C# high-level multi-paradigm programming language</p>
                                        </div>
                                    </div>
                                    <img src={Csharp_Logo} alt="phpLogo" className='w-[25%] lgg:w-[30%]  ' />
                                    <div className='flex flex-col items-end '>
                                        <a href='/csharp-first-program' className='rounded-md border-[0.0625rem] font-bold bg-[#01B6FF] border-[#01B6FF] text-white text-sm px-4 py-2 hover:border-[#028bc2] hover:text-[#ebf4f8]'>Free Tutorial / Compiler</a>

                                    </div>
                                </div>
                                {/* c  */}
                                <div onClick={()=>link(7)} className='rounded-xl cursor-pointer text-white  p-4 flex flex-col justify-between bg-[#2a4566]  sm:h-[49%] '>
                                    <div className='grid grid-cols-3  '>
                                        <div className='col-span-1'>
                                            <h1 className='text-5xl mdd:text-4xl lgg:text-6xl font-semibold uppercase'>C</h1>
                                        </div>
                                        <div className='col-span-2'>
                                            <p className='text-sm lg:text-base text-right mt-2'>C is a general-purpose computer programming language</p>
                                        </div>
                                    </div>
                                    <img src={Clanguage} alt="Clanguage" className='w-[30%]' />
                                    <div className='flex flex-col items-end '>
                                        <a href='/c-variable' className='rounded-md border-[0.0625rem] font-bold bg-[#01B6FF] border-[#01B6FF] text-white text-sm px-4 py-2 hover:border-[#028bc2] hover:text-[#ebf4f8]'>Free Tutorial / Compiler</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 grid-flow-col lgg:col-span-10">
           </div></div>
        <div>
        

           
              </div>
              <div className="flex flex-col md:flex-row gap-6 mt-4">
              <div  className='rounded-xl cursor-pointer lg:w-[60%]  lg:h-auto  text-white  p-4 flex flex-col justify-between bg-[#087687]'>
              <a href='/compiler/r'>
                            <div className='grid grid-cols-3  '>
                                <div className='col-span-1'>
                                    <h1 className='text-7xl lg:text-6xl font-semibold uppercase'>R</h1>
                                </div>
                                <div className='col-span-2'>
                                    <p className='text-sm lg:text-base text-right mt-2'>An open source <br/>  programming language</p>
                                </div>
                            </div>
                            <img src={rlogo} alt="cplusLogo" className='w-[30%]' />
                            <div className='flex flex-col items-end '>
                                <button className='rounded-lg border-[0.0625rem] font-bold bg-[#01B6FF] text-center border-[#01B6FF] text-white text-sm px-2 py-2 hover:border-[#028bc2] hover:text-[#ebf4f8]'>Start Online Compiler</button>

                            </div>
                            </a>
                        </div>

                        <div  className='rounded-xl cursor-pointer lg:w-md  lg:h-auto  text-white  p-4 flex flex-col justify-between bg-[#007acd]'>
                        <a href='/compiler/typescript'>
                            <div className='grid grid-cols-3  '>
                                <div className='col-span-1'>
                                    <h1 className='text-5xl lg:text-6xl font-semibold uppercase text-center'>TYPESCRIPT</h1>
                                </div>
                                <div className='col-span-2'>
                                    <p className='text-sm lg:text-base text-right mt-2 relative top-16'> A standard programming language for enabling better tooling, scalability, and error detection during development</p>
                                </div>
                            </div>
                            <img src={ts5} alt="cplusLogo" className='w-40 mt-8 rounded-full' />
                            <div className='flex flex-col items-end '>
                                <button className='rounded-lg border-[0.0625rem] font-bold bg-[#01B6FF] text-center border-[#01B6FF] text-white text-sm px-2 py-2 hover:border-[#028bc2] hover:text-[#ebf4f8]'>Start Online Compiler</button>

                            </div>
                            </a>
                        </div>
                        </div>

                
                <div>
                    <h1 className='my-10 text-center text-4xl mdd:text-5xl text-[#01B6FF]'>Difference Between Programming Languages Tutorial</h1>
                    <div className='mdd:flex justify-between space-y-10 mdd:space-y-0 mt-6'>

                        <div className=' rounded-xl cursor-pointer w-full mdd:w-[40%] lg:h-auto bg-[#4F5B93] text-white  p-4 flex flex-col justify-between '>
                        <a href='/java-vs-python-basic'>
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
                                <button className='border-[0.0625rem] font-bold w-full text-center rounded-lg bg-[#01B6FF] border-[#01B6FF] text-white text-sm px-2 py-2 hover:border-[#028bc2] hover:text-[#ebf4f8]'>Learn Free Tutorial</button>

                            </div>
                            </a>
                        </div>
                        <div  className=' rounded-xl cursor-pointer w-full mdd:w-[40%] lg:h-auto bg-[#1E405D] text-white  p-4 flex flex-col justify-between '>
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
                                <button className='border-[0.0625rem] font-bold w-full text-center rounded-lg bg-[#01B6FF] border-[#01B6FF] text-white text-sm px-2 py-2 hover:border-[#028bc2] hover:text-[#ebf4f8]'>Learn Free Tutorial</button>

                            </div>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default HomePageMain;