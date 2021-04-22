var express = require('express');
var router = express.Router();
var blogServices = require('../services/blogServices');


function authMiddleware(req,res,next){
  console.log("Inside authMiddleware");
  if(req.session.currentUser){
    next();
  }
  else{    
    res.staus(401).send({message:"Please login"});
  }
}
/* GET users listing. */

router.post('/createBlog',function(req,res){
  console.log("BlogRouter-createBlogBlogmn "); 
  //console.log(blogTitle+blogDescription+BlogImage+MoreBlogContent);
 let blogTitle=req.body.blogTitle;
 let blogDescription=req.body.blogDescription;
 let BlogImage=req.body.BlogImage;
 let MoreBlogContent=req.body.MoreBlogContent;
 console.log(blogTitle+blogDescription+BlogImage+MoreBlogContent);
 blogServices.createNewBlog(blogTitle,blogDescription,BlogImage,MoreBlogContent)
  .then(data=>{
    res.status(data.statusCode).send({message:data.message,blogs:data.Blogs});
  }) 
})

router.get('/getAllBlogs', function(req, res) {
  console.log("Router - getAllBlogs"); 
 // let productCategory=req.body.productCategory;
  blogServices.getAllBlogs()
  .then(data=>{
    res.status(data.statusCode).send({message:data.message,Blogs:data.Blogs});
  });
});




module.exports = router;