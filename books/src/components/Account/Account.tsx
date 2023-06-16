import React, { useCallback, useState } from "react";
import styles from "./Account.module.css";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import Title from "../Title/Title";
import Input from "../Input/Input";
import { FormErrors, FormValues } from "../SignIn/SignIn";
import { useDispatch, useSelector } from "react-redux";
import { getsetUser } from "../../store/books/books.selectors";
import { setUser } from "../../store/books/books.reducer";
import { validateFormBeforeSubmit } from "./helpers/validateFormBeforeSubmit";
import showPass from "../../img/eye_visible_hide_hidden_show_icon_145988.png";
import notShow from "../../img/eye_slash_visible_hide_hidden_show_icon_145987.png";
interface AccountProps {
  name: string;
  email: string;
  password: string;
}

const breadcrumbs = [
  {
    link: "/",
  },
];

const Account: React.FC<AccountProps> = ({ password }) => {
  const dispatch = useDispatch();
  const user = useSelector(getsetUser);
  const [values, setValues] = useState(user ?? ({} as FormValues));
  const [errors, setErrors] = useState<FormErrors>({});
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  }, []);
  const [showPassword, setShowPassword] = useState(false);
  const handleClick = () => {
    const errors = validateFormBeforeSubmit(values);

    if (errors) {
      setErrors(errors);
    } else {
      setErrors({});
      localStorage.setItem("user", JSON.stringify(values));
      dispatch(setUser(values));
    }
  };

  const handleCancel = () => {
    setValues(user ?? ({} as FormValues));
  };
  const handleShowPassword = () => {
    setShowPassword(true);
  };
  const handleNotShowPassword = () => {
    setShowPassword(false);
  };
  return (
    <div>
      <BreadCrumbs breadcrumbs={breadcrumbs} />
      <Title title={"Account"}></Title>
      <p className={styles.profile}>Profile</p>
      <div className={styles.profileItems}>
        <Input
          label="Name"
          type="name"
          name="name"
          value={values.name}
          onChange={handleChange}
        ></Input>
        <Input
          label="Email"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        ></Input>
      </div>
      <p className={styles.profile}>Password</p>
      {showPassword ? (
        <div className={styles.pass}>
          <Input
            label="Password"
            type="text"
            name="password"
            value={password}
          ></Input>
          <button onClick={handleNotShowPassword} className={styles.show}>
            <img src={notShow} alt="" className={styles.img} />
          </button>
        </div>
      ) : (
        <div className={styles.pass}>
          <Input
            label="Password"
            type="password"
            name="password"
            value={password}
          ></Input>
          <button onClick={handleShowPassword} className={styles.show}>
            <img src={showPass} alt="" className={styles.img} />
          </button>
        </div>
      )}

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
      <hr className={styles.hr}></hr>
      <div className={styles.button}>
        <button onClick={handleClick} className={styles.save}>
          Save changes
        </button>
        <button className={styles.cancel} onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Account;
