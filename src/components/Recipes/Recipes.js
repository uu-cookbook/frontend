import React, { Component } from "react";

class Recipes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
        };
    }
    componentDidMount = () => {
        console.log("componentDidMount");
    };
    render() {
        return (
            <>
                {this.state.recipes.map((recipe) => {
                    <h1>recipe</h1>;
                })}
            </>
        );
    }
}
