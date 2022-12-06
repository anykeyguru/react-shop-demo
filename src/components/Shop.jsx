import { useEffect, useContext} from "react";
import {Preloader} from "./Preloader";
import {Cart} from "./Cart";
import GoodsList from "./GoodsList";
import {BasketList} from "./BasketList"
import {Alert} from "./Alert";
import {API_URL, API_KEY} from "../config";
import {ShopContext} from '../contexts/context'

export default function Shop() {
    const {
        loading,
        setGoods,
        alertName,
        isBasketShow
    } = useContext(ShopContext);
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
            })
        // eslint-disable-next-line
    }, [])

    return <main className="container content">
        <Cart/>
        {
            loading ? <Preloader /> : <GoodsList />
        }

        {
            isBasketShow ? <BasketList /> : null
        }

        {
            alertName && <Alert />
        }
    </main>;
}