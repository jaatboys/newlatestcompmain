// Compile and execute Go language code

// importing packages
const { exec } = require('child_process');
const generateFile = require('../helpers/generatorFuctions.js');
const { fileRemover } = require('../helpers/removerFunctions.js');

const goCompiler = async (req, res) => {
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

		// Sanitize the code input
		const sanitizedCode = code.trim();
		// console.log('sanitized code is: ', sanitizedCode);

		const { filePath, statusCode } = await generateFile(language, sanitizedCode);
		statusCode ? console.info('temp file created') : console.warn('failed creating temp file');

		if (statusCode !== true) throw new Error('Error while file creation and code execution.');
		else {
			// Set the PATH environment variable explicitly for ubuntu only
			//FIXME - uncomment below line when uploading to ec2
			//process.env.PATH = `${process.env.PATH}:/usr/local/go/bin`;
			// Compile the PHP code
			exec(`go run ${filePath}`, async (executionErr, stdOut, stdErr) => {
				if (executionErr) {
					console.error('error while execution', executionErr);
					fileRemover(filePath);
					res.status(400).json({ output: executionErr });
				} else {
					let output;
					stdOut ? (output = stdOut) : (output = stdErr);
					res.status(200).json({ output });
					fileRemover(filePath);
				}
			});
		}
	} catch (error) {
		console.error('Error while processing the request:', error);
		res.status(500).json({ error: 'An error occurred while processing the request.' });
	}
};

module.exports = goCompiler;
