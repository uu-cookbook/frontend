import React, { Component } from "react";

import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Recipe from "../components/Recipes/Recipe";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
        };
    }

    getRecipes = () => {
        fetch("https://api.uu.vojtechpetrasek.com/v3/recipes", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                this.setState({ recipes: data });
            });
    };

    componentDidMount = () => {
        console.log("componentDidMount");
        this.getRecipes();
    };

    render() {
        return (
            <>
                <NavBar />
                <div className="container-fluid">
                    <h1>Recipes</h1>
                    <div class="row">
                        {this.state.recipes.map((recipe) => {
                            return (
                                <div class="col-md-4">
                                    <>
                                        <Recipe recipe={recipe} />
                                    </>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div></div>
                <Footer />
            </>
        );
    }
}

export default Home;
