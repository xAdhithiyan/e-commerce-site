function CartPageComponents(props){
    let image = `/images/item-${props.item}.png`
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