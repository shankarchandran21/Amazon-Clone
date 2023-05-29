import React, { useMemo } from 'react'
import './subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useGlobalContext } from '../../Context/Context';
import { useNavigate } from 'react-router-dom';

function Subtotal() {
    const {basket} = useGlobalContext()
    const totalPrise = useMemo(()=>{
      return basket?.reduce((amount,item)=>item.price + amount,0);
    },[basket])

    const navigate = useNavigate()
  return (
    <div className='subtotal'>
        <CurrencyFormat
            renderText={(value)=>(
                <>
                    <p>
                        Subtotal ({basket.length} items):<strong>{value}</strong>
                    </p>  
                    <small className='subtotal__gift'>
                        <input  type="checkbox"  />This order Contains a gift
                    </small>
                </>
            )}
            decimalScale={2}
            value={totalPrise}
            displayType={"text"}
            thousandSeparator={true}
            prefix={'$'}
        />
        <button onClick={()=>{
            if(totalPrise>0){
                navigate('/payment')
            }
        }}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal