import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import PublickRouter from "./routes/Public/PublicRoutes";


function App() {
  return (
    <Provider store={store}>
      <PublickRouter />

      {/* <Subscribe title='Subscribe to Newsletter'></Subscribe> */}
      {/* <Paginations></Paginations> */}
    </Provider>
  );
}

export default App;
