
// importing packages
const { exec } = require('child_process');
const generateFile = require('../helpers/generatorFuctions.js');
const { fileRemover } = require('../helpers/removerFunctions.js');

const rCompiler = async (req, res) => {
	try {
		const { code, args, language } = req.body;
		let codeArgs;

		if (!code || !language) {
			res.status(400).json({ error: 'Code or language cannot be empty.' });
		}
		if (!args) {
			codeArgs = [];
		} else {
			codeArgs = [...args];
		}

		const { filePath, statusCode } = await generateFile(language, code);
		statusCode ? console.info('temp file created') : console.warn('failed creating temp file');

		if (statusCode !== true) throw new Error('Error while file creation and code execution.');
		else {
			// Compile the PHP code
			exec(`Rscript ${filePath}`, async (executionErr, stdOut, stdErr) => {
				let status;
				if (executionErr) {
					console.error('error while execution', executionErr);
					status = true;
					res.status(400).json({ output: executionErr });
				} else {
					let output;
					stdOut ? (output = stdOut) : (output = stdErr);
					status = true;
					res.status(200).json({ output });
				}
				fileRemover(filePath);
			});
		}
	} catch (error) {
		console.error('Error while processing the request:', error);
		res.status(500).json({ error: 'An error occurred while processing the request.' });
	}
};

module.exports = rCompiler;
