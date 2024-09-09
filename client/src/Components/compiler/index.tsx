import React, { useEffect, useState } from "react";
// import AceEditor from "react-ace";
// import "ace-builds/src-noconflict/mode-python";
// import "ace-builds/src-noconflict/mode-javascript";
// import "ace-builds/src-noconflict/mode-java";
// import "ace-builds/src-noconflict/mode-php";
// import "ace-builds/src-noconflict/mode-c_cpp";
// import "ace-builds/src-noconflict/mode-csharp";
// import "ace-builds/src-noconflict/mode-swift";
// import "ace-builds/src-noconflict/mode-typescript";
// import "ace-builds/src-noconflict/theme-monokai";
import "../styles.css";
import {Helmet} from "react-helmet";
import { BsFullscreen } from "react-icons/bs";
import { FaFolderMinus } from "react-icons/fa";
import { VscDebugStart } from "react-icons/vsc";
import { SiJavascript } from "react-icons/si";
import Responsive from "./responsive.tsx";
import pythonLogo from "../../assets/pythonBigLogo.png";
import javascriptLogo from '../../assets/jsLogo.png'
import javaLogo from "../../assets/java.png"
import phpLogo from "../../assets/phpLogo.png"
import cppLogo from "../../assets/cplusLogo.png";
import csharpLogo from "../../assets/Csharp_Logo.png";
import Clogo from "../../assets/Clanguage.png";
// import goLangLogo from "../../assets/golang.svg";
import swiftLogo from "./swift-logo.png";
import typescriptLogo from "./typescript-logo.png";
import Header from '../Header/HomePageHeader'
import CodeEditorFiled from "../Tutorials/CodeEditorFiled/CodeEditorFiled";
import rlogo from "../../assets/RProgramminglanguage.png";

// const EditorContainer = styled.div`
// .ace_gutter {
//   background-color: transparent !important;
// }
// `;




function Code({language}) {
  const [activeTab, setActiveTab] = useState('');
  const [code, setCode] = useState(``);
  const [output,setOutput] = useState([]);
  const [heading, setHeading] = useState('');
  const [loading, setLoading] = useState(false)
  const [path, setPath] = useState(``);

  const F = language.split('')[0].toUpperCase()
  const R = language.substring(1,language.length)
  const Title = F+R ;


  useEffect(() => {
    handleTabClick(language)
  }, []);

  
  const handleTabClick = (language: React.SetStateAction<string>) => {
    setActiveTab(language);

    switch (language){
      case "python":
        setCode(`rows = 10
k = 0
for i in range(1, rows+1):
    for space in range(1, (rows-i)+1):
        print(end="  ")
        
    while k != (2*i-1):
        print("* ", end="")
        k += 1
        
    k = 0
    print()`);
        setHeading("Python");
        setPath('python-variables');
        break;
      
        case "r":
          setCode(`# Create a numeric vector
          numbers <- c(5, 10, 15, 20, 25)
          
          # Calculate the sum
          sum_value <- sum(numbers)
          
          # Print the result
          cat("Sum:", sum_value)`);
  setHeading("R");
        break;
      case "javascript":
        setCode(`// JavaScript code\nfunction greet() {
    return "Hello, JavaScript!";
}
console.log(greet());
`);
setHeading("JavaScript");
setPath('javascript-variables');
        break;
      case "java":
        setCode(`// Java code\nclass Main {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}`);
setHeading("Java");
setPath('java-variables');
        break;
      case "php":
        setCode(`<?php
echo ("Hello World!");
?>`);
        setHeading("PHP");
        setPath('php-variables');
        break;
      case "cpp":
        setCode(`// C++ code\n#include <iostream>\nusing namespace std;\n\nint main() {
    cout << "Hello, C++!" << endl;
    return 0;
}`);
setHeading("C++");
setPath('cpp-variable');
        break;
      case "csharp":
        setCode(`// C# code\nusing System;\n\nclass Program {
    static void Main() {
        Console.WriteLine("Hello, C#!");
    }
}`);
setHeading("C#");
setPath('csharp-first-program');
        break;
        case "c":
        setCode(`// Online C compiler to run C program online
        #include <stdio.h>
        
        int main() {
            // Write C code here
            printf("Hello world");
        
            return 0;
}`);
setHeading("C");
setPath('c-variable');
        break;
      case "swift":
        setCode(`// Swift code\nprint("Hello, Swift!")`);
        setHeading("Swift");
        break;
      case "typescript":
        setCode(`// TypeScript code\nclass Greeter {
    static sayHello() {
        console.log("Hello, TypeScript!");
    }
}

Greeter.sayHello();
`);
setHeading("TypeScript");
setPath('');
        break;
        case "r":
        setCode(`print("hellow World")`);
setHeading("R");
        break;
      default:
        setCode("");
        setHeading(language?.toUpperCase());
        break;
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

  return (
    <>


<Helmet>
        <title>{Title} CodeExampler: Your {Title} Playground - Online Compilation Made Simple</title>
        <meta
          name="description"
          content={`Unleash Your ${Title} Powerhouse with CodeExampler's Online Compiler! Seamlessly write, compile, and run ${Title} code in a user-friendly environment. Elevate your coding experience with our powerful platform – your gateway to ${Title} excellence!`} />
        <meta
          name="keywords"
          content={`codeexampler,programming language,tutorial for begineers,${language} code compiler, Online ${language} IDE,Web-based ${language} compiler,${language} programming tools,Code execution in ${language},${language} script testing,Online code editor,${language} debugging tools,${language} coding playground,${language} script runner,Online code execution,${language} script compiler,Web-based code testing,Code testing in ${language},${language} online coding tool,Real-time ${language} compiler,Interactive ${language} coding`}
        />
        <link
          rel="canonical"
          href={`https://www.codeexampler.com/compiler/${language}`}
        />
    </Helmet>

      <Responsive language={language}/>
      <div className="p- md:block hidden overflow-x-hidden">
      
        <div className="bg-gray-800 overflow-x-hidden text-white ">
        <hr className="border-2 border-gray-500" />
          <div className="flex md:flex-row flex-col justify-between">
            
            <div className="flex flex-row ">
              <div
                className={`flex-row cursor-pointer flex text-2xl   ${
                  activeTab !== "python" ? "w-16 border-r-2 border-gray-500" : ""
                }`}
                // onClick={() => handleTabClick("Python")}
              >
                <a href={'/compiler/python'} target="_blank" rel="noopener noreferrer">
                <img
                  // onClick={() => handleTabClick("Python")}
                  src={pythonLogo}
                  className={`w-8 h-8 absolute left-4 top-20 mt-2 mr-2 `}
                  alt="Python Online Compiler CodeExampler"
                />
                </a>
                <button
                  // onClick={() => handleTabClick("Python")}
                  className={`${
                    activeTab === "python" ? "bg-gray-700 text-lg rounded-b-lg" : "bg-gray-800 text-base"
                  } font-semibold w-32 ml-4 ${activeTab === "python" ? "" : "hidden"}`}
                >
                  Python
                </button>
              </div>
              <div
                className={`flex-row cursor-pointer flex text-2xl ${
                  activeTab !== "javascript" ? "w-16 border-r-2 border-gray-500" : ""
                }`}
                // onClick={() => handleTabClick("JS")}
              >
                <div className="flex flex-row">
                <a href={'/compiler/javascript'} target="_blank" rel="noopener noreferrer">
                  <SiJavascript
                    // onClick={() => handleTabClick("JS")}
                    className="text-yellow-300  w-6 h-6 absolute top-20 mt-2  cursor-pointer ml-4"
                  />
                  </a>
                  <button
                    // onClick={() => handleTabClick("JS")}
                    className={`${
                      activeTab === "javascript" ? "bg-gray-700 pl-6" : "bg-gray-800 border-r-2 border-gray-700"
                    } font-semibold w-40 mr-2 text-lg ${activeTab === "javascript" ? "" : "hidden"}`}
                  >
                    JavaScript
                  </button>
                </div>
              </div>

{/* R Button Tab*/}

<div
                className={`flex-row cursor-pointer flex text-2xl ${
                  activeTab !== "r" ? "w-16 border-r-2 border-gray-500" : ""
                }`}
                // onClick={() => handleTabClick("PHP")}
              >
                <a href={'/compiler/r'} target="_blank" rel="noopener noreferrer">
                <img
                  // onClick={() => handleTabClick("php")}
                  src={rlogo}
                  className={'w-8 h-8 absolute top-20 ml-4 mt-2'}
                  alt="R Logo"
                />
                </a>
                <button
                  // onClick={() => handleTabClick("PHP")}
                  className={`${
                    activeTab === "r" ? "bg-gray-700 text-lg" : "bg-gray-800 text-base"
                  } font-semibold w-40 mr-2 ${activeTab === "r" ? "" : "hidden"}`}
                >
                  R
                </button>
              </div>


              <div
                className={`flex-row cursor-pointer flex text-2xl ${
                  activeTab !== "java" ? "w-16 border-r-2 border-gray-500" : ""
                }`}
                // onClick={() => handleTabClick("Java")}
              >
                <a href={'/compiler/java'} target="_blank" rel="noopener noreferrer">
                <img
                  // onClick={() => handleTabClick("Java")}
                  src={javaLogo}
                  className={`w-8 h-8 absolute top-20 ml-4 mt-2 `}
                  alt="Java Online Compiler CodeExampler"
                />
                </a>
                <button
                  // onClick={() => handleTabClick("Java")}
                  className={`${
                    activeTab === "java" ? "bg-gray-700 text-lg" : "bg-gray-800 text-base"
                  } font-semibold w-40 mr-2 ${activeTab === "java" ? "" : "hidden"}`}
                >
                  Java
                </button>
              </div>
              <div
                className={`flex-row cursor-pointer flex text-2xl ${
                  activeTab !== "csharp" ? "w-16 border-r-2 border-gray-500" : ""
                }`}
                // onClick={() => handleTabClick("C#")}
              >
                <a href={'/compiler/csharp'} target="_blank" rel="noopener noreferrer">
                <img
                  // onClick={() => handleTabClick("C#")}
                  src={csharpLogo}
                  className={`w-8 h-8 absolute top-20 ml-4 mt-2`}
                  alt="C# Online Compiler CodeExampler"
                />
                </a>
                <button
                  // onClick={() => handleTabClick("C#")}
                  className={`${
                    activeTab === "csharp" ? "bg-gray-700 text-lg" : "bg-gray-800 text-base"
                  } font-semibold w-40 mr-2 ${activeTab === "csharp" ? "" : "hidden"}`}
                >
                  C#
                </button>
              </div>
              <div
                className={`flex-row cursor-pointer flex text-2xl ${
                  activeTab !== "php" ? "w-16 border-r-2 border-gray-500" : ""
                }`}
                // onClick={() => handleTabClick("PHP")}
              >
                <a href={'/compiler/php'} target="_blank" rel="noopener noreferrer">
                <img
                  // onClick={() => handleTabClick("php")}
                  src={phpLogo}
                  className={`w-8 h-8 absolute top-20 ml-4 mt-2`}
                  alt="PHP Online Compiler CodeExampler"
                />
                </a>
                <button
                  // onClick={() => handleTabClick("PHP")}
                  className={`${
                    activeTab === "php" ? "bg-gray-700 text-lg" : "bg-gray-800 text-base"
                  } font-semibold w-40 mr-2 ${activeTab === "php" ? "" : "hidden"}`}
                >
                  PHP
                </button>
              </div>
              <div
                className={`flex-row cursor-pointer flex text-2xl ${
                  activeTab !== "cpp" ? "w-16 border-r-2 border-gray-500" : ""
                }`}
                // onClick={() => handleTabClick("C++")}
              >
                <a href={'/compiler/cpp'} target="_blank" rel="noopener noreferrer">
                <img
                  // onClick={() => handleTabClick("C++")}
                  src={cppLogo}
                  className={`w-8 h-8 absolute top-20 ml-4 mt-2`}
                  alt="C++ Online Compiler CodeExampler"
                />
                </a>
                <button
                  // onClick={() => handleTabClick("C++")}
                  className={`${
                    activeTab === "cpp" ? "bg-gray-700 text-lg" : "bg-gray-800 text-base"
                  } font-semibold w-40 mr-2 ${activeTab === "cpp" ? "" : "hidden"}`}
                >
                  C++
                </button>
              </div>
              <div
                className={`flex-row cursor-pointer flex text-2xl ${
                  activeTab !== "c" ? "w-16 border-r-2 border-gray-500" : ""
                }`}
                // onClick={() => handleTabClick("C++")}
              >
                <a href={'/compiler/c'} target="_blank" rel="noopener noreferrer">
                <img
                  // onClick={() => handleTabClick("C++")}
                  src={Clogo}
                  className={`w-8 h-8 absolute top-20 ml-4 mt-2`}
                  alt="C Online Compiler CodeExampler"
                />
                </a>
                <button
                  // onClick={() => handleTabClick("C++")}
                  className={`${
                    activeTab === "c" ? "bg-gray-700 text-lg" : "bg-gray-800 text-base"
                  } font-semibold w-40 mr-2 ${activeTab === "c" ? "" : "hidden"}`}
                >
                  C
                </button>
              </div>


              <div
                className={`flex-row cursor-pointer flex text-2xl ${
                  activeTab !== "typescript" ? "w-16 border-r-2 border-gray-500" : ""
                }`}
                // onClick={() => handleTabClick("JS")}
              >
                <div className="flex flex-row">
                <a href={'/compiler/typescript'} target="_blank" rel="noopener noreferrer">
                <img
                      src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg"
                      width={12}
                      height={12}
                      // onClick={() => handleTabClick("JS")}
                      className="text-yellow-300  w-6 h-6 absolute top-20 mt-3  cursor-pointer ml-4" alt={""}                  />
                  
                  </a>
                  <button
                    // onClick={() => handleTabClick("JS")}
                    className={`${
                      activeTab === "typescript" ? "bg-gray-700 pl-6" : "bg-gray-800 border-r-2 border-gray-700"
                    } font-semibold w-40 mr-2 text-lg ${activeTab === "typescript" ? "" : "hidden"}`}
                  >
                    TypeScript
                  </button>
                </div>
              </div>

          
              
            </div>

            <div className="pr-10 md:pt-4 pl-9 mb-3">
             <a href={`/${path}`}>
              <button className="bg-sky-500 font-semibold rounded-md w-64 h-10">
                Learn {heading}
              </button>
              </a> 
            </div>
          </div>
          {/* <hr className="border-2 border-gray-500" /> */}
          <div className="pl-4 pr-4 ">
            <div className="bg-[#1f3040] md:w-full text-[#9EB2D2] scroll-pl-6 w-2 h-80 rounded-b-md pt-4 overflow-auto">
              <CodeEditorFiled code={code} setCode={setCode}/>
              {/* <EditorContainer>
                <AceEditor
                  mode={
                    activeTab === "python"
                      ? "python"
                      : activeTab === "javascript"
                      ? "javascript"
                      : activeTab === "java"
                      ? "java"
                      : activeTab === "php"
                      ? "php"
                      : activeTab === "cpp"
                      ? "c_cpp"
                      : activeTab === "csharp"
                      ? "csharp"
                      : activeTab === "swift"
                      ? "swift"
                      : activeTab === "typeScript"
                      ? "typescript"
                      : ""
                  }
                  theme="monokai"
                  name={
                    activeTab === "python"
                      ? "python-editor"
                      : activeTab === "javascript"
                      ? "javascript-editor"
                      : activeTab === "java"
                      ? "java-editor"
                      : activeTab === "php"
                      ? "php-editor"
                      : activeTab === "cpp"
                      ? "cpp-editor"
                      : activeTab === "csharp"
                      ? "csharp-editor"
                      : activeTab === "swift"
                      ? "swift-editor"
                      : activeTab === "typeScript"
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
                    width: "full",
                    height: "260px",
                    background: "#374151",
                    fontSize: "20px",
                    paddingTop:"20px",
                  }}
                  setOptions={{
                    highlightActiveLine: false,
                  }}
                />
              </EditorContainer> */}
            </div>
          </div>
          <div className="bg-gray-700 mt-5 flex justify-around h-20">
            <div className="p-2 w-full flex justify-around">
              <button onClick={run} className="bg-sky-500 w-1/2 rounded-md">
                <div className="flex flex-row items-center justify-center">
                  {
                    loading ?<> <svg className="animate-spin -ml-1 mr-3 h-8 w-8 text-white font-bold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg> <span className="text-3xl font-bold">Processing...</span></>
                  :<>
                  <VscDebugStart size={35} className="" />
                  <p className=" text-3xl font-bold">Run Test</p>
                  </>
                  }
                 
                </div>
              </button>
            </div>
          </div>
          <div className="p-3">
            <h1 className="text-xl font-semibold ml-5 mb-2">Compiler</h1>
            <div className="h-64 bg-gray-700 rounded-xl overflow-auto">
              <div className="p-4">
                <div className="flex flex-col float-right scroll-pl-6 "></div>
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
  );
}

export default Code;


