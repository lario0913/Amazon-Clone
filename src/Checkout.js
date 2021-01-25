import React from 'react'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'

function Checkout() {
    const [{basket}] = useStateValue()
    return (
        <div className="checkout">
           <div className="checkout__left">
                <img 
                    className="checkout__ad"
                    src="/amazon-ad.png"
                    alt="ads"
                />
                <div>
                    <h2 className="checkout__title">Your shopping Basket</h2>

                    {basket.map(item => (
                        <CheckoutProduct 
                            id={item.id}
                            image={item.image}
                            price={item.price}
                            title={item.title}
                            rating={item.rating}
                        />
                    ))}
                </div>
           </div>
           <div className="checkout__right">
                <Subtotal />
           </div>
        </div>
    )
}

export default Checkout
