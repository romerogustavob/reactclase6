import React from 'react'

const InputNoVowels = () => {

  const keyDownHandler=(evento)=>{

    if(evento.key.match(/^[aeiou]/i)){
      evento.preventDefault();
    }
    console.log('tecla: ')
    console.log(evento.key)
  }

  return (
    <div>
        <h3>Input sin vocales</h3>
        <input onKeyDown={keyDownHandler} type='text'/>

    </div>

  )
}

export default InputNoVowels