import React, { Component } from "react";

import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Register from "../components/Login/Register";

class RegisterPage extends Component {
    render() {
        return (
            <>
                <NavBar />
                <div className="container">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm"></div>
                            <div class="col-sm">
                                <Register />
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

export default RegisterPage;
