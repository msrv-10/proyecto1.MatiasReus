const ItemDetail = ({producto}) => {
  return (
    <article>
        <h2>{producto.nombre}</h2>
        <p>{producto.detalle}</p>
        <img src={producto.imagen} alt="" />
        <p>{producto.precio}</p>
    </article>
  )
}
export default ItemDetail