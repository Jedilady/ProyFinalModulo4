import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { ProductsContext } from "../context/productsContext";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";

const ProductPreview = () => {
    const { id } = useParams();
    const { allProducts } = useContext(ProductsContext);

    //useState para almacenar el producto a visualizar
    const [productDetail, setProductDetail] = useState(null);

    // ------ SECCION DEL REDUCER del CART --------- //
    //Llamada al contexto del Cart que llama al CartReducer
    const { dispatch, cart } = useContext(CartContext);

    //Manejador del dispatch ADD ITEM del CartReducer
    const handleAddToCart = (product) => {
        dispatch({ type: "ADD_ITEM", payload: product });
    };
    
    //Manejador del ADD MORE y del "Go to cart"
    //useState creado para almacenar el estado de addMore
    const [addMore, setAddMore] = useState(false);

    //manejador del SUM ITEM del CartReducer
    const handleSumItemtoCart = (item) => {
        dispatch({ type: "SUM_ITEM", payload: item})
    }
    //case "SUM_ITEM": state.forEach((item) => item.id === action.payload ? {...item, quantity: item.quantity+1} : item);


    //-------- useEffect ---------- //

    //useEffect para manejar los cambios en el array de productos y en el ID para refrescar la info
    useEffect(() => {
        const prod = allProducts.find((item) => item.id === parseInt(id));
        setProductDetail(prod);

        //reseteamos el Add more al cambiar de ID
        setAddMore(false);
    }, [id, allProducts]);

    console.log(id);

    //useEffect para verificar que el producto se ha añadido correctamente al carrito
    useEffect(() => {
        const item = cart.find((item) => item.id === parseInt(id));
        item ? setAddMore(true) : setAddMore(false);
        console.log(item, "item");    
    }, [id, cart])//agregamos ID para que verifique si volvemos al producto, que esté en cart

    console.log(addMore, cart);


    //si no hay producto a mostrar, sacar una alerta
    if (!productDetail) {
        return (
            <div className="product-detail">
                <p>Product not found</p>
            </div>
        );
    }

    

    // ----- Handler para mostrar mensaje si no hay producto en stock

    //TODO - DONE if inStock false, not available
    /*const handlerAddCart = (producto) => {
        if (producto.inStock === false) {
            return <p>Product not available</p>
        } else {
            return <button>Add to cart</button>
        }
    }*/
    //TODO - DONE convertir esto en un ternario en el return? más sencillo, no?
    //{productDetail.inStock ? <button> : <p>Not available</p>}

    //TODO Show "go to cart" buton after item is added, and block add button 
    // or convert to "add more"<< this would need the reducer to be modified
    // or not, would need here to change the action of the button to SUM

    return (
        <div className="product-detail">
            <div className="product-detail-card">
                <h2>{productDetail.name}</h2>
                <img src={productDetail.image} />
                <p>
                {productDetail.price}€
                </p>
                {/*handlerAddCart(productDetail)*/}
                {productDetail.inStock 
                    ? 
                    <button onClick={() => addMore 
                        ? handleSumItemtoCart(productDetail) 
                        : handleAddToCart(productDetail) }>
                            {addMore ? "Add more" : "Add to cart"}
                    </button> 
                    : 
                    <p>Product not available</p>
                }
                {addMore && <p>Product added!</p>}
                {addMore && <Link to={`/cart`}>Go to cart</Link>}
                {/* <button onClick={() => {console.log(cart)}}>Cartlog</button> */}
                
            </div>
        </div>
    )
}

export default ProductPreview
