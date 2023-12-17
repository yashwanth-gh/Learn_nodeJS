// Note:  Please do not change the prewritten code
const mathModule =require("./math");
// import the required module here

const Solution = () => {
    const nums = [1, 2, 3, 4, 5];
    // write your code here to Display the results of the calculations on the console.
    const sum = mathModule.sum(nums);
    const mean = mathModule.mean(nums);
    console.log(`The sum is ${sum}.`);
    console.log(`The mean is ${mean}.`);
};
Solution();
module.exports = Solution;
