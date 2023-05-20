
import './App.css';

import { Provider } from 'react-redux';
import store from './store';

import PrivateRouter from './routes/Private/PrivateRoutes';
import SignUp from './components/SignUp/SignUp';



function App() {
  return (
    <Provider store={store} >
   <PrivateRouter  />
  
   {/* <Subscribe title='Subscribe to Newsletter'></Subscribe> */}
{/* <Paginations></Paginations> */}
    </Provider>
  );
}

export default App;
