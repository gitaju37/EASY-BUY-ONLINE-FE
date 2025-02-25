import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home"
import iphone from './assets/iphone.jpg'
import laptop from './assets/macbook.jpg'
import tablet from './assets/Itab.jpg'
import watch from './assets/Iwatch.jpg'
import ear from './assets/ear.jpg'
import desktop from './assets/macDesktop.jpg'
import mouse from './assets/mouse.jpg'
import keyboard from './assets/keyboard.jpg'
import MyContext from "./Components/Context/MyContext";
import { useState } from "react";

const App = () => {

  let [ cart, setCart ] = useState( ( 0 ) )

  let products = [ {
    name: 'I PHONE 15 pro max',
    image: iphone,
    price: '$1950-$2050',
    sale: false,
    originalPrice: '',
    original: false,
    reviews: false
  },
  {
    name: 'Apple Watch',
    image: watch,
    price: '$650',
    sale: true,
    originalPrice: '$700',
    original: true,
    reviews: true
  },
  {
    name: 'Apple Airpods Pro',
    image: ear,
    price: '$275',
    sale: true,
    originalPrice: '$350',
    original: false,
    reviews: false
  },
  {
    name: 'Apple Ipad',
    image: tablet,
    price: '$410',
    sale: false,
    originalPrice: '',
    original: false,
    reviews: true
  },
  {
    name: 'Apple MacBook Air',
    image: laptop,
    price: '$900',
    sale: true,
    originalPrice: '$985',
    original: true,
    reviews: false
  },
  {
    name: 'Apple Imac Desktop',
    image: desktop,
    price: '$1810-$2050',
    sale: false,
    originalPrice: '',
    original: false,
    reviews: false
  },
  {
    name: 'Apple Magic keyboard',
    image: keyboard,
    price: '$120',
    sale: true,
    originalPrice: '$140',
    original: true,
    reviews: true
  },
  {
    name: 'Apple Magic Mouse',
    image: mouse,
    price: '$80',
    sale: false,
    originalPrice: '',
    original: false,
    reviews: true
  },
  ]
  return (
    <>
      <MyContext.Provider value={{products,cart,setCart}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home /> }></Route>
        </Routes>
      
      
      
      </BrowserRouter>
      </MyContext.Provider>
    </>
  )
}

export default App
