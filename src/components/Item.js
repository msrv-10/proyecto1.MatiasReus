const Item = ({producto}) => {
  return (
    <article className="item">
        <h2 className="item__name">{producto.nombre}</h2>
        <p className="item__price">Precio : ${producto.precio}</p>
    </article>
  )
}
export default Item