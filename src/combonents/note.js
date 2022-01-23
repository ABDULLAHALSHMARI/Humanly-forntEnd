// import React, { useEffect, useState } from 'react'
// import { Outlet, NavLink, useSearchParams } from "react-router-dom";
// import axios from "axios"

// export default function Services() {

//     username[username,setusername]= useState("")
//     password[password,setpassword]= useState("")

//    function componentDidMount() {
//         axios.get("/api/food")
//          .then(response => {
//          const food=  response.data
//          this.setState({food});
//         });
//       }
    
// <form action="action_page.php" method="post">
//   <div class="imgcontainer">
//     <img src="img_avatar2.png" alt="Avatar" class="avatar">
//   </div>

//   <div class="container">
//     <label for="username"><b>Username</b></label>
//     <input type="text" placeholder="Enter Username" name="username" required>

//     <label for="psw"><b>Password</b></label>
//     <input type="password" placeholder="Enter Password" name="psw" required>

//     <button type="submit">Login</button>
//     <label>
//       <input type="checkbox" checked="checked" name="remember"> Remember me
//     </label>
//   </div>

//   <div class="container" style="background-color:#f1f1f1">
//     <button type="button" class="cancelbtn">Cancel</button>
//     <span class="psw">Forgot <a href="#">password?</a></span>
//   </div>
// </form>

// // import React, { useState ,useEffect} from 'react';
// // import axios from 'axios';
// // export default function Login(props) {
// //     // props.handleLogin()
// const axios = require('axios');



// res.data.args; // { answer: 42 }
// //     // let user = getLogin();
// //     let [userInfo, setUserInfo] = useState("")
// //     let[password,setpassword] = useState("")
// //     const handleSubmit = (event) => {
// //         event.preventDefault();
// //         let user = getUser(userInfo.user, userInfo.password);

// //         function handlelogin(event) {
// //             event.preventDefault();
// //             axios({
// //                 method:"get",
// //                 url:"api/user/usersId",
// //                 data:mydata
// //             })
// //           }
        
// //         if (username) {
// //             props.handleLogin()
// //         }
// //      else{ 
// //      document.getElementById("warning").innerHTML="The password or username is incorrect, try again"}
// //      }
    
// //      const handleChange = (event) => {
// //         const attributeToChange = event.target.user;
// //         const newValue = event.target.value;
// //         const updatedUser = { ...userInfo };
// //         updatedUser[attributeToChange] = newValue;
// //         console.log("updated", updatedUser);
// //         setUserInfo(updatedUser)

// //     }

// //     useEffect(() => {
// //         axios.get("/api/Users")
// //             .then(response => {
// //                 console.log(response.data)
// //                 setMyServices(response.data)
// //             })
// //         return () => { }
// //     }, [])

 //     return (
 //         <main style={{ padding: "1rem 0" ,backgroundColor:'beige' }}>
 // <hr/><hr/><h1>LOGIN Page</h1> <hr/><hr/>
 //             <div style={{ display: "flex" }}>

 //   /              {/* --login form-- */}
                
 //                 <form onSubmit={handleSubmit}>

 //                     <label for="fname">UserName</label><br />
 //                     <input type="text" onChange={handleChange} id="fname" name="username" placeholder="username.."></input><br />
 //                     <label for="lname">password
 //     </label><br />
 //                     <input type="password" onChange={handleChange} id="lname" name="password" placeholder="password.."></input><br />

 //                     <button type="submit" class="button" style={{ verticalAlign: 'middle', }}><span>Submit </span></button>
 //                     <h3 id="warning"></h3>
 //                 </form>
 //             </div>
           
 //         </main>
 //     );
 // }




