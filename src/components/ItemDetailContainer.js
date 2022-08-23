import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail"


const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const pedido = fetch('https://fakestoreapi.com/products/' + id)
        pedido
            .then((respuesta) => {
                return respuesta.json()
            })
            .then((respuesta) => {
                setProducto(respuesta)
            })
            .catch((denegado) => {
            })
    })

    return (
        <ItemDetail producto={producto} />
    )


}
export default ItemDetailContainer