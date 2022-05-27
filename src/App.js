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

const my_token="8Qd8cU9Oi44FdJjTwY3_bkI9qwxBBhQo8jWi6je-iqw"

const handleAPITest= async ()=>{
  const source = CancelToken.source();
  const response_object= await apiItem.del(my_token, 6, source.token);
  console.log(response_object)
}

function App() {
  return (
      <NavBar>
        <Button color="success" onClick={handleAPITest}>Test API Call</Button>
        <Error style={{backgroundColor:'cornflowerblue'}}>This is an error Message</Error>

        <LoginForm/>
      </NavBar>
  );
}

export default App;
