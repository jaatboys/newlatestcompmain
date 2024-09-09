// import React, { useState } from "react";
// import ReactDOM from "react-dom";

// import "./codeEditor.css";
// import Editor from "react-simple-code-editor";
// import { highlight, languages } from "prismjs/components/prism-core";
// import "prismjs/components/prism-clike";
// import "prismjs/components/prism-javascript";
// import "prismjs/themes/prism.css";


// const hightlightWithLineNumbers = (input, language) =>
//     highlight(input, language)
//         .split("\n")
//         .map((line, i) => `<span class='editorLineNumber'>${i + 1}</span>${line}`)
//         .join("\n");
// const CodeEditorFiled = ({code}) => {
//     const [codeValue, setCodeValue] = useState(code);

//     return (
//         <Editor
//             value={codeValue}
//             // onValueChange={code => setCodeValue(code)}
//             highlight={code => hightlightWithLineNumbers(code, languages.js)}
//             padding={10}
//             textareaId="codeArea"
//             className="editor"
//             style={{
//                 fontFamily: '"Fira code", "Fira Mono", monospace',
//                 fontSize: 16,
//                 outline: 0
//             }}
//         />
//     );
// };

// export default CodeEditorFiled;
import React, { useState } from "react";
import './codeEditor.css'
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";
import '../../../prism-ally-green.css'

const hightlightWithLineNumbers = (input, language) => {
  if (input && language) {
    return (
      highlight(input, language)
        .split("\n")
        .map((line, i) => `<span class='editorLineNumber'>${i + 1}</span>${line}`)
        .join("\n")
    );
  }
  return "";
};

const CodeEditorFiled = ({ code, setCode }) => {
  const [codeValue, setCodeValue] = useState(code);

  return (
    <Editor
      value={code}
    //   onValueChange={code => {
    //     setCodeValue(code)
    //     setInputvalue(code)
    // }}
    onValueChange={code => {
      setCodeValue(code)
      setCode(code)
    }}
      highlight={(code) => hightlightWithLineNumbers(code, languages.js)}
      padding={10}
      textareaId="codeArea"
      className="editor"
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 16,
        outline: 0
      }}
    />
  );
};

export default CodeEditorFiled;
