import React, {useContext} from 'react'
import './ProductsCard.css'
import propTypes from 'prop-types'
import AppContext from '../../context/AppContext'

import { FaCartPlus } from 'react-icons/fa'
import formatCurrency from '../../utils/formatCurrency'


// eslint-disable-next-line react/prop-types
function ProductCard({ data }) {
  // eslint-disable-next-line react/prop-types
  const {title, thumbnail, price} = data

  const {cartItems, setCartItems} = useContext(AppContext)
  

  const handleAddCart = () => setCartItems([...cartItems, data])
  
    

  return (
    <section className="product-card">


      <img 
        // eslint-disable-next-line react/prop-types
        src= {thumbnail.replace(/\w\.jpg/gi,'W.jpg')}
        alt="product" 
        className="card_image" 
      />
      <div className="card_infos">
        <h2 className="card_prices">{formatCurrency(price,'BRL')}</h2>
        <h2 className="card_title">{title}</h2>
      </div>
      <button 
        type="button" 
        className="button_add-cart"
        onClick={ handleAddCart }
      >
        <FaCartPlus />
      </button>
    </section>
  )
}


export default ProductCard


ProductCard.propType = {
  data: propTypes.shape({})
}.isRequired
