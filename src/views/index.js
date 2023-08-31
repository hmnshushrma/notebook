import React, { Component, Suspense, lazy } from 'react'

const ProductInward = lazy(() => import('./product/product.component'))
const Product = lazy(() => import('./product/product.container'))
const Counter = lazy(() => import('./counter'))

class FormContainer extends Component {
  render() {
    return (
      <>
        <Suspense fallback={<div>Loading...</div>}>
          <ProductInward />
          <Counter />
          <Product />
        </Suspense>
      </>
    )
  }
}

export default FormContainer
