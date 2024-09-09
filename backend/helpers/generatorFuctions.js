const fs = require('fs');
const path = require('path');
const { v4: uuid } = require('uuid');

// Define directories
const tempDir = path.join(__dirname, '../temp');
const dirs = {
    typescript: path.join(tempDir, 'ts'),
    java: path.join(tempDir, 'java'),
    cpp: path.join(tempDir, 'cpp'),
    c: path.join(tempDir, 'c'),
    csharp: path.join(tempDir, 'csharp'),
    python: path.join(tempDir, 'python'),
    php: path.join(tempDir, 'php'),
    go: path.join(tempDir, 'go'),
    r: path.join(tempDir, 'r')
};

const generateFile = (language, content) => {
    if (!fs.existsSync(tempDir)) {
        try {
            fs.mkdirSync(tempDir, { recursive: true });
        } catch (err) {
            console.error(`Error while creating temp folder: ${err}`);
            throw new Error('Error while creating temp folder.');
        }
    }

    const jobId = uuid();
    let filename;
    let langDir;

    switch (language) {
        case 'java':
            langDir = dirs.java;
            filename = 'Main.java';
            break;
        case 'go':
            langDir = dirs.go;
            filename = `${jobId}.go`;
            break;
        case 'python':
            langDir = dirs.python;
            filename = `${jobId}.py`;
            break;
        case 'c':
            langDir = dirs.c;
            filename = `${jobId}.c`;
            break;
        case 'cpp':
            langDir = dirs.cpp;
            filename = `${jobId}.cpp`;
            break;
        case 'typescript':
            langDir = dirs.typescript;
            filename = `${jobId}.ts`;
            break;
        case 'csharp':
            langDir = dirs.csharp;
            filename = `${jobId}.cs`;
            break;
        case 'php':
            langDir = dirs.php;
            filename = `${jobId}.php`;
            break;
        case 'r':
            langDir = dirs.r;
            filename = `${jobId}.R`;
            break;
        default:
            langDir = tempDir;
            filename = `${jobId}.${language}`;
            break;
    }

    const filePath = path.join(langDir, filename);

    try {
        if (!fs.existsSync(langDir)) {
            fs.mkdirSync(langDir, { recursive: true });
        }
        fs.writeFileSync(filePath, content);
        console.log(`Generated file path: ${filePath}`); // Log file path
        return { filePath, langDir, statusCode: true };
    } catch (error) {
        console.error('Error in fileGenerator: ', error);
        return { filePath, langDir, statusCode: false };
    }
};

module.exports = generateFile;
