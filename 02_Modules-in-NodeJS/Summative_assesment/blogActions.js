// Write your code here
import fs from 'fs';

export const writeBlog = (path, blog) => {
    try {
        fs.writeFileSync(path, blog);
    } catch (error) {
        console.log("Writing Error :: Unable to write Blog");
    }

}
export const publishBlog = (path) => {
    try {
        const data = fs.readFileSync(path, "utf-8");
        return data;
    } catch (error) {
        console.log("Reading Error :: Unable to read Blog");
    }
}
