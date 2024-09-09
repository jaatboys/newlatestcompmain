import React from 'react';
import { Routes ,Route} from 'react-router-dom';
import CSharpArray from './CSharpList/CSharpArray';
import CSharpAssociation from './CSharpList/CSharpAssociation';
import CSharpBreak from './CSharpList/CSharpBreak';
import CSharpClassAndObject from './CSharpList/CSharpClassAndObject';
import CSharpComments from './CSharpList/CSharpComments';
import CSharpConditionalOperator from './CSharpList/CSharpConditionalOperator';
import CSharpConstructor from './CSharpList/CSharpConstructor';
import CSharpContinue from './CSharpList/CSharpContinue';
import CSharpControlStructure from './CSharpList/CSharpControlStructure';
import CSharpDatatypes from './CSharpList/CSharpDatatypes';
import CSharpDoWile from './CSharpList/CSharpDoWile';
import CSharpFirstProgram from './CSharpList/CSharpFirstProgram';
import CSharpForLoop from './CSharpList/CSharpForLoop';
import CSharpGoto from './CSharpList/CSharpGoto';
import CSharpHistory from './CSharpList/CSharpHistory';
import CSharpIdentifier from './CSharpList/CSharpIdentifier';
import CSharpIf from './CSharpList/CSharpIf';
import CSharpIfElse from './CSharpList/CSharpIfElse';
import CSharpInheritance from './CSharpList/CSharpInheritance';
import CSharpInput from './CSharpList/CSharpInput';
import CSharpIntroduction from './CSharpList/CSharpIntroduction';
import CSharpkeyword from './CSharpList/CSharpkeyword';
import CSharpLiteral from './CSharpList/CSharpLiteral';
import CSharpLoopingStatement from './CSharpList/CSharpLoopingStatement';
import CSharpMethod from './CSharpList/CSharpMethod';
import CSharpMultilevelInheritance from './CSharpList/CSharpMultilevelInheritance';
import CSharpNamespace from './CSharpList/CSharpNamespace';
import CSharpObjectInitializers from './CSharpList/CSharpObjectInitializers';
import CSharpOops from './CSharpList/CSharpOops';
import CSharpOperator from './CSharpList/CSharpOperator';
import CSharpOverloading from './CSharpList/CSharpOverloading';
import CSharpOverriding from './CSharpList/CSharpOverriding';
import CSharpPassingArgument from './CSharpList/CSharpPassingArgument';
import CSharpSingleInheritance from './CSharpList/CSharpSingleInheritance';
import CSharpString from './CSharpList/CSharpString';
import CSharpSwitch from './CSharpList/CSharpSwitch';
import CSharpUserDefineFunction from './CSharpList/CSharpUserDefineFunction';
import CSharpVariable from './CSharpList/CSharpVariable';
import CSharpWhile from './CSharpList/CSharpWhile';
import CSharpIfElseIf from './CSharpList/CSharpIfElseIf';

const CSharpR = () => {
    return (
        <Routes>

            <Route path='/csharp-first-program' element={<CSharpFirstProgram/>}/>
            <Route path='/csharp-comments' element={<CSharpComments/>}/>
            <Route path='/csharp-keyword' element={<CSharpkeyword/>}/>
            <Route path='/csharp-operator' element={<CSharpOperator/>}/>
            <Route path='/csharp-datatypes' element={<CSharpDatatypes/>}/>
            <Route path='/csharp-variable' element={<CSharpVariable/>}/>
            <Route path='/csharp-identifier' element={<CSharpIdentifier/>}/>
            <Route path='/csharp-input' element={<CSharpInput/>}/>
            <Route path='/csharp-literal' element={<CSharpLiteral/>}/>
            <Route path='/csharp-namespace' element={<CSharpNamespace/>}/>
            <Route path='/csharp-string' element={<CSharpString/>}/>
            <Route path='/csharp-control-structure' element={<CSharpControlStructure/>}/>
            <Route path='/csharp-if' element={<CSharpIf/>}/>
            <Route path='/csharp-if-else' element={<CSharpIfElse/>}/>
            <Route path='/csharp-if-else-if' element={<CSharpIfElseIf/>}/>
            
            <Route path='/csharp-conditional-operator' element={<CSharpConditionalOperator/>}/>
            <Route path='/csharp-switch' element={<CSharpSwitch/>}/>
            <Route path='/csharp-looping-statement' element={<CSharpLoopingStatement/>}/>
            <Route path='/csharp-while' element={<CSharpWhile/>}/>
            <Route path='/csharp-do-wile' element={<CSharpDoWile/>}/>
            <Route path='/csharp-for-loop' element={<CSharpForLoop/>}/>
            <Route path='/csharp-break' element={<CSharpBreak/>}/>
            <Route path='/csharp-continue' element={<CSharpContinue/>}/>
            <Route path='/csharp-introduction' element={<CSharpIntroduction/>}/>
            <Route path='/csharp-goto' element={<CSharpGoto/>}/>
            <Route path='/csharp-array' element={<CSharpArray/>}/>
            <Route path='/csharp-oops' element={<CSharpOops/>}/>
            <Route path='/csharp-class-and-object' element={<CSharpClassAndObject/>}/>
            <Route path='/csharp-method' element={<CSharpMethod/>}/>
            <Route path='/csharp-user-define-function' element={<CSharpUserDefineFunction/>}/>
            <Route path='/csharp-passing-argument' element={<CSharpPassingArgument/>}/>
            <Route path='/csharp-object-initializers' element={<CSharpObjectInitializers/>}/>
            <Route path='/csharp-constructor' element={<CSharpConstructor/>}/>
            <Route path='/csharp-inheritance' element={<CSharpInheritance/>}/>
            <Route path='/csharp-single-inheritance' element={<CSharpSingleInheritance/>}/>
            <Route path='/csharp-multilevel-inheritance' element={<CSharpMultilevelInheritance/>}/>
            <Route path='/csharp-association' element={<CSharpAssociation/>}/>
            <Route path='/csharp-overloading' element={<CSharpOverloading/>}/>
            <Route path='/csharp-overriding' element={<CSharpOverriding/>}/>
            <Route path='/csharp-history' element={<CSharpHistory/>}/>
            
        </Routes>
    );
};

export default CSharpR;