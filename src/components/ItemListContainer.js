import { useEffect, useState } from "react"
import ItemList from "./ItemList"

const productosIniciales = [
    {
    id: 2,
    marca: 'pepitos',
    precio: 200},
    {
    id:3,
    marca:'pepes',
    precio: 500}
]

const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect=(()=>{
        console.log('arranca el pedido');
        const pedido = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(productosIniciales)
            },2000)
        })

        pedido.then((resolucion)=>{
            console.log('termino bien');
            console.log({resolucion});
            setProductos(resolucion)
            setLoading(false)
        })
        pedido.catch((error)=>{
            console.log('termino mal');
        })
        pedido.finally(()=>{
            console.log('termino');
        })
    }, [])

    if(loading){
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