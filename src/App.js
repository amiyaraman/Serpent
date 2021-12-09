import {AccountBox} from "./components/accountBox";
import React from "react";
import "./App.css"
import HomePage from "./components/homePage/HomePage.js";
import Registerpage from "./components/accountBox/registerpage"
import ProfileScreen from "./components/profileSection/profile_screen"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";


function App() {
    return (
        <>

        <Router>
            <div className="nav-bar">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/register">Register</Link>
                <Link to="/profile">Profile</Link>
            </div>
            <div className="anything">
                <Routes>

                    <Route path="/" element={<AccountBox/>}>
                    </Route>
                    <Route path="/about" element={<HomePage/>}></Route>
                    <Route path="/register" element={<Registerpage/>}></Route>
                    <Route path="/profile" element={<ProfileScreen/>}></Route>

                </Routes>
            </div>

        </Router>

        {/* <AccountBox />
      <HomePage></HomePage> */
        }
        </>
    )
        ;
}

export default App;
