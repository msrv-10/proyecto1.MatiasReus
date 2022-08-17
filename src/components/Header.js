import Nav from "./Nav"
import { Link } from "react-router-dom"
const Header = () => {
  return (
    <header className='header'>
      <Link to="/">
        <h1  className='header__title'>Titulo</h1>
      </Link>
      <Nav type='header' />
    </header>
  )
}
export default Header