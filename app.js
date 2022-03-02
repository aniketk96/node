//const print =require('./print')
//print.print()

//info about current user
//const client=require('./modules/osModule')
//console.log(client.usuario.user)

//path module 
const ruta=require('./modules/pathModule')
console.log('separador:'+ruta.separador)
console.log('ruta del archivo: '+ruta.filePath)
console.log('nombre del archivo: '+ruta.nombreArchivo)