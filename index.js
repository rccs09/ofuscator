const Constants = require('./src/config/constants');
const Ofuscator = require('./src/helpers/ofuscator');

const filePathIn = "./src/resources/fileIn/";
const filePathOut = "./src/resources/fileOut/";
const ofuscator = new Ofuscator(filePathIn, filePathOut);
ofuscator.ofuscate("prueba.js", Constants.HIGH);


/*
//const Prueba = require('./src/resources/fileIn/prueba');
const Prueba = require('./src/resources/fileOut/prueba');
prueba = new Prueba();
prueba.pruebilla();
*/