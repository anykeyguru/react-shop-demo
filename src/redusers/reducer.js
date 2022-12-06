export function reducer(state, {type, payload}) {
    switch (type) {
        case 'SET_GOODS':
            return {
                ...state,
                goods: payload.data || [],
                loading: false,
            }

        case 'ADD_TO_BASKET':
            if (state.orders.length>=15){
                return {
                    ...state,
                    alertName: 'Limit 15. No more '
                }
            }
            const itemIndex = state.orders.findIndex(orderItem => orderItem.mainId === payload.item.mainId);
            if (itemIndex < 0) {
                const newItem = {
                    ...payload.item,
                    price: payload.item.price.regularPrice,
                    quantity: 1
                }
                const newOrders = [...state.orders, newItem]
                return {
                    ...state,
                    orders: newOrders,
                    alertName: payload.item.displayName,
                    ordersQuantity: newOrders.length
                }
            } else {
                const newOrderList = state.orders.map((orderItem, index) => {
                    if (index === itemIndex) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1,
                        }
                    } else {
                        return orderItem;
                    }
                });

                return {
                    ...state,
                    orders: newOrderList,
                    alertName: payload.item.displayName
                }
            }

        case 'REMOVE_FROM_BASKET':
            const newOrdersAfterRem = state.orders.filter(el => el.mainId !== payload.id);
            return {
                ...state,
                orders: newOrdersAfterRem,
                ordersQuantity: newOrdersAfterRem.length
            }

        case 'CLOSE_ALERT':
            return {
                ...state,
                alertName: ''
            }

        case 'HANDLE_BASKET_SHOW':
            const className = payload.event.target.className
            const regexX = new RegExp('close');
            const regexCart = new RegExp('cart');
            if (regexCart.test(className)) {
                return {
                    ...state,
                    isBasketShow: !state.isBasketShow,
                };
            } else if (regexX.test(className)) {
                return {
                    ...state,
                    isBasketShow: !state.isBasketShow,
                }
            } else {
                return state
            }

        case 'INCREASE_QUANTITY':
            const newEOrders = state.orders.map(el => {
                if (el.mainId === payload.id) {
                    if (el.quantity<10){
                        const newQuantity = el.quantity + 1;
                        return {
                            ...el,
                            quantity: newQuantity,
                        };
                    }
                }
                return el;
            });

            return {
                ...state,
                orders: newEOrders,
            }

        case 'DECREASE_QUANTITY':
            const newDOrders = state.orders.map(el => {
                if (el.mainId === payload.id) {
                    const newQuantity = el.quantity - 1;
                    return {
                        ...el,
                        quantity: el.quantity > 1 ? newQuantity : 1
                    };

                } else {
                    return el;
                }
                ;
            });
            return {
                ...state,
                orders: newDOrders
            }

        default:
            return state
    }

}