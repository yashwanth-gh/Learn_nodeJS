const fs = require('fs');

//? - BLOCKING OPERATION (Synchronous operations)
/* console.log("START");
const response = fs.readFileSync('./contacts.txt','utf-8');
console.log(response);
console.log("END"); */


//? - NON-BLOCKING OPERATION (Asynchronous operations)

/* console.log("START");
fs.readFile('./contacts.txt','utf-8',(error,response)=>{
if(!error)
    console.log(response);
});
console.log("END"); */