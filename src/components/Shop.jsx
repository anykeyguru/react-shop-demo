import {useState, useEffect} from "react";
import {API_URL, API_KEY} from "../config";
import {Preloader} from "./Preloader";
import {Cart} from "./Cart";
import GoodsList from "./GoodsList";
import {BasketList} from "./BasketList"
import {CountButton} from "./CountButton";
import {Alert} from "./Alert";

export default function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState([]);
    const [isBasketShow, setIsBasketShow] = useState(false)
    const [alertName,  setAlertName] = useState('')

    const addToBasket = (item) => {
        setAlertName(item.displayName)
        const itemIndex = orders.findIndex(orderItem => orderItem.mainId === item.mainId)

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                price: item.price.regularPrice,
                quantity: 1
            }
            setOrders([...orders, newItem]);
        } else {
            const newOrderList = orders.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    }
                } else {
                    return orderItem;
                }
            });
            setOrders(newOrderList);
        }
    };

    const remFromBasket = (id) => {
        const cleanOrders = orders.filter(el => el.mainId !== id)
        setOrders([...cleanOrders]);
    }

    const handleBasketShow = (e) => {
        if (e.target.className === 'basket-modal') {
            setIsBasketShow(!isBasketShow);
        }

        if (e.target.className.includes('cart')) {
            setIsBasketShow(!isBasketShow);
        }

        if (e.target.className.includes('basket-close')) {
            setIsBasketShow(!isBasketShow);
        }
    }

    const handleCloseAlert = () => {
        setAlertName('')
    }

    const incrQuantity = (itemId) => {
        const newOrders = orders.map(el => {
            if (el.mainId === itemId) {
                const newQuantity = el.quantity + 1;
                return {
                    ...el,
                    quantity: newQuantity
                }
            } else {
                return el;
            }
        });
        setOrders(newOrders);
    }

    const decrQuantity = (itemId) => {
        const newOrders = orders.map(el => {
            if (el.mainId === itemId) {
                const newQuantity = el.quantity - 1;
                return {
                    ...el,
                    quantity: el.quantity >1 ? newQuantity : 1
                };

            } else {
                return el;
            }
        })
        setOrders(newOrders);
    }

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY,
            }
        })
            .then(respone => respone.json())
            .then(data => {
                // data.shop ? setGoods(data.shop.slice(0, 8)) : console.error('oops');
                data.shop ? setGoods(data.shop) : console.error('oops');
                setLoading(false);

            })
    }, [])

    return <main className="container content">
        <Cart
            quantity={orders.length}
            handleBasketShow={handleBasketShow}
            isBasketShow={isBasketShow}/>
        {
            loading ? <Preloader/> : <GoodsList goods={goods} addToBasket={addToBasket}/>
        }

        {
            isBasketShow ? <BasketList
                orders={orders}
                handleBasketShow={handleBasketShow}
                remFromBasket={remFromBasket}
                incrQuantity={incrQuantity}
                decrQuantity={decrQuantity}
            /> : null
        }

        {
          alertName &&  <Alert name={alertName} handleCloseAlert={handleCloseAlert}/>
        }
    </main>;
}