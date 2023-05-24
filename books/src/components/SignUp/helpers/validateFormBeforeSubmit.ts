import { FormErrors, FormValues } from "../SignUp";

export const validateFormBeforeSubmit = (
  values: FormValues,
  defaultUser:Omit<FormValues,'confirmPassword'>

): FormErrors | null => {
  const errors: FormErrors = {};

  const { name, email, password, confirmPassword } = values;

  if (name.length < 1) {
    errors.name = "Field required";
  }

  if (email.length < 1) {
    errors.email = "Field required";
  }

  if (password.length < 1) {
    errors.password = "Field required";
  }

  if (password.length > 1 && password.length <= 3) {
    errors.password = "Password length should be more than 6";
  }

  if (password.length > 3 && password !== confirmPassword) {
    errors.password = "Password field and confirm password field aren't equal";
  }
if(name!==defaultUser.name){
    errors.name='Not user name'
}
  return Object.keys(errors).length ? errors : null;
};