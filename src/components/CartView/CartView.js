import { addDoc, collection, doc, getDocs, getFirestore, updateDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';
import Swal from "sweetalert2";
import { useCartContext } from "../../context/CartContext";
import { useState } from "react";

const CartView = () => {
  const { carts, totalPrice, clear } = useCartContext();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState("");

  const [order, setOrder] = useState(null);

    const navigate = useNavigate()

    const orderHandler = (e) => {
        e.preventDefault();
        setOrder({
          buyer: { "name": name, "phone": phone, "email": email },
          items: carts.map( item => {
              return {
                id: item.item.map(i=>i.id),
                title: item.item.map(i=>i.title),
                price: item.item.map(i=>i.price),
              }}),
          date: Date(),
          total: totalPrice
        })
        guardarOrder(order)
    }

    const finishOrder = () => {
        navigate('/')
    }


    const guardarOrder = (miorden) => {

        console.log('Terminando orden..');
    
        const db = getFirestore()
        const orderCollection = collection(db, 'orders')
    
        addDoc(orderCollection, miorden).then( ({id}) => {
            console.log( {id} );
            clear();
            Swal.fire("La orden de pago a sido generada con éxito");
            //finishOrder();
        })
      
    }
  
  return (
    <div className="container-sm inline border border-dark p-2">
     
      <Form onSubmit={orderHandler}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Nombre y Apellido</Form.Label>
        
          <Form.Control name="name"  variant="outlined" value={name} onChange={(e)=>{e.preventDefault();setName(e.target.value)}}  />
    
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control name="phone" variant="outlined" value={phone} onChange={(e)=>{e.preventDefault();setPhone(e.target.value)}}/>
          <Form.Text className="text-muted">
            Sin 0 y sin 15
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control name="email" type="email" value={email} variant="outlined" onChange={(e)=>{e.preventDefault(); setEmail(e.target.value)}}/>
          <Form.Text className="text-muted">
      
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  )
}
export default CartView