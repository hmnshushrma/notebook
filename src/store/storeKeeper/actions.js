import { PRODUCT_UPDATED, PRODUCT_ADDED } from './types' // storekeeper

export const addProduct = productData => {
  return {
    type: PRODUCT_ADDED,
    payload: productData
  }
}

export const updateProduct = updatedProductData => {
  return {
    type: PRODUCT_UPDATED,
    payload: updatedProductData
  }
}
