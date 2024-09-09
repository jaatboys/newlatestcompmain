// Compile and execute JavaScript code

// importing packages
const { spawn } = require('child_process');

const jsCompiler = async (req, res) => {
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

	// Create a child process to execute the JavaScript code
	const childProcess = spawn('node', ['-e', code]);

	let output = '';

	// Collect the output from the child process
	childProcess.stdout.on('data', (data) => {
		output += data.toString();
	});

	// Handle any errors that occur during execution
	childProcess.on('error', (error) => {
		console.error(error);
		res.status(500).json({ error: 'An error occurred while executing the code.' });
	});

	// Handle the process exit event
	childProcess.on('exit', (code) => {
		if (code === 0) {
			res.json({ output });
		} else {
			res.status(400).json({ error: 'Code execution failed.' });
		}
	});
};

module.exports = jsCompiler;
