const Nav = (parametros) => {
  if(parametros.type == "header"){
  return (
    <nav id="nav">
    <a href="http://www.instagram.com">Ping</a>
    <a href="http://www.instagram.com">Ping</a>
    <a href="http://www.instagram.com">Ping</a>
    </nav>
  )
  }else {
    return (
      <nav>
        <a href="http://">Ping</a>
        <a href="http://">Ping</a>
        <a href="http://">Ping</a>
      </nav>
    )
  }
}
export default Nav