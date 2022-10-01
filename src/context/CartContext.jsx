import { createContext, useContext, useState } from "react";
import Swal from "sweetalert2";
import uuid from "react-uuid";

const CartContext = createContext([]);

export const useCartContext=()=>useContext(CartContext);

export const CartContextProvider = ({ children }) => {
    const [carts, setCarts] = useState([]);
    const[totalCarts, setTotalCarts]=useState(0);

    const isInCart = (cart) => {
      const idcart=cart.item.map(i=>i.id)[0];
      const elemenexiste=carts.some((ca)=>ca.item.find(i=>i.id===idcart));
      return elemenexiste;
    };

    const sumarCarts = ()=>{
      setTotalCarts(totalCarts + 1);
      return({});
    }

    const restarCarts = ()=>{
      setTotalCarts(totalCarts - 1);
      return({});
    }
    
    const puestaCeroCarts=()=>{
      setTotalCarts(0);
      return({});
    }

    const addItem = (cart) => {
      if (isInCart(cart)) {
        return Swal.fire("Ya existe en la lista");
      }
      
      const key = uuid();
      const nuevaCart = { ...cart, key};
      setCarts([...carts, nuevaCart]);
      sumarCarts();
      Swal.fire("Producto agregado");
      
    };
  
    const removeItem = (cart) => {
      //const removerTarea = tareas.filter((buscada) => buscada.id !== tarea.id);
      const idcart=cart.item.map(i=>i.id)[0];
      const removerItem = carts.filter((ca)=>ca.item.find(i=>i.id!==idcart))
      console.log("removeite"+removerItem)
      restarCarts();
      return setCarts(removerItem);
    };
  
    const clear = () => {
      setCarts([]);
      puestaCeroCarts();
    };
  
    return (
      <CartContext.Provider
        value={{
          carts,
          totalCarts,
          isInCart,
          addItem,
          removeItem,
          clear,
        }}
      >
        {children}
      </CartContext.Provider>
    );
  };
