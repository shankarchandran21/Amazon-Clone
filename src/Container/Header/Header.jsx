import React from 'react'
import "./Header.css"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
   <>
    <div className='header'>
        <img className='header__logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" />
        <div className='header__search'>
            <input className='header__searchInput' type='text'/>
            <SearchIcon  className='header__searchIcon'/>
        </div>
        <div className='header__nav'>
                <div className="header__option">
                    <span className='header__optionLineOne'>Hellow Guest</span>
                    <span className='header__optionTwo'>Sign In</span>
                </div>
                <div className="header__option">
                    <span className='header__optionLineOne'>Returns</span>
                    <span className='header__optionTwo'>& Order</span>
                </div>
                <div className="header__option">
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionTwo'>Prime</span>
                </div>
                <div className='header__optionBasket'>
                    <ShoppingBasketIcon className ="header__basket"/>
                    <span className='header__basketCount'>0</span>
                </div>
                  
        </div>
    </div>
   
   </>
  )
}

export default Header