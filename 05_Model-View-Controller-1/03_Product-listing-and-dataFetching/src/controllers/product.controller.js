// Please don't change the pre-written code
// Import the necessary modules here
import {products} from '../assets/products.js'
export default class ProductController {
  getProducts = (req, res) => {
    // Write your code here
    res.render("product",{products:products});
  };
}
