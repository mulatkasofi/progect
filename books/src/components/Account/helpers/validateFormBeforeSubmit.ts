import { FormErrors, FormValues } from "../../SignIn/SignIn";

export const validateFormBeforeSubmit = (
  values: FormValues
): FormErrors | null => {
  const errors: FormErrors = {};

  const { password, confirmPassword } = values;
  if (password !== confirmPassword) {
    errors.password = "Password field and confirm password field aren't equal";
  }

  return Object.keys(errors).length ? errors : null;
};
