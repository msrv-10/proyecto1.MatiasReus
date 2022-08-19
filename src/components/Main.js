import ItemDetailContainer from "./ItemDetailContainer";
import ItemListContainer from "./ItemListContainer";
import { Routes, Route } from "react-router-dom";
import Cart from "./Cart";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/categoria/:id/detalle" element={<ItemDetailContainer/>}/>
        <Route path="/categoria/:id" element={<ItemListContainer/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </main>
  )
}
export default Main