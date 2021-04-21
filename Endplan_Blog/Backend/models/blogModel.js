const mongoose = require('mongoose');

const Blogs = mongoose.model('Blogs',{
    BlogTitle:String,
    BlogDescription:String,    
})

module.exports ={
    Blogs
}
