import React, { useEffect, useState, params } from "react";
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";
import './login.css';
import Home from "./home";
import AddFood from "./AddFood";
import Food from "./Food";

export default function Login(props) {
    let [username, setusername] = useState("")
    let [password, setpassword] = useState("")
    let [result, setresult] = useState("")
    let info=[username,password];
    let [userInfo, setUserInfo] = useState("")    
   
    const navigate = useNavigate(); 
    
    function handlesetusername(event) {
        setusername((username = event.target.value))
    }

    function handlepassword(event) {
        setpassword((password = event.target.value));
        console.log(info)
    }
    
    function login(event){
        if  ((userInfo) == true){
        
            return(<Food/>);
        }
        else{}
    }
//  $("#login-button").click(function(event){
// 		 event.preventDefault();
	 
// 	 $('form').fadeOut(500);
// 	 $('.wrapper').addClass('form-success');
// });
   //الكلام الي بالبرتقالي هو نفسه الي بجافا الازرق الي فوق
    function handleSubmit(event) {
        event.preventDefault();
        axios({
            method: "get",
            url: "api/user/login",
            params: { username: username , password: password}
        })
        .then((res => {
            console.log(res.data);
            if(res.data == "authenticated"){
               
               localStorage.setItem("logined","yes")
            //    navigate("/")
             window.open("/","_self")
            }
            else{
                alert(res.data)
            }
        
        }))

    
    }
    

    return (
        <form class="form">
            <h1>LogIn</h1>
           

                <input
                    type="text"
                    class="textbox"
                    value={username}
                    name="username" 
                    placeholder=" username"
                    onChange={handlesetusername}
                />
                < br/>  < br/>  < br/>

                <input id="form_signin"
                    type="text"
                    class="textbox"
                    value={password}
                    name="password"
                    placeholder=" password"
                    onChange={handlepassword}
                />
                <br />
                {/* <input className='sub' type="submit"
                    value="submit"
                    

                /> */}
                <Link to="/"><button onClick={handleSubmit} className='btn'>Login</button></Link>
                <Link to="/User"><button className='btn'>singUp</button></Link>
                
            </form>

        
    )
    
}
