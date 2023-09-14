import "./css/normalize.css"
import "./css/header.css"
import "./css/cards.css"
import Header from "./main-page-components/Header.jsx"
import Cards from "./main-page-components/Cards.jsx"
import {useNavigate} from 'react-router-dom' //used for navigating to new page

function MainPage() {

    //details of all the items
    const details = [
        {
            id:1,
            name: "Shirt 1",
            price: "$",
            img: "/images/shirt-1.png"
        },
        {
            id:2,
            name: "Shirt 2",
            price: "$",
            img: "/images/shirt-2.png"
        },
        {
            id:3,
            name: "Shirt 3",
            price: "$",
            img: "/images/shirt-3.png"
        },
        {
            id:4,
            name: "Shirt 4",
            price: "$",
            img: "/images/shirt-4.png"
        },
        {
            id:5,
            name: "extra 1",
            price: "$",
            img: "/images/extras-1.png"
        },
        {
            id:6,
            name: "extra 2",
            price: "$",
            img: "/images/extras-2.png"
        },
        {
            id:7,
            name: "extra 3",
            price: "$",
            img: "/images/extras-3.png"
        },
        {
            id:8,
            name: "extra 4",
            price: "$",
            img: "/images/extras-4.png"
        },
    ]
    const navigate = useNavigate()
    function nextPage(e){
        navigate("/cart", {state:{details}})
    }
    return (
        <>
            <Header/>
            <div class="products" >Our Products</div>
            <div className="main-card">
                {details.map(i => (
                    <Cards key={i.id} {...i} nextPage = {nextPage}/> 
                ))}
            </div>

        </>
    )
}

export default MainPage