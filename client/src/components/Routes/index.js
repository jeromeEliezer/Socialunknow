import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom'
import React from 'react'
import Home from '../../Pages/Home'
import Profil from '../../Pages/Profil'
import Trending from '../../Pages/Trending'
import Navbar from '../Navbar'

function index() {
    return (
        <Router>
            <Navbar />
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
