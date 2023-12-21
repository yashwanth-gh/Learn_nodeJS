// Write your code here
import { writeBlog,publishBlog } from "./blogActions.js";
import readline from 'readline';
import path from "path";

const intrface = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

intrface.question("Enter your blog: ",(blog)=>{
    const absPath = path.resolve("myblog.txt");
    writeBlog(absPath,blog);
    // console.log(publishBlog(absPath));
})