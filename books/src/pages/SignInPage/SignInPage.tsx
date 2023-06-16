import SignInComponent from "../../components/SignIn/SignIn";
import MainLayout from "../../layouts/Auth/MainLayout";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const SignUpPage = () => {
  return (
    <MainLayout
      header={<Header />}
      content={<SignInComponent />}
      footer={<Footer />}
    />
  );
};

export default SignUpPage;
