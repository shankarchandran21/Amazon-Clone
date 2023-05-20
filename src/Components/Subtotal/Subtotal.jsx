import React from 'react'
import './subtotal.css'
import CurrencyFormat from 'react-currency-format';

function Subtotal() {
    
  return (
    <div className='subtotal'>
        <CurrencyFormat
            renderText={(value)=>(
                <>
                    <p>
                        Subtotal (0 items):<strong>0</strong>
                    </p>  
                    <small className='subtotal__gift'>
                        <input  type="checkbox"  />This order Contains a gift
                    </small>
                </>
            )}
            decimalScale={2}
            value={0}
            displayType={"text"}
            thousandSeparator={true}
            prefix={'$'}
        />
        <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal