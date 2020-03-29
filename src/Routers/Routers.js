import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Landing from '../Components/Landing'

export default function Routers(){
    return(
        <Router>
            <Switch>
                <Route path='/' exact strict component={Landing} />
            </Switch>
        </Router>
    )
}