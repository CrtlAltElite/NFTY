import './App.css';
import Button from './components/Button';
import Error from './components/Error';
import NavBar from './components/NavBar';
import {getUser} from './api/apiBasicAuth';
import { CancelToken } from 'apisauce';
import LoginForm from './forms/LoginForm';
import CatForm from './forms/CatForm';
import ItemForm from './forms/ItemForm';
import apiCategory from './api/apiCategory';
import apiItem from './api/apiItem';
import CategoryBar from './components/CategoryBar';
import AdminMenu from './components/AdminMenu';
import AdminSelectItem from './components/AdminSelectItem';
import ItemBrowser from './components/ItemBrowser';
import AdminSelectCat from './components/AdminSelectCat';
import SnackBar from './components/SnackBar';
import Cart from './components/Cart/Index';
import Item from './components/Item';
import CartPage from './views/CartPage';
const my_token="VuZ6xD4QNVpyArgf6s8fV9UCtnHTsgQycZzbGIQDWsc"




function App() {
  return (
    <>
      <SnackBar/>
      <NavBar>
        <ItemBrowser/>
        <CartPage/>
      </NavBar>
    </>
  );
}

export default App;
