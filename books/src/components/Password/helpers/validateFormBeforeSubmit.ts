import { FormErrors, FormValues } from "../../SignIn/SignIn";

export const validateFormBeforeSubmit = (
  values: FormValues,
   defaultUser: Omit<FormValues, "confirmPassword">
): FormErrors | null => {
  const errors: FormErrors = {};

  const { password, confirmPassword,email,name } = values;
  if (email !== defaultUser.email) {
    errors.email = "Not user email";
  }
  if (name !== defaultUser.name) {
    errors.name = "Not user name";
  }
  if (password !== confirmPassword) {
    errors.password = "Password field and confirm password field aren't equal";
  }

  return Object.keys(errors).length ? errors : null;
};
