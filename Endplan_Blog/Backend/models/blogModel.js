const mongoose = require('mongoose');

const Blogs = mongoose.model('Blogs',{
    BlogTitle:String,
    BlogDescription:String,
    BlogImage:String ,
    MoreBlogContent:String   
})

module.exports ={
    Blogs
}
