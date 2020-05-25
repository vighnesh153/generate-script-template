#!/usr/bin/env node

if (process.argv.length <= 2) {
    throw new Error('No template name provided.');
}

if (process.argv.length === 3) {
    if (process.argv[2] === '-a' || process.argv[2] === '--available') {
        const { getAllTemplateNames } = require('./index');
        getAllTemplateNames()
            .then(names => {
                console.log('List of available templates:');
                names.forEach(name => {
                    const nameParts = name.toString().split('.');
                    nameParts.pop();
                    console.log(`* ${nameParts.join('.')}`);
                })
            })
            .catch(e => {
                console.log(e);
            });
    } else {
        throw new Error('No file name provided.');
    }
} else {
    const templateStart = process.argv[2];
    const templateEnd = process.argv.length === 5 ? process.argv[3] : "";
    const fileName = process.argv.length === 5 ? process.argv[4] : process.argv[3];

    const { getScriptContent, writeContentToFile } = require('./index');

    getScriptContent(templateStart, templateEnd)
        .then(scriptContent => {
            writeContentToFile(scriptContent, fileName);
            console.log(`${fileName} initialized with template content.`);
        })
        .catch(e => {
            console.log(e);
        });
}
