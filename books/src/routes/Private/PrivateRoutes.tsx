import React from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";


import BookPage from "../../pages/BookPage/BookPage";
import CardOpen from "../../components/CardOpen/CardOpen";
import { Books, State } from "../../store/books/books.types";
import Open from "../../pages/CardOpenPage/CardOpen";
import Basket from "../../components/Basket/Basket";
import BasketPage from "../../pages/BasketPage/BasketPage";
import MyFavoritesPage from "../../pages/MyFavoritesPage/MyFavoritesPage";
import SignUpPage from "../../pages/SignUpPage/SignUpPage";
import ActivateUser from "../../pages/ActivateUserPage/ActivateUser";

const PrivateRouter = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<BookPage />} />
        <Route path="/books/:id" element={<Open />} />
        <Route path="/basket" element={<BasketPage />}></Route>
        <Route path="/myfavorites" element={<MyFavoritesPage />}></Route>
        <Route path="/signUp" element={<SignUpPage />}></Route>
        <Route path="/activate/:uid/:token" element={<ActivateUser />} />
      </>
    )
  );
  return <RouterProvider router={router} />;
};

export default PrivateRouter;
