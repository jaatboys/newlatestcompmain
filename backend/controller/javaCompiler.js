// Compile and execute Java code

// importing packages
const { exec } = require('child_process');
const path = require('path');
const generateFile = require('../helpers/generatorFuctions.js');
const { fileRemover } = require('../helpers/removerFunctions.js');

const javaCompiler = async (req, res) => {
	try {
		const { code, args, language } = req.body;
		let codeArgs;

		if (!code || !language) {
			return res.status(400).json({ error: 'Code or language cannot be empty.' });
		}
		if (!args) {
			codeArgs = [];
		} else {
			codeArgs = [...args];
		}

		const { filePath, langDir, statusCode } = await generateFile(language, code);
		statusCode ? console.info('temp file created') : console.warn('failed creating temp file');

		if (statusCode !== true) throw new Error('Error while file creation and code execution.');
		else {
			// Compile the Java code
			exec(`javac ${filePath}`, (compileError, compileStdout, compileStderr) => {
				if (compileError) {
					console.error(compileError);

					fileRemover(filePath);

					return res.status(400).json({ output: compileStderr });
				} else {
					// Execute the compiled Java code
					exec(`java -cp ${langDir} ${filePath.substring(filePath.lastIndexOf('M'), filePath.lastIndexOf('.'))}`, async (executeError, executeStdout, executeStderr) => {
						let status;
						if (executeError) {
							console.error(executeError);
							res.status(500).json({ error: 'An error occurred while executing the code.' });
							status = true;
						} else {
							const output = executeStderr || executeStdout;
							res.status(200).json({ output });
							status = true;
						}

						if (status) {
							fileRemover(filePath);
							fileRemover(path.join(langDir, 'Main.class'));
						}
					});
				}
			});
		}
	} catch (error) {
		console.error('Error while processing the request:', error);
		res.status(500).json({ error: 'An error occurred while processing the request.' });
	}
};

module.exports = javaCompiler;
