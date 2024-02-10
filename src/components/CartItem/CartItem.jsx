import React from 'react'
import { BsCartXFill } from 'react-icons/bs'
import './CartItem.css'
import propTypes from 'prop-types'
import formatCurrency from '../../utils/formatCurrency'

function CartItem({data}) {
  const {thumbnail, title, price} = data
  return(
    <section className="cart-item">

      <img src={thumbnail}
        alt=" imagem do produto"
        className="cart-item-image"
      />

      <div className="cart-item-content">
        <h3 className="cart-item-title">
          {title} 
        </h3>
        <h3 className="cart-item-price">
          {formatCurrency(price)}
        </h3>
        <button 
          type="button"
          className="button_remove-item"
        >
          < BsCartXFill />
        </button>
      </div>
    </section>
  )
}

export default CartItem


CartItem.propTypes = {
  data: propTypes.object
}.isRequiered
