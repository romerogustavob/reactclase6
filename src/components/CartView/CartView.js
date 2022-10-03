import { addDoc, collection, doc, getDocs, getFirestore, updateDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/esm/Button';
import Swal from "sweetalert2";
import { useCartContext } from "../../context/CartContext";

const CartView = () => {
  const { clear } = useCartContext();

  const order = {
    buyer: { name: 'Ernesto', phone: 123, email: 'ernesto@gmail.com' },
    items: [ {id: 4, title: 'Samsung Universe 9', price: 500}, {id:7, title: 'MacBook Pro', price: 1749} ],
    date: '01-10-2022',
    total: 2249
  }

  const orderHandler = () => {
    console.log('Terminando orden..');

    const db = getFirestore()
    const orderCollection = collection(db, 'orders')

    addDoc(orderCollection, order).then( ({id}) => {
        console.log( {id} );
        clear();
        Swal.fire("La orden de pago a sido generada con éxito");
    })
  }
  
  return (
    <div className="container-sm inline">
      <div className="m-2">

        <Button variant="success" size="sm" onClick={orderHandler} >Terminar compra</Button>
      </div>     
        
      <div className="m-2">
        {/* <button className="btn" onClick={getOrdersHandler}>Ver ordenes</button> */}
        <Link to={`/orders`}>            
          <Button variant="secondary" size="sm">Ver Odenes</Button>
        </Link>
      </div>
    </div>
  )
}
export default CartView