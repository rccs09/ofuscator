### How ofuscate
- En el archivo index.js condfigurar:
    - filePathIn -> Path donde pondremos el JS que se quiere ofuscar.
    - filePathOut -> Path donde la aplicacion pondrá el JS ofuscado.
    - Como parametro del metodo "ofuscate" debemo indicar el nivel de ofuscacion, este puede ser:
        - Constants.LOW
        - Constants.MID
        - Constants.HIGH

- Para ejecutar, se ejecuta desde CLI
    - Instalar el proyecto (solo se ejecuta la primera vez para descargar los modulos)
        npm install
    - Ejecutar la aplicacion
        node ./index.js