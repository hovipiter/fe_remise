import React from 'react'
import ProductItem from './ProductItem'

function ProductList({productList}) {
  return (
    <div className="product-list" style={{display:'flex', flexDirection: 'row',  width: "100%", flexWrap:'wrap'}}>
        {productList.map((productItem, index) => (
          <ProductItem key={index} productItem={productItem} />
        ))}
    </div>
  )
}

export default ProductList