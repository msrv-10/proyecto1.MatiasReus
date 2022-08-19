import { useState } from "react"
import ItemCount from "./ItemCount"
import Page from "./Page"

const ItemDetail = ({ productos }) => {

  const [estadoPadre, setEstadoPadre] = useState(0)

  return (
    <section className="list__items">
      <article className="list__item">
        <Page>
          <p>ID : {productos.id}</p>
          <h2>{productos.nombre}</h2>
          <p>Detalles : {productos.detalle}</p>
          <p>Precio : ${productos.precio}</p>
          <p>Contador : {estadoPadre}</p>
          <ItemCount estadoPadre={estadoPadre} setEstadoPadre={setEstadoPadre} />
        </Page>
      </article>
    </section>
  )
}
export default ItemDetail