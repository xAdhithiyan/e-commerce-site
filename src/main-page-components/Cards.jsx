import "../css/cards.css"

function Cards(props){
    return (
        <div class="cards" onClick={e => props.nextPage(e)}>
            <img src={props.img} alt="" />
            <div>{props.name}</div>
            <div>{props.price}</div>
        </div>
    )
}

export default Cards