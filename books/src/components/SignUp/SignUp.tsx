import React, { useState } from "react";
import { FailureResponse, SignUpUserInfo, signUp } from "../../api/auth/signUp";
import styles from "./SignUp.module.css";
import { Errors, useForm } from "../../hooks/useForm";
import Input from "../Input/Input";
import Title from "../Title/Title";
import Tabs, { TabsItem } from "../Tabs/Tabs";
import ActivateUser from "../../pages/ActivateUserPage/ActivateUser";
import SignUpPage from "../../pages/SignUpPage/SignUpPage";
const initialValues: SignUpUserInfo = {
  username: "",
  password: "",
  email: "",
  confirmpassword: ""
};

const signUpValidation = (values: SignUpUserInfo) => {
  const errors: Errors<SignUpUserInfo> = {};

  if (!values.username) {
    errors.username = "required field";
  }

  if (!values.email) {
    errors.email = "required field";
  }

  if (!values.password) {
    errors.password = "required field";
  }
   if (!values.confirmpassword) {
     errors.confirmpassword = "required field";
   }

  return errors;
};

const SignUp: React.FC = () => {
  const [showInfoMessage, setSHowInfoMessage] = useState(false);

  const { values, errors, setErrors, handleChange, handleSubmit } =
    useForm<SignUpUserInfo>({
      initialValues,
      validation: signUpValidation,
      onSubmit: (values) => {
        signUp(values).then((res) => {
          console.log(res);

          if ((res as FailureResponse).errors) {
            setErrors(
              Object.fromEntries(
                Object.entries((res as FailureResponse).errors).map(
                  ([name, error]) => [name, error.join(",")]
                )
              )
            );
          } else {
            setErrors({});
            setSHowInfoMessage(true);
          }
        });
      },
    });

  if (showInfoMessage) {
    return <h2>message sent successfully, check your email</h2>;
  }



  return (
    <>
      <Input
        label="Name"
        id="username"
        name="username"
        value={values.username}
        error={!!errors.username}
        description={!!errors.username ? errors.username : ""}
        type="text"
        onChange={handleChange}
        placeholder="Your name"
      />
      <Input
        label="Email"
        id="email"
        name="email"
        value={values.email}
        error={!!errors.email}
        description={!!errors.email ? errors.email : ""}
        type="text"
        onChange={handleChange}
        placeholder="Your email"
      />
      <Input
        label="Password"
        id="password"
        name="password"
        value={values.password}
        error={!!errors.password}
        description={!!errors.password ? errors.password : ""}
        type="password"
        onChange={handleChange}
        placeholder="Your password"
      />
      <Input
        label="Confirm password"
        id="confirmpassword"
        name="confirmpassword"
        value={values.confirmpassword}
        error={!!errors.confirmpassword}
        description={!!errors.confirmpassword ? errors.confirmpassword : ""}
        type="confirmpassword"
        onChange={handleChange}
        placeholder="Confirm password"
      />
      <button type="button" onClick={handleSubmit} className={styles.button}>
        Submit
      </button>
    </>
  );
};

export default SignUp;
