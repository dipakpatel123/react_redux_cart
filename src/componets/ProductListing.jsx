import React, { useEffect } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import ProductComponet from './productComponet';
import { setProduct } from '../redux/actions/productAction';

const ProductListing = () => {
    const products = useSelector((state) => state)
    const dispatch = useDispatch()
     
    const fetchProduct = async()=>{
        const response = await axios.get('https://fakestoreapi.com/products')
        .catch((error)=>{
            console.log('error', error);
            
        });
        dispatch(setProduct((response.data)));
    }

    useEffect(()=>{
        fetchProduct();
    },[]);

    console.log('products:', products);  
    
    
  return (
   <>
    <div>
      <ProductComponet/>
    </div>
   </>
  )
}

export default ProductListing
