import MainLayout from "../../layouts/Auth/MainLayout";
import CardOpen from "../../components/CardOpen/CardOpen";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Open = () => {
  return (
    <MainLayout
      header={<Header />}
      content={<CardOpen />}
      footer={<Footer />}
    />
  );
};

export default Open;
