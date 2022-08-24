import { Link, NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"
const Nav = ({ type }) => {
  if (type === "header") {
    return (
      <nav className="nav">
        <NavLink className="nav__text" to="/categoria/teclados">Teclados</NavLink>
        <NavLink className="nav__text" to="/categoria/mouse">Mouse</NavLink>
        <NavLink className="nav__text" to="/categoria/pad">Pad</NavLink>
        <CartWidget/>
      </nav>
    )
  } else {
    return (
      <nav className="nav__footer">
        <Link to="http://">Ping</Link>
        <Link to="http://">Ping</Link>
        <Link to="http://">Ping</Link>
      </nav>
    )
  }
}
export default Nav