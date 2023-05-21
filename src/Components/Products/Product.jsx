import React from 'react'
import "./product.css"
import { useGlobalContext } from '../../Context/Context'





function Product({id,title,price,rating,image}) {
const {dispatch} = useGlobalContext()



  const addToBasket = ()=>{
   const item ={
    id,
    title,
    image,
    price,
    rating
   }
    dispatch({type:"ADD_TO_Basket",item})
}
  return (
    <div className='product'>
      <div className="product__info">
        <p>{title} </p>
        <p className='product__price'> 
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product__rating'>
          {Array(rating).fill().map((_,index)=>(
            <p key={index}>⭐</p>
          ))}

        </div>
      </div>
      <img src={image} alt="Product" />
      <button onClick={addToBasket} type='button'>Add to Basket</button>
    </div>
  )
}

export default Product