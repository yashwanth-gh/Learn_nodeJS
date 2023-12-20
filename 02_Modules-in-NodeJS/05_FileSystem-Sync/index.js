// Please don't change the pre-written code
// Import the necessary modules here
const fs = require('fs');

const Solution = () => {
  // Write your code here
  try{
    fs.writeFileSync("notes.txt","The world has enough coders");
    
  }catch(err){
    console.log("ERROR :: Unable to create file");
  }
  try {
    const data = fs.readFileSync("notes.txt","utf-8");
    console.log(data);
    fs.appendFileSync("notes.txt"," BE A CODING NINJA!");
    const dataAfterAppend = fs.readFileSync("notes.txt","utf-8");
    console.log(dataAfterAppend);
  } catch (error) {
    console.log("ERROR :: unable to read and update file")
  }

};
Solution();
module.exports = Solution;
