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
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
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
