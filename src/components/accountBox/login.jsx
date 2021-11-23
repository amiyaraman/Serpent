import React ,{useState} from "react";
import { BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from "./common";
import {Marginer} from "../marginer"
import axios  from "axios";
export function LoginForm(props){

  const [user,setUser]= useState({
    username:"",
    userpassword:""
  })
  const handleChange=e=>{
    const{name,value}=e.target 
    setUser({
      ...user,
      [name]:value
    })
  }
    const LoginUser=()=>{
      console.log(user)
   
    axios.post("http://localhost:9002/login",user).then(
      res=>console.log(res )

    );
    console.log("welocme")
  }

    return (
      <BoxContainer>
        {console.log(user)}
        <FormContainer>
          <Input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            placeholder="RollNumber"
          />
        </FormContainer>
        <Marginer direction="vertical" margin={12} />
        <FormContainer>
          <Input
            type="password"
            name="userpassword"
            value={user.userpassword}
            onChange={handleChange}
            placeholder="PassWord"
          />
        </FormContainer>

        <Marginer direction="vertical" margin={15} />
        <MutedLink href="a">Forget Your Password</MutedLink>
        <Marginer direction="vertical" margin="1.6em " />
        <SubmitButton type="submit" onClick={LoginUser}>
          Signin
        </SubmitButton>
      </BoxContainer>
    );
}