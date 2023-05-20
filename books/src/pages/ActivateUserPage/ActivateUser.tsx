import Footer from "../../components/Footer/Footer";
import MainLayout from "../../layouts/Auth/MainLayout";
import ActivateUserComponent from "../../components/ActivateUser/ActivateUser";
import Header from "../../components/Header/Header";

const ActivateUser = () => {
  return (
    <MainLayout header={<Header />} content={<ActivateUserComponent />} footer={<Footer />} />
  );
};

export default ActivateUser;
