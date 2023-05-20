import { configureStore } from "@reduxjs/toolkit";

import bookReducer from "./books/books.reducer";

const store = configureStore({
  reducer: {
    book: bookReducer,
  },
});
export type AppDispatch = typeof store.dispatch;
export default store;
