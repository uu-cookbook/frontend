import React, { Component } from "react";
import { Formik } from "formik";

class Register extends Component {
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
                                errors.nickname = "Required";
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
                                        id="name"
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
                            </form>
                        )}
                    </Formik>
                </div>
            </>
        );
    }
}

export default Register;
