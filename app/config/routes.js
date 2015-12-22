import React from 'react'
import Main from '../components/Main'
import Home from '../components/Home'
import Product from '../components/Product'
import Router from 'react-router'
import { Route, IndexRoute } from 'react-router'

export default (
    <Route path="/" component={Main}>
        <Route path="product/:productName" component={Product} />
        <IndexRoute component={Home} />
    </Route>
)
