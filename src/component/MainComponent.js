import React, { useState, useEffect } from 'react'
import Header from './header/Header'
import { Route, Switch } from 'react-router-dom'
import Login from './login/Login';
import Home from './home/Home';
import Shop from '../component/shop/Shop'
import Card from './card/Card'

const getLocalData = () => {
    const lists = localStorage.getItem("myCard")
    if (lists) {
        return JSON.parse(lists)
    }
    else {
        return []
    }
}
function MainComponent() {

    const [card, setCard] = useState(getLocalData())


    useEffect(() => {
        localStorage.setItem("myCard", JSON.stringify(card))
    }, [card])

    return (
        <div>
            <Header card={card} />
            <Home />
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/shop"><Shop card={card} setCard={setCard} /></Route>
                <Route exact path="/card"><Card card={card} setCard={setCard} /></Route>
            </Switch>
        </div>
    )
}

export default MainComponent;
