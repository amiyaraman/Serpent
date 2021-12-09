import React from "react";
import { LoginForm } from "./login";
import "./index.css";


export function AccountBox(props) {
  return (
    <div className="BoxContainer1">
      <div className="TopContainer1">
        <div className="BackDrop1" />
        <h2 className="HeaderText1">Welcome To</h2>
        <h2 className="HeaderText1">Serpent</h2>
        <div className="HeaderContainer1">
          <h5 className="SmallText1">
            Please enter the Id and Password provided by the authorities
          </h5>
        </div>
      </div>
      <div className="InnerContainer1">
        <LoginForm />
      </div>
    </div>
  );
}
 