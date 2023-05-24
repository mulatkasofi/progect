import React, { useCallback, useEffect, useRef, useState } from "react";

import Input from "../Input/Input";

import styles from "./SignUp.module.css";
import { validateFormBeforeSubmit } from "./helpers/validateFormBeforeSubmit";
import { useDidUpdate } from "../../hooks/useDidUpdate";
import { useDispatch, useSelector } from "react-redux";
import { getAddUser, getSlice } from "../../store/books/books.selectors";
import { addUser } from "../../store/books/books.reducer";
import BookOne from "../Card/Card";

export interface FormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
}

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const defaultUser = {
  name: "Sofi",
  email: "1@gmail.com",
  password: "1111",
};
const inputClassnames = { wrapper: styles.inputWrapper };

const SignUp = () => {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const dispatch = useDispatch();
  const user = useSelector(getAddUser);
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const errors = validateFormBeforeSubmit(values,defaultUser);

    if (errors) {
      setErrors(errors);
    } else {
      console.log(values);
      

      setErrors({});
      setValues(initialValues);
    }
  };

  useEffect(() => {
    const userFromStorage = localStorage.getItem("user");
    if (userFromStorage===null) {
     localStorage.setItem("user",JSON.stringify(defaultUser));
    }
  }, []);

  

  return (
    <div className={styles.formWrapper}>
      <form onSubmit={handleSubmit}>
        <Input
          classNames={inputClassnames}
          label="Name"
          type="text"
          name="name"
          onChange={handleChange}
          value={values.name}
          error={!!errors.name}
          helpText={errors.name}
        />
        <Input
          classNames={inputClassnames}
          label="Email"
          type="email"
          name="email"
          onChange={handleChange}
          value={values.email}
          error={!!errors.email}
          helpText={errors.email}
        />
        <Input
          classNames={inputClassnames}
          label="Password"
          type="password"
          name="password"
          onChange={handleChange}
          value={values.password}
          error={!!errors.password}
          helpText={errors.password}
        />
        <Input
          classNames={inputClassnames}
          label="Confirm password"
          type="password"
          name="confirmPassword"
          onChange={handleChange}
          value={values.confirmPassword}
        />
        <button className={styles.button} type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
