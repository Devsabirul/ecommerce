import React from 'react'
import Data from '../data/Data'
import Product from '../product/Products'

function Shop(props) {
    const { card, setCard } = props

    const addToCard = products => {
        const newProduct = [...card, products]
        setCard(newProduct)
    }
    return (
        <div>
            <div className="">
                <h2 className="text-center bg-light p-3 mb-5">SHOP PAGE</h2>
            </div>
            <div className="container-fluid">
                <div className="row">
                    {
                        Data.slice(0, 16).map(product => <Product
                            product={product}
                            key={product.id}
                            clickHandler={addToCard}
                        />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Shop;