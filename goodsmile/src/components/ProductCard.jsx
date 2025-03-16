import { useContext, useState, useEffect } from "react";
import { ProductsContext } from "../context/productsContext";
import ProductCardContent from "./ProductCardContent";


export const AllProductsList = () => {
  const { allProducts } = useContext(ProductsContext);

  return (
    <div className="product-grid">
        {allProducts.map((producto) => (
          <ProductCardContent key={producto.id} product={producto} />
        ))}
    </div>
  );
};

export const CategoryFilterList = ({category}) => {
  const { allProducts } = useContext(ProductsContext);

  const [allFiltered, setAllFiltered] = useState([]);

  useEffect(() => { 
    setAllFiltered(
      allProducts.filter((product) => (
        product.category === category))
      );
  }, [allProducts, category]); // Dependencia añadida para actualizar el filtro cuando cambian los productos

  return (
    <div className="product-grid">
        {allFiltered.map((producto) => (
          <ProductCardContent key={producto.id} product={producto} />
        ))}
    </div>
  );
};

//TODO - Mix both functions into one, so I can manage filter by all, by category or any other thing


// OLD CODE - just for reference
/*
export const AllFiguresList = () => {
  const { allProducts } = useContext(ProductsContext);

  const [allFigures, setAllFigures] = useState([]);

  useEffect(() => { 
    //console.log(allProducts, "from useEffect");
    setAllFigures(
      allProducts.filter((product) => (
        product.category === "Figuras"))
      );
  }, [allProducts]); // Dependencia añadida para actualizar el filtro cuando cambian los productos


  //console.log(allFigures, allProducts.map((e) => (e.category)), "hi");
  //console.log(allFigures);

  return (
    <div className="product-grid">
        {allFigures.map((producto) => (
          <div className="product-card" key={producto.id}>
            <h2>{producto.name}</h2>
            <img src={producto.image} />
            <p>
              {producto.price}€ - {producto.category}
            </p>
            <Link to={`/product-details/${producto.id}`}>Ver detalles</Link>
          </div>
        ))}
    </div>
  );
};
*/

