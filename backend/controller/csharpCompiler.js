// Compile and execute C# code

// importing packages
const { exec } = require('child_process');
const generateFile = require('../helpers/generatorFuctions.js');
const { fileRemover } = require('../helpers/removerFunctions.js');

const csharpCompiler = async (req, res) => {
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
			//process.env.PATH = `${process.env.PATH}:/usr/bin`;
			// Compile the program using the C++ compiler (e.g., g++)
			exec(`mcs ${filePath} -o ${filePath}.exe`, async (compileErr) => {
				if (compileErr) {
					console.error(`Compilation error: ${compileErr}`);

					fileRemover(filePath);

					res.status(400).json({ error: 'Compilation error' });
				} else {
					// Execute the compiled program and capture the output
					exec(`mono ${filePath}.exe`, async (execErr, stdout, stderr) => {
						let status;
						if (execErr) {
							console.error(`Execution error: ${execErr}`);
							staus = true;

							res.status(500).json({ error: 'Execution error' });
						} else {
							console.log(`Program output: ${stdout}`);
							staus = true;

							res.status(200).json({ output: stdout });
						}
						if (status) {
							fileRemover(filePath);
							fileRemover(`${filePath}.exe`);
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

module.exports = csharpCompiler;
