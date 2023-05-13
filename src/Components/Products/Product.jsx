import React from 'react'
import "./product.css"
function Product() {
  return (
    <div className='product'>
      <div className="product__info">
        <p>The Learn StartUp </p>
        <p className='product__price'> 
          <small>$</small>
          <strong>19.45</strong>
        </p>
        <div className='product__rating'>
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>

        </div>
      </div>
      <img src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg" alt="Product" />
      <button type='button'>Add to Basket</button>
    </div>
  )
}

export default Product