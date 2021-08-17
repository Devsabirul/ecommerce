import React from 'react'
import CardDetails from '../carddetails/CardDetails'
import ShoppingCard from '../shoppingCard/ShoppingCard'

function Card(props) {
    const { card, setCard } = props


    const removeItemHandler = index => {
        const newCard = card.filter(product => product.id
            !== index)
        setCard(newCard)
    }

    return (
        <div>
            <div className="container">
                <div className="row mt-3">
                    <div className="col-md-9 col-sm-6">
                        {card.map(card =>
                            <CardDetails
                                card={card}
                                key={card.id}
                                removeItemHandler={removeItemHandler}
                            />)
                        }
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <ShoppingCard
                            cardList={card}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;
