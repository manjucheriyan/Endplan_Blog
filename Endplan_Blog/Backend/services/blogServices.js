
const {Blogs}= require("../models/blogModel");


function createNewBlog(BlogTitle,BlogDescription,BlogImage,MoreBlogContent){
    console.log("BlogServices - createNewBlog");
    return Blogs.findOne({
        BlogTitle
    })
    .then (obj=>{
        if(obj){
            return{
                statusCode:400,
                message:"Blog on this topic  already exists"
            }
        }
        const newBlog= new Blogs({
            BlogTitle,BlogDescription,BlogImage,MoreBlogContent
        });
        newBlog.save();

        return {
            statusCode:200,
            message:"Blog created successfully",
            
            
        }
    })
    //data[username]={username,password,acno,history:[],balance:0};
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