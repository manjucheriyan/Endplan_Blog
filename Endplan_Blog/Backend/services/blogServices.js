
const {Blogs}= require("../models/blogModel");


function createNewBlog(BlogTitle,BlogDescription){
    console.log("BlogServices - createNewBlog");
    console.log(BlogTitle);
    console.log(BlogDescription);
    return Blogs.findOne({
        BlogTitle
    })
    .then (Blogs=>{
        if(Blogs){
            return{
                statusCode:400,
                message:"Blog already exists"
            }
        }
        const newBlog= new Blogs({
            BlogTitle,
            BlogDescription
        });
        newBlog.save();

        return {
            statusCode:200,
            message:"Blog created successfully"
        }
    })
}


function getAllBlogs(){
    console.log("in service-blog");
    return Blogs.find({}) 
    .then (Blogs=>{
            return{
                statusCode:200,
                Blogs:Blogs
            }
    })
}






module.exports={
  
    createNewBlog:createNewBlog,
    getAllBlogs:getAllBlogs
    }