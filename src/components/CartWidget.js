import React, { useEffect, useState } from 'react'
import { Cart4 } from 'react-bootstrap-icons';
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const CartWidget = () => {
    const { carts, totalCarts, removeItem, actualizarEstado, clear } = useCartContext();
    
  return (
    <>
        <div className="d-flex">
            <div className="p-0">
            <Cart4/>
            </div>
            <div>
            {totalCarts!==0 ? (        
                <div className="p-1">{totalCarts}</div>
            ) : (
                <div className="p-1"></div>
            )}
            </div>
        </div>
       
    </>
  )
}

export default CartWidget