import MainLayout from "../../layouts/Auth/MainLayout";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Myfavorite from "../../components/MyFavorite/MyFavorite";

const MyFavoritesPage = () => {
  return (
    <MainLayout
      header={<Header />}
      content={<Myfavorite />}
      footer={<Footer />}
    />
  );
};

export default MyFavoritesPage;
