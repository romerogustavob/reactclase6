import React, { useEffect, useState } from 'react'
import { collection, doc, getDocs, getFirestore, updateDoc } from "firebase/firestore";
import Button from 'react-bootstrap/esm/Button';

const OrdersView = () => {
    const [orders, setOrders]=useState([]);

    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric"
    };

    useEffect(() => {
        const db = getFirestore()
        const orderCollection = collection(db, 'orders')
       getDocs( orderCollection ).then( snapshot => {
            console.log(
                snapshot.docs.map( d => ({id: d.id, ...d.data()}) )
            );
            setOrders(snapshot.docs.map( d => ({id: d.id, ...d.data()}) ));
            
        })

        return () => {

        }
    }, [])

    const updateHandler = (id) => {
        const db = getFirestore()
        const orderCollection = collection(db, 'orders')
        const orderDoc = doc(orderCollection, id)
        updateDoc( orderDoc, {
          buyer: { name: 'Marisa', phone: 55555, email: 'marisa@gmail.com' }
      })
    }
    
  return (
    <div>
      <div className="container-sm inline"><h1>Órdenes de compra</h1></div>
       {orders.length?(
        
        orders.map((order) => (
          
          <article className="container-sm inline" key={order.id}>
            {console.log(order)}
            {console.log(order.items)}
            <div className="square border border-info p-2">              
              <div className="m-1">
              <div><h4>Orden nro: {order.id}</h4></div>
                <div><b>Comprador:</b> {order.buyer.name} - email: {order.buyer.email}</div>
                <div>Fecha: {order.date.toDate().toLocaleDateString("es", options)}</div>
                <div>Total: {order.total}</div>
              </div>
                {order.items.map((item)=>
                  <div key={item.key} className="square border border-success m-2">
                    <div><b>Producto:</b> {item.title}</div>
                    <div>Precio: {item.price}</div>
                  </div>
                )                
                }
              <div className="m-2">
                <Button variant="success" size="sm" onClick={(e)=>{e.preventDefault(); updateHandler(order.id);}}>Actualizar orden</Button>
              </div>
            </div>
          
          </article>
          
        ))
      ) : (
        <h3 style={{ margin: "5rem" }}></h3>
      )} 
    </div>
    
  )
}

export default OrdersView