const Nav = ({type}) => {
  if(type === "header"){
  return (
    <nav className="nav">
    <a href="http://www.instagram.com">Ping</a>
    <a href="http://www.instagram.com">Ping</a>
    <a href="http://www.instagram.com">Ping</a>
    </nav>
  )
  }else {
    return (
      <nav className="nav__footer">
        <a href="http://">Ping</a>
        <a href="http://">Ping</a>
        <a href="http://">Ping</a>
      </nav>
    )
  }
}
export default Nav