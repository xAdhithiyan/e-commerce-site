import { useLocation,useNavigate } from "react-router-dom"
import { useState } from "react";
import CartPageComponents from "./main-page-components/CartPageComponets.jsx"
import "./css/cartPage.css"
import logo from "/images/logo.png"
import home from "/images/home.svg"

function CartPage(){
    const carts = useLocation().state;
    const [dummy, setDummy] = useState(0)
    let arr = []
    let totalPrice = 0
    function update(){
        for(let i in carts.current){
            let str = i[1] + carts.current[i]
            totalPrice += carts.current[i].slice(1) * carts.current[i][0]
            arr.push(str)
        }
    }
    update()    

    function qtnIncrease(e){
        for(let i in carts.current){
            if (i[1] == e.target.classList.value){
                let qtn = +carts.current[i][0] + 1
                console.log(carts.current[i])
                if(qtn <= 9){
                    let ans = qtn + carts.current[i].slice(1)
                    console.log(ans) 
                    carts.current = {...carts.current , [i]: `${ans}`}
                    dummy == 0 ? setDummy(1) : setDummy (0)
                }
            }
        }
    }

    function qtnDecrease(e){
        for(let i in carts.current){
            if (i[1] == e.target.classList.value){
                let qtn = +carts.current[i][0] - 1
                console.log(carts.current[i])
                if(qtn > 0){
                    let ans = qtn + carts.current[i].slice(1)
                    console.log(ans) 
                    carts.current = {...carts.current , [i]: `${ans}`}
                    dummy == 0 ? setDummy(1) : setDummy (0)
                }else{
                    delete carts.current[i]
                    dummy == 0 ? setDummy(1) : setDummy (0)

                }

            }
        }
    }
    let navigate = useNavigate();

    return(
        <>
            <div className="main-cart">
                <div className="cartHeader">
                    <img onClick={e => navigate("/home")} src={home} alt="home" />
                    <div>Checkout</div>
                    <a href="https://www.dscommunity.in/" target="_blank" ><img src={logo} alt="logo"/></a>
                </div>
                <div className="cartpage" >
                    <div className="frame">
                        {arr.map(i => (
                            <CartPageComponents item = {i[0]} qtn = {i[1]} price = {i.slice(2)} totalPrice = {totalPrice} qtnIncrease = {qtnIncrease} qtnDecrease = {qtnDecrease}/>
                        ))}
                    </div>
                    <div className="totalprice">Total = ${totalPrice}</div>
                </div>
            </div>
        </>
    ) 
}

export default CartPage