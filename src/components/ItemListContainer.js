import { useEffect, useState } from "react"
import ItemList from "./ItemList"

const ItemListContainer = () => {

    
    const [productos, setProductos] = useState([])

    useEffect=(()=>{
        const pedido = new Promise((res,rej)=>{

        })
    })

    if(productos.length === 0){
        return (
            <p>Cargando...</p>
        )
    }else{
        return (
            <ItemList productos={productos}/>
          )
    }
}
export default ItemListContainer