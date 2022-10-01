import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'
import Loader from '../Loader/Loader'

const ItemList = () => {
    const [chars, setChars] = useState([])

    useEffect(() => {
        const URL='https://rickandmortyapi.com/api/character'
        setTimeout( ()=>{
          fetch(URL)
          .then( res => res.json() )
          .then( data => {
            console.log(data.results)
            
            setChars(data.results)
          })
        },2000)        
      
        return () => {
          
        }
      }, [])
    
  return (
    <>
        <Loader/>
        <div>
            { chars.map(c=><Item key={c.id} id={c.id} {...c} />) }
        </div>
       
    </>
    
  )
}

export default ItemList