import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import {Link} from 'react-router-dom'
import { useStateValue } from './StateProvider'
import { auth } from './firebase'

function Header() {
    const [{basket, user}] = useStateValue()
    const handleAuthenticaton = () => {
        if(user){
            auth.signOut()
        }
    }
    return (
        <div className='header'>
            <Link to="/">
            <img 
                src="/amazon1.png"
                alt="amazon symbol"
                className="header__logo"
            />
            </Link>          
            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon"/>
            </div>

            <div className="header__nav" >
                <Link to={!user && "/login"} >
                    <div onClick={handleAuthenticaton} className="header__option">
                        <span className="header__optionLineOne">
                            {user? `Hello ${user.email}`: "Hello, Guest"}
                        </span>
                        <span className="header__optionLineTwo">
                            { user? "Sign out" : "Sign in"}
                        </span>
                    </div>
                </Link>
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__OptionLineTwo header__BasketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
