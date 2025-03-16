import { Link } from "react-router-dom";

const ProductCardContent = ({product}) => {
    
  return (
    <div className="product-card">
        <Link to={`/product-details/${product.id}`}>
            <img src={product.image} />
            <h2>{product.name}</h2>
            <span className="product-card-details">
                <span className="product-card-price">
                    {product.price}€
                </span>
                <span> - </span>
                <span className={`product-card-category ${product.category}`}>{product.category}</span>
            </span>
        </Link>
    </div>
  )
}

export default ProductCardContent
