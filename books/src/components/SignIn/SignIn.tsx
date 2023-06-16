import React, { useCallback, useEffect, useState } from "react";
import Input from "../Input/Input";
import styles from "./SignIn.module.css";
import { validateFormBeforeSubmit } from "./helpers/validateFormBeforeSubmit";
import { useDispatch, useSelector } from "react-redux";
import { getsetUser } from "../../store/books/books.selectors";
import { setUser } from "../../store/books/books.reducer";
import Tabs, { TabsItem } from "../Tabs/Tabs";
import Account from "../Account/Account";
import { NavLink } from "react-router-dom";

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
export const defaultUser = {
  name: "Sofi",
  email: "1@gmail.com",
  password: "1111",
  confirmPassword: "1111",
};

const inputClassnames = { wrapper: styles.inputWrapper };

const SignIn = () => {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const dispatch = useDispatch();
  const user = useSelector(getsetUser);
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user") as string);
    const errors = validateFormBeforeSubmit(values, user);

    if (errors) {
      setErrors(errors);
    } else {
      // console.log(values);
      setErrors({});
      setValues(initialValues);
      dispatch(setUser(user));
    }
  };

  useEffect(() => {
    const userFromStorage = localStorage.getItem("user");
    if (userFromStorage === null) {
      localStorage.setItem("user", JSON.stringify(defaultUser));
    }
  }, []);
  console.log(user);

  const [activeTab, setActiveTab] = useState("all");
  const handleTabClick = (tab: TabsItem) => {
    setActiveTab(tab.value);
  };
  const tabs: TabsItem[] = [{ label: "Sign in", value: "SignIn" }];

  return (
    <div>
      {user ? (
        <Account
          name={user.name}
          email={user.email}
          password={user.password}
        ></Account>
      ) : (
        <div className={styles.form}>
          <div className={styles.tabs}>
            <Tabs
              tabs={tabs}
              activeTab={""}
              onTabClick={handleTabClick}
              classname={styles.a1}
              classname2={styles.li2}
            ></Tabs>
          </div>

          <div className={styles.formWrapper}>
            <form>
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
              <Input
                classNames={inputClassnames}
                label="Password"
                type="password"
                name="password"
                onChange={handleChange}
                value={values.password}
                error={!!errors.password}
                helpText={errors.password}
                placeholder="Your password"
              />
              <NavLink to={"/Password"} style={{ textDecoration: "none" ,color:'black'}} >
                <p>Forgot password ?</p>
              </NavLink>
              <button
                className={styles.button}
                type="submit"
                onClick={handleSubmit}
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignIn;
