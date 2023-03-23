import React, { Component } from "react";
import photo from "../../images/sonic.png";

class Recipe extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <>
                <div>
                    <div class="card" style={{ width: 400 }}>
                        <img
                            src={photo}
                            class="card-img-top"
                            style={{ width: 200 }}
                            alt=""
                        ></img>
                        <div class="card-body">
                            <h5 class="card-title">{this.props.recipe.name}</h5>
                            <p class="card-text">
                                {this.props.recipe.description}
                            </p>
                            <p class="card-text">
                                {this.props.recipe.ingredients}
                            </p>
                            <a href="/" class="btn btn-primary">
                                Open recipe
                            </a>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Recipe;
