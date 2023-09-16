/* images */
import img_1 from "/images/item-1.png"
import img_2 from "/images/item-2.png"
import img_3 from "/images/item-3.png"
import img_4 from "/images/item-4.png"
import img_5 from "/images/item-5.png"
import img_6 from "/images/item-6.png"
import img_7 from "/images/item-7.png"
import img_8 from "/images/item-8.png"

function CartPageComponents(props){
    let arr = [img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8,]
    let image = arr[+props.item - 1]
    let total = +props.qtn * +props.price
    return(
        <div class="checkout">
            <img src={image} alt="" />
            <div className="item-details" >
                <div className="item-name" >item-{props.item}</div>
                <div>${props.price}</div>
            </div>
            <div className="quantity">
                <div>{props.qtn}</div>
                <div>
                    <button className={props.item} onClick={props.qtnIncrease}>+</button>
                    <button className={props.item} onClick={props.qtnDecrease}>-</button>
                </div>
            </div>
            <div>${total}</div>
        </div>
    )
}
export default CartPageComponents