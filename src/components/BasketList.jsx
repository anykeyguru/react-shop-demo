import {BasketItem} from "./BasketItem";
import React from "react";

function BasketList(props) {
    const {
        orders,
        handleBasketShow = Function.prototype,
        remFromBasket = Function.prototype,
        incrQuantity=Function.prototype,
        decrQuantity=Function.prototype
    } = props
    const totalPrice = orders.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    }, 0)
    return <div className="basket-modal" onClick={handleBasketShow}>
        <ul className="collection basket-list">
            <li className="collection-item active purple darken-2">Корзина <span className="secondary-content">
            <i onClick={handleBasketShow} className="material-icons basket-close">close</i></span></li>
            {
                orders.length ? orders.map(order => (
                    <BasketItem
                        key={order.mainId + "sd"}
                        {...order}
                        remFromBasket={remFromBasket}
                        incrQuantity={incrQuantity}
                        decrQuantity={decrQuantity}
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