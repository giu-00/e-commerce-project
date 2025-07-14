import React, { useState } from "react";
import "../styles/register.css";
import Button from "../components/Button";
import { addUser } from "../services/addUser";
import { ToastContainer, toast } from "react-toastify";

const Register: React.FC = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [fieldErrors, setFieldErrors] = useState({
    name: false,
    email: false,
    password: false,
    repeatPassword: false,
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    toast.dismiss();

    if (values.password == values.repeatPassword) {
      try {
        await addUser(values.email, {
          name: values.name,
          email: values.email,
          password: values.password,
        });
        toast.success("User created successfully!");
        setValues({
          name: "",
          email: "",
          password: "",
          repeatPassword: "",
        });
        setFieldErrors({
          name: false,
          email: false,
          password: false,
          repeatPassword: false,
        });
      } catch (error: any) {
        const isEmailError =
          error.message && error.message.toLowerCase().includes("email");
        setFieldErrors({
          name: false,
          email: isEmailError,
          password: false,
          repeatPassword: false,
        });
        setValues({
          name: "",
          email: "",
          password: "",
          repeatPassword: "",
        });
        toast.error(error.message || "There was an error creating the user.");
      }
    } else {
      setFieldErrors({
        ...fieldErrors,
        password: true,
        repeatPassword: true,
      });
      toast.error("The passwords don't match, try again");
      setValues({
        ...values,
        password: "",
        repeatPassword: "",
      });
    }
  };

  return (
    <div className="register-container">
      <ToastContainer position="top-right" />
      <form
        className="register-form"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <h1 className="register-title">
          Register to the website to start buying!
        </h1>
        <div className="input-group">
          <div className="form-input">
            <label htmlFor="name" className="label">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Insert your name"
              autoComplete="given-name"
              className={`input ${fieldErrors.name ? "error" : ""}`}
              value={values.name}
              onChange={onChange}
            />
          </div>
          <div className="form-input">
            <label htmlFor="email" className="label">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Insert e-mail"
              autoComplete="email"
              className={`input ${fieldErrors.email ? "error" : ""}`}
              value={values.email}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="input-group">
          <div className="form-input">
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Insert password"
              autoComplete="current-password"
              className={`input ${fieldErrors.password ? "error" : ""}`}
              value={values.password}
              onChange={onChange}
            />
          </div>
          <div className="form-input">
            <label htmlFor="repeat-password" className="label">
              Repeat Password
            </label>
            <input
              type="password"
              name="repeatPassword"
              id="repeat-password"
              placeholder="Insert password again"
              autoComplete="off"
              className={`input ${fieldErrors.repeatPassword ? "error" : ""}`}
              value={values.repeatPassword}
              onChange={onChange}
            />
          </div>
        </div>
        <Button text="Register" className="login-button" type="submit" />
      </form>
    </div>
  );
};

export default Register;
