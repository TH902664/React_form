import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Header from "src/components/Header/Header";
import TextField from "../../components/TextField/TextField";
import "./Login.css";
import { useFormik } from "formik";
import { validationSchema } from "../SignUp/validationSchema";

const initialValues = {
  username: "",
  email: "",
};

export default function Login() {
  const formik = useFormik({
    validateOnMount: true,
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log("Submit", JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <Header />

      <Form className={"login"} onSubmit={formik.handleSubmit}>
        <h1>Sign In</h1>
        <TextField
          label="Email address"
          placeholder="Please enter your email"
          type="email"
          name="username"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
          error={formik.touched.username && formik.errors.username}
        />

        <TextField
          label="Password"
          placeholder="Your password"
          type="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          error={formik.touched.password && formik.errors.password}
        />

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="remember password" />
        </Form.Group>

        <Button className={"bt-Submit"} variant="primary" type="submit">
          Submit
        </Button>

        <Link to="/forgot-password">Forgot Password?</Link>

        <div>
          Don't have an Account ?<Link to="/sign-up">Create an Account </Link>
        </div>
      </Form>
    </>
  );
}
