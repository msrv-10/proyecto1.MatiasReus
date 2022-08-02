import { useState, useEffect } from "react"

const Contador = (onAdd,initial,stock) => {
    
    const [contador, setContador] = useState(0)
    const [confirmed, setConfirmed] = useState(false)
    

    useEffect(() => {
        console.log('Se ejecuta');
        setTimeout(()=>{
            console.log('traje todo');
            //setContador ('Finalizo')
        }, 5000)
        
    },[confirmed])
    const sumar = () => {
        setContador(contador+1)
    }
    const restar = () => {
        setContador(contador-1)
    }
    const confirmar = () => {
        setConfirmed(!confirmed)
    }
  return (
    <div>
        <p>{contador}</p>
        <p>Contador : {contador}</p>
        <button onClick={sumar}>Sumar</button>        
        <button onClick={restar}>Restar</button>        
        <button onClick={confirmar}>Confirmar</button>        
    </div>
  )
}
export default Contador