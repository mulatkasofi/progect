import React from "react";
import MainLayout from "../../layouts/Auth/MainLayout";
import Header from "../../components/Header/Header";
import Blog from "../../components/Blog/Blog";


const BookPage: React.FC = () => {
  return (<MainLayout header={<Header />} content={<Blog />} footer></MainLayout>
  );
};

export default BookPage;
