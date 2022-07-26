import { useState } from 'react';
import Footer from './components/Footer';
import Main from './components/Main';
import Header from './components/Header';

function App() {
    const resultado = useState(0)
    let contador = resultado[0]
    const setContador = resultado[1]
    const aumentarContador = () =>{
        contador < 5 ? setContador(contador+1) : setContador()
    }
    const reducirContador = () => {
        contador > 5 ? setContador(contador-1) : setContador()
    }
    const resetearContador = () =>{
        setContador(0)
    }
    return (
    <>
        <Header contador={contador}/>
        <Main/>
        <button onClick={reducirContador}>Reducir</button>
        <button onClick={resetearContador}>Reset</button>
        <button onClick={aumentarContador}>Aumentar</button>

        <Footer/>
    </>
    )
}

export default App;
