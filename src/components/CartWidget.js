import { NavLink } from "react-router-dom"
import { useCarrito } from "./CartContext";


const CartWidget = () => {

    const { cantidad } = useCarrito()

    return (
        <NavLink className="nav__text" to="/Cart">
            <span className="material-symbols-outlined">shopping_cart</span>
            {cantidad}
        </NavLink>
    )
}
export default CartWidget