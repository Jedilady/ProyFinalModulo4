//import './App.css'
import { Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import AllProducts from "./pages/AllProducts"
import ProductDetails from "./pages/ProductDetails"
import Cart from "./pages/Cart"
import { AllProductsProvider } from "./context/ProductsProvider"

function App() {

  return (
    <>
    <AllProductsProvider>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/products" element={<AllProducts/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/product-details/:id' element={<ProductDetails/>}/>
      </Routes>
    </AllProductsProvider>
    </>
  )
}

export default App
