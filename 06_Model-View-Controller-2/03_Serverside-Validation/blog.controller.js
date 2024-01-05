// Please don't change the pre-written code

export const validateBlog = (req, res) => {
  // Write your code here
  let errors = [];

  const { title, description, image } = req.body;
  if (!title) {
    errors.push("The title field should not be empty")
  }

  if (title.length < 3) {
    errors.push("The title field should contain at least 3 characters")
  }

  if (!description) {
    errors.push("The description field should not be empty")
  }

  if (description.length < 10) {
    errors.push("The description field should contain at least 10 characters")
  }


  try {
    const validUrl = new URL(image);
  } catch (error) {
    errors.push("The image URL provided should be a valid URL")
  }

  if (errors.length > 0) {
    // console.log(errors)
    return res.render("addBlog", { errors: errors, success: false });
  }

  res.status(201).render("addBlog", { errors: null, success: true });
};
export const renderBlogForm = (req, res) => {
  res.render("addBlog", { errors: null, success: false });
};
