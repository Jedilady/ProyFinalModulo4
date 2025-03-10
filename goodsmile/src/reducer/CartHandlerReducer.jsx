//manejador del carrito

//const initialState = [];

const CartHandlerReducer = (state, action) => {
    console.log("Estado actual:", state); // Ver el estado antes del cambio
  console.log("Acción recibida:", action);
    switch (action.type) {
        case "ADD_ITEM":
            return [...state, {
                id: action.payload.id, 
                name: action.payload.name, 
                image: action.payload.image, 
                price: action.payload.price, 
                quantity: 1}];
        case "SUM_ITEM":
            //console.log("SUM_ITEM action received:", action);
            //console.log("Current state before update:", state);
            return state.map((item) => 
                item.id === action.payload.id
                ? 
                {...item, quantity: item.quantity+1} 
                : 
                item);
                //state.id === action.payload ? {...item, quantity: +=1} : item
                //state.forEach >> NO PUEDO USARLO porque el forEach no genera un nuevo array, sólo lo itera, y useReducer NECESITA que se devuelva un estado nuevo
        case "MINUS_ITEM":
            return state.map((item) => 
                item.id === action.payload.id && item.quantity > 1
                ? 
                {...item, quantity: item.quantity-1} 
                : 
                item);
        case "REMOVE_ITEM":
            return state.filter((item) => item.id !== action.payload.id);
        case "CLEAR_CART":
            return [];
        default:
            return state;
    }
    
    
}

export default CartHandlerReducer;

/*
const [cart, dispatch] = useReducer(cartReducer, initialState);

const addItem = (item) => dispatch({ type: "ADD_ITEM", payload: item });
const sumItem = (id) => dispatch({ type: "SUM_ITEM", payload: id });
const removeItem = (id) => dispatch({ type: "REMOVE_ITEM", payload: id });
const clearCart = () => dispatch({ type: "CLEAR_CART" });
*/


//instructions followed from https://saurabhnativeblog.medium.com/react30-project-18-shopping-cart-app-by-utilising-usereducer-hook-c9580d037d2d