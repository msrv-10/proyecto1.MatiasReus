import { useState } from "react"
import ItemCount from "./ItemCount"
import Page from "./Page"

const ItemDetail = ({ producto }) => {

  const [estadoPadre, setEstadoPadre] = useState(0)

  return (
    <section className="list__items">
      <article className="list__item">
        <Page>
          <p>ID : {producto.id}</p>
          <h2 className="detail__title">{producto.title}</h2>
          <img src={producto.image} alt=""  className="detail__image"/>
          <p className="detail__text">Detalles : {producto.description}</p>
          <p>Precio : ${producto.price}</p>
          <p>Contador : {estadoPadre}</p>
          <ItemCount estadoPadre={estadoPadre} setEstadoPadre={setEstadoPadre} />
        </Page>
      </article>
    </section>
  )
}
export default ItemDetail