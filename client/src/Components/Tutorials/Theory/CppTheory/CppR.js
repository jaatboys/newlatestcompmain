import React from 'react';
import { Routes,Route } from 'react-router-dom';
import CppArray from './CPPList/CppArray';
import CppBreak from './CPPList/CppBreak';
import CppContinue from './CPPList/CppContinue';
import CppControlStructure from './CPPList/CppControlStructure';
import CppDoWhile from './CPPList/CppDoWhile';
import CppElement from './CPPList/CppElement';
import CppFirstProgram from './CPPList/CppFirstProgram';
import CppForLoop from './CPPList/CppForLoop';
import CppFunction from './CPPList/CppFunction';
import CppHistory from './CPPList/CppHistory';
import CppIdentifier from './CPPList/CppIdentifier';
import CppIf from './CPPList/CppIf';
import CppIfElse from './CPPList/CppIfElse';
import CppifElseIf from './CPPList/CppifElseIf';
import CppInput from './CPPList/CppInput';
import CppKeyword from './CPPList/CppKeyword';
import CppLiteral from './CPPList/CppLiteral';
import CppLooping from './CPPList/CppLooping';
import CppOperator from './CPPList/CppOperator';
import CppPassingArgument from './CPPList/CppPassingArgument';
import CppScopeOfVarialble from './CPPList/CppScopeOfVarialble';
import CppSwitch from './CPPList/CppSwitch';
import CppUserDefinedFunction from './CPPList/CppUserDefinedFunction';
import CppVariable from './CPPList/CppVariable';
import CppWhile from './CPPList/CppWhile';

const CppR = () => {
    return (
        <Routes>
            <Route path='cpp-variable' element={<CppVariable/>}/>
            <Route path='cpp-scope-of-variable' element={<CppScopeOfVarialble/>}/>
            <Route path='cpp-element' element={<CppElement/>}/>
            <Route path='cpp-keyword' element={<CppKeyword/>}/>
            <Route path='cpp-identifier' element={<CppIdentifier/>}/>
            <Route path='cpp-first-program' element={<CppFirstProgram/>}/>
            <Route path='cpp-input' element={<CppInput/>}/>
            <Route path='cpp-literal' element={<CppLiteral/>}/>
            <Route path='cpp-operator' element={<CppOperator/>}/>
            <Route path='cpp-control-structure' element={<CppControlStructure/>}/>
            <Route path='cpp-if' element={<CppIf/>}/>
            <Route path='cpp-if-else' element={<CppIfElse/>}/>
            <Route path='cpp-if-else-if' element={<CppifElseIf/>}/>
            <Route path='cpp-switch' element={<CppSwitch/>}/>
            <Route path='cpp-looping' element={<CppLooping/>}/>
            <Route path='cpp-while' element={<CppWhile/>}/>
            <Route path='cpp-do-while' element={<CppDoWhile/>}/>
            <Route path='cpp-for-loop' element={<CppForLoop/>}/>
            <Route path='cpp-break' element={<CppBreak/>}/>
            <Route path='cpp-continue' element={<CppContinue/>}/>
            <Route path='cpp-array' element={<CppArray/>}/>
            <Route path='cpp-function' element={<CppFunction/>}/>
            <Route path='cpp-user-defined-function' element={<CppUserDefinedFunction/>}/>
            <Route path='cpp-passing-argument' element={<CppPassingArgument/>}/>
            <Route path='cpp-history' element={<CppHistory/>}/>
        </Routes>
    );
};

export default CppR;