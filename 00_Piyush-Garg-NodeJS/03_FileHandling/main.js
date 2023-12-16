const fs = require('fs');

// console.log(fs);

//? creating file synchronously return is possible
// const something = fs.writeFileSync('contact.txt','+91-9876543210');
// console.log(something);

//? creating file asynchronously, does not return anything
// fs.writeFile('contactAsync.txt','+91-9123456780',(error)=>{console.log(error)})

//? reading a file
//? synchronously
// const result = fs.readFileSync('./contact.txt',"utf-8");
// console.log(result);

//? reading asynchronously 
//? does not return any thing but expects a callback
/*
fs.readFile('./contactAsync.txt',"utf-8",(error,result)=>{
    if(error){
        console.log("ERROR: ",error);
    }else{
        console.log(result);
    }
})
*/

//? append file with a string(it should always be a string)
// fs.appendFileSync("./info.txt",`${Date.now()} Hello World!\n`);

//? copy a file as anothe file
// fs.copyFileSync('./info.txt','./infoCopy.txt')

//? delete a file 
// fs.unlinkSync('./infoCopy.txt')

//? see the stats of a file
// console.log(fs.statSync('./contact.txt'))

//? make a dir and files inside it
//! delete the newDir and newDir2 before running below commands or error will be thrown
// fs.mkdirSync('newDir')
// fs.mkdirSync('newDir2/file.txt',{recursive:true})
