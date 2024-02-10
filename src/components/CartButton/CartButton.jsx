import React from 'react'

import './CartButton.css'
import { BsCart4 } from 'react-icons/bs'



function CartButton() {
  return (
    <button
      type="submit"
      className="cart_button"
    >
      <BsCart4 />
      <span className="cart-status">1</span>
    </button>
  )
}

export default CartButton
