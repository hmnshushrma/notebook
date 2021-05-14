import React, { Component } from 'react'
import ProductInward from './product/product.component'
import Product from './product/product.container'
import Counter from './counter'

class FormContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <ProductInward />
        <Counter />
        <Product />
      </React.Fragment>
    )
  }
}

export default FormContainer
