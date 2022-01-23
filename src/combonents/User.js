import React,{useEffect , useState} from "react";
import axios from "axios"
import { Link } from "react-router-dom";
import App from "../App";
function User(){
  
let [username,setusername] = useState("")
let[ Email, setEmail] = useState("")
let[password, setpassword] = useState("")

function handlesetusername(event) {
    setusername((username = event.target.value));
  
  }
  function handlesetEmail(event) {
    setEmail((Email = event.target.value));
  }
  function handlepassword(event) {
    setpassword((password = event.target.value));
  }
  let mydata={"username":username, "email":Email,"password":password} //الكلام الي بالبرتغالي هو نفسه الي بجافا الازرق الي فوق
  function handleSubmit(event) {
    <Link to="/"></Link>
      alert("Welcom jzakallah kher")
      
    event.preventDefault();
    axios({
        method:"post",
        url:"https://humanlyapp.herokuapp.com/api/user/add",
        data:mydata
        
    })
  }

return(
<main style={{}}>
<form onSubmit={handleSubmit}>
  <input 
    type="text"
    value={username} required
    name="username"
    class="textbox"
    placeholder=" username"
    onChange={handlesetusername}
  />
  <br />  <br />
  <input
    type="text"
    class="textbox"
    value={Email} required
    name="Email"
    placeholder=" Email"
    onChange={handlesetEmail}
  />
  <br />  <br />
  <input
    placeholder="password"
    type="text"
    class="textbox"
    value={password} required
    name="password"
    onChange={handlepassword} />
  <br /> <br />
  <br />
  <input type="submit"
   value="submit" />
   {" "} <Link to="/Home"><button>Home page</button></Link>

   <br/>
</form>
</main>
);
}
export default User;