import MainPage from "./MainPage.jsx"
import CartPage from "./CartPage.jsx"
import { BrowserRouter, Routes,Route } from "react-router-dom"
import ScrollToTop from "./main-page-components/scrollToTop.js"



function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element= {<MainPage/>}/>
                <Route path="/cart" element = {<CartPage/>} />
            </Routes>
        </BrowserRouter> 
    )
}

export default App