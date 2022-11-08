//import './App.css';
import HotDeals from "./components/deals/HotDeals"
import ShoppingCart from "./components/shoppingcart/ShoppingCart";
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Checkout from './components/checkout/Checkout'

import Navbar from "./components/header/Navbar"
import {Routes,Route } from "react-router-dom";
import { products_data } from "./data";

import {useState} from "react"
function App() {
  const [products,setProducts]=useState(products_data)
  const [cartItems,setCartItems]=useState([])


  const onAdd = (product) =>{
    const exist =cartItems.find(x => x.id === product.id);
    if(exist){
      setCartItems(cartItems.map(x => x.id === product.id ? {...exist, price: exist.price *2} : x))
    }else{
      setCartItems([...cartItems,{...product}])
    }

  }
  const onRemove = (product) =>{
    const exist =cartItems.find(x => x.id === product.id);
    const original=products.find(x=>x.id === product.id)
    if(exist.price <= original.price){
      setCartItems(cartItems.filter(x => x.id !== product.id))
    }else{
      setCartItems(cartItems.map(x => x.id === product.id ? {...exist, price: exist.price /2} : x))
    }
   
  }
  return (
    <div className="App">
      <header className="App-header">
      <Navbar  cartItems={cartItems.length} brandName={"Tech Shop"}/>
      
      <Routes>
      <Route path="/" element={
        <>
     
      <HotDeals products={products} onAdd={onAdd}/>
      <ShoppingCart onAdd={onAdd} onRemove={onRemove}cartItems={cartItems} />
      </>
      } />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="checkout" element={<Checkout  cartItems={cartItems}/>} />
    </Routes>
        
      </header>
    </div>
  );
}

export default App;
