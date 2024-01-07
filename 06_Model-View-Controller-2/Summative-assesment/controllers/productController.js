// Please don't change the pre-written code
// Import the necessary modules here

import ProductModel from "../models/ProductModel.js";

const productModel = new ProductModel();
export default class productController {
  index = (req, res) => {
    res.render("index", { products: productModel.getAllProducts() });
  };

  search = (req, res) => {
    // Write your code here
    const data = productModel.searchResult(req.body?.name)
    // console.log(data)
    return res.render('searchResults.ejs',{products:data});
  };
}
