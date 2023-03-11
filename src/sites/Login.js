import React, { Component } from "react";

import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Basic from "../components/Login/Login";

class LoginPage extends Component {
    render() {
        return (
            <>
                <NavBar />
                <div className="container row">
                    <Basic />
                </div>
                <Footer />
            </>
        );
    }
}

export default LoginPage;
