// https://create-react-app.dev/docs/adding-custom-environment-variables/
// https://stackoverflow.com/questions/48378337/create-react-app-not-picking-up-env-files
console.log(process.env);

export const AUTH_API_URL = process.env.REACT_APP_AUTH_API_URL ?? "";
