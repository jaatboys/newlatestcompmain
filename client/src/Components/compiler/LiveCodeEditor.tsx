
import React, { useState } from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/theme-twilight';

import styled from 'styled-components';

const EditorContainer = styled.div`

.ace_gutter {
  background-color: transparent !important;
}

  /* Customize the scrollbar color */ 
  ::-webkit-scrollbar {
    width: 10px; /* Adjust the width as desired */
  }

  ::-webkit-scrollbar-thumb {
    background-color: #7065f0; /* Adjust the color to your desired value */
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #999999; /* Adjust the hover color to your desired value */
  }

  ::-webkit-scrollbar-track {
    background-color: #f4f4f4; /* Adjust the background color to your desired value */
  }
`;


function LiveCodeEditor() {
  const [code, setCode] = useState('');

  const handleCodeChange = (newCode: React.SetStateAction<string>) => {
    setCode(newCode);
  };
 
  return (
    <EditorContainer>
      <AceEditor
        mode="python"
        theme="twilight"
        onChange={handleCodeChange}
        value={code}
        name="live-code-editor"
        editorProps={{ $blockScrolling: true, highlightActiveLine: false }} // Disable active line highlighting
        showPrintMargin={false}
        style={{
          borderRadius: '10px',
          width: 'full',
          height: '260px',
          background: '#374151',
          fontSize: '20px',
          // scrollbarStyle: 'solid',
          // scrollbarVStyle: 'solid',
          // scrollbarHStyle: 'solid',
          // scrollbarVColor: '#7065f0',
          // scrollbarHColor: '#7065f0',
        }}
      />
    </EditorContainer>
  );
}

export default LiveCodeEditor;
