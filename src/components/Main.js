import Contador from "./Contador"
const Main = () => {
  const foo = () => {
    console.log('Funciona');
  }
  return (
    <main>
    <Contador  onAdd={foo} init={1} stock={5}/>
    </main>
  )
}
export default Main