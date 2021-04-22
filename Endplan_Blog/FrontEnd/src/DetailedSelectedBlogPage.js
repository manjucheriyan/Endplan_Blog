
import React from 'react';
import { withRouter } from 'react-router';
import Navbar from './Navbar';
import FrontEndController from './FrontEndController';
//import './DetailedSelectedBlogPage.css';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

import StylingDetailedSelectedBlogPage from './StylingDetailedSelectedBlogPage';

class DetailedSelectedBlogPage extends React.Component {
  
    state = {
        
        BlogObject:this.props.location.BlogObject,
        
      }
  
    
      

    
    render() {
        return (             
        <div>
        <Navbar    />

       <StylingDetailedSelectedBlogPage BlogObject={this.state.BlogObject }  />
 
 </div>
 );
}
}
export default withRouter(DetailedSelectedBlogPage) ;




