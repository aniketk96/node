const path=require('path')

const separador=path.sep

const filePath=path.join('/content/','subfolder','text.txt')

const nombreArchivo=path.basename(filePath)

module.exports={separador,filePath,nombreArchivo}