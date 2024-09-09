
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PhpBreak from './PhpList/PhpBreak';
import PhpComments from './PhpList/PhpComments';
import PhpContinue from './PhpList/PhpContinue';
import PhpControlStructure from './PhpList/PhpControlStructure';
import PhpDoWhile from './PhpList/PhpDoWhile';
import PhpFirstProgram from './PhpList/PhpFirstProgram';
import PhpForLoop from './PhpList/PhpForLoop';
import PhpFunction from './PhpList/PhpFunction';
import PhpGoto from './PhpList/PhpGoto';
import PhpHistory from './PhpList/PhpHistory';
import PhpIdentifier from './PhpList/PhpIdentifier';
import PhpIf from './PhpList/PhpIf';
import PhpIfElse from './PhpList/PhpIfElse';
import PhpIfElseIf from './PhpList/PhpIfElseIf';
import PhpIntroduction from './PhpList/PhpIntroduction';
import PhpKeyword from './PhpList/PhpKeyword';
import PhpLoopingStatement from './PhpList/PhpLoopingStatement';
import PhpOperators from './PhpList/PhpOperators';
import PhpSetup from './PhpList/PhpSetup';
import PhpSwitch from './PhpList/PhpSwitch';
import { PhpUserDefineFunction } from './PhpList/PhpUserDefineFunction';
import PhpVariables from './PhpList/PhpVariables';
import PhpWhile from './PhpList/PhpWhile';

const PhpR = () => {
  return (
    <Routes>
      <Route path='php-variables' element={<PhpVariables />} />
      <Route path='php-setup' element={<PhpSetup />} />
      <Route path='php-keyword' element={<PhpKeyword />} />
      <Route path='php-identifier' element={<PhpIdentifier />} />
      <Route path='php-comments' element={<PhpComments />} />
      <Route path='php-operator' element={<PhpOperators />} />
      <Route path='php-first-program' element={<PhpFirstProgram />} />
      <Route path='php-control-structure' element={<PhpControlStructure />} />
      <Route path='php-if' element={<PhpIf />} />
      <Route path='php-if-else' element={<PhpIfElse />} />
      <Route path='php-if-else-if' element={<PhpIfElseIf />} />
      <Route path='php-switch' element={<PhpSwitch />} />
      <Route path='php-looping-statement' element={<PhpLoopingStatement />} />
      <Route path='php-while' element={<PhpWhile />} />
      <Route path='php-do-while' element={<PhpDoWhile />} />
      <Route path='php-for-loop' element={<PhpForLoop />} />
      <Route path='php-break' element={<PhpBreak />} />
      <Route path='php-continue' element={<PhpContinue />} />
      <Route path='php-goto' element={<PhpGoto />} />
      <Route path='php-function' element={<PhpFunction />} />
      <Route path='php-user-define-function' element={<PhpUserDefineFunction />} />
      <Route path='php-history' element={<PhpHistory />} />
      <Route path='php-introduction' element={<PhpIntroduction />} />
    </Routes>
  );
};

export default PhpR;