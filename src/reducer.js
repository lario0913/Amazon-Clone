export const initialState = {
    basket: [],
    user: null
}

//a selector function to calculate the total cost of items in the basket
export const getBasketTotal = basket =>
    basket?.reduce((amount, item) => item.price + amount, 0)

const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_TO_BASKET' :
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'EMPTY+BASKET' :
            return {
                ...state,
                basket: []
            }
        case 'REMOVE_FROM_BASKET' :
            // Return the index of the latest product with the index
            const index = state.basket.findIndex((basketItem)=> basketItem.id === action.id)
            // get a copy of the basket
            let newBasket = [...state.basket]

            if(index >= 0){
                newBasket.splice(index, 1)
            }else{
                console.warn("No product to remove")
            }
            return{
                ...state,
                basket: newBasket
            }
        case "SET_USER":
            return{
                ...state,
                user: action.user
            }
        default :
            return state
    }
}

export default reducer