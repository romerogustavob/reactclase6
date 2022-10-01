import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import Button from 'react-bootstrap/Button';


export const ListarCarts = () => {
  const { carts, removeItem, actualizarEstado, clear } = useCartContext();

  return (
    <div className="container">

      {carts.length ? (
        
        carts.map((cart) => (
          
          <article className="container-sm inline" key={cart.key}>
            {console.log(cart)}
            {console.log(cart.item.map(i=>i.title))}

            <div className="">
            <h3>Titulo:</h3>
            <h4
            >{cart.item.map(i=>i.title)}</h4> 
            
            <h3>Precio:</h3>
            <h4>{cart.item.map(i=>i.price)} </h4>
            <h3>Total:</h3>
            <h4>{cart.counter}</h4>
            
            <div>
              <button className="button" onClick={() => removeItem(cart)}>
                Quitar producto
              </button> 
            </div>
            
            </div>
          </article>
          
        ))
      ) : (
        <h3 style={{ margin: "5rem" }}>No hay productos...</h3>
      )}
      {carts.length > 0 && (
        <div>
          <div>
          <button className="button" onClick={clear}>
            Vaciar lista
          </button>
          </div>
          <div className="">
          
          <Link className='primary sm' to={'/'}>
            <Button variant="primary" size="sm" type="submit">
              home page
            </Button>
          </Link>
          
          </div>
          <div className="">
          
          <Link className='secondary sm' to={'/'}>
            <Button variant="secondary" size="sm" type="submit">
              Finalizar compra</Button>
          </Link>
          
          </div>
        </div>
      )}
    </div>
  );
};