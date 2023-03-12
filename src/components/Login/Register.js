import React, { Component } from "react";
import { Formik } from "formik";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            registered: false,
            nicknameTaken: false,
            emailTaken: false,
        };
    }
    render() {
        return (
            <>
                <br />
                <br />
                <h1>Register</h1>
                <br />
                <div>
                    <Formik
                        initialValues={{
                            name: "",
                            lastname: "",
                            nickname: "",
                            email: "",
                            password: "",
                            password_check: "",
                        }}
                        validate={(values) => {
                            const errors = {};
                            if (!values.name) {
                                errors.name = "Required";
                            }
                            if (!values.lastname) {
                                errors.lastname = "Required";
                            }
                            if (!values.nickname) {
                                errors.nickname = "Required";
                            }
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
                            if (!values.password_check) {
                                errors.password_check = "Required";
                            } else if (
                                values.password !== values.password_check
                            ) {
                                errors.password_check =
                                    "Passwords do not match";
                            }
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                setSubmitting(false);
                            }, 1000);
                            fetch(
                                "https://api.uu.vojtechpetrasek.com/v3/register/",
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
                                    if ("status" in data) {
                                        this.setState({ registered: true });
                                        alert("Registered successfully!");
                                        setInterval(() => {
                                            window.location.href = "/login";
                                        }, 500);
                                    } else {
                                        if (data.nickname) {
                                            this.setState({
                                                nicknameTaken: true,
                                            });
                                        }
                                        if (data.email) {
                                            this.setState({ emailTaken: true });
                                        }
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
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <div class="form-group">
                                    <label for="name">Name</label>
                                    <input
                                        name="name"
                                        type="text"
                                        class="form-control"
                                        id="name"
                                        placeholder="Enter your name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name}
                                    ></input>
                                </div>
                                {errors.name && touched.name && errors.name}
                                <div class="form-group">
                                    <label for="lastname">Lastname</label>
                                    <input
                                        name="lastname"
                                        type="text"
                                        class="form-control"
                                        id="lastname"
                                        placeholder="Enter your lastname"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.lastname}
                                    ></input>
                                </div>
                                {errors.lastname &&
                                    touched.lastname &&
                                    errors.lastname}

                                <div class="form-group">
                                    <label for="nickname">Nickname</label>
                                    <input
                                        name="nickname"
                                        type="text"
                                        class="form-control"
                                        id="nickname"
                                        placeholder="Enter your nickname"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.nickname}
                                    ></input>
                                </div>
                                {errors.nickname &&
                                    touched.nickname &&
                                    errors.nickname}
                                {this.state.nicknameTaken &&
                                    "Nickname is already taken"}

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

                                {this.state.emailTaken &&
                                    "Email is already taken"}

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
                                <div class="form-group">
                                    <label for="password_check">Password</label>
                                    <input
                                        name="password_check"
                                        type="password"
                                        class="form-control"
                                        id="password_check"
                                        placeholder="Password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password_check}
                                    ></input>
                                </div>
                                {errors.password_check &&
                                    touched.password_check &&
                                    errors.password_check}
                                <br />
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    class="btn btn-primary"
                                >
                                    Submit
                                </button>
                            </form>
                        )}
                    </Formik>
                </div>
            </>
        );
    }
}

export default Register;
