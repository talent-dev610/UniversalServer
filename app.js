const express = require("express");

var app = express();
app.use(express.json());
app.use("/testmode",(req, res) =>{
   var data = req.body;
   console.log(data);
   res.json({
    "index1":"1",
    "index2":"2"
   }
   )
})

app.get("/apple-app-site-association",function(req,res){
    res.sendFile(__dirname+'/apple-app-site-association')
});
app.listen(80,()=>{
    console.log('server running on port ${PORT}')
});
