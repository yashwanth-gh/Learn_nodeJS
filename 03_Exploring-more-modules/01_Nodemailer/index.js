// Please don't change the pre-written code
// Import the necessary modules here
import nodemailer from "nodemailer";
import readline from "readline";

const Solution = () => {
  // Write your code here

  // let userMail = "";    //^ user entered email address stored in this variable

    const intface = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    intface.question("please enter your mail ", (userMail) => {
      const mailContent = {
        from: "codingninjas2k16@gmail.com",
        to: userMail,
        subject: "Coding Ninjas",
        text: "The world has enough coders; be a coding ninja!",
      };
 
  
//^ -------- This is the function which sends email..----------

      const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "codingninjas2k16@gmail.com",
          pass: "slwvvlczduktvhdj",
        },
      });


      try {
        transport.sendMail(mailContent)
        .then(()=>{
          console.log(`Success: Email sent to ${userMail}`);
        })
      } catch (error) {
        console.log("There was an error in sending Mail!");
      }

      intface.close();
    });
};

export default Solution;
