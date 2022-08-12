import { useState,useEffect } from "react";
import ItemDetail from "./ItemDetail"

const newProducts = [
    {
        id:1,
        nombre:'Teclado',
        imagen:'../../public/teclado.png',
        detalle:'Teclado mecanico, 60%',
        precio: 300
    }
]

const ItemDetailContainer = () => {

    const [productos, setProductos] = useState({});
    const [loading, setLoading] = useState(true);
    
    useEffect(()=>{
        const pedido = new Promise((get,rej)=>{
            setTimeout(()=>{
                get(newProducts)
            }, 2000)
        })
        pedido.then((aceptado)=>{
            setProductos(aceptado)
            setLoading(false)
        })
        pedido.catch((denegado)=>{
            setProductos(denegado)
        })
        pedido.finally(()=>{

        })
    })

    if (loading){
        return (
            <p>Cargando...</p>
        )
    }else {
        return (
            <ItemDetail productos={productos}/>
        )
    }
  
}
export default ItemDetailContainer