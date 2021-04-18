const https = require("https");
const fs = require('fs');


let url ="https://jsonplaceholder.typicode.com/posts";
https.get(url, res=> {

    let body ='';

    res.on('data', data => {
        body += data;
    })
    res.on('end', ()=> fs.writeFile("./result/posts.json",body,err => {
        if(err) throw err;
        console.log("written")
    } ));
})
