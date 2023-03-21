import React, { Component } from "react";
import { useParams } from "react-router-dom";

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
            </div>
        );
    }
}

export default Recipe;
