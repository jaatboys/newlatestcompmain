const fs = require('fs');
const path = require('path');

const fileRemover = (filePath) => {
    try {
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
            console.log('Successfully deleted:', path.basename(filePath));
        } else {
            console.warn(`File not found: ${filePath}`);
        }
    } catch (err) {
        console.error(`Error while deleting file: ${err}`);
    }
};

const folderRemover = (folderPath) => {
    try {
        fs.rmSync(folderPath, { recursive: true, force: true });
        console.log('Successfully deleted:', path.basename(folderPath));
    } catch (err) {
        console.error('Error while deleting folder:', err);
    }
};

module.exports = { fileRemover, folderRemover };
