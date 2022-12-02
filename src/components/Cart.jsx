function Cart(props) {
    const {
        quantity = 0,
        handleBasketShow = Function.prototype,
        isBasketShow=false
    } = props
    return <div onClick={handleBasketShow} className="cart darken-3" style={{
        cursor: isBasketShow ? "unset" : "pointer",
        backgroundColor: isBasketShow ? "#42a5f5" : "#3f51b5",
        width: "80px",
        borderRadius: "4px",
    }}>
        <i className="material-icons">shopping_cart</i>
        {quantity ? <span className='cart-quantity'>{quantity}</span>: null}
    </div>
}


export {Cart}