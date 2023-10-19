const fs = require('fs');
const path = require('path');

// Get the paths to the source and destination files
const srcFilePath = path.join(__dirname, 'src', 'assets', 'imports.js');
const destFilePath = path.join(__dirname, 'dist/mat-lib-test.es.js');

// Read the content of the source file
const srcFileContent = fs.readFileSync(srcFilePath, 'utf-8');

// Read the existing content of the destination file
const destFileContent = fs.readFileSync(destFilePath, 'utf-8');

// Combine the source content with the existing destination content
const combinedContent = `${srcFileContent}\n${destFileContent}`;

// Write the combined content to the destination file
fs.writeFileSync(destFilePath, combinedContent, 'utf-8');

console.log(`Contents from 'imports.js' have been added to the top of '${destFilePath}'`);
