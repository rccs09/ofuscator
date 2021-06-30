const FileManager = require('../../helpers/fileManager');


class Prueba{
    async pruebilla(){
    const monthsConf = await FileManager.getConfigJsonFile("./src/config/highOfucate.json");
    console.log(monthsConf);
   }
   
}    


module.exports = Prueba;