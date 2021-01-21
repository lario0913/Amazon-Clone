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
                    id="4909495"
                    title="The Lean Startup: How Constant Innovation Creates Radically Sucessful Businesses Paperback"
                    price= {22.5}
                    rating={3}
                    image="/lean1.jpg"
                />
                <Product
                    id="8903093" 
                    title="Kenwood kMix Stand Mixer for Baking, Styling Kitchen Mixer with K-Beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                    price= {239}
                    rating={4}
                    image="/mixer.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="2389565"
                    title="Samsung LC49BRG90SSUXEN 49' Curved LED Gaming Monitor"
                    price={199.99} 
                    rating={3}
                    image="/samsung.jpg"                
                />
                <Product
                    id="4578903"
                    title="New Apple Ipad Pro (12.9-inch, Wifi, 128gb) - Silver (4th Generation)"
                    price={589.99} 
                    rating={4}
                    image="/ipad.jpg"                
                />
                <Product
                    id="3478990"
                    title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                    price={98.99} 
                    rating={5}
                    image="/speaker.jpg"                
                />
            </div>
            <div className="home__row">
            <Product
                    id="2389565"
                    title="Samsung LC49BRG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 X 1440"
                    price={1094.99} 
                    rating={4}
                    image="/samsung1.jpg"                
                />
            </div>
            </div>
        </div>
    )
}

export default Home
