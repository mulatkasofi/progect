import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import BookPage from "../../pages/BookPage/BookPage";
import Open from "../../pages/CardOpenPage/CardOpen";
import BasketPage from "../../pages/BasketPage/BasketPage";
import MyFavoritesPage from "../../pages/MyFavoritesPage/MyFavoritesPage";
import SignUpPage from "../../pages/SignInPage/SignInPage";
import PasswordPage from "../../pages/PasswordPage/PasswordPage";

const PublickRouter = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="*" element={<Navigate to="/" />} />
     `   <Route path="/" element={<BookPage />} />`
        <Route path="/books/:id" element={<Open />} />
        <Route path="/basket" element={<BasketPage />}></Route>
        <Route path="/myfavorites" element={<MyFavoritesPage />}></Route>
        <Route path="/signIn" element={<SignUpPage />}></Route>
        <Route path="/Password" element={<PasswordPage />}></Route>
        
      </>
    )
  );
  return <RouterProvider router={router} />;
};

export default PublickRouter;
