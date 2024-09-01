import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {

  let dispatch = useDispatch() 
  let {product} = useSelector(state => state.product)
  let total = product.length
  return (
    <div>
      {total}
      //and the one product that is fetched 
    </div>
  )
}

export default Cart
