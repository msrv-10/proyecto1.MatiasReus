import { Link } from "react-router-dom"

const Item = ({ producto }) => {
  return (
    <article className="list__item">
      <h2 className="item__name">{producto.title}</h2>
      <p className="item__price">Precio: {producto.price}</p>
      <Link to={`/detalle/${producto.id}`} className="button">Ver Detalle</Link>
    </article>
  )
}
export default Item