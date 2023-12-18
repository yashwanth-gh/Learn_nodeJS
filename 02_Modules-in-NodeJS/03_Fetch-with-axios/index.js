// Please do not change the prewritten code
// import axios from "axios";
const axios = require("axios");
const Solution = async () => {
  // Write your code here
  // try {
  await axios.get(
    "https://api.codingninjas.com/api/v3/event_tags"
  )
    .then(res => {
      console.log(res.data);
    })
  // } 
  // catch (error) {
  //   if (error.response) {
  //     console.log(error.response.data);
  //     console.log(error.response.status);
  //     console.log(error.response.header);
  //   } else if (error.request) {
  //     console.log(error.request);
  //   } else {
  //     console.log(error.message);
  //   }
  // }
};
Solution();

module.exports = Solution;
