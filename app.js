//const print =require('./print')
//print.print()

//info about current user
//const client=require('./modules/osModule')
//console.log(client.usuario.user)

//path module 
//const ruta=require('./modules/pathModule')
//console.log('separador:'+ruta.separador)
//console.log('ruta del archivo: '+ruta.filePath)
//console.log('nombre del archivo: '+ruta.nombreArchivo)

//http module
//const server=require('./modules/htttpModule')
//server.server.listen(5000)

//Promise
/* let a=1;
const print=()=>{
    return new Promise((resolve,reject)=>{
        if(a==0){
           resolve("good")
        }else{
            reject("error")
        }
    })
}
print()
.then(()=>{console.log("Promise working!!")})
.catch((err)=>{console.log(err)})*/

//Event Emitter
/*const EventEmitter=require('events')
const customEmitter=new EventEmitter()
customEmitter.on('response',()=>{
    console.log("Data Recived")
})
customEmitter.emit('response')*/

//Express
/*const express=require('express')
const app=express()
app.listen(5000)
app.get('/info',(req,res)=>{
    res.send("hello from express")
})*/

const {readFileSync,writeFileSync}=require('fs')
const path=require('path')
var name=process.argv[2]+'.txt'
var filePath=path.join(__dirname,'content')
var fileName=path.join(filePath,name)
let files=new Promise((resolve,reject)=>{
setTimeout(() => {
writeFileSync(fileName,'holaaa desde codigo')
resolve('ok')
}, 5000);
})
.then((data)=>{
console.log(data)
})
.catch((err)=>{
console.log(err)
})