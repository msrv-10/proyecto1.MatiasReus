import { useEffect, useState } from "react"
import ItemList from "./ItemList"
const productosNuevos = [{
    id: 2,
    nombre: 'zapatillas',
    precio: 200
}]
const ItemListContainer = () => {

    const [productos, setProductos] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const pedido = new Promise((res, rej) => {
            setTimeout(() => {
                console.log('se ejecuta el pedido');
                res(productosNuevos)
            }, 2000)
        })
        pedido.then((aprobada) => {
            console.log({ aprobada });
            setProductos(aprobada)
            setLoading(false)
        })
        pedido.catch((desaprobada) => {
            console.log({ desaprobada });
        })
        pedido.finally(() => {
            console.log('termino el pedido');
        })
    }, [])

    if (loading) {
        return (
            <p>Cargando...</p>
        )
    } else {
        return (
            <ItemList productos={productos} />
        )
    }
}
export default ItemListContainer