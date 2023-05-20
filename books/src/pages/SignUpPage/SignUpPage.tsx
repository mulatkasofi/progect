
import SignUpComponent from "../../components/SignUpAll/SignUpAll";
import MainLayout from "../../layouts/Auth/MainLayout";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const SignUpPage = () => {
  return (
    <MainLayout
      header={<Header />}
      content={<SignUpComponent />}
      footer={<Footer />}
    />
  );
};

export default SignUpPage;
