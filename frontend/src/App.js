import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Members from './pages/Members';
import NavBar from './components/NavBar';
import { store } from './store'
import { Provider } from 'react-redux'

const serverURL = process.env.REACT_APP_SERVER_URL;
function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route
              exact
              path="/"
              element={<Home />}
            />
            <Route
              exact
              path="/members"
              element={<Members />}
            />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
