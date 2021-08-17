import React from 'react'
import './carddetails.css'
import { NavLink } from 'react-router-dom'

function CardDetails(props) {
    const cardList = props.card
    const { title, img, description, price } = cardList
    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-2">
                                    <img src={img} className="img-fluid rounded-start" alt={img} />
                                </div>
                                <div className="col-md-10">
                                    <div className="card-body">
                                        <h5 className="card-title">{title}</h5>
                                        <p className="card-text">{description}</p>
                                        <p className="card-text price">Price: ${price}</p>
                                        <NavLink to="#" className="btn btn-primary" onClick={() => props.removeItemHandler(cardList.id)}>Remove</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardDetails;