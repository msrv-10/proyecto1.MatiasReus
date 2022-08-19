import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import Page from "./Page"
/* import { useParams } from "react-router-dom"; */

const productosNuevos = [
    {
        id: 1,
        nombre: 'Teclados',
        info: 'Encontra tu teclado'
    },
    {
        id: 2,
        nombre: "Mouses",
        info: "Encontra tu mouse"
    },
    {
        id: 3,
        nombre: "Pads",
        info: "Encontra tu pad"
    }
]
const ItemListContainer = () => {

    const [productos, setProductos] = useState({})
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
            <Page titulo="Catalogo" subtitulo="Teclados">
                <ItemList productos={productos} />
            </Page>
        )
    }
}
export default ItemListContainer