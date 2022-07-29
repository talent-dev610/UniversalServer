const express = require("express");

var app = express();
app.use(express.json());
app.use("/testmode",(req, res) =>{
   console.log(req.body);
   res.json({
    req+"hello"
});
})

app.get("/apple-app-site-association",function(req,res){
    res.sendFile(__dirname+'/apple-app-site-association')
});
app.listen(80,()=>{
    console.log('server running on port ${PORT}')
});
