import React from 'react';
import { Routes, Route } from 'react-router-dom';
import JavaVsPythonBasic from './JavaVsPythonList/JavaVsPythonBasic';
import JavaVsPythonFunction from './JavaVsPythonList/JavaVsPythonFunction';
import JavaVsPythonif from './JavaVsPythonList/JavaVsPythonif';
import JavaVsPythonifelse from './JavaVsPythonList/JavaVsPythonifelse';
import JavaVsPythonWhile from './JavaVsPythonList/JavaVsPythonWhile';

const JavaVsPythonRoute = () => {
    return (
        <Routes>
            <Route path='java-vs-python-basic' element={<JavaVsPythonBasic />} />
            <Route path='java-vs-python-if' element={<JavaVsPythonif />} />
            <Route path='java-vs-python-if-else' element={<JavaVsPythonifelse />} />
            <Route path='java-vs-python-while' element={<JavaVsPythonWhile />} />
            <Route path='java-vs-python-function' element={<JavaVsPythonFunction />} />
        </Routes>
    );
};

export default JavaVsPythonRoute;