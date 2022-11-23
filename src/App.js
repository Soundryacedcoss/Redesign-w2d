import { createContext , useState} from 'react';
import { Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar } from './Navbar';
import { LoginPage } from './LoginPage'
import { Footer } from './Footer';
export const ProductData=createContext()
function App() {
  const[cartArr,setCartArr]=useState([])
  return (
    <div className="App">
      <ProductData.Provider value={{cartArr,setCartArr}}>
      
        <Routes>
          <Route path='/' element={<Navbar/>}></Route>
          <Route path='/LoginPage' element={<LoginPage/>}/>
        </Routes>
       
      </ProductData.Provider>
      <Footer/>
    </div>
  );
}

export default App;
