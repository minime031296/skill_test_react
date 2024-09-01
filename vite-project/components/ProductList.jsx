import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ProductList = () => {

    let dispatch = useDispatch()
    let {product, loading, error} = useSelector((state)=> state.product)
    
  return (
    <div>
      {product.map((pro, ind) => {
        <div key={ind}>
            <>title: {pro.title}</>
        </div>
      })}
    </div>
  )
}

export default ProductList
