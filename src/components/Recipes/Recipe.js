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
                    <h1>Recipe</h1>
                    <div class="card" style={{ width: 400 }}>
                        <img
                            src={photo}
                            class="card-img-top"
                            style={{ width: 200 }}
                            alt=""
                        ></img>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                            <a href="/" class="btn btn-primary">
                                Go somewhere
                            </a>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Recipe;
