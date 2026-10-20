import React from 'react'
import Search_filter from '../components/Search_filter'
import Category_filter from '../components/Category_filter'

const Product_Detail = () => {
  return (
    <>
      <div className="container m-auto px-8 ">
      <Search_filter/>
      <Category_filter/>
      </div>
    </>
  )
}

export default Product_Detail