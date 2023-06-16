import MainLayout from "../../layouts/Auth/MainLayout";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Basket from "../../components/Basket/Basket";

const BasketPage = () => {
  return (
    <MainLayout header={<Header />} content={<Basket />} footer={<Footer />} />
  );
};

export default BasketPage;
