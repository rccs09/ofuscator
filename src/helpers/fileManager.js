const fs = require('fs');
const loadJsonFile = require('load-json-file');

const getConfigJsonFile = (jsonPath) => {
    return new Promise((resolve, reject) => {
        loadJsonFile(jsonPath)
        .then(jsonTest => {
            resolve(jsonTest)
        }).catch(error => {
            reject(error);
        });
    });
}

module.exports = {
    getConfigJsonFile
};