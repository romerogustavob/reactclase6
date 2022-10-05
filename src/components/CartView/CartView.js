import { addDoc, collection, getFirestore, Timestamp } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';
import Swal from "sweetalert2";
import { useCartContext } from "../../context/CartContext";
import { useState } from "react";

const CartView = () => {
  
  const { carts, totalPrice, clear } = useCartContext();
  
  const navigate = useNavigate();
  const finishOrder = () => {
    navigate('/')
  }

  const [formData, setFormData] = useState({
    name:"", phone:"", email:""
  })

  const handleChange = (e) => {
    setFormData({ ...formData,[e.target.name]: e.target.value })
  }

  const createOrder = (e) => {
    e.preventDefault(); 
    let order = {}
    order.date = Timestamp.fromDate(new Date())
    order.buyer = formData
    order.total = totalPrice
    
    order.items = carts.map(cartItem => {
        const id = cartItem.item.map(i=>i.id)
        const title = cartItem.item.map(i=>i.title)
        const price = cartItem.item.map(i=>i.price)
        return {id, title, price}
    })


    const db = getFirestore()
    const orderCollection = collection(db, 'orders')
    addDoc(orderCollection, order)
    .then(resp => {
      clear()
      console.log("orden de pago nro: "+resp.id)
      Swal.fire("La orden de pago nro "+resp.id+" ha sido generada con éxito")
    })
    .catch(err => console.log(err))
    .finally(() => { 

        setFormData({
            name:"", phone:"", email:""
        })        
        finishOrder()
    })

  }
  
  return (
    <div className="container-sm inline border border-dark p-2">
     
      <Form onSubmit={createOrder}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Nombre y Apellido</Form.Label>
        
          <Form.Control name="name" type="name"  variant="outlined" defaultValue={formData.name} onChange={handleChange}/>
    
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control name="phone" type="phone" variant="outlined" defaultValue={formData.phone}  onChange={handleChange}/>
          <Form.Text className="text-muted">
            Sin 0 y sin 15
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control name="email" type="email" defaultValue={formData.email} variant="outlined" onChange={handleChange}/>
          <Form.Text className="text-muted">
      
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  )
}
export default CartView