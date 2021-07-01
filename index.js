const Constants = require('./src/config/constants');
const Ofuscator = require('./src/helpers/ofuscator');


const filePathIn = "./src/resources/fileIn/";
const filePathOut = "./src/resources/fileOut/";
const ofuscator = new Ofuscator(filePathIn, filePathOut);
//ofuscator.ofuscate("prueba.js", Constants.HIGH);
//ofuscator.ofuscate("prueba.js", Constants.LOW);
//ofuscator.ofuscate("prueba.js", Constants.MID);



console.log("inicia la prueba");
//const Prueba = require('./src/resources/fileIn/prueba');
const Prueba = require('./src/resources/fileOut/prueba.js');
prueba = new Prueba();
prueba.pruebilla();
prueba.otraPrueba10();


