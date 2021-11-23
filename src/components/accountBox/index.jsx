import React from "react";
import styled from "styled-components";
import { LoginForm } from "./login";

const BoxContainer = styled.div`
  width: 380px;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0px 0px 17px 3px rgb(15 15 15 / 28%);
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 330px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;
const BackDrop = styled.div`
  width: 158%;
  height: 640px;
  position: absolute;
  flex-direction: column;
  border-radius: 70%;
  top: -350px;
  left: -150px;
  transform: rotate(15deg);
  background: rgb(241, 196, 15);
  background: linear-gradient(
    58deg,
    rgba(241, 196, 15) 20%,
    rgb(241, 196, 15) 100%
  );
`;
const HeaderContainer= styled.div`
width:100%; 
display:flex;
flex-direction:column;

`;
const HeaderText=styled.h2`
font-size:30px;
font-weight:600;
line-height:1.24;
color:#ffffff;
z-index:10;
margin:0;

`;
const SmallText = styled.h5`
color:#fff;
font-weight:500;
font-size: 11px;
z-index:10;
margin:0;
margin-top:10px;
`;
const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
`;
export function AccountBox(props) {
  return (
    <BoxContainer>
      <TopContainer>
        <BackDrop />
        <HeaderText>Welcome To</HeaderText>
        <HeaderText>Serpent</HeaderText>
        <HeaderContainer>
          <SmallText>
            Please enter the Id and Password provided by the authorities
          </SmallText>
        </HeaderContainer>
      </TopContainer>
      <InnerContainer>
        <LoginForm />
      </InnerContainer>
    </BoxContainer>
  );
}
 