import React, { Component } from "react";
import { Formik } from "formik";

class AddRecipeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipeImage: null,
            ingredients: [],
        };
    }

    setImage = (e) => {
        e.preventDefault();
        console.log("set image");
        this.setState({
            recipeImage: URL.createObjectURL(e.target.files[0]),
        });
    };

    addIngredient = (e) => {
        e.preventDefault();
        this.setState({
            ingredients: [
                ...this.state.ingredients,
                { ingredientName: "", ingredientAmount: "" },
            ],
        });
    };

    deleteIngredient = (e, ingredient) => {
        console.log(ingredient, typeof ingredient);
        e.preventDefault();
        console.log("filter");
        var tmp = this.state.ingredients.filter((_, i) => i !== ingredient);
        console.log(tmp);
        this.setState({ ingredients: tmp });
        console.log(this.state.ingredients);
    };

    render() {
        return (
            <div>
                <br />
                <br />
                <h1>Add recipe</h1>
                <br />
                <Formik
                    initialValues={{ email: "", password: "" }}
                    validate={(values) => {
                        const errors = {};
                        if (!values.recipeName) {
                            errors.recipeName = "Required";
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            setSubmitting(false);
                        }, 400);
                        fetch(
                            "https://api.uu.vojtechpetrasek.com/v3/add_recipe/",
                            {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify(values),
                            }
                        )
                            .then((response) => response.json())
                            .then((data) => {
                                console.log(data);
                            });
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        /* and other goodies */
                    }) => (
                        <>
                            {this.state.recipeImage && (
                                <>
                                    <div class="justify-content-md-center">
                                        <image
                                            src={this.state.recipeImage}
                                            style={{ width: 200 }}
                                            alt="recipe image"
                                        ></image>
                                    </div>
                                </>
                            )}
                            <form onSubmit={handleSubmit}>
                                <div class="form-group">
                                    <label for="recipeName">
                                        <strong>Recipe name</strong>
                                    </label>
                                    <input
                                        name="recipeName"
                                        type="text"
                                        class="form-control"
                                        id="recipeName"
                                        placeholder="name of recipe"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.recipeName}
                                    ></input>
                                </div>
                                {errors.recipeName &&
                                    touched.recipeName &&
                                    errors.recipeName}
                                <br />
                                <div class="form-group">
                                    <label
                                        for="Recipe brief description"
                                        class="form-label"
                                    >
                                        <strong>
                                            Recipe brief description
                                        </strong>
                                    </label>
                                    <textarea
                                        class="form-control"
                                        id="Recipe brief description"
                                        rows="3"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.recipeBriefDescription}
                                        placeholder="Shortly describe your recipe"
                                    ></textarea>
                                </div>

                                <div class="form-group">
                                    <label>
                                        <strong>Recipe image</strong>
                                    </label>
                                    <div class="Recipe image">
                                        <input
                                            type="file"
                                            name="files[]"
                                            accept="image/*"
                                            class="custom-file-input form-control"
                                            id="customFile"
                                            alt="recipe image"
                                            onChange={this.setImage}
                                        ></input>
                                    </div>
                                </div>
                                <br />
                                <div class="form-group">
                                    <label
                                        for="recipeIngredients"
                                        class="form-label"
                                    >
                                        <strong>Recipe ingredients</strong>
                                    </label>
                                    {this.state.ingredients.map((_, item) => (
                                        <div
                                            key={item}
                                            class="input-group mb-3"
                                        >
                                            <span class="input-group-text">
                                                {item}
                                            </span>
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="ingredient name"
                                                aria-label="ingredient name"
                                                aria-describedby="basic-addon2"
                                                onChange={(e) => {
                                                    const tmp =
                                                        this.state.ingredients;
                                                    tmp[item].ingredientName =
                                                        e.target.value;
                                                    this.setState({
                                                        ingredients: tmp,
                                                    });
                                                    console.log(
                                                        this.state.ingredients
                                                    );
                                                }}
                                                value={
                                                    this.state.ingredients[item]
                                                        .ingredientName
                                                }
                                            ></input>
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="ingredient amount"
                                                aria-label="ingredient amount"
                                                aria-describedby="basic-addon2"
                                            ></input>
                                            <button
                                                class="btn btn-danger"
                                                type="button"
                                                id={item}
                                                onClick={(e) =>
                                                    this.deleteIngredient(
                                                        e,
                                                        item
                                                    )
                                                }
                                            >
                                                <i class="bi bi-x-circle"></i>
                                            </button>
                                        </div>
                                    ))}
                                    <div class="input-group">
                                        <button
                                            class="btn btn-success"
                                            type="button"
                                            onClick={this.addIngredient}
                                        >
                                            <i class="bi bi-plus-circle"></i>{" "}
                                            Add ingredient
                                        </button>
                                    </div>
                                </div>
                                <br />

                                <div class="form-group">
                                    <label for="cookGuide" class="form-label">
                                        <strong>Cook guide</strong>
                                    </label>
                                    <textarea
                                        class="form-control"
                                        id="cookGuide"
                                        rows="6"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.cookGuide}
                                        placeholder="describe how to cook your recipe"
                                    ></textarea>
                                </div>
                                <br />
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    class="btn btn-primary"
                                >
                                    Add recipe
                                </button>
                            </form>
                        </>
                    )}
                </Formik>
            </div>
        );
    }
}

export default AddRecipeForm;
