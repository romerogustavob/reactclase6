import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import { Link, useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
//import products from '../Jsons/products'
import { collection, getDocs, getFiresore, getFirestore, query, where } from "firebase/firestore"


const ItemListContainer = () => {

  const [items, setItems] = useState([])
  let { categoryid } = useParams()

  useEffect(() => {
    
    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    getDocs(itemsCollection).then((snapshot)=>{
      console.log(snapshot.docs.map((doc)=>({id: doc.id, ...doc.data() })))
      const products = snapshot.docs.map((doc)=>({id: doc.id, ...doc.data() }));
      
    typeof categoryid === 'undefined'? setItems(products) : setItems(products.filter(p=>p.categoryId==categoryid))
      ;
    })

  },[categoryid])
  
  return (
   
    <>
      <div className='center'>
      <h2  align='center'>Productos</h2> 
      </div>
      <div className='d-inline-flex p-2 bd-highlight'>
        { items.map(i=>
          <div key={i.id} className='d-grid gap-3'>
            <div align='center' className='p-2 bg-light border'>
              <h2>{i.title}</h2>     
              <img width='150px' weight='150px' src={i.images}/>
              <h5>Precio: </h5> 
              <h5>{i.price}</h5>

               <Link to={`/item/${i.id}`}>           
                <Button variant="secondary" size="sm">Ver detalle</Button>
              </Link>  

              <h5>Descripción:</h5> {i.description}
            </div>
            
          </div>
          
          )
        }
        {'  '}
      </div>
      
    </>
    
  )
}

export default ItemListContainer