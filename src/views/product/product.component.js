import React, { useState, useEffect } from 'react'
import { useDispatch ,useSelector } from 'react-redux'
import { addProduct } from '../../store/storeKeeper/actions'
import { v4 as uuidv4 } from 'uuid'

let commodity = {
  productName: '',
  productPrice: '',
  quantity: '',
  productDesc:''
}

function ProductInward(props) {
  // Declare a new state variable, which we'll call "count"

  const [product, setProductDetails] = useState({commodity})
  const [productList, setProductList] = useState([])
  const productsCollection = useSelector(state => state.products)
  const dispatch = useDispatch()
  const productArr = productsCollection.product

  const handleProductOrder = (e) => {
    e.preventDefault()
    console.log(e.target.name, e.target.value)
    setProductDetails({...product ,[e.target.name]: e.target.value})
  }
  const onSubmitList = () => {
    console.log(product,'product')
    setProductList([ ...productList, product ])
  }

  useEffect((props)=>{
    handleAddOfProduct()
  },[productList])

  const handleAddOfProduct = () => {
    console.log('effect',productList)
    dispatch(addProduct(productList))
  }

  return (
    <div>
      <label htmlFor='quantity'>
    quantity
        <input type='text' name='quantity' value={product.quantity} placeholder='quantity' onChange={(e) => handleProductOrder(e)} />
      </label>


      <label htmlFor='productPrice'>
    productPrice
        <input type='text' name='productPrice' value={product.productPrice} placeholder='product price' onChange={(e) => handleProductOrder(e)} />
      </label>

      <label htmlFor='productName'>
    productName
        <input type='text' name='productName' value={product.productName} placeholder='product name' onChange={(e) => handleProductOrder(e)} />
      </label>

      <label htmlFor='productDesc'>
    Product Description
        <textarea name='productDesc' value={product.productDesc} onChange={(e) => handleProductOrder(e)} />
      </label>




      <button onClick={e => onSubmitList(e)} > Submit </button>

      {productArr && productArr.map((productItem) => {
      return(
        <ul key={uuidv4()}>
          <li> {productItem.productName} </li>
          <li> {productItem.productPrice} </li>
          <li> {productItem.quantity} </li>
        </ul>
      )
    })}
    </div>
  )
}
export default ProductInward

// pushup 10 3
// desi pushup 10 3
// chest press
// lat row
// lunges
