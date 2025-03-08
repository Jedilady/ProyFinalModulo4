import { getAllProducts } from "../services";
import { useState, useEffect } from "react";
import { ProductsContext } from "./productsContext";

//Funcion PROVIDER donde se almacena el array de productos
export function AllProductsProvider({children}) {

    //Use state donde se almacena el array
    const [allProducts, setAllProductos] = useState([]);

    //carga inicial del array mediante useEffect para evitar reloads innecesario
    useEffect(() => { 
        setAllProductos(getAllProducts());
      }, []);
    
      console.log(allProducts);
      
    //craeacion del proveedor y los datos a proveer 
    //"children" sigifica que TODO el que esté dentro del provider podrá escuchar los datos
    return (
    <ProductsContext.Provider value={{allProducts}}>
        {children}
    </ProductsContext.Provider>
    );
}

/*
export function productHandlerProvider({children}) {

}
*/