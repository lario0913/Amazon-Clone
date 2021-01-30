import React from 'react'
import "./Order.css"
import moment from 'moment'
import CheckoutProduct from './CheckoutProduct'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from './reducer'
import { useStateValue } from './StateProvider'

function Order ({order}) {
    const [{basket}] = useStateValue()
    return (
        <div className="order">
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className="order__id"><small>{order.id}</small></p>
            {
                order.data.basket?.map(item => (
                    <CheckoutProduct 
                        id= {item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        hideButton
                    />
                ))
            }
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
                className="order__total"
            />
        </div>
    )
}

export default  Order
