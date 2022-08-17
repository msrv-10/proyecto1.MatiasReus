const ItemDetail = ({ productos }) => {
  return (
    <section className="list__items">
      <article className="list__item">
        <p>ID : {productos.id}</p>
        <h2>{productos.nombre}</h2>
        <p>Detalles : {productos.detalle}</p>
        <p>Precio : ${productos.precio}</p>
      </article>
    </section>
  )
}
export default ItemDetail