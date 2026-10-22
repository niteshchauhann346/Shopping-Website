import React from 'react'
import Search_filter from '../components/Search_filter'
import Category_filter from '../components/Category_filter'
import {useCart} from '../context/Card_Context.jsx'

const Product_List = () => {

  const data=useCart();
  // console.log(data);
  // console.log(data.products.length);
  return (
    <div className="container m-auto px-8 ">
          <Search_filter/>
          <Category_filter/>
          <h2>Featured Gear ({data.products.length} Items)</h2>
          </div>
  )
}

export default Product_List