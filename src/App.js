import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import Shop from "./components/Shop";
import {ShopContextProvider} from './contexts/context'

function App() {
    return (
        <>
            <Header/>
            <ShopContextProvider>
                <Shop/>
            </ShopContextProvider>
            <Footer/>
        </>
    );
}

export default App;
