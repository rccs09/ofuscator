const fs = require("fs");
const JavaScriptObfuscator = require('javascript-obfuscator');
const FileManager = require('../helpers/fileManager');
const Constants = require('../config/constants');

class Ofuscator{
    filePathIn;
    filePathOut;
    constructor(filePathIn, filePathOut){
        this.filePathIn = filePathIn;
        this.filePathOut = filePathOut;
    }

    async ofuscate(fileName, method){
        const fOut = this.filePathOut;
        const ofuscateMethod = await FileManager.getConfigJsonFile("./src/config/" + method);
        await fs.readFile(this.filePathIn + fileName, "UTF-8", function(err, data) {
            if (err) {
                throw err;
            }
            
            var obfuscationResult = JavaScriptObfuscator.obfuscate(data, ofuscateMethod);
            //var obfuscationResult = JavaScriptObfuscator.obfuscate(data);
            fs.writeFile(fOut + fileName, obfuscationResult.getObfuscatedCode() , function(err) {
                if(err) {
                    return console.log(err);
                }
                console.log("The file was saved!");
            });
        });
        
   }
   
}    


module.exports = Ofuscator;