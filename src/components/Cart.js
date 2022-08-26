import { useState } from "react"
import CartList from "./CartList";
import Page from "./Page"

const Cart = () => {

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [usuarios, setUsuarios] = useState([]);

  const handleChangeNombre = (e) => {
    const input = e.target
    const value = input.value
    setNombre(value);
  }

  const handleChangeApellido = (e) => {
    const input = e.target
    const value = input.value
    setApellido(value)
  }

  const handleConfirm = () => {
    const usuario = { nombre, apellido}
    setUsuarios ([...usuarios,usuario])
  }
  
  return (
    <div>
      <Page titulo="Carrito" subtitulo="Aca estan tus productos">
        <input type="text" placeholder="Nombre" onChange={handleChangeNombre} value={nombre} />
        <input type="text" placeholder="Apellido" onChange={handleChangeApellido} value={apellido} />
        <button onClick={handleConfirm}>Guardar</button>
        <CartList usuarios={usuarios}/>
      </Page>
    </div>
  )
}
export default Cart