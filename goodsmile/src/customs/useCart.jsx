import CartContext from "../context/CartContext";
import { useContext, useEffect, useState } from "react";

export function useCart() {
    const { cart } = useContext(CartContext);
    
    const [ cartUpdated, setCartUpdated ] = useState([]);

    useEffect(() => {
    setCartUpdated(cart);
    ammountHandler();
    subtotalHandler();
    }, [cart]);

    const ammountHandler = () => {
    let a = 0;
    let b = 0;
    let sum = 0;
    
    for (let value of cartUpdated) {
        b = Number(value.quantity);
        sum = a + b;
        a = sum;
    }
    return sum;
    }

    const subtotalHandler = () => {
        let a = 0;
        let b = 0;
        let sum = 0;
        //console.log("cartUpdated", cartUpdated);
        
        for (let value of cartUpdated) {
          b = Number(value.quantity) * Number(value.price);
          //console.log("subtotal:", value, value.quantity, value.price);
          //console.log(a, b);
          sum = a + b;
          a = sum;
          //console.log(sum, a, "b", b);
        }
        return sum.toFixed(2);
        //cartUploaded.map(product)product.quantity*product.price
      }

      return {ammountHandler, subtotalHandler, cartUpdated}

}
