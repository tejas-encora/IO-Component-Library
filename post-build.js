const fs = require('fs');
const path = require('path');

// Copy a file from source to destination
function copyFile(src, dest) {
    fs.copyFileSync(src, dest);
    console.log(`'${path.basename(src)}' has been copied to '${path.dirname(dest)}'`);
}

// Get the paths to the source and destination files
const srcJsFilePath = path.join(__dirname, 'src', 'assets', 'imports.js');
const destJsFilePath = path.join(__dirname, 'dist/mat-lib-test.es.js');

// Read the content of the source
const srcJsFileContent = fs.readFileSync(srcJsFilePath, 'utf-8');

// Read the existing content of the destination

const destJsFileContent = fs.readFileSync(destJsFilePath, 'utf-8');

// Combine the source content with the existing destination content for

const combinedJsContent = `${srcJsFileContent}\n${destJsFileContent}`;

// Write the combined content to the destination

fs.writeFileSync(destJsFilePath, combinedJsContent, 'utf-8');

console.log(`Contents from 'imports.js' have been added to '${destJsFilePath}'`);

// CSS files to be copied
const cssFiles = [
    'theme.css',
    'tokens.css',
    'colors.module.css',
    'typography.module.css',
    'theme.light.css'
];

// Copy 
cssFiles.forEach(file => {
    const srcCssFilePath = path.join(__dirname, 'src', 'assets', file);
    const destCssFilePath = path.join(__dirname, 'dist', file);
    copyFile(srcCssFilePath, destCssFilePath);
});
