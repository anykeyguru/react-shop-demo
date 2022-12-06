import {useContext} from "react";
import {ShopContext} from "../contexts/context";

function Cart() {
    const {handleBasketShow, isBasketShow, ordersQuantity} = useContext(ShopContext);
    return <div onClick={handleBasketShow} className="cart darken-3" style={{
        cursor: isBasketShow ? "unset" : "pointer",
        backgroundColor: isBasketShow ? "#42a5f5" : "#3f51b5",
        width: "80px",
        borderRadius: "4px",
    }}>
        <i className="material-icons">shopping_cart</i>
        {ordersQuantity ? <span className='cart-quantity'>{ordersQuantity}</span>: null}
    </div>
}


export {Cart}