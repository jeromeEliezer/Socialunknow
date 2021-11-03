  import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom'
import React from 'react'
import Home from '../../Pages/Home'
import Profil from '../../Pages/Profil'
import Trending from '../../Pages/Trending'

function index() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Home}  />
                <Route path='/profil' exact component={Profil}  />
                <Route path='/trending' exact component={Trending}  />
                <Redirect to='/' />
            </Switch>
        </Router>
    )
}

export default index
