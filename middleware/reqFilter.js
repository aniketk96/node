module.exports=reqFilter=(req,res,next)=>{
    
    if(req.params.age<18){
        res.send("<h2>Age Restricted</h2>")
    }else{
        next()
    }

}