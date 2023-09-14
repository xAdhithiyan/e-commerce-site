import { useLocation } from "react-router-dom"
import CartPageComponents from "./main-page-components/CartPageComponets.jsx"
import "./css/cartPage.css"

function CartPage(){
    const carts = useLocation().state;
    let arr = []
    let totalPrice = 0
    function update(){
        for(let i in carts.current){
            let str = i[1] + carts.current[i]
            totalPrice += carts.current[i].slice(1) * carts.current[i][0]
            console.log(totalPrice)
            arr.push(str)
        }
    }
    update()    


    return(
        <div className="cartpage" >
            <div className="frame">
                {arr.map(i => (
                    <CartPageComponents item = {i[0]} qtn = {i[1]} price = {i.slice(2)} totalPrice = {totalPrice}/>
    
                ))}
            </div>
            <div className="totalprice">Total = ${totalPrice}</div>
        </div>
    ) 
}

export default CartPage