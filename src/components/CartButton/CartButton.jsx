import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'
import './CartButton.css'
import { BsCart4 } from 'react-icons/bs'



function CartButton() {
  const {cartItems, setCartVisible, isCartVisible} = useContext(AppContext)
  return (
    <button
      type="submit"
      className="cart_button"
      onClick={() => setCartVisible(!isCartVisible)}
    >
      <BsCart4 />
      {cartItems.length > 0 && <span className="cart-status">{cartItems.length}</span>}
    </button>
  )
}

export default CartButton
