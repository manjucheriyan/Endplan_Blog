
import React from 'react';
import { withRouter } from 'react-router';
import Navbar from './Navbar';
import {Link} from "react-router-dom";
import swal from 'sweetalert';
import FrontEndController from './FrontEndController';



class DetailedSelectedBlogPage extends React.Component {
  
    state = {
        
        SelectedBlog:this.props.location.SelectedBlog,
        
      }
  
    //   addToCart=()=>{

    //   FrontEndController.addCartDetails(this.state.productObj,this.state.userObj.email)
    //       .then(response=>{
    //         let newProductCount=response.data.cartCount;
    //         this.setState({
    //         productCount: newProductCount
    //       });
    //         swal("Product added to cart");
    //       })
    //       .catch(error=>{
    //         swal("Product Failed to add in cart")
    //       })
    //   }

      callbackFunction = (childData) => {
        this.setState({productsArray: childData})
        }

    
    render() {
        return (             
                <div>
                <Navbar    />

<div>
<h2>{this.state.SelectedBlog.BlogTitle}</h2> 
   <h2>{this.state.SelectedBlog.BlogDescription}</h2> 
</div>

  
 
 </div>

      
   
 );
}
}
export default withRouter(DetailedSelectedBlogPage) ;




