import React from 'react'
import "./checkout.css"
import Subtotal from '../../Components/Subtotal/Subtotal'
import { useGlobalContext } from '../../Context/Context'
import CheckoutProduct from '../../Components/CheckoutProduct/CheckoutProduct'
function Checkout() {
  const {basket,user} = useGlobalContext()

  return (
    <div className='checkout'>
      <div className="checkout__left">
          <img className='checkout__ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
          <div>
            <h3>Hello, {user?.email}</h3>
            <h2 className='checkout__title'>
              Your Shopping Basket
            </h2>
              {basket.map((items)=><CheckoutProduct {...items}/>)}
          </div>
      </div>
      <div className='checkout__right'>
        <Subtotal/>
      </div>
    </div>
  )
}

export default Checkout