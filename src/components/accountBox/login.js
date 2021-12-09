import React ,{useState} from "react";
import {Marginer} from "../marginer"
import axios  from "axios";
import "./common.css"
import {useNavigate} from 'react-router-dom';
export function LoginForm(props){

  const [user,setUser]= useState({
    username:"",
    userpassword:""
  })
  const navigate=useNavigate();

  const handleChange=(e)=>{
 
    const{name,value}=e.target 
    setUser((prevstate)=>{
      return {
        ...prevstate,
        [name]: value,
      };
    });
  };
    const LoginUser=()=>{
      console.log(user)
   var resMessg;
    axios.post("http://localhost:9002/login",user).then((res)=> {
        alert(res.data.message)
        if(res.data.message==="Login Success"){
            navigate('/about')

        }


        }
    );
    console.log(resMessg)
  }

    return (
      <div className="BoxContainer">
        {console.log(user)}
        <form className="FormContainer">
          <input
            className="Input"
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            placeholder="RollNumber"
          />
        </form>
        <Marginer direction="vertical" margin={12} />
        <form className="FormContainer">
          <input
            className="Input"
            type="password"
            name="userpassword"
            value={user.userpassword}
            onChange={handleChange}
            placeholder="PassWord"
          />
        </form>

        <Marginer direction="vertical" margin={15} />
        <a className="MutedLink" href="a">
          Forget Your Password
        </a>
        <Marginer direction="vertical" margin="1.6em " />
        <button className="SubmitButton" type="submit" onClick={LoginUser}>
          Signin
        </button>
      </div>
    );
}