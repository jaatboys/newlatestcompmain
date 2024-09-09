
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import JavaScriptBreak from './JavaScriptList/JavaScriptBreak';
import JavaScriptComment from './JavaScriptList/JavaScriptComment';
import JavaScriptContinue from './JavaScriptList/JavaScriptContinue';
import JavaScriptControlStructure from './JavaScriptList/JavaScriptControlStructure';
import JavaScriptDomMethod from './JavaScriptList/JavaScriptDomMethod';
import JavaScriptDoWhile from './JavaScriptList/JavaScriptDoWhile';
import JavaScriptFirstProgram from './JavaScriptList/JavaScriptFirstProgram';
import JavaScriptForLoop from './JavaScriptList/JavaScriptForLoop';
import JavaScriptFunction from './JavaScriptList/JavaScriptFunction';
import JavaScriptHistory from './JavaScriptList/JavaScriptHistory';
import JavaScriptIdentifier from './JavaScriptList/JavaScriptIdentifier';
import JavaScriptIf from './JavaScriptList/JavaScriptIf';
import JavaScriptIfElse from './JavaScriptList/JavaScriptIfElse';
import JavaScriptIfElseIf from './JavaScriptList/JavaScriptIfElseIf';
import JavaScriptKeyword from './JavaScriptList/JavaScriptKeyword';
import JavaScriptLoopingStatement from './JavaScriptList/JavaScriptLoopingStatement';
import JavaScriptOperator from './JavaScriptList/JavaScriptOperator';
import JavaScriptSwitch from './JavaScriptList/JavaScriptSwitch';
import JavaScriptUserDefineFunction from './JavaScriptList/JavaScriptUserDefineFunction';
import JavaScriptVariables from './JavaScriptList/JavaScriptVariables';
import JavaScriptWhile from './JavaScriptList/JavaScriptWhile';

const JavaScriptR = () => {
    return (
        <Routes>
            <Route path='javascript-variables' element={<JavaScriptVariables />} />
            <Route path='javascript-keyword' element={<JavaScriptKeyword />} />
            <Route path='javascript-comment' element={<JavaScriptComment />} />
            <Route path='javascript-identifier' element={<JavaScriptIdentifier />} />
            <Route path='javascript-operator' element={<JavaScriptOperator />} />
            <Route path='javascript-first-program' element={<JavaScriptFirstProgram />} />
            <Route path='javascript-control-structure' element={<JavaScriptControlStructure />} />
            <Route path='javascript-if' element={<JavaScriptIf />} />
            <Route path='javascript-if-else' element={<JavaScriptIfElse />} />
            <Route path='javascript-if-else-if' element={<JavaScriptIfElseIf />} />
            <Route path='javascript-switch' element={<JavaScriptSwitch />} />
            <Route path='javascript-looping-statement' element={<JavaScriptLoopingStatement />} />
            <Route path='javascript-while' element={<JavaScriptWhile />} />
            <Route path='javascript-do-while' element={<JavaScriptDoWhile />} />
            <Route path='javascript-for-loop' element={<JavaScriptForLoop />} />
            <Route path='javascript-break' element={<JavaScriptBreak />} />
            <Route path='javascript-continue' element={<JavaScriptContinue />} />
            <Route path='javascript-function' element={<JavaScriptFunction />} />
            <Route path='javascript-user-define-function' element={<JavaScriptUserDefineFunction />} />
            <Route path='javascript-dom-method' element={<JavaScriptDomMethod />} />
            <Route path='javascript-history' element={<JavaScriptHistory />} />
        </Routes>
    );
};

export default JavaScriptR;