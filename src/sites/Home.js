import React, { Component } from "react";

import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

class Home extends Component {
    render() {
        return (
            <>
                <NavBar />
                <div className="container-fluid row">
                    <h1>Body</h1>
                </div>
                <div>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2119352500143110"
     crossorigin="anonymous"></script>
                </div>
                <Footer />
            </>
        );
    }
}

export default Home;
