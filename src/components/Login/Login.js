import React, { Component } from "react";
import { Formik } from "formik";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <br />
                <br />
                <h1>Login</h1>
                <br />
                <Formik
                    initialValues={{ email: "", password: "" }}
                    validate={(values) => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = "Required";
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                values.email
                            )
                        ) {
                            errors.email = "Invalid email address";
                        }
                        if (!values.password) {
                            errors.password = "Required";
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            setSubmitting(false);
                        }, 400);
                        fetch("https://api.uu.vojtechpetrasek.com/v3/login/", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(values),
                        })
                            .then((response) => response.json())
                            .then((data) => {
                                console.log(data);
                                if (data.success === true) {
                                    localStorage.setItem("token", data.token);
                                    console.log("Success:", data);
                                    setInterval(() => {
                                        window.location.href = "/";
                                    }, 500);
                                } else if (data.message === "User not found") {
                                    alert("User not found");
                                } else if (data.message === "Wrong password") {
                                    alert("Wrong password");
                                }
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
                        <form onSubmit={handleSubmit}>
                            <div class="form-group">
                                <label for="email">Email address</label>
                                <input
                                    name="email"
                                    type="email"
                                    class="form-control"
                                    id="email"
                                    placeholder="Enter email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                ></input>
                            </div>
                            {errors.email && touched.email && errors.email}
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input
                                    name="password"
                                    type="password"
                                    class="form-control"
                                    id="password"
                                    placeholder="Password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                ></input>
                            </div>
                            {errors.password &&
                                touched.password &&
                                errors.password}
                            <br />
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                class="btn btn-primary"
                            >
                                Submit
                            </button>
                            <div class="text-center">
                                <p>
                                    Not a member?{" "}
                                    <a href="register">Register</a>
                                </p>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        );
    }
}

export default Login;
