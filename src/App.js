import Footer from './components/Footer';
import Main from './components/Main';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import CartContext from './components/CartContext';
import "./FireBase"

function App() {
    return (
        <>
            <BrowserRouter>
                <CartContext>
                    <Header />
                    <Main />
                    <Footer />
                </CartContext>
            </BrowserRouter>
        </>
    )
}

export default App;
