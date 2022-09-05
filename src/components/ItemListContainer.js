import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ItemList from "./ItemList"
import Page from "./Page"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../FireBase"


const productosIniciales = [
    {
        id: 1,
        nombre: 'Producto 1'
    },
    {
        id: 2,
        nombre: 'Producto 2'
    },
    {
        id: 3,
        nombre: 'Producto 3'
    }
]


const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {

        const productosCollection = collection(db, "productos")
        const consulta = getDocs(productosCollection)
        const filtro = query(productosCollection, where("category", "==", id))

        consulta
            .then(snapshot => {
                const productos = snapshot.docs.map(doc => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                })
                setProductos(productos)
                setLoading(false)
            })
            .catch(err => {
                console.log(err);
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