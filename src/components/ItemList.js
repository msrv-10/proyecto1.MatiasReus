const ItemList = ({productos}) => {  

  return (
    <>
    {productos.map((producto)=>{
      return <p>{producto.nombre}</p>
    })}
    </>
  )
}
export default ItemList