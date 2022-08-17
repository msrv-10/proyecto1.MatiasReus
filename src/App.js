import Footer from './components/Footer';
import Main from './components/Main';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
    <>
        <BrowserRouter>
        <Header/>
        <Main/>
        <Footer/>
        </BrowserRouter>
    </>
    )
}

export default App;
