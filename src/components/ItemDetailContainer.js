import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail"


const nuevosProductos = [
    {
        id: 1,
        nombre: 'Teclado',
        detalle: 'Teclado mecanico, 60%',
        precio: 300
    },
    {
        id: 2,
        nombre: 'Mouse',
        detalle: 'Mouse gamer',
        precio: 150
    },
    {
        id: 3,
        nombre: 'Pad',
        detalle: 'Pad XXL',
        precio: 100
    }
]

const ItemDetailContainer = () => {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const pedido = new Promise((get, rej) => {
            setTimeout(() => {
                get(nuevosProductos[0])
            }, 2000)
        })
        pedido.then((aceptado) => {
            setProductos(aceptado)
            setLoading(false)
        })
        pedido.catch((denegado) => {
            setProductos(denegado)
        })
        pedido.finally(() => {

        })
    })

    if (loading) {
        return (
            <p>Cargando...</p>
        )
    } else {
        return (
            <ItemDetail productos={productos} />
        )
    }

}
export default ItemDetailContainer