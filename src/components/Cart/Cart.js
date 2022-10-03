import React from 'react'
import { ListarCarts } from '../ListarCarts'

const Cart = () => {
  return (
    <>
      <div className='m-0 row justify-content-center'>
        <div className='col-md-5 col-auto text-center'>
          <div><h1>Mis Productos</h1></div>                  
        </div>
      </div>
      <ListarCarts/>
    </>
    
  )
}

export default Cart