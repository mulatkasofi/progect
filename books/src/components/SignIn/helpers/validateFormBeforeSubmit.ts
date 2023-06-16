import { FormErrors, FormValues } from "../SignIn";

export const validateFormBeforeSubmit = (
  values: FormValues,
  defaultUser: Omit<FormValues, "confirmPassword">
): FormErrors | null => {
  const errors: FormErrors = {};

  const { email, password } = values;

  if (email.length < 1) {
    errors.email = "Field required";
  }

  if (password.length < 1) {
    errors.password = "Field required";
  }

  if (password.length > 1 && password.length <= 3) {
    errors.password = "Password length should be more than 4";
  }

  if (email !== defaultUser.email) {
    errors.email = "Not user email";
  }
  if (password !== defaultUser.password) {
    errors.password = "Not user password";
  }
  return Object.keys(errors).length ? errors : null;
};
