import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import Page from "./Page"
/* import { useParams } from "react-router-dom"; */

const productosNuevos = [
    {
        id: 1,
        nombre: 'Producto 1',
    },
    {
        id: 2,
        nombre: "Producto 2",
    },
    {
        id: 3,
        nombre: "Producto 3",
    }
]
const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    /* const { id } = useParams() */

    useEffect(() => {
        const pedido = new Promise((res, rej) => {
            setTimeout(() => {
                res(productosNuevos)
            }, 2000)
        })
        pedido.then((aprobada) => {
            setProductos(aprobada)
            setLoading(false)
        })
        pedido.catch((desaprobada) => {
        })
        pedido.finally(() => {
        })
    }, [])

    if (loading) {
        return (
            <p>Cargando...</p>
        )
    } else {
        return (
            <Page titulo="Catalogo" subtitulo="Todos los productos">
                <ItemList productos={productos} />
            </Page>
        )
    }
}
export default ItemListContainer