import './App.css';
import Nav from './components/navbar';
import Footer from './components/footer';
import SignUp from './components/signup';
import Login from './components/login.js';
import AddProduct  from './components/addproduct.js';
import PrivateComponent  from './components/privateComponent.js';
import ProductList from './components/productsList.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
        <Routes>

          <Route element={<PrivateComponent/>}>
          <Route path='/' element={<h1>hello home</h1>}/>
          <Route path='/products' element={<ProductList/>}/>
          <Route path='/add' element={<AddProduct/>}/>
          <Route path='/update' element={<h1>hello update product</h1>}/>
          <Route path='/logout' element={<h1>hello logout</h1>}/>
          <Route path='/profile' element={<h1>hello profile</h1>}/>
          </Route>

          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          
        </Routes  >
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
