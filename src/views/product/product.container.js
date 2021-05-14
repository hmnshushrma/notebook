import React from 'react'
// import { getProductsSelector } from './product.selector'
import { useSelector } from 'react-redux'
// import ProductComponent from './product.component'

const ProductContainer = () => {
  // const { count } = props
  // const product = getProductsSelector()
  // console.log(product,'product')
  const counter = useSelector( state => state.counter)
  console.log(counter,'counter')

  return (
    <div>
      <p> { counter.count || 0 }  </p>
    </div>
  )
}
export default ProductContainer
