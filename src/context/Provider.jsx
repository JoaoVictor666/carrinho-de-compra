import React, { useState } from 'react'
import propTypes from 'prop-types'
import AppContext from './AppContext'

function Provider({children}){
  const [ cartItems,setCartItems] = useState([])
  const [ products,setProducts] = useState([])
  const [ loading, setLoading] = useState(true)
  const [ isCartVisible, setCartVisible] = useState(false)

  const value = {
    products,
    setProducts,
    loading,
    setLoading,
    cartItems,
    setCartItems,
    isCartVisible, 
    setCartVisible,
  }
  return (
    <AppContext.Provider value={ value }>
      {children}
    </AppContext.Provider >
  )
}

export default Provider

Provider.propTypes = {
  children: propTypes.any,
}.isRequired
