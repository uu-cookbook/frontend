import React, { Component } from "react";

import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

class User extends Component {
    render() {
        return (
            <>
                <NavBar />
                <div className="container">
                    <h1> User Account</h1>
                </div>
                <Footer />
            </>
        );
    }
}

export default User;
