//import './App.css'
import { Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import AllProducts from "./pages/AllProducts"
import ProductDetails from "./pages/ProductDetails"
import Cart from "./pages/Cart"
import { AllProductsProvider } from "./context/ProductsProvider"
//import { ProductsCartProvider } from "./context/ProductsCartProvider"
import { CartProvider } from "./context/CartContext"

function App() {

  return (
    <>
    <AllProductsProvider>
      {/* <ProductsCartProvider> */}
      <CartProvider>
        <NavBar/>
        <div className='main-content'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/products" element={<AllProducts/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/product-details/:id' element={<ProductDetails/>}/>
          </Routes>
        </div>
        </CartProvider>
      {/* </ProductsCartProvider> */}
    </AllProductsProvider>
    </>
  )
}

export default App
