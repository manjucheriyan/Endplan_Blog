import axios from 'axios';
const baseUrl = "http://localhost:4000";

class FrontEndController{
  

    static getAllBlogs(){
        alert("Inside FrontEndController");
        return axios.get(baseUrl+"/blog/getAllBlogs",{withCredentials:true }
        )
    }
    
    
    
}

export default FrontEndController;