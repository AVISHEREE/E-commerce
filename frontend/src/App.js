import './App.css';
import Nav from './components\'/navbar';
import Footer from './components\'/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path='/' element={<h1>hello home</h1>}/>
          <Route path='/add' element={<h1>hello add product</h1>}/>
          <Route path='/update' element={<h1>hello update product</h1>}/>
          <Route path='/logout' element={<h1>hello logout</h1>}/>
          <Route path='/profile' element={<h1>hello profile</h1>}/>
        </Routes  >
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
