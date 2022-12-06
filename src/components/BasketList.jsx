import {BasketItem} from "./BasketItem";
import React, {useContext} from "react";
import {ShopContext} from "../contexts/context";

function BasketList() {
    const {
        orders,
        handleBasketShow,
    } = useContext(ShopContext);

    const totalPrice = orders.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    }, 0)
    return <div className="basket-modal scrollspy">
        <ul className="collection basket-list">
            <li className="collection-item active purple darken-2">Корзина <span className="secondary-content">
            <i onClick={handleBasketShow} className="material-icons basket-close">close</i></span></li>
            {
                orders.length ? orders.map(order => (
                    <BasketItem
                        key={order.mainId + "sd"}
                        {...order}
                    />
                )) : <li className="collection-item">Basket is empty.</li>
            }
            <li className="collection-item  flow-text ">Всего к оплате:<span className="secondary-content">{totalPrice} sum
            <br/> <button className="right btn-small btn-checkout">Check out</button>
                </span>
            </li>

        </ul>
    </div>
}

export {BasketList}