// Please do not change the prewritten code
// const axios = require("axios");

import axios from "axios";

const Solution = async () => {
    // Write your code here
    try {
        const data = await axios.get(
            "https://api.codingninjas.com/api/v3/event_tags"
        )
            .then(res => {
                console.log(res);
            })
    }
    catch (error) {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.header);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log(error.message);
        }
    }

};

Solution();

// module.exports = Solution;

export default Solution;
