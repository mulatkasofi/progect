import React, { useCallback, useEffect, useState } from "react";
import Input from "../Input/Input";
import styles from "./Password.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getsetUser } from "../../store/books/books.selectors";
import { setUser } from "../../store/books/books.reducer";
import Tabs, { TabsItem } from "../Tabs/Tabs";
import Account from "../Account/Account";
import { NavLink } from "react-router-dom";
import { FormErrors, FormValues } from "../SignIn/SignIn";
import { validateFormBeforeSubmit } from "./helpers/validateFormBeforeSubmit";
const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const inputClassnames = { wrapper: styles.inputWrapper };
const Password = () => {
      const [values, setValues] = useState<FormValues>(initialValues);
       const [errors, setErrors] = useState<FormErrors>({});
        const [enter,setEnter] = useState(false)
          const [succsesEnter, setSuccsesEnter] = useState(false);
        const dispatch=useDispatch()
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  }, []);
  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user") as string);
    const errors = validateFormBeforeSubmit(values, user);
    if (errors) {
      setErrors(errors);
    } else {
      setErrors({});
      setEnter(true)
    }
  };
  const handleSetPassword = () => {
     const user = JSON.parse(localStorage.getItem("user") as string);
    const errors = validateFormBeforeSubmit(values,user);

    if (errors) {
      setErrors(errors);
    } else {
      setErrors({});
      localStorage.setItem("user", JSON.stringify(values));
      dispatch(setUser(values));
      setSuccsesEnter(true)
    }
  };
  return (
    <div className={styles.form}>
      {enter ? (
        <>
          <p className={styles.title}>new password</p>

          <div className={styles.formWrapper}>
            <div className={styles.newPassword}>
              <Input
                label="New password"
                type="password"
                name="password"
                error={!!errors.password}
                helpText={errors.password}
                onChange={handleChange}
              ></Input>
              <Input
                label="Confirm new password"
                type="password"
                name="confirmPassword"
                onChange={handleChange}
              ></Input>
            </div>
            {succsesEnter ? (
              <NavLink to={"/signIn"} style={{ textDecoration: "none" }}>
                <button className={styles.button}>
                  Return to Sign In page
                </button>
              </NavLink>
            ) : (
              <button className={styles.button} onClick={handleSetPassword}>
                Set password
              </button>
            )}
          </div>
        </>
      ) : (
        <>
          <p className={styles.title}>reset password</p>

          <div className={styles.formWrapper}>
            <Input
              label="Name"
              type="name"
              name="name"
              value={values.name}
              error={!!errors.name}
              helpText={errors.name}
              placeholder="Your name"
              onChange={handleChange}
            ></Input>
            <Input
              classNames={inputClassnames}
              label="Email"
              type="email"
              name="email"
              onChange={handleChange}
              value={values.email}
              error={!!errors.email}
              helpText={errors.email}
              placeholder="Your email"
            />

            <button className={styles.button} onClick={handleReset}>
              Reset
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Password;
