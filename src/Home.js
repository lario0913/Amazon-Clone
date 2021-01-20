import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image"
                src="/amazon-bg1.jpg" alt="amazon background" />

            <div className="home__row">
                <Product 
                    title="The Lean Startup"
                    price= {22.5}
                    rating={3}
                    image="/lean1.jpg"
                />
                <Product 
                    title="Kenwood kMix Stand Mixer for Baking, Styling Kitchen Mixer with K-Beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                    price= {239}
                    rating={4}
                    image="/mixer.jpg"
                />
            </div>
            <div className="home__row">
                <Product />
                <Product />
                <Product />
            </div>
            <div className="home__row">
                <Product />
            </div>
            </div>
        </div>
    )
}

export default Home
