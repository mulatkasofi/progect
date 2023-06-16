import { State } from "./books/books.types";

export interface RootStore {
  store: any;
  book: State;
}
