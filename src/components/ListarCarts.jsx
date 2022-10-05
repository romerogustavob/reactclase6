import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import Button from 'react-bootstrap/Button';


export const ListarCarts = () => {
  const { carts, removeItem, clear } = useCartContext();

  return (
    <div className="container">

      {carts.length ? (
        
        carts.map((cart) => (
          
          <article className="container-sm inline-block square border border-success p-2" key={cart.key}>
            {console.log(cart)}
            {console.log(cart.item.map(i=>i.title))}

            <div className="m-2">
              <div>
                 <b>Nombre: </b>{cart.item.map(i=>i.title)}
              </div>
              <div>
                <b>Precio: </b>{cart.item.map(i=>i.price)}
              </div>
              <div>
                <b>Total: </b>{cart.counter}
              </div>
                        
            <div>
              <Button variant="warning" onClick={() => removeItem(cart)}>
                Quitar
              </Button> 
            </div>
            
            </div>
          </article>
          
        ))
      ) : (
        <h3 style={{ margin: "5rem" }}>No hay productos...</h3>
      )}
      {carts.length > 0 && (
        <div className="container-sm inline square border border-dark p-2">
          <div className="d-inline p-2">
          <Button variant="danger" onClick={clear}>
            Vaciar lista
          </Button>
          </div>
          <div className="d-inline p-2">          
            <Link className='secondary' to={'/cartview'}>
              <Button variant="success"  type="submit">
                Finalizar</Button>
            </Link>          
          </div>
          <div className="d-inline p-2">          
            <Link className='primary' to={'/'}>
              <Button variant="primary" type="submit">
                Ir a Gus Store
              </Button>
            </Link>          
          </div>
          
        </div>
      )}
    </div>
  );
};