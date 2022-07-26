import Nav from "./Nav"
const Header = () => {
  return (
    <header className='header'>
            <h1>Titulo</h1>
            <span className="material-symbols-outlined">rocket_launch</span>
            <Nav type='header'/>
    </header>
  )
}
export default Header