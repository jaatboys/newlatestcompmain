import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CArray from './CList/CArray';
import CBreak from './CList/CBreak';
import CContinue from './CList/CContinue';
import CControlStructure from './CList/CControlStructure';
import CDoWhile from './CList/CDoWhile';
import CElement from './CList/CElement';
import CFirstProgram from './CList/CFirstProgram';
import CForLoop from './CList/CForLoop';
import CFunction from './CList/CFunction';
import CHistory from './CList/CHistory';
import CIdentifier from './CList/CIdentifier';
import CIf from './CList/CIf';
import CIfElse from './CList/CIfElse';
import CIfElseIf from './CList/CIfElseIf';
import CInput from './CList/CInput';
import CKeyword from './CList/CKeyword';
import CLiteral from './CList/CLiteral';
import CLooping from './CList/CLooping';
import COperator from './CList/COperator';
import CPassingArgument from './CList/CPassingArgument';
import CScopeOfVariable from './CList/CScopeOfVariable';
import CShortCutKeys from './CList/CShortCutKeys';
import CSwitch from './CList/CSwitch';
import CUserDefinedFunction from './CList/CUserDefinedFunction';
import CVariable from './CList/CVariable';
import CWhile from './CList/CWhile';

const CR = () => {
    return (
        <Routes>
            <Route path='c-variable' element={<CVariable />} />
            <Route path='c-scope-of-variable' element={<CScopeOfVariable />} />
            <Route path='c-element' element={<CElement />} />
            <Route path='c-keyword' element={<CKeyword />} />
            <Route path='c-identifier' element={<CIdentifier />} />
            <Route path='c-short-cut-keys' element={<CShortCutKeys />} />
            <Route path='c-first-program' element={<CFirstProgram />} />
            <Route path='c-input' element={<CInput />} />
            <Route path='c-literal' element={<CLiteral />} />
            <Route path='c-operator' element={<COperator />} />
            <Route path='c-control-structure' element={<CControlStructure />} />
            <Route path='c-if' element={<CIf />} />
            <Route path='c-if-else' element={<CIfElse />} />
            <Route path='c-if-else-if' element={<CIfElseIf />} />
            <Route path='c-switch' element={<CSwitch />} />
            <Route path='c-looping' element={<CLooping />} />
            <Route path='c-while' element={<CWhile />} />
            <Route path='c-do-while' element={<CDoWhile />} />
            <Route path='c-for-loop' element={<CForLoop />} />
            <Route path='c-break' element={<CBreak />} />
            <Route path='c-continue' element={<CContinue />} />
            <Route path='c-array' element={<CArray />} />
            <Route path='c-function' element={<CFunction />} />
            <Route path='c-user-defined-function' element={<CUserDefinedFunction />} />
            <Route path='c-passing-argument' element={<CPassingArgument />} />
            <Route path='c-history' element={<CHistory />} />
        </Routes>
    );
};

export default CR;