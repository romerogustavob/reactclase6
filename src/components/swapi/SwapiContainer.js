import React, { useEffect, useState } from 'react'

const SwapiContainer = () => {
    
    const [chars, setChars] = useState([])

    useEffect( () => {
        setTimeout(() => {
            getChars()
        }, 1000);
      
      return () => {
        console.log('Mounting');
      }
    }, [])

    const getChars=()=>{
        const URL="https://swapi.dev/api/people/"
        fetch(URL)
            .then( response => { return response.json() } )
            .then( data => { 
                /* console.log(data.results);
                data.results.forEach(element => {
                    console.log( element.name )
                });
                 */

                setChars(data.results)
            } )
    }
    
  return (
    
    <>
        <div>StarWars API</div>
        {chars.map(char=><li key={char.url}>{char.name}</li>)}
    </>
    
  )
}

export default SwapiContainer