import React from 'react'
import './Product.css'

function Product() {
    return (
        <div className="product">
            <div className="product__info">
                <p>The Lean startup</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className="product__rating">
                    {/* <p>☆</p> */}
                    <span class="fa fa-star checked"></span>
                </div>
            </div>
            <img src="/lean1.jpg" alt="" className="product__image"/>

            <button>Add to Basket</button>
            
        </div>
    )
}

export default Product
