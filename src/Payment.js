import React, {useState} from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import {Link} from 'react-router-dom'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from './reducer'

function Payment() {
    const [{basket, user}] = useStateValue()
    
    const stripe = useStripe()
    const elements = useElements()

    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)
    const [processing, setProcessing] = useState(false)
    const [succeeded, setSucceeded] = useState(false)

    const handleSubmit = e => {

    }

    const handleChange = e => {
        setDisabled(e.empty)
        setError(e.error? e.error.message : "")
    }

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (<Link to="/checkout">{basket?.length} items</Link>)
                </h1>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map((item) =><CheckoutProduct id={item.id}price={item.price}rating={item.rating}image={item.image}title={item.title}
                            />
                        )}
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className="payment__priceContainer">
                                <CurrencyFormat 
                                    renderText ={value => (
                                        <>
                                            <p>
                                                <strong>Order Total: {value}</strong>
                                            </p>
                                        </>
                                    )}
                                    decimal={2}
                                    value={getBasketTotal(basket)}
                                    thousandSeparator={true}
                                    displayType={"text"}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled ||
                                succeeded}>
                                    <span>{processing ? <p>Processing</p> : "BUY NOW"}</span>
                                </button>
                            </div>

                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
