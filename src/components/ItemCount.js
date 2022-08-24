import { useState } from "react"

const ItemCount = ({ estadoPadre, setEstadoPadre, onAdd }) => {

    const [contador, setContador] = useState(0)

    const sumar = () => {
        setContador(contador + 1)
    }
    const restar = () => {
        setContador(contador - 1)
    }
    const confirmar = () => {
        onAdd(contador)
    }
    return (
        <div>
            {contador > 0 ? <p>Cantidad : {contador}</p> : null}
            <button onClick={sumar}>Sumar</button>
            <button onClick={restar}>Restar</button>
            <button onClick={confirmar}>Confirmar</button>
        </div>
    )
}
export default ItemCount