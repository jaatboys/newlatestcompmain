
const express = require('express');
const pythonCompiler = require('../controller/pythonCompiler.js');
const javaCompiler = require('../controller/javaCompiler.js');
const jsCompiler = require('../controller/jsCompiler.js');
const cppCompiler = require('../controller/cppCompiler.js');
const phpCompiler = require('../controller/phpCompiler.js');
const csharpCompiler = require('../controller/csharpCompiler.js');
const goCompiler = require('../controller/goCompiler.js');
const tsCompiler = require('../controller/tsCompiler.js');
const rCompiler = require('../controller/rCompiler.js');


const primaryRoutes = express.Router();

primaryRoutes.post('/compiler/python', pythonCompiler);
primaryRoutes.post('/compiler/java', javaCompiler);
primaryRoutes.post('/compiler/javascript', jsCompiler);
primaryRoutes.post('/compiler/c', cppCompiler);
primaryRoutes.post('/compiler/cpp', cppCompiler);
primaryRoutes.post('/compiler/php', phpCompiler);
primaryRoutes.post('/compiler/csharp', csharpCompiler);
primaryRoutes.post('/compiler/go', goCompiler);
primaryRoutes.post('/compiler/typescript', tsCompiler);
primaryRoutes.post('/compiler/r',rCompiler);



module.exports = primaryRoutes;
