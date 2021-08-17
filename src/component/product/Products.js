import React from 'react'
import './products.css'
import { NavLink } from 'react-router-dom'
function Products(props) {
    const { title, img, sortDescription, price } = props.product
    return (
        <div className="col-md-3 col-sm-6 col-10 mb-4">
            <div className="card">
                <img src={img} className="card-img-top" alt={img} />
                <div className="card-body">
                    <h5 className="card-title"> {title} </h5>
                    <p className="card-text">{sortDescription}</p>
                    <p className="card-price">Price: ${price}</p>
                    <NavLink to="#" className="btn btn-primary" onClick={() => props.clickHandler(props.product)} >Add To Cart</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Products;
