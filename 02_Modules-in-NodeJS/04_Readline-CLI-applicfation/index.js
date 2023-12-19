// Import required module
const readline = require('readline');
const Solution = () => {
  // Write your code here
  const interfacex = readline.createInterface({
    input : process.stdin,
    output: process.stdout
  }) 

  interfacex.question("Enter the first number: ",(num1)=>{
    interfacex.question("Enter the second number: ",(num2)=>{
      const maxi = Math.max(num1,num2);
      console.log(`The maximum of the two numbers is: ${maxi}`)
    })

  })
};

Solution();
module.exports = Solution;
