import React from 'react'
import Search_filter from '../components/Search_filter'
import Category_filter from '../components/Category_filter'
import {useCart} from '../context/Card_Context.jsx'
import Product_card from '../components/Product_card.jsx'


const Product_List = () => {

  const {products}=useCart();
  console.log(products);
  return (
    <div className="container m-auto px-8 ">
          <Search_filter/>
          <Category_filter/>
          <h2 className='mt-4 font-bold text-xl px-2 '>Featured Gear ({products.length} Items)</h2>
          <div className='flex items-center justify-evenly flex-wrap gap-2.5 px-2.5 py-2.5 '>
            {products.map((prop,key) => <Product_card prop={prop} key={key} />)}

          </div>
          </div>
  )
}

export default Product_List