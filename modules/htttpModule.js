const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Welcome to my nodeJS page...Testing')
    }
    if(req.url==='/about'){
        res.end('About my web page.........')
    }

})

module.exports={server}