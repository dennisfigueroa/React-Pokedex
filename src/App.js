import './App.css';
import SignUpAccount from'./pages/SignUpAccount';
import Login from './pages/Login';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'; 
import Home from './pages/Home'; 

function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
          <Route path ="/" element ={<Home/>}/>
          <Route path="/login" element={<Login />} />
          <Route path ="/register" element ={<SignUpAccount/>} /> 
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
