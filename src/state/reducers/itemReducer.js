const initialState = {
  itemCount: 0,
  totalPrice: 0
};

const reducer = (state=initialState, action) => {
    console.log("Reducer called with action:", action.payload); 
    if(action.type === 'ADD_ITEM_TO_CART') {
       return {
        itemCount: state.itemCount + 1,
        totalPrice: state.totalPrice + action.payload.price
      };
    }
    else if(action.type === 'REMOVE_ITEM_FROM_CART') {
        return {
            itemCount: state.itemCount > 0 ? state.itemCount - 1 : 0,
        totalPrice: state.itemCount > 0
          ? state.totalPrice - action.payload.price
          : state.totalPrice
        }    
    } else {
        return state; 
    }
}



export default reducer;
