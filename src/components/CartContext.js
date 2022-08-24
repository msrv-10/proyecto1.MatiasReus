import { useState } from 'react';
import { createContext, useContext} from 'react';

const contexto = createContext();
const { Provider } = contexto;

export const useCarrito = () => {
    return useContext(contexto)
}

const CustomProvider = (props) => {

    const [cantidad, setCantidad] = useState(0);
    const [carrito, setCarrito] = useState([]);

    const agregarProducto = (producto) => {
        setCantidad(cantidad + producto.cantidad)
    }

    const eliminarProducto = () => {
        
    }
    
    const vaciarCarrito = () => {
        setCarrito([])
    }

    const isInCart = () => {
        
    }

    const valorDelContexto = {
        cantidad: cantidad,
        carrito: carrito,
        agregarProducto,
        eliminarProducto,
    }

    return(
        <Provider value={valorDelContexto}>
            {props.children}
        </Provider>
    )
}
export default CustomProvider;