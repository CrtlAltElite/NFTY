import './App.css';
import Button from './components/Button';
import Error from './components/Error';
import NavBar from './components/NavBar';
import {getUser} from './api/apiBasicAuth';
import { CancelToken } from 'apisauce';
import LoginForm from './forms/LoginForm';
import CatForm from './forms/CatForm';
import ItemForm from './forms/ItemForm';

const handleAPITest= async ()=>{
  const source = CancelToken.source();
  const response_object= await getUser("kevinb@codingtemple.com","123abc",source.token);
  console.log(response_object)
}

function App() {
  return (
      <NavBar>
        <Button color="success" onClick={handleAPITest}>Test API Call</Button>
        <Error style={{backgroundColor:'cornflowerblue'}}>This is an error Message</Error>

        <ItemForm/>
      </NavBar>
  );
}

export default App;
