import React, { Component } from "react";

import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import AddRecipeForm from "../components/Recipes/AddRecipeForm";

class AddRecipe extends Component {
    render() {
        return (
            <>
                <NavBar />
                <div className="container">
                    <div class="overflow-y-scroll">
                        <AddRecipeForm />
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

export default AddRecipe;
