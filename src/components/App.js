import { useState } from 'react';
import Footer from './Footer';
import Main from './Main';
import Header from './Header';

function App() {
    const resultado = useState(0)
    let contador = resultado[0]
    const setContador = resultado[1]
    console.log(resultado);
    //console.log(contador);
    //contador++
    //console.log(contador);
    //let contador = 0
    const aumentarContador = () =>{
        console.log('aumentar  contador');
    }
    return (
    <>
        <Header contador={contador}/>
        <Main/>
        <button onClick={aumentarContador}>click</button>
        <Footer/>
    </>
    )
}

export default App;
