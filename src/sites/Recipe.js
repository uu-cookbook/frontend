import React, { Component } from "react";

import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

class Recipe extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount = () => {
        console.log("componentDidMount");
        console.log(this.id);
    };

    render() {
        return (
            <>
                <NavBar />
                <div>
                    {console.log(this.props)}
                    {console.log(this.props.id)}

                    {this.props.id ? (
                        <>
                            <h1>recipe</h1>
                            <h1>id: {this.props.id}</h1>
                        </>
                    ) : (
                        <h1>recipe not found</h1>
                    )}
                    {this.props.token ? (
                        <h1>token: {this.props.token}</h1>
                    ) : (
                        <h1>token not found</h1>
                    )}
                </div>
                <Footer />
            </>
        );
    }
}

export default Recipe;
