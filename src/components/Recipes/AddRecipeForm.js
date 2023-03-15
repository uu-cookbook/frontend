import React, { Component, useEffect } from "react";
import { Formik } from "formik";

class AddRecipeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipeImage: null,
        };
    }

    setImage = (e) => {
        e.preventDefault();
        console.log("set image");
        this.setState({
            recipeImage: URL.createObjectURL(e.target.files[0]),
        });
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
                                        <img
                                            src={this.state.recipeImage}
                                            style={{ width: 200 }}
                                        ></img>
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
                                    <textarea class="form-control"></textarea>
                                </div>
                                <br />

                                <div class="form-group">
                                    <label for="cookGuide" class="form-label">
                                        <strong>Cook guide</strong>
                                    </label>
                                    <textarea
                                        class="form-control"
                                        id="cookGuide"
                                        rows="3"
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
