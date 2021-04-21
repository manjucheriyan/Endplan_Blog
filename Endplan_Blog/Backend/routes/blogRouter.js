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
  console.log("BlogRouter-createBlogBlog "); 
 let BlogTitle=req.body.blogTitle;
 let BlogDescription=req.body.blogDescription;
//  let productCategory=req.body.productCategory;
//  let productCount=req.body.productCount;
 blogServices.createNewBlog(BlogTitle,BlogDescription)
  .then(data=>{
    res.status(data.statusCode).send({message:data.message});
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