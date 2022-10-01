import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'

import { collection, getDocs, getFiresore, getFirestore, query, where } from "firebase/firestore"

export const ButtonCount=({total, setTotal})=>{
const add=()=>{
  setTotal( total + 1 )
}

  return(
    <button onClick={add} className='btn btn-secondary'>{total}</button>
  )
}

export const InputCount=({total, setTotal})=>{

  const onChangeHandler = (event) => { 
    const newTotal = parseInt(event.target.value)

    if(newTotal>5){
      setTotal(newTotal)
    }

   }

  return(
      <input onChange={onChangeHandler} type='number'/>
  )
}

const ItemDetailContainer = () => {

  const [item, setItem]= useState({})
  const [total, setTotal] = useState(1) 
  const { id } =useParams()

  useEffect(() => {
    
    const db = getFirestore();
    const itemsCollection = query(collection(db, "items"), where("id","==",parseInt(id)));
    getDocs(itemsCollection).then((snapshot)=>{
      console.log(snapshot.docs.map((doc)=>({id: doc.id, ...doc.data() })))
      setItem(snapshot.docs.map((doc)=>({id: doc.id, ...doc.data() })))
    })
  
    return () => {
      
    }
  }, [])
  
  return (
    <>
      
      <ItemDetail item={item}/>
     
    </>
    
  )
}

export default ItemDetailContainer