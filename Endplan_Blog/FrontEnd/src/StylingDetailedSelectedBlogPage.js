
import React from "react";
import {Link} from "react-router-dom";


function StylingDetailedSelectedBlogPage({ BlogObject}) {
 
  return (
    <div className="StyleSelectedBlog" >
      <div className="StyleSelectedBlog__info">
      
      <img src={BlogObject.BlogImage} alt='images' 
        width="200" height="200" />
        <h1 className="SelectedBlog__title">
         <strong>{BlogObject.BlogTitle}</strong>
        </h1>
        <p className="SelectedBlog__Details">
         {BlogObject.BlogDescription}
        </p>
        
        <p className="SelectedBlog__MoreContent">
         {BlogObject.MoreBlogContent}
        </p>
        
     
    </div></div>
  );
}

export default StylingDetailedSelectedBlogPage;