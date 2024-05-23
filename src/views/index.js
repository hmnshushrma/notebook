import React, { Component, Suspense, lazy } from 'react'

const ProductInward = lazy(() => import('./product/product.component'))

class FormContainer extends Component {
  render() {
    return (
      <>
        <Suspense fallback={<div>Loading...</div>}>
          <ProductInward />
        </Suspense>
      </>
    )
  }
}

export default FormContainer
