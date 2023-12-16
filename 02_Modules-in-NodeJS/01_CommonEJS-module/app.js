// Note:  Please do not change the prewritten code
const mathModule =require("./math");
// import the required module here

const Solution = () => {
    const nums = [1, 2, 3, 4, 5];
    // write your code here to Display the results of the calculations on the console.
    console.log("The sum is",mathModule.sum(nums));
    console.log("The mean is",mathModule.mean(nums));
};
Solution();
module.exports = Solution;
