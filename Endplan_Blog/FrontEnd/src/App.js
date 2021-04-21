
import React from 'react';
import Home from './Home';
// import UserHome from './UserHome';
// import Login from './Login';
//import Payment from './Payment';
import './App.css';
import './Home.css';
// import Register from './Register';
// import Product from './Product';
 import DetailedSelectedBlogPage from './DetailedSelectedBlogPage';


import{
  BrowserRouter,
  Switch,
  Route,
  Link
}
from 'react-router-dom';
class App extends React.Component {
  render(){
  return (
   <div className="App">
    <BrowserRouter>
      
      <div>
        <Switch>
          <Route path="/" exact={true}>
              <Home />
          </Route>
          
          <Route path="/DetailedSelectedBlogPage" >
              <DetailedSelectedBlogPage />
          </Route>
          
          
          
         
         
         
          
          
          
          
          
        </Switch>
      </div>
    </BrowserRouter>
   </div>
  );
}
}
export default App;
