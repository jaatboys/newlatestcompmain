import React from 'react';
import { Routes, Route } from 'react-router-dom';
import JavaVsCsharpBasic from './JavaVsCsharpList/JavaVsCsharpBasic';
import JavaVsCsharpFunction from './JavaVsCsharpList/JavaVsCsharpFunction';
import JavaVsCsharpif from './JavaVsCsharpList/JavaVsCsharpif';
import JavaVsCsharpifElse from './JavaVsCsharpList/JavaVsCsharpifElse';
import JavaVsCsharpSwitch from './JavaVsCsharpList/JavaVsCsharpSwitch';
import JavaVsCsharpWhile from './JavaVsCsharpList/JavaVsCsharpWhile';



const JavaVsCsharpRoute = () => {
    return (

        <Routes>
            <Route path='java-vs-csharp-basic' element={<JavaVsCsharpBasic />} />
            <Route path='java-vs-csharp-if' element={<JavaVsCsharpif />} />
            <Route path='java-vs-csharp-if-else' element={<JavaVsCsharpifElse />} />
            <Route path='java-vs-csharp-switch' element={<JavaVsCsharpSwitch />} />
            <Route path='java-vs-csharp-while' element={<JavaVsCsharpWhile />} />
            <Route path='java-vs-csharp-function' element={<JavaVsCsharpFunction />} />
           
        </Routes>
    );
};

export default JavaVsCsharpRoute;
