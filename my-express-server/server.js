const express= require("express");
const app= express();

// The app.get() function routes the HTTP GET Requests to the path which is being 
// specified with the specified callback functions.
app.get("/"  , function(request,response){
    // to print request of  server
    // console.log(request);

    // to send response to server
    response.send("Hi");
});
 
app.get("/contact",function(request,response){
    response.send("Contact me at pahwagautam786@gmail.com");
})

app.get("/about",function(request,response){
    response.send("I am Gautam .I love to travel and explore creative things");
})


// port at which our server listening
app.listen(3000,function(){
    // using callback function , just for verification 
    console.log("Server started at port 3000");
})