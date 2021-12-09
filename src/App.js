import {AccountBox} from "./components/accountBox";
import React from "react";
import "./App.css"
import HomePage from "./components/homePage/HomePage.js";
import Registerpage from "./components/accountBox/registerpage"
import ProfileScreen from "./components/profileSection/profile_screen"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";


function App() {
    return (
        <div className="anything">

            <Router>
                <div className="nav-bar">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/register">register</Link>
                    <Link to="/profile">Profile</Link>
                </div>
                <Routes>
                    <Route path="/" element={<AccountBox/>}></Route>
                    <Route path="/about" element={<HomePage/>}></Route>
                    <Route path="/register" element={<Registerpage/>}></Route>
                    <Route path="/profile" element={<ProfileScreen/>}></Route>

                </Routes>
            </Router>

            {/* <AccountBox />
      <HomePage></HomePage> */}
        </div>
    );
}

export default App;
