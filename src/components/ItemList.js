import Item from "./Item"

const ItemList = ({ productos }) => {
    return (
    <section className="list__items">
        {productos.map((producto) => {
            return <Item producto={producto}/>
        })}
    </section>
    )
}
export default ItemList