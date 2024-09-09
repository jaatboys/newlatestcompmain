const { exec } = require('child_process');
const path = require('path');
const generateFile = require('../helpers/generatorFuctions.js');
const { fileRemover } = require('../helpers/removerFunctions.js');

// Python compiler function
const pythonCompiler = async (req, res) => {
    try {
        const { code } = req.body;

        if (!code) {
            return res.status(400).json({ error: 'Code cannot be empty.' });
        }

        const { filePath, langDir, statusCode } = generateFile('python', code);
        if (statusCode !== true) throw new Error('Error while file creation.');

        // Ensure the path is quoted to handle spaces
        const quotedFilePath = `"${filePath}"`;

        exec(`python3 -m py_compile ${quotedFilePath}`, (syntaxError, stdout, stderr) => {
            if (syntaxError) {
                console.error('Syntax error:', syntaxError);
                console.error('Stderr:', stderr);
                fileRemover(filePath); // Remove the file if there is a syntax error
                return res.status(400).json({ error: 'Syntax error in the code.' });
            }

            exec(`python3 ${quotedFilePath}`, (executeError, executeStdout, executeStderr) => {
                if (executeError) {
                    console.error('Execution error:', executeError);
                    console.error('Stderr:', executeStderr);
                    fileRemover(filePath); // Remove the file if there is an execution error
                    return res.status(500).json({ error: 'Execution error.' });
                }

                const output = executeStderr || executeStdout;
                res.status(200).json({ output });
                
                // Clean up
                setTimeout(() => {
                    fileRemover(filePath); // Remove the .py file after execution

                    // Construct the path for the .pyc file
                    const pycFileBaseName = path.basename(filePath, '.py') + '.cpython-312.pyc';
                    const pycFile = path.join(langDir, `__pycache__/${pycFileBaseName}`);
                    console.log(`Pyc file path: ${pycFile}`); // Log path of the .pyc file
                    fileRemover(pycFile); // Remove the .pyc file
                }, 1000); // Adjust the delay as needed
            });
        });
    } catch (error) {
        console.error('Error while processing the request:', error);
        res.status(500).json({ error: 'Internal server error.' });
    }
};

module.exports = pythonCompiler;
