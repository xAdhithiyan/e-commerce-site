function Header(props){
    return(
        <>
            <div className="header">
                <div className="sub-header">
                    <a href="https://www.dscommunity.in/" target="_blank"><img className="logo" src="/images/logo.png" alt="logo"/></a>
                    <input type="search" />
                    <img className="search-icon" src="/images/search.svg" alt="pfp"/>
                    <button className={props.cartColor} onClick={props.nextPage}>{props.cartItemNumber}</button>
                    <a href="https://github.com/xAdhithiyan" target="_blank"><img className="pfp" src="/images/pfp.jpg" alt="" /></a>
                </div>
                <div className="company" >DreamWeave <div className="company-moto" >Embark on a Journey of Fashion, Where Every Outfit Tells Your Story</div></div>

            </div>
        </>
    )
}

export default Header