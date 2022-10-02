import { addDoc, collection, doc, getDocs, getFirestore, updateDoc } from "firebase/firestore";

const CartView = () => {

  const order = {
    buyer: { name: 'Gustavo', phone: 123, email: 'gustavo@gmail.com' },
    items: [ {id: 3, title: 'Samsung Universe 9', price: 500}, {id:6, title: 'MacBook Pro', price: 1749} ],
    total: 2249
  }

  const orderHandler = () => {
    console.log('Terminando orden..');

    const db = getFirestore()
    const orderCollection = collection(db, 'orders')

    addDoc(orderCollection, order).then( ({id}) => {
        console.log( {id} );
    })
  }

  const getOrdersHandler = () => {
    const db = getFirestore()
    const orderCollection = collection(db, 'orders')
    getDocs( orderCollection ).then( res => {
        console.log(
            res.docs.map( d => ({id: d.id, ...d.data()}) )
        );
    })
  }

  const updateHanlder = () => {
    const db = getFirestore()
    const orderCollection = collection(db, 'orders')
    const orderDoc = doc(orderCollection, "BjkGzewonWKdOaKYIfjo")
    updateDoc( orderDoc, {
        price:222,
        buyer: { name: 'Carlos', phone: 55555, email: 'carlos@gmail.com' },
    }).then( res => { console.log('res: ' + res) } )
  }
  
  return (
    <div>
      <button className="btn" onClick={orderHandler}>Terminar compra</button>
        <button className="btn" onClick={updateHanlder}>Actualizar orden</button>
      <div className="m-5">
        <button className="btn" onClick={getOrdersHandler}>Ver ordenes</button>
      </div>
    </div>
  )
}
export default CartView