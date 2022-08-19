import { useState } from "react"

const ItemCount = ({ estadoPadre,setEstadoPadre }) => {

    const [estadoHijo, setEstadoHijo] = useState(0)
    
    const sumar = () => {
        setEstadoHijo(estadoHijo + 1)
    }
    const restar = () => {
        setEstadoHijo(estadoHijo - 1)
    }
    const confirmar = () => {
        setEstadoPadre(estadoHijo)
    }
    return (
        <div>
            <button onClick={sumar}>Sumar</button>
            <button onClick={restar}>Restar</button>
            <button onClick={confirmar}>Confirmar</button>
        </div>
    )
}
export default ItemCount