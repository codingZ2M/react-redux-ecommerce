import { createSlice} from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
    totalPrice: 0,
    totalQuantities: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,

    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
        },
        
        addToCart : (state, action) => {
            const cartItem = state.cartItems.find( (item)=> 
                            item.id === action.payload.id);
                 if (cartItem) {
                        state.cartItems.map( (cartProduct, key) => {
                         if(cartProduct.id === action.payload.id)  {
                                 state.cartItems[key].qty++;       
                                    }
                                })
                            }
                 else {
                            state.cartItems = [...state.cartItems, {...action.payload} ];
                      }      
                      console.log(state.cartItems)  
        },

        removeItem : (state, action) => {
            console.log(action);
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter( (item) =>
                item.id !== itemId);
        },

        incrementItem : (state, action) => {
            const cartItem = state.cartItems.find( (item)=> 
                            item.id === action.payload);
                cartItem.qty = cartItem.qty + 1;
        },

        decrementItem : (state, action) => {
            const cartItem = state.cartItems.find( (item)=> 
                            item.id === action.payload);
             if(cartItem.qty < 2)  {
                const itemId = action.payload;
                state.cartItems = state.cartItems.filter( (item) =>
                item.id !== itemId);
             }
            else {
                cartItem.qty = cartItem.qty - 1;
            }
        },
   
        calculateTotals: (state) => {
            let totalQuantities = 0;
            let totalPrice = 0;
            state.cartItems.forEach( (item) => {
                totalQuantities += item.qty;
                totalPrice += item.qty * item.price
            });
            state.totalQuantities = totalQuantities;
            state.totalPrice = totalPrice;
        },
    },
});

export default cartSlice.reducer;

export const {addToCart, clearCart, removeItem, incrementItem, decrementItem, calculateTotals} = cartSlice.actions;