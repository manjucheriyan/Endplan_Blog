import axios from 'axios';
const baseUrl = "http://localhost:4000";

class FrontEndController{
  

    static getAllBlogs(){
        alert("Inside FrontEndController");
        return axios.get(baseUrl+"/blog/getAllBlogs",{withCredentials:true }
        )
    }
    
    
    static  CreateNewBlog(blogTitle,blogDescription,blogImage,moreBlogContent){
        alert("Inside FrontEndController-creatNewBlog");
        console.log(blogTitle+blogDescription+blogImage+moreBlogContent);
        return axios.post(baseUrl+"/blog/createBlog",{
            blogTitle,
            blogDescription,
            blogImage,
            moreBlogContent
        })
    }
    static login(userID,password){ 
        alert("Inside FrontEndController-login");
        alert(userID+password);      
        return axios.post(baseUrl+"/users/login",{
            userID,
            password
        }, { withCredentials:true })
    }
    static registration(userID,password){
        return axios.post(baseUrl+"/users/register",{
            userID,
            password,
        })
    }
}

export default FrontEndController;