import React from 'react'
import './Product.css'

function Product({title, image, price, rating}) {
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {/* <p>☆</p> */}
                    {
                        Array(rating).fill().map((_, i) =>(
                            <span class="fa fa-star checked"></span>
                        ))
                    }
                    
                </div>
            </div>
            <img src={image} alt="" className="product__image"/>

            <button>Add to Basket</button>
            
        </div>
    )
}

export default Product
