import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import PiePagina from './components/Footer/PiePagina';
import { BrowserRouter, Switch, Route, Link, Routes } from "react-router-dom";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart'
import { CartContextProvider } from './context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartView from './components/CartView/CartView';
import OrdersView from './components/CartView/OrdersView';

function App() {

  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>            
              <Route path='/' element={<ItemListContainer/>} />
              <Route path='/category/:categoryid' element={<ItemListContainer/>} />
              <Route path='/item/:id' element={<ItemDetailContainer/>} />
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/cartview' element={<CartView/>}/>
              <Route path='/orders' element={<OrdersView/>}/>
          </Routes>          
          <br/>
          <PiePagina/>
        </BrowserRouter>                              
      </CartContextProvider>
    </>
    
  );
}

export default App;
