import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './componets/Header'
import ProductListing from './componets/productListing'
import ProductComponet from './componets/productComponet'
import ProductDetail from './componets/productDetail'
 
 


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<><ProductListing/></>}/>
          <Route path='/product/:productId' element={<><ProductDetail/></>}/>
          <Route>404 not found!</Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
