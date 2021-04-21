
import React from "react";
import {Link} from "react-router-dom";



function BlogstylingController({ BlogObject,BlogTitle, BlogDetails}) {
 
  return (
    <div className="StyleBlog">
      <div className="StyleBlog__info">
       <Link to={{ 
                   pathname: "/DetailedSelectedBlogPage",
                   SelectedBlog:BlogObject
                  
                    }}>
        
        <h3 className="Blog__title">
          
          <strong>{BlogObject.BlogTitle}</strong>
        </h3>
        <p className="Blog__Details">
          
      {BlogObject.BlogDescription}
        </p>
        </Link>
        
      
     

    </div></div>
  );
}

export default BlogstylingController;