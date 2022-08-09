import Contador from "./Contador"
import ItemListContainer from "./ItemListContainer";
const Main = () => {
  const foo = () => {
    
  }
  return (
    <main>
    <Contador  onAdd={foo} init={1} stock={5}/>
    <ItemListContainer/>
    </main>
  )
}
export default Main