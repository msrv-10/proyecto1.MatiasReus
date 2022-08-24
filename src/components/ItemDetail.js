import { useContext } from "react"
import ItemCount from "./ItemCount"
import Page from "./Page"
import { contexto } from "./CartContext"

const ItemDetail = ({ producto }) => {

  const { agregarProducto } = useContext(contexto)

  const onAdd = (contador) => {
    producto.cantidad = contador
    agregarProducto(producto)
  }

  return (
    <section className="list__items">
      <article className="list__item">
        <Page>
          <p>ID : {producto.id}</p>
          <h2 className="detail__title">{producto.title}</h2>
          <img src={producto.image} alt="" className="detail__image" />
          <p className="detail__text">Detalles : {producto.description}</p>
          <ItemCount onAdd={onAdd} />
        </Page>
      </article>
    </section>
  )
}
export default ItemDetail