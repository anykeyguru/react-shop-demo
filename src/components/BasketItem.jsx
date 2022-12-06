import React, {useContext} from "react";
import {ShopContext} from "../contexts/context";

function BasketItem(props) {
    const {
        removeFromeBasket,
        incrQuantity,
        decrQuantity
    } = useContext(ShopContext);
    const {
        mainId,
        displayName,
        price,
        quantity,
    } = props
    return <li className="collection-item flow-text">
        {displayName} with {price} x  {quantity} = {price * quantity} sum
        <span className="secondary-content btn-basket-count">
            <i className="material-icons " onClick={() => decrQuantity(mainId)}>first_page</i>
            <span className="btn-basket-count-digit"> {quantity} </span>
            <i className="material-icons " onClick={() => incrQuantity(mainId)}>last_page</i> { '  ' }
            <i onClick={() => removeFromeBasket(mainId)}
               style={{cursor: "pointer"}}
               className="material-icons">
                remove_shopping_cart
            </i>
        </span>
    </li>
}

export {BasketItem}