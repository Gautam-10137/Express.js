const express=require("express")
// install body-parser to parse the data
const bodyParser=require("body-parser")
// body-parser is a piece of express middleware that reads a
//  form's input and stores it as a javascript object accessible through req.body 
const app=express();
const port=3000;

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(request,response){
    // __dirname gives the path of current directory (we can't always directly access file like in cloud )
    response.sendFile(__dirname+"/index.html");
})
// to post after we click calculate
app.post("/",function(req,res){
      const num1=Number(req.body.num1);
      const num2=Number(req.body.num2);
      const result =num1+num2;
    
    res.send("The result of the calculation is "+result);
})
app.listen(port,()=>{
    console.log("server start at port 3000")
})    