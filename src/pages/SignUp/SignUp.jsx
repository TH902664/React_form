// import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./SignUp.css";
import TextField from "src/components/TextField/TextField";
import { useFormik } from "formik";
import { validationSchema } from "./validationSchema";

const initialValues = {
  username: "",
  email: "",
};

const SignUp = () => {
  const formik = useFormik({
    validateOnMount: true,
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log("Submit", JSON.stringify(values, null, 2));
    },
  });

  return (
    <Form className={"signup"} onSubmit={formik.handleSubmit}>
      <h1>Sign Up</h1>

      <TextField
        label="User name"
        placeholder="Please Enter User Name"
        type="text"
        name="username"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.username}
        error={formik.touched.username && formik.errors.username}
      />
      <TextField
        label="Email address"
        placeholder="Please Enter User Name or Email"
        type="email"
        name="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        error={formik.touched.email && formik.errors.email}
      />
      <TextField
        label="Password"
        placeholder="Please Enter Your Password "
        type="password"
        name="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        error={formik.touched.password && formik.errors.password}
      />
      <TextField
        label="Password"
        placeholder="Comfirm Password "
        type="password"
        name="passwordConfirmation"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.passwordConfirmation}
        error={
          formik.touched.passwordConfirmation &&
          formik.errors.passwordConfirmation
        }
      />
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!formik.isValid}>
        Sign Up
      </Button>
      <div>
        Already registered<Link to="/sign-in"> Sign In? </Link>
      </div>
    </Form>
  );
};

export default SignUp;
