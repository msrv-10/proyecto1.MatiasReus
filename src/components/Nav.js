import { NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"
const Nav = ({ type }) => {
  return (
      <nav className="nav">
        <NavLink className="nav__text" to="/categoria/teclados">Teclados</NavLink>
        <NavLink className="nav__text" to="/categoria/mouse">Mouse</NavLink>
        <NavLink className="nav__text" to="/categoria/pad">Pad</NavLink>
        {type === 'header' ? <CartWidget/> : '' }
      </nav>
    )
}
export default Nav