import React ,{useState} from "react";
import {useNavigate} from 'react-router-dom';
import "./registerpage.css"

function Registerpage() {
    return(
        <div className="wrapper">
            <h2>Student Detail</h2>
            <form action="#">
                <div className="input-box">
                    <input type="text" placeholder="First Name" required/>
                </div>
                <div className="input-box">
                    <input type="text" placeholder="Middle Name" required/>
                </div>
                <div className="input-box">
                    <input type="text" placeholder="Last Name" required/>
                </div>
                <div className="input-box">
                    <input type="text" placeholder="E-Mail ID" required/>
                </div>
                <div className="input-box">
                    <input type="number" placeholder="University Roll Number" required/>
                </div>
                <div className="input-box">
                    <input type="number" placeholder="Mobile Number" required/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Create password" required/>
                </div>
                <div className="input-box">
                    <input type="text" placeholder="Father's Name" required/>
                </div>
                <div className="input-box">
                    <input type="text" placeholder="Mother's Name" required/>
                </div>
                <div className="input-box button">
                    <input type="Submit" value="Register Now"/>
                </div>
            </form>
        </div>);
}
export default Registerpage;