import { NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"
const Nav = ({ type }) => {
  return (
      <nav className="nav">
        <NavLink className="nav__text" to="/categoria/menClothing">Men's Clothing</NavLink>
        <NavLink className="nav__text" to="/categoria/jewelery">Jewelery</NavLink>
        <NavLink className="nav__text" to="/categoria/electronics">Electronics</NavLink>
        {type === 'header' ? <CartWidget/> : '' }
      </nav>
    )
}
export default Nav