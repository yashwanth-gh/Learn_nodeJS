// Please don't change the pre-written code
// Import the necessary modules here

import { updateUsers, users } from "./user.model.js";

export const renderUpdateForm = (req, res) => {
  res.render("update-form", { user: users[0] });
};

// Write your code here
export const updateUser =  (req, res) => {
  const updatedUser = updateUsers(req.body);
  // console.log(updatedUser);
  // console.log(users[0]);
  res.render("update-form", { user: updatedUser });
}