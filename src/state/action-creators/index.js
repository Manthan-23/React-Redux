//action creators

export const addItemToCart = (item, price) => {
        console.log("Item added to cart", item, price);
    return (dispatch) => {
        dispatch({
            type: 'ADD_ITEM_TO_CART',
            payload: { item, price}
        });
    }
}


export const removeItemFromCart = (item, price) => {
    return (dispatch) => {
        dispatch({
            type: 'REMOVE_ITEM_FROM_CART',
            payload: { item, price}
        });
    }
}