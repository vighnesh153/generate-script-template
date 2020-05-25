const fs = require('fs');
const path = require('path');

const axios = require('axios');

const templateNamesUrl = "https://api.github.com/repos/vighnesh153/single-page-templates/contents/"
const getAllTemplateNames = async () => {
    const response = await axios(templateNamesUrl);
    const reposInfo = response.data;
    return reposInfo
        .map(repo => repo.name)
        .filter(name => name.toString() !== "README.md");
};

const urlPart1 = "https://raw.githubusercontent.com/vighnesh153/single-page-templates/master/";
const getScriptContent = async (startsWith, endsWith="") => {
    const templateNames = await getAllTemplateNames();
    const matchingNames = templateNames.filter(name => {
        const nameParts = name.toString().split('.');
        nameParts.pop();
        const nameWithoutExtension = nameParts.join(".");
        return nameWithoutExtension.startsWith(startsWith) &&
            nameWithoutExtension.endsWith(endsWith)
    });
    if (matchingNames.length === 0) {
        throw new Error('No matching template found.');
    }
    if (matchingNames.length !== 1) {
        throw new Error('Ambiguous template name. Matches with: ' +
            matchingNames.join(", "));
    }
    const scriptUrl = urlPart1 + templateNames[0];
    const scriptResponse = await axios(scriptUrl);
    return scriptResponse.data.toString();
};

const writeContentToFile = (content, fileName) => {
    fs.writeFileSync(path.join(require('os').homedir(), fileName), content);
};

module.exports = { getAllTemplateNames, getScriptContent, writeContentToFile };
