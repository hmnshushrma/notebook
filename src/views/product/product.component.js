import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { addItem } from '../../store/shop.slice'

import {
  Form,
  Label,
  Input,
  TextArea,
  Button
} from '../../styles/styles-components'

const initialCommodity = {
  productName: '',
  productPrice: '',
  quantity: '',
  productDesc: ''
}

const ProductInward = () => {
  const dispatch = useDispatch()
  const [product, setProductDetails] = useState(initialCommodity)
  const productsCollection = useSelector(state => state.shop)

  const handleProductOrder = e => {
    const { name, value } = e.target
    setProductDetails(prevProduct => ({
      ...prevProduct,
      [name]: value
    }))
  }

  const onSubmitList = e => {
    e.preventDefault()
    // setProductList(prevProductList => [...prevProductList, product])
    setProductDetails(initialCommodity)

    dispatch(addItem(product))
  }

  // useEffect(() => {
  //   if (productList.length) {
  //     // dispatch(addProduct(productList))
  //   }
  // }, [productList, dispatch])

  return (
    <div>
      <Form onSubmit={onSubmitList}>
        <Label htmlFor='quantity'>
          Quantity
          <Input
            type='text'
            name='quantity'
            value={product.quantity}
            placeholder='Quantity'
            onChange={handleProductOrder}
          />
        </Label>
        <Label htmlFor='productPrice'>
          Product Price
          <Input
            type='text'
            name='productPrice'
            value={product.productPrice}
            placeholder='Product Price'
            onChange={handleProductOrder}
          />
        </Label>
        <Label htmlFor='productName'>
          Product Name
          <Input
            type='text'
            name='productName'
            value={product.productName}
            placeholder='Product Name'
            onChange={handleProductOrder}
          />
        </Label>
        <Label htmlFor='productDesc'>
          Product Description
          <TextArea
            name='productDesc'
            value={product.productDesc}
            placeholder='Product Description'
            onChange={handleProductOrder}
          />
        </Label>
        <Button type='submit'>Submit</Button>
      </Form>
      {productsCollection &&
        productsCollection.map(products => (
          <ul key={uuidv4()}>
            <li>{products?.warehouseStack?.productName}</li>
            <li>{products?.warehouseStack?.productPrice}</li>
            <li>{products?.warehouseStack?.quantity}</li>
          </ul>
        ))}
    </div>
  )
}

export default ProductInward
