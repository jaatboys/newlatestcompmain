import Cplus from '../../assets/cplusLogo.png';
import csharp from '../../assets/Csharp_Logo.png';
import javalogo from '../../assets/java.png';
import phplogo from '../../assets/phpLogo.png';
import jsLogo from '../../assets/jsLogo.png';
import React, { useEffect, useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineClose } from 'react-icons/ai';
import { BsFillFileEarmarkFill, BsThreeDotsVertical } from 'react-icons/bs';
import { VscDebugStart } from "react-icons/vsc";
import { BsFillShareFill } from "react-icons/bs";
import go from "../../assets/golang.svg";
import styled from 'styled-components';
import Clogo from "../../assets/Clanguage.png";
import {RiArrowDropDownLine,RiDropdownList} from 'react-icons/ri';
import { BiLeftArrowAlt } from 'react-icons/bi';
import CodeEditorFiled from '../../Components/Tutorials/CodeEditorFiled/CodeEditorFiled';
import { WhatsappShareButton} from 'react-share';
import rlogo from "../../assets/RProgramminglanguage.png";


const BlurredBackground = styled.div`
  backdrop-filter: blur(10px);
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 400%;
  z-index: 10;
`;
function Responsive(language) {
   language = language.language;
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeTab, setActiveTab] = useState('');
  const [code, setCode] = useState(``);
  const [heading, setHeading] = useState("Python");
  const [output,setOutput] = useState([]);
  const [loading, setLoading] = useState(false)
  const [logoUrl, setLogoUrl] = useState("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/115px-Python-logo-notext.svg.png?20220821155029");
  const [path, setPath] = useState(``);
  const [copied,setCopied] = useState(false)

  useEffect(() => {
    handleTabClick(language)
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
//   const EditorContainer = styled.div`
//   .ace_gutter {
//     background-color: transparent !important;
//   }
// `;
<style>
{`
  .ace_content .ace_layer.ace_marker-layer .ace_selected-word {
    background-color: #F59E0B; /* Background color for the selected word */
    color: #1F2937; /* Text color for the selected word */
  }
`}
</style>
  const handleTabClick = (language: React.SetStateAction<string>) => {
    
    setActiveTab(language);

    // Set code content based on the tab clicked
    switch (language) {
      case "python":
        setCode(`rows = 9
k = 0
for i in range(1, rows+1):
    for space in range(1, (rows-i)+1):
        print(end="  ")
                
    while k != (2*i-1):
        print("* ", end="")
        k += 1
                
    k = 0
    print()`);
    
        break;
      case "javascript":
        setCode(`// JavaScript code\nfunction greet() {
    return "Hello, JavaScript!";
}
console.log(greet());
`);
        break;
      // case "go":
      //   setCode(`package main
      //   import "fmt"
      //   func main() {
      //       fmt.Println("Hello, World!")
      //   }`);
      //   break;

      case "r":
        setCode(`# Create a numeric vector
        numbers <- c(5, 10, 15, 20, 25)
        
        # Calculate the sum
        sum_value <- sum(numbers)
        
        # Print the result
        cat("Sum:", sum_value)
        `);
              break;

      case "java":
        setCode(`// Java code\nclass Main {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}`);
        break;
      case "php":
        setCode(`<?php
echo ("Hello World!");
?>`);
        break;
      case "cpp":
        setCode(`// C++ code\n#include <iostream>\nusing namespace std;\n\nint main() {
    cout << "Hello, C++!" << endl;
    return 0;
}`);
        break;
      case "csharp":
        setCode(`// C# code\nusing System;\n\nclass Program {
    static void Main() {
        Console.WriteLine("Hello, C#!");
    }
}`);
        break;
      case "c":
        setCode(`// Online C compiler to run C program online
        #include <stdio.h>
        
        int main() {
            // Write C code here
            printf("Hello world");
        
            return 0;
        }`);
        break;
      case "swift":
        setCode(`// Swift code\nprint("Hello, Swift!")`);
        break;
      case "typescript":
        setCode(`// TypeScript code\nclass Greeter {
    static sayHello() {
        console.log("Hello, TypeScript!");
    }
}

Greeter.sayHello();
`);
        break;
      default:
        setCode("");
        break;
    }

    // Update the heading and logo based on the tab clicked
    
    if (language === "javascript") {
      setLogoUrl("https://cdn-icons-png.flaticon.com/128/5968/5968292.png");
      setHeading("JavaScript");
      setPath('javascript-variables');

    } 
    else if (language === "java") {
      setLogoUrl("https://cdn-icons-png.flaticon.com/128/5968/5968282.png");
      setHeading('Java');
      setPath('java-variables');

    } 
    else if (language === "php") {
      setLogoUrl("https://cdn-icons-png.flaticon.com/128/5968/5968332.png");
      setHeading('PHP');
      setPath('php-variables');

    } 
    else if (language === "cpp") {
      setLogoUrl("https://cdn-icons-png.flaticon.com/128/6132/6132222.png");
      setHeading('C++');
      setPath('cpp-variable');

    } 
    else if (language === "csharp") {
      setLogoUrl("https://cdn-icons-png.flaticon.com/128/6132/6132221.png");
      setHeading('C#');
      setPath('csharp-first-program');
    
      
    }
    else if (language === "c") {
      setLogoUrl("https://icon2.cleanpng.com/20180418/avw/kisspng-the-c-programming-language-computer-programming-programming-5ad7395d1abff7.1930735215240543651096.jpg");
      setHeading('C');
      setPath('c-variable');

    }
    else if (language === "typescript") {
      setLogoUrl("https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg");
      setHeading('C');
      setHeading('TypeScript');
    }

    else if (language === "r") {
      setLogoUrl("https://cdn-icons-png.flaticon.com/128/2103/2103665.png");
      setHeading('R');
    }

    // else if (language === "go") {
    //   setLogoUrl("https://www.vectorlogo.zone/logos/golang/golang-ar21.svg");
    //   setHeading('Go');
    // }



    else {
      setLogoUrl("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/115px-Python-logo-notext.svg.png?20220821155029");
      setHeading(language?.toUpperCase());
      setPath('python-variables');
    }
  };

  async function run() {
    setLoading(true)
    const rawResponse = await fetch(`/api/compiler/${language}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({code,language})
    });
    const content = await rawResponse.json();
    
  if(content.error){
    setOutput(content['error'].split("\n"));
    setLoading(false)
  }else if(content.massege){
    setOutput(content['massege'].split("\n"));
    setLoading(false)
  }else{
    setOutput(content['output'].split("\n"));
    setLoading(false)
  }
  }

  function copyToClipboard(){
    setCopied(true)
    navigator.clipboard.writeText(code)
    .then(()=>{
      console.log("Copied")
    },(error)=>{
      console.log(error)
    })

   setTimeout(() => {
     setCopied(false)
   }, 1000);
  }


  return (
    <>
    {showDropdown && <BlurredBackground />}
      <div className='md:hidden block p-2'>
        <div className='bg-gray-800 text-white'>
          <div className='flex flex-row justify-center mb-3'>
          <a href={'/programming-language-to-learn'} target="_blank"  >
          <BiLeftArrowAlt  className="mt-7 mr-8 top-24 w-10 h-10 p-1 bg-gray-600 rounded-full"></BiLeftArrowAlt>
          </a>

            <img width={'9'} height={'8'} src={logoUrl} alt="" className='w-9 h-9 mt-7' />
            
            
            
            <a href={`/${path}`}
            className="text-2xl pt-8 ml-2 font-bold">
              Learn {heading}
              </a>
            <span className='w-10 h-10 rounded-full'>
            </span>
          </div>
          {showDropdown && (
            
            <div className="flex flex-col justify-center mt-5 bg-[#1e2736] rounded-xl gap-3 absolute z-10 px-10 sm:left-28 max-sm:left-1 py-10">
              <h1 className='text-2xl font-bold'>Compile</h1>
             <AiOutlineClose onClick={toggleDropdown} className="bg-gray-400 absolute top-5 right-4 rounded-full w-8 h-8 p-2"></AiOutlineClose>
             <a href={'/compiler/python'} target="_blank"  >
              <div className=" rounded-lg flex justify-center bg-blue-700 px-10 py-4 text-2xl">
  <img
    className='w-8 h-8 mr-16'
    // onClick={() => handleTabClick("Python")}
    src={logoUrl}
    alt={'Python Online Compiler CodeExampler'}
  />
  <button
    // onClick={() => handleTabClick("Python")}
    className={`${
      activeTab === "python" ? "" : ""
    } font-bold mr-16 text-white  ${
      activeTab === "python" ? "" : ""
    }`}><p>Python</p>
  </button>
</div>
</a>
<a href={'/compiler/javascript'} target="_blank"  >
              <div className=" rounded-lg flex justify-center bg-black px-10 py-4 text-2xl ">
                <img
                className='w-8 h-8 mr-10'
                // onClick={() => handleTabClick("JavaScript")}
                src={jsLogo} alt={'JavaScript Online Compiler CodeExampler'}></img>
                <button
                  // onClick={() => handleTabClick("JavaScript")}
                  className={`${
                    activeTab === "javascript" ? "" : ""
                  } font-semibold mr-2 text-yellow-300   ${activeTab === "javascript" ? "" : ""}`}><p>Java Script</p>
                </button>
                
              </div>
              </a>

{/* R Button Tab */}

<a href={'/compiler/r'} target="_blank" rel="noopener noreferrer">
              <div className=" rounded-lg flex justify-around bg-[#505b93] px-10 py-4 text-2xl ">
                <img 
                className='w-8 h-8 mr-10'
                // onClick={() => handleTabClick("php")}
                src={rlogo} alt={'R Logo'}

                ></img>
                <button
                  // onClick={() => handleTabClick("PHP")}
                  className={`${
                    activeTab === "r" ? "" : ""
                  } font-semibold mr-16 text-white   ${activeTab === "r" ? "" : ""}`}><p>R</p>
                </button>
              </div>
              </a>



              <a href={'/compiler/typescript'} target="_blank"  >
              <div className=" rounded-lg flex justify-around bg-[#2f3d58]  px-10 py-4 text-2xl ">
                <img 
                width={'8'}
                height={'8'}
                className='w-8 h-8 mr-5'
                // onClick={() => handleTabClick("C#")}
                src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg" 
                alt={'TypeScript Online Compiler CodeExampler'}

                />
                <button
                  // onClick={() => handleTabClick("C#")}
                  className={`${
                    activeTab === "typescript" ? "" : ""
                  } font-semibold mr-5 text- ${activeTab === "typescript" ? "" : ""}`}><p className=''>Typescript</p>
                </button>
              </div>
              </a>
              <a href={'/compiler/java'} target="_blank"  >
              <div className=" rounded-lg flex justify-around bg-[#20232a] px-10 py-4 text-2xl">
                <img 
                className='w-8 h-8 mr-16'
                // onClick={() => handleTabClick("Java")}
                src={javalogo} alt={'Java Online Compiler CodeExampler'}

                ></img>
                <button
                  // onClick={() => handleTabClick("Java")}
                  className={`${
                    activeTab === "java" ? "" : ""
                  } font-bold mr-16 text-blue-600   ${activeTab === "java" ? "" : ""}`}><p>Java</p>
                </button>
              </div>
              </a>

              <a href={'/compiler/php'} target="_blank"  >
              <div className=" rounded-lg flex justify-around bg-[#505b93] px-10 py-4 text-2xl ">
                <img 
                className='w-8 h-8 mr-10'
                // onClick={() => handleTabClick("php")}
                src={phplogo} alt={'PHP Online Compiler CodeExampler'}

                ></img>
                <button
                  // onClick={() => handleTabClick("PHP")}
                  className={`${
                    activeTab === "php" ? "" : ""
                  } font-semibold mr-16 text-white   ${activeTab === "php" ? "" : ""}`}><p>PHP</p>
                </button>
              </div>
              </a>

              <a href={'/compiler/cpp'} target="_blank"  >
              <div className=" rounded-lg flex justify-around bg-[#004d9d] px-10 py-4 text-2xl ">
                <img 
                className='w-8 h-8 mr-10'
                // onClick={() => handleTabClick("C++")}
                src={Cplus} alt={'CPP Online Compiler CodeExampler'}

                ></img>
                <button
                  // onClick={() => handleTabClick("C++")}
                  className={`${
                    activeTab === "cpp" ? "" : ""
                  } font-bold mr-14 text-white   ${activeTab === "cpp" ? "" : ""}`}><p>C++</p>
                </button>
              </div>
              </a>
              <a href={'/compiler/c'} target="_blank"  >
              <div className=" rounded-lg flex justify-around bg-[#004d9d] px-10 py-4 text-2xl ">
                <img 
                className='w-8 h-8 mr-10'
                // onClick={() => handleTabClick("C++")}
                src={Clogo} alt={'C Online Compiler CodeExampler'}

                ></img>
                <button
                  // onClick={() => handleTabClick("C++")}
                  className={`${
                    activeTab === "c" ? "" : ""
                  } font-bold mr-20 text-white   ${activeTab === "c" ? "" : ""}`}><p>C</p>
                </button>
              </div>
              </a>
              <a href={'/compiler/csharp'} target="_blank"  >
              <div className=" rounded-lg flex justify-around bg-[#2f3d58]  px-10 py-4 text-2xl ">
                <img 
                width={'8'}
                height={'8'}
                className='w-8 h-8 mr-12'
                // onClick={() => handleTabClick("C#")}
                src={csharp} alt={'Csharp Online Compiler CodeExampler'}

                ></img>
                <button
                  // onClick={() => handleTabClick("C#")}
                  className={`${
                    activeTab === "csharp" ? "" : ""
                  } font-semibold mr-20 text- ${activeTab === "csharp" ? "" : ""}`}><p>C#</p>
                </button>
              </div>
              </a>
              <a href={'/compiler/go'} target="_blank"  >
              <div className=" rounded-lg flex justify-around bg-[#2f3d58]  px-10 py-4 text-2xl ">
                <img 
                width={'8'}
                height={'8'}
                className='w-8 h-8 mr-12'
                // onClick={() => handleTabClick("C#")}
                src={go} alt={'GO Online Compiler CodeExampler'}

                />
                <button
                  // onClick={() => handleTabClick("C#")}
                  className={`${
                    activeTab === "go" ? "" : ""
                  } font-semibold mr-20 text- ${activeTab === "go" ? "" : ""}`}><p>GO</p>
                </button>
              </div>
              </a>
            </div>
          )}
        </div>
        {/* <div className="pr-10 md:pt-4 pl-9 mb-3">
              <button className="bg-sky-500 font-semibold rounded-xl w-64 h-10">
                Learn Python
              </button>
            </div> */}
        <div className='flex justify-center pr-10 pt-4 pl-9 mb-3 '>
          <button onClick={toggleDropdown} className=' text-xl  mb-3 flex justify-center mt-5 bg-sky-500 pt-1   rounded-xl w-64 h-10 text-white font-semibold '>   {heading} Compiler
          <RiArrowDropDownLine className="" size={40}></RiArrowDropDownLine>
           </button>
          </div>

<div className='pl-4 pr-4 mb-6'>
  <div className='bg-gray-700 text-[#9EB2D2] mb-7 w-[100%] h-96 rounded-xl overflow-auto'>
    <CodeEditorFiled code={code} setCode={setCode}/>
    {/* <AceEditor
      mode={
        activeTab === "Python"
          ? "python"
          : activeTab === "JavaScript"
            ? "javascript"
            : activeTab === "Java"
              ? "java"
              : activeTab === "PHP"
                ? "php"
                : activeTab === "C++"
                  ? "c_cpp"
                  : activeTab === "C#"
                    ? "csharp"
                    : activeTab === "Swift"
                      ? "swift"
                      : activeTab === "TypeScript"
                        ? "typescript"
                        : ""
      }
      theme="monokai" // Use the monokai theme
      name={
        activeTab === "Python"
          ? "python-editor"
          : activeTab === "JavaScript"
            ? "javascript-editor"
            : activeTab === "Java"
              ? "java-editor"
              : activeTab === "PHP"
                ? "php-editor"
                : activeTab === "C++"
                  ? "cpp-editor"
                  : activeTab === "C#"
                    ? "csharp-editor"
                    : activeTab === "Swift"
                      ? "swift-editor"
                      : activeTab === "TypeScript"
                        ? "typescript-editor"
                        : ""
      }
      value={code}
      fontSize={14}
      onChange={(newCode) => setCode(newCode)}
      editorProps={{ $blockScrolling: true, highlightActiveLine: false }}
      showPrintMargin={false}
      style={{
        borderRadius: "10px",
        width: "90%",
        height: "260px",
        background: "#374151",
        fontSize: "20px",

      }}
      setOptions={{
         // Enable live autocompletion
        highlightActiveLine: false, // Disable line highlighting when clicked
        
      }}
    /> */}

  </div>
</div>

<div className=' flex mb-3 flex-row justify-between mx-4 text-white gap-1'>
  <div onClick={run} className='flex items-center justify-center bg-gray-600 px-2 rounded-lg w-40 font-bold h-12 cursor-pointer'>
{
  loading ?<> <svg className="animate-spin -ml-1 mr-3 h-7 w-7 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
</svg> <span className='text-xl'>Processing..</span></>
:<>
<span  className='text-5xl'><VscDebugStart className='text-blue-500 p-1' /></span>
<p className=' text-2xl mr-2'>Run</p>
</>
}

</div>
<div className='flex items-center justify-around bg-gray-600 rounded-lg w-32 h-12 text-4xl font-bold'>
{
    copied?
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
  <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 013.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0121 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 017.5 16.125V3.375z" />
  <path d="M15 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0017.25 7.5h-1.875A.375.375 0 0115 7.125V5.25zM4.875 6H6v10.125A3.375 3.375 0 009.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V7.875C3 6.839 3.84 6 4.875 6z" />
</svg>

    // <span className=''><BsFillFileEarmarkFill className='p-2 ml-1 mt-1 cursor-pointer' /></span>
    :
    <svg onClick={copyToClipboard} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 ">
  <path fillRule="evenodd" d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z" clipRule="evenodd" />
  <path fillRule="evenodd" d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zM6 12a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V12zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 15a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V15zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 18a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V18zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z" clipRule="evenodd" />
</svg>    
    
  }
  <span className=''><WhatsappShareButton 
     url={`https://www.codeexampler.com/compiler/${language}`}
     title={'Codeexampler Compiler share'}
    >
      <BsFillShareFill size={40} className='p-2 ml-1 mt-1 cursor-pointer' />
      {/* <WhatsappIcon size={25} round={true}/> */}
    </WhatsappShareButton></span>
  </div>
  
 
</div>


{/* <div className=' flex mb-3 flex-row justify-around text-white'>
  <span className='bg-gray-600 rounded-full w-12 h-12 text-4xl'><BsFillFileEarmarkFill className='p-2 ml-1 mt-1' /></span>

  <span onClick={run} className='bg-sky-500 rounded-full w-12 h-12 text-4xl'><VscDebugStart className='ml-2 mt-1 p-1' /></span>
  <span className='bg-gray-600 rounded-full w-12 h-12 text-4xl'><BsFillShareFill className='p-2 ml-1 mt-1 ' /></span>
</div> */}

<div className='p-5'>
  <h4 className='font-semibold text-xl text-white' >Compiler</h4>
      
  <div className='w-full h-64 mt-4 bg-gray-700 rounded-2xl overflow-auto'>

    <div className='flex justify-between p-3'>
      <div className='text-white'>
      <div className="float-left">
                {
                  output && output.map((item,index)=>{
                    return <p className="text-center" key={index}>{item}</p> 
                  })
                }
                </div>
      </div>
      

    </div>


  </div>
</div>

</div>

</>
)
}

export default Responsive;
  