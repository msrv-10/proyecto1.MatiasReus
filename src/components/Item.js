import { Link } from "react-router-dom"

const Item = ({ producto }) => {
  if(producto.id===1){
    return (
      <article className="list__item">
        <h2 className="item__name">{producto.nombre}</h2>
        <p className="item__price">{producto.info}</p>
        <Link to="/categoria/teclados/detalle" className="button">Ir a Teclados</Link>
      </article>
    )
  }else if(producto.id===2){
    return (
      <article className="list__item">
        <h2 className="item__name">{producto.nombre}</h2>
        <p className="item__price">{producto.info}</p>
        <Link to="/categoria/Mouse" className="button">Ir a Mouse</Link>
      </article>
    )
  }else{
    return (
      <article className="list__item">
        <h2 className="item__name">{producto.nombre}</h2>
        <p className="item__price">{producto.info}</p>
        <Link to="/categoria/pad" className="button">Ir a Pads</Link>
      </article>
    )
  }
}
export default Item