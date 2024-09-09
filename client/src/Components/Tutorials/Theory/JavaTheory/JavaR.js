import React from 'react';
import { Routes,Route } from 'react-router-dom';
import JavaArray from './JavaList/JavaArray';
import JavaAssociation from './JavaList/JavaAssociation';
import JavaBreak from './JavaList/JavaBreak';
import JavaClassAndObject from './JavaList/JavaClassAndObject';
import JavaComments from './JavaList/JavaComments';
import JavaConditionalOperator from './JavaList/JavaConditionalOperator';
import JavaConstructor from './JavaList/JavaConstructor';
import JavaContinue from './JavaList/JavaContinue';
import JavaControlStructure from './JavaList/JavaControlStructure';
import JavaDataTypes from './JavaList/JavaDataTypes';
import JavaDoWhile from './JavaList/JavaDoWhile';
import JavaEnum from './JavaList/JavaEnum';
import JavaFeatures from './JavaList/JavaFeatures';
import JavaFirstProgram from './JavaList/JavaFirstProgram';
import JavaForLoop from './JavaList/JavaForLoop';
import JavaHierarchicalInheritance from './JavaList/JavaHierarchicalInheritance';
import JavaHistory from './JavaList/JavaHistory';
import JavaIdentifier from './JavaList/JavaIdentifier';
import JavaIf from './JavaList/JavaIf';
import JavaIfElse from './JavaList/JavaIfElse';
import JavaIfElseIf from './JavaList/JavaIfElseIf';
import JavaInheritance from './JavaList/JavaInheritance';
import JavaKeywords from './JavaList/JavaKeywords';
import JavaLiterals from './JavaList/JavaLiterals';
import JavaLooping from './JavaList/JavaLooping';
import JavaMethod from './JavaList/JavaMethod';
import JavaMultilevelInheritance from './JavaList/JavaMultilevelInheritance';
import JavaObjectInitialize from './JavaList/JavaObjectInitialize';
import JavaOops from './JavaList/JavaOops';
import JavaOperators from './JavaList/JavaOperators';
import JavaOverloading from './JavaList/JavaOverloading';
import JavaOverriding from './JavaList/JavaOverriding';
import JavaPassingArgument from './JavaList/JavaPassingArgument';
import JavaSingleInheritance from './JavaList/JavaSingleInheritance';
import JavaString from './JavaList/JavaString';
import JavaSwitch from './JavaList/JavaSwitch';
import JavaTypesOfVariables from './JavaList/JavaTypesOfVariables';
import JavaUserDefinedFunctions from './JavaList/JavaUserDefinedFunctions';
import JavaVariables from './JavaList/JavaVariables';
import JavaWhile from './JavaList/JavaWhile';

const JavaR = () => {
    return (
        <Routes>
            <Route path='java-variables' element={<JavaVariables />} />
            <Route path='java-types-of-variables' element={<JavaTypesOfVariables />} />
            <Route path='java-comments' element={<JavaComments />} />
            <Route path='java-identifier' element={<JavaIdentifier />} />
            <Route path='java-string' element={<JavaString />} />
            <Route path='java-literals' element={<JavaLiterals />} />
            <Route path='java-data-types' element={<JavaDataTypes />} />
            <Route path='java-operators' element={<JavaOperators />} />
            <Route path='java-keywords' element={<JavaKeywords />} />
            <Route path='java-first-program' element={<JavaFirstProgram />} />
            <Route path='java-control-structure' element={<JavaControlStructure />} />
            <Route path='java-if' element={<JavaIf />} />
            <Route path='java-if-else' element={<JavaIfElse />} />
            <Route path='java-if-else-if' element={<JavaIfElseIf />} />
            <Route path='java-conditional-operator' element={<JavaConditionalOperator />} />
            <Route path='java-switch' element={<JavaSwitch />} />
            <Route path='java-looping' element={<JavaLooping />} />
            <Route path='java-while' element={<JavaWhile />} />
            <Route path='java-do-while' element={<JavaDoWhile />} />
            <Route path='java-for-loop' element={<JavaForLoop />} />
            <Route path='java-break' element={<JavaBreak />} />
            <Route path='java-continue' element={<JavaContinue />} />
            <Route path='java-array' element={<JavaArray />} />
            <Route path='java-oops' element={<JavaOops />} />
            <Route path='java-class-and-object' element={<JavaClassAndObject />} />
            <Route path='java-method' element={<JavaMethod />} />

            <Route path='java-object-initialize' element={<JavaObjectInitialize />} />
            <Route path='java-user-defined-function' element={<JavaUserDefinedFunctions />} />
            <Route path='java-constructor' element={<JavaConstructor />} />
            <Route path='java-inheritance' element={<JavaInheritance />} />
            <Route path='java-single-inheritance' element={<JavaSingleInheritance />} />
            <Route path='java-multilevel-inheritance' element={<JavaMultilevelInheritance />} />
            <Route path='java-hierarchical-inheritance' element={<JavaHierarchicalInheritance />} />
            <Route path='java-association' element={<JavaAssociation />} />
            <Route path='java-overloading' element={<JavaOverloading />} />
            <Route path='java-overriding' element={<JavaOverriding />} />
            <Route path='java-passing-argument' element={<JavaPassingArgument />} />
            <Route path='java-enum' element={<JavaEnum />} />
            <Route path='java-history' element={<JavaHistory />} />
            <Route path='java-features' element={<JavaFeatures />} />
        </Routes>
    );
};

export default JavaR;