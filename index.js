const http = require("http");
const fs = require("fs");
const PORT = 5050;
const hostName = "127.0.0.1";

const server = http.createServer((req, res) => {
const readData=(statsusCode,fileLocation)=>{
 fs.readFile(fileLocation,(err,data)=>{
   if(err){
    console.log(err);
   }
   else{
    res.writeHead(statsusCode, { "Content-Type": "text/html" });
    res.write(data);
    res.end();
   }
 })   
 
}
if(req.url=='/'){
    readData(200,'./views/index.html');
}
else if(req.url =='/about'){
    readData(200,'./views/about.html')
}
else if(req.url =='/contact'){
    readData(200,'./views/contact.html')
}
else{
    readData(404,'./views/error.html');
}
});
server.listen(PORT, hostName, () => {
  console.log(
    `The server is sucessfully connected ! http://${hostName}:${PORT}`
  );
});
