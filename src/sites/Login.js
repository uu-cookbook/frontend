import React, { Component } from "react";

import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Login from "../components/Login/Login";

class LoginPage extends Component {
    render() {
        return (
            <>
                <NavBar />
                <div className="container">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm"></div>
                            <div class="col-sm">
                                <Login />
                            </div>
                            <div class="col-sm"></div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

export default LoginPage;
