import { BrowserRouter,Route,Routes } from "react-router-dom";
import Header from "./components/Header";

import './App.css'
import Product from "./components/Product";
import Cart from "./components/Cart";
import Home from "@mui/icons-material/Home";
import AreaSeries from "./Chart/AreaSeries";
import CandlestickSeries from "./Chart/CandlestickSeries";
import TradingViewWidget from "./Chart/TradingViewWidget";


function App() {

 
  return (
    // <BrowserRouter>
    // <Header/>
    // <Routes>
    // <Route path="/" element={<Home/>}/>
    // <Route path="/product" element={<Product/>}/>
    // <Route path="/cart" element={<Cart/>}/>
    // </Routes>
    // </BrowserRouter>
    <>
 {/* <AreaSeries/> */}
 <CandlestickSeries/>
 <TradingViewWidget/>
    </>
  

    
  

    
  )
}

export default App
