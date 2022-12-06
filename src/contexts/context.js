import {createContext, useReducer} from 'react';
import {reducer} from '../redusers/reducer'

export const ShopContext = createContext();

const initialState = {
    goods: [],
    loading: true,
    orders: [],
    isBasketShow: false,
    alertName: '',
    ordersQuantity: 0
}

export const ShopContextProvider = ({children}) => {
    const [value, dispatch] = useReducer(reducer, initialState)

    value.addToBasket = (item) => {
        dispatch({type: 'ADD_TO_BASKET', payload: {item}})
    }

    value.closeAlert = () => {
        dispatch({type: 'CLOSE_ALERT'});
    }

    value.removeFromeBasket = (itemId) => {
        dispatch({type: 'REMOVE_FROM_BASKET', payload: {id: itemId}});
    }

    value.handleBasketShow = (e) => {
        dispatch({type: 'HANDLE_BASKET_SHOW', payload: {event: e}})
    }

    value.incrQuantity = (itemId) => {
        dispatch({type: 'INCREASE_QUANTITY', payload: {id: itemId}})
    }

    value.decrQuantity = (itemId) => {
        dispatch({type: 'DECREASE_QUANTITY', payload: {id: itemId}})
    }

    value.setGoods = (data) => {
        dispatch({type: 'SET_GOODS', payload: {data: data}});
    }

    return <ShopContext.Provider value={value}>
        {children}
    </ShopContext.Provider>
}