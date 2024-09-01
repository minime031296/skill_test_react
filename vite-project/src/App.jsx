import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'



function App() {

  let dispatch = useDispatch()
  let product = useSelector(state => state.product)

  useEffect(()=> {
    dispatch(product)
  },[dispatch])

  return (
    <>
     {product.map((items) => {
      return // all the items 
     })}
          
    </>
  )
}

export default App
