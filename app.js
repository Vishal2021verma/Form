
//  Installed module 
// "dependencies": {
//     "body-parser": "^1.20.0",
//     "ejs": "^3.1.6",
//     "express": "^4.17.3",
//     "mongodb": "^4.5.0"
//   }
const express = require('express');

const app = express();

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/from.html");
});

app.listen(8080, () => {
    console.log("Server is running at port: 8080");
});