import React, { Component } from "react";

import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Recipe from "../components/Recipes/Recipe";

class Home extends Component {
    render() {
        return (
            <>
                <NavBar />
                <div className="container-fluid row">
                    <h1>Body</h1>
                    <Recipe />
                </div>
                <div></div>
                <Footer />
            </>
        );
    }
}

export default Home;
