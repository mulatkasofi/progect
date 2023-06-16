import MainLayout from "../../layouts/Auth/MainLayout";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Password from "../../components/Password/Password";

const PasswordPage = () => {
  return (
    <MainLayout
      header={<Header />}
      content={<Password />}
      footer={<Footer />}
    />
  );
};

export default PasswordPage;
